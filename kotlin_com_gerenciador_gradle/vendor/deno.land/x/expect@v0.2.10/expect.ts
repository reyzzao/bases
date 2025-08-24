import * as builtInMatchers from "./matchers.ts";
import type { Matcher, Matchers } from "./matchers.ts";

import { AssertionError } from "https://deno.land/std@0.97.0/testing/asserts.ts";

export interface Expected {
  toBe(candidate: any): void;
  toEqual(candidate: any): void;
  toBeTruthy(): void;
  toBeFalsy(): void;
  toBeDefined(): void;
  toBeInstanceOf(clazz: any): void;
  toBeUndefined(): void;
  toBeNull(): void;
  toBeNaN(): void;
  toMatch(pattern: RegExp | string): void;
  toHaveProperty(propName: string): void;
  toHaveLength(length: number): void;
  toContain(item: any): void;
  toThrow(error?: RegExp | string): void;
  toBeGreaterThan(number: number): void;
  toBeGreaterThanOrEqual(number: number): void;
  toBeLessThan(number: number): void;
  toBeLessThanOrEqual(number: number): void;
  toHaveBeenCalled(): void;
  toHaveBeenCalledTimes(number: number): void;
  toHaveBeenCalledWith(...args: any[]): void;
  toHaveBeenLastCalledWith(...args: any[]): void;
  toHaveBeenNthCalledWith(nthCall: number, ...args: any[]): void;
  toHaveReturned(): void;
  toHaveReturnedTimes(number: number): void;
  toHaveReturnedWith(value: any): void;
  toHaveLastReturnedWith(value: any): void;
  toHaveNthReturnedWith(nthCall: number, value: any): void;

  not: Expected;
  resolves: Async<Expected>;
  rejects: Async<Expected>;
}

const matchers: Record<any, Matcher> = {
  ...builtInMatchers,
};

export function expect(value: any): Expected {
  let isNot = false;
  let isPromised = false;
  const self: any = new Proxy(
    {},
    {
      get(_, name) {
        if (name === "not") {
          isNot = !isNot;
          return self;
        }

        if (name === "resolves") {
          if (!isPromiseLike(value)) {
            throw new AssertionError("expected value must be Promiselike");
          }

          isPromised = true;
          return self;
        }

        if (name === "rejects") {
          if (!isPromiseLike(value)) {
            throw new AssertionError("expected value must be a PromiseLike");
          }

          value = value.then(
            (value) => {
              throw new AssertionError(
                `Promise did not reject. resolved to ${value}`,
              );
            },
            (err) => err,
          );
          isPromised = true;
          return self;
        }

        const matcher: Matcher = matchers[name as any];
        if (!matcher) {
          throw new TypeError(
            typeof name === "string"
              ? `matcher not found: ${name}`
              : "matcher not found",
          );
        }

        return (...args: any[]) => {
          function applyMatcher(value: any, args: any[]) {
            if (isNot) {
              let result = matcher(value, ...args);
              if (result.pass) {
                throw new AssertionError("should not " + result.message);
              }
            } else {
              let result = matcher(value, ...args);
              if (!result.pass) {
                throw new AssertionError(result.message || "Unknown error");
              }
            }
          }

          return isPromised
            ? value.then((value: any) => applyMatcher(value, args))
            : applyMatcher(value, args);
        };
      },
    },
  );

  return self;
}

// a helper type to match any function. Used so that we only convert functions
// to return a promise and not properties.
type Fn = (...args: any[]) => any;

// converts all the menthods in an interface to be async functions
export type Async<T> = {
  [K in keyof T]: T[K] extends Fn ? (...args: Parameters<T[K]>) => Promise<ReturnType<T[K]>> : T[K];
}

export function addMatchers(newMatchers: Matchers): void {
  Object.assign(matchers, newMatchers);
}


function isPromiseLike(value: unknown): value is PromiseLike<unknown> {
  if (value == null) {
    return false;
  } else {
    return typeof((value as Record<string, unknown>).then) === 'function';
  }
}
