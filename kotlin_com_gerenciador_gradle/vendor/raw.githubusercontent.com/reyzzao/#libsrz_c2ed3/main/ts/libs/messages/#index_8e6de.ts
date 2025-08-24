// @file: libs/messages/Mod.ts

export interface IMessage{
  Success:    string; 
  Fail:       string;
  Processing: string;
  Wait:       string;
  Min:        string;
  Max:        string;
}

export const Messages: IMessage = {
  Success:    "Sucesso!",
  Fail:       "Ops!",
  Processing: "Processando...",
  Wait:       "Aguarde!",
  Min:        "no mínimo",
  Max:        "no máximo",
};