// @file: src/pgm_pack/domain/Domain.ts

import { PgmRequest } from "@pgm_pack";

// @desc: Representa a entidade principal 'Pgm'.
// @neural: Esta interface é o modelo de objeto que será recebido da requisição
// HTTP e manipulado por todas as camadas da aplicação (service, repository).
export interface Pgm {
    pgmRequest: PgmRequest;
    desc?: string;
    neural?: string;
}