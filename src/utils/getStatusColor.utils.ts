type Status = "completed" | "pending" | "failed" | "refunded"; // Defina os status possíveis


const statusClasses: Record<Status, string> = {
  'pending': 'bg-yellow-500 text-black', // Amarelo com texto preto 
  'refunded': 'bg-sky-500 text-white', // Vermelho com texto branco
  'completed': 'bg-green-500 text-white', // Ciano com texto branco
  'failed': 'bg-red-500 text-white', // Ciano com texto branco
};

export const getStatusStyles = (status: Status): string => {
  return statusClasses[status] || 'bg-gray-500 text-white';
};




export const getStatusColor = (status: 'approved' | 'pending' | 'success' | 'failed' | 'denied'): string => {
  return status === 'approved' ? 'text-green-500' : status === "denied" ? 'text-red-600' : 'text-orange-500';
};

