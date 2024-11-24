export const formatUrlAndDecode = (category: string | string[]): string => {

  // Combina o array em uma string com hifens se necessário
  const categoryString = Array.isArray(category) ? category.join('-') : category;

  // Decodifica a string para tratar caracteres especiais codificados na URL
  const decodedCategory = decodeURIComponent(categoryString);

  // Trata casos com caracteres especiais e substitui hifens por espaços
  const formattedCategory = decodedCategory
    .split("-")
    .map(word => {
      // Capitaliza a primeira letra e deixa o restante em minúsculas
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");

  return formattedCategory;
};