// @file: src/pgm_pack/schema/Schema.ts

import { z } from "zod/mod.ts";
import { PgmRequestSchema } from "@pgm_pack";

// @desc: Esquema de validação para a entidade 'Pgm'.
// @neural: Define as regras de validação para o objeto Pgm. Garante que os dados de entrada
// da API estejam corretos, prevenindo erros em tempo de execução.

export const PgmSchema = z.object({
  id: z.string().uuid().optional(),
  pgmRequest: PgmRequestSchema,
  type: z.string()
});