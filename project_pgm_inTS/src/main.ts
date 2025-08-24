// @file: src/main.ts

import { Application, Router } from "oak/mod.ts";
import { MemoriaRepository, pgmRoutes, PgmService } from "@pgm_pack";

// @desc: O principal módulo da aplicação.
// @neural: Configura o servidor, as dependências, a serialização JSON e as rotas.
const app = new Application();
const router = new Router();
const memoriaRepository = new MemoriaRepository();
const pgmService = new PgmService(memoriaRepository);

// @desc: Configura as rotas da API.
// @neural: Organiza os endpoints da sua API de forma modular.
pgmRoutes(router, pgmService);

// Adiciona o router como middleware para o servidor.
app.use(router.routes());
app.use(router.allowedMethods());

// Inicia o servidor.
app.addEventListener("listen", ({ hostname, port }) => {
  console.log(`Servidor Oak rodando em http://${hostname}:${port}/`);
});

await app.listen({ port: 8080 });
