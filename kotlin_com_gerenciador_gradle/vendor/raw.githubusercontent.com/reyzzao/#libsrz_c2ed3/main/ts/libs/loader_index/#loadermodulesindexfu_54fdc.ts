// @file: src/global/helpers/LoaderFunction.ts

// @desc: Carrega e exporta dinamicamente os arquivos Index.ts de pastas especificadas.
// @neural: Esta abordagem centraliza a importação de módulos,
// respeitando a convenção de "ponto de entrada" de cada pasta
// (Index.ts), resultando em um código mais limpo e previsível.
//
// ATENÇÃO: Para rodar, você precisará da permissão --allow-read:
// deno run --allow-read Init.ts

export interface IExportedModules {
  [key: string]: any
}

/**
 * @desc Carrega dinamicamente os arquivos Index.ts de pastas especificadas.
 * @args basePath O caminho base para as pastas dos módulos.
 * @args moduleFolders Um array de nomes de pastas a serem lidas.
 * @neural O uso de um arquivo de índice por pasta simplifica o carregamento
 * dinâmico, pois o loader não precisa escanear cada arquivo individualmente,
 * apenas o ponto de entrada de cada módulo.
 */
export async function loaderModulesIndex(basePath: string, moduleFolders: string[]): Promise<IExportedModules> {
  const exports_collection: IExportedModules = {}

  for (const folderName of moduleFolders) {
    const filePath = new URL(`./${folderName}/Index.ts`, basePath).href

    try {
      const module = await import(filePath)
      Object.assign(exports_collection, module)
    } catch (error) {
      console.error(`Erro ao carregar o arquivo Index.ts da pasta ${folderName}:`, error)
    }
  }

  return exports_collection
}