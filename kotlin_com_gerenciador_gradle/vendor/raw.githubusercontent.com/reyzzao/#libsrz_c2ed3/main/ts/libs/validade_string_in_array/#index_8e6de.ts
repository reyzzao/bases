// @file:

// @file: src/utils/validate.ts

/**
 * @desc: Valida se uma string de entrada existe em um array de strings.
 * @neural: A função foi projetada com o princípio de "fail-fast",
 * lançando um erro imediatamente se a validação não passar, o que
 * simplifica o fluxo de controle e evita que a aplicação continue
 * com dados incorretos.
 */
export function validateStringInArray(
  inputString: string,
  validStrings: string[],
): void {
  if (!validStrings.includes(inputString)) {
    throw new Error(
      `A string '${inputString}' não foi encontrada no array de opções válidas.`,
    );
  }
}

/*
// --- Exemplos de Uso ---

// Exemplo 1: Sucesso (a string existe no array)
const musicGenre = 'Rock';
const availableGenres = ['Rock', 'Jazz', 'Blues'];

try {
  validateStringInArray(musicGenre, availableGenres);
  console.log(`Sucesso! O gênero '${musicGenre}' é válido.`);
} catch (error) {
  console.error(error.message);
}

// Exemplo 2: Erro (a string não existe no array)
const movieGenre = 'Sci-Fi';
const availableMovieGenres = ['Ação', 'Comédia', 'Drama'];

try {
  validateStringInArray(movieGenre, availableMovieGenres);
  console.log(`Sucesso! O gênero '${movieGenre}' é válido.`);
} catch (error) {
  console.error(error.message); // Isso irá imprimir a mensagem de erro
}

*/
