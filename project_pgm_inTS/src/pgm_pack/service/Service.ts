// @file: src/pgm_pack/service/Service.ts


import { Pgm, PgmRepository } from "@pgm_pack";

// @desc: Classe de serviço para processar a entidade Pgm.
// @neural: A camada de serviço contém a lógica de negócio e se comunica com o repositório.
export class PgmService {
  constructor(private pgmRepository: PgmRepository) {}

  // @desc: Processa e salva o objeto Pgm.
  // @neural: Esta função recebe a instância e a trata, delegando a persistência para o repositório.
  public processarPgm(pgm: Pgm): void {
    console.log(
      `Processando uma nova instância de pgm com o nome: ${pgm.pgmRequest.nome}`,
    );

    // @desc: Chama o repositório para salvar o Pgm.
    this.pgmRepository.salvar(pgm);
  }
}
