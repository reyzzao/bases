// @file: base_ts/funcoes_uteis/UseOpcoes.ts

/**
 * @mission: Define a estrutura do objeto de opções.
 * @desc: As chaves 'opcao1' e 'opcao2' podem ser acessadas pelo client.
 * A chave 'default' é o valor fallback.
 */
interface Idisponiveis {
  opcao1: string;
  opcao2: string;
  default: string;
}

// @desc: O tipo Iarg agora é um "union type", garantindo que
// o argumento seja apenas uma das chaves válidas.
type Iarg = "opcao1" | "opcao2";

const disponiveis: Idisponiveis = {
  opcao1: "resultado 1",
  opcao2: "resultado 2",
  default: "resultado default",
};

/**
 * @desc: Evita "if hell" com um objeto de opções disponíveis.
 * @arg: (objeto de opções disponíveis, e o argumento do client)
 * @logic: Usa um switch para retornar o resultado baseado no argumento.
 */
function useOpcoes(disponiveis: Idisponiveis, arg: Iarg): string {
  switch (arg) {
    case 'opcao1':
      return disponiveis.opcao1;
    case 'opcao2':
      return disponiveis.opcao2;
    default:
      return disponiveis.default;
      // Este 'default' serve como uma rede de segurança,// embora o TypeScript já garanta a validade de 'arg'.
  }
}


// Agora, o TypeScript sabe que 'opcao1' é uma chave válida.
console.log(useOpcoes(disponiveis, "opcao1"));
// console.log(useOpcoes(disponiveis, "opcao100000")); // caso seja inesperado o arg - nao vai compilar no editor, mas sera controlavel se o dado vier de uma api
