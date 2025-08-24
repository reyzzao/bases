// @file: src/pgm_pack/request/Request.ts

import { z } from "zod/mod.ts";

export interface PgmRequest {
  nome: string;
  desc?: string;
  neural?: string;
}

// @desc: Esquema de validação para o objeto 'PgmRequest'.
// @neural: Define as regras de validação para o objeto PgmRequest aninhado.
export const PgmRequestSchema = z.object({
  nome: z.string(),
  desc: z.string().optional(),
  neural: z.string().optional(),
});
