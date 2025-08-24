// @file: src/global/deps/MyLibs.ts

import { libTS } from 'https://raw.githubusercontent.com/reyzzao/libsRZ/main/ts/Init.ts';
import type { ILibTS } from 'https://raw.githubusercontent.com/reyzzao/libsRZ/main/ts/Init.d.ts';
const useMyLib: ILibTS = libTS;
// vars disponiveis para app - neste polo unico

export const Log = useMyLib.Log;
export const Messages = useMyLib.Messages;
export const loaderModulesIndex = useMyLib.loaderModulesIndex;
export const validateStringInArray = useMyLib.validateStringInArray;