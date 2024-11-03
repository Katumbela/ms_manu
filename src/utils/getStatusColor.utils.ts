type Status = "completed" | "pending" | "failed" | "refunded"; // Defina os status possíveis

const statusClasses: Record<Status, string> = {
  'pending': 'bg-yellow-500 text-black', // Amarelo com texto preto 
  'refunded': 'bg-sky-500 text-white', // Vermelho com texto branco
  'completed': 'bg-green-500 text-white', // Ciano com texto branco
  'failed': 'bg-red-500 text-white', // Ciano com texto branco
};

export const getStatusStyles = (status: Status): string => {
  return statusClasses[status] || 'bg-gray-500 text-white'; // Cinza padrão
};
