// @file: ts/Init.d.ts
import { IExportedModules } from "./libs/loader_index/LoaderModulesIndexFunction.ts";
import { IMessage } from "./libs/LoaderLibs.ts";

export interface ILibTS {
  Log: (...data: any[]) => void;
  Messages: IMessage;
  loaderModulesIndex(basePath: string, moduleFolders: string[]): Promise<IExportedModules>;
  validateStringInArray(inputString: string, validStrings: string[]): void;
}

export declare const libTS: ILibTS;
