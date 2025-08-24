// @file: src/pgm_pack/repository/RepositoryMemoryImpl.ts

import { Pgm, PgmRepository } from "@pgm_pack";

// @desc: Implementação em memória do repositório de Pgm.
// @neural: Esta classe simula um banco de dados usando um mapa em memória.
// É uma forma simples de testar a camada de dados sem precisar de um DB real.
export class MemoriaRepository implements PgmRepository {
  // @desc: Mapa que simula a tabela do banco de dados.
  private pgmEmMemoria = new Map<string, Pgm>();

  public salvar(pgm: Pgm): void {
    console.log(
      `Salvando pgm '${pgm.pgmRequest.nome}' no repositório de memória.`,
    );
    // Note: como não temos um ID, usamos o nome como chave temporária para simplificar.
    this.pgmEmMemoria.set(pgm.pgmRequest.nome, pgm);
    console.log(`Total de pgms salvas: ${this.pgmEmMemoria.size}`);
  }
}