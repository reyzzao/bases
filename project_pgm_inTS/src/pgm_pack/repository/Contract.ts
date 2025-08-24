// @file: src/pgm_pack/repository/Contract.ts

import { Pgm } from "@pgm_pack";

// @desc: Interface que define o contrato de um repositório de Pgm.
// @neural: Interfaces desacoplam a lógica de serviço da camada de dados.
export interface PgmRepository {
  salvar(pgm: Pgm): void;
}
