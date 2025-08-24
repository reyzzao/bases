// @file: src/pgm_pack/controller/Controller.ts

import { Router, RouterContext } from "oak/mod.ts";
import { Pgm, PgmService, PgmSchema } from "@pgm_pack";
import { ZodError } from "zod/mod.ts";

// @desc: Extensão de rota para agrupar as rotas relacionadas a 'pgm'.
export function pgmRoutes(router: Router, pgmService: PgmService) {
  // @desc: Endpoint para verificar o status do servidor.
  // @neural: Boa prática ter um endpoint simples para monitoramento da saúde do servidor.
  router.get("/", (ctx: RouterContext<string>) => {
    ctx.response.body = "Bem-vindo à sua API Deno! Servidor está online.";
    ctx.response.status = 200;
  });

  // @desc: Endpoint para criar uma nova Pgm.
  // @neural: Recebe os dados da requisição e delega a lógica de negócio para a camada de serviço.
  router.post("/pgm", async (ctx: RouterContext<string>) => {
    try {
      const data = await ctx.request.body({ type: "json" }).value;
      const pgmRequest = PgmSchema.parse(data) as Pgm;
      const formattedJson = JSON.stringify(pgmRequest, null, 2);
      console.log("Requisição POST recebida com sucesso. Objeto formatado:");
      console.log(formattedJson);
      pgmService.processarPgm(pgmRequest);
      ctx.response.body = `Requisição de Pgm processada com sucesso!`;
      ctx.response.status = 200;
    } catch (error) {
      if (error instanceof ZodError) {
        ctx.response.body = { error: "Dados da requisição inválidos", issues: error.issues };
        ctx.response.status = 400; // Bad Request
      } else {
        console.error("Erro ao processar requisição:", error);
        ctx.response.body = `Erro interno ao processar a requisição: ${error.message}`;
        ctx.response.status = 500; // Internal Server Error
      }
    }
  });
}