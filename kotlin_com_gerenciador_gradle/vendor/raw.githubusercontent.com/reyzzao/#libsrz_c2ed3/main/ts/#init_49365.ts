// @file: ts/Init.ts
import type { ILibTS } from "./Init.d.ts"; // A importação de IMessage foi removida, pois ela já está incluída na ILibTS
import { Log, Messages } from "./libs/LoaderLibs.ts";
import { loaderModulesIndex } from "./libs/loader_index/LoaderModulesIndexFunction.ts";
import { validateStringInArray } from "./libs/validade_string_in_array/Index.ts";

// Porta de entrada
export const libTS: ILibTS = {
  Log,
  Messages,
  loaderModulesIndex,
  validateStringInArray,
};
