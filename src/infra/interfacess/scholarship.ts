import { IApplication } from './application';
import { Company } from './company'; // Supondo que exista um módulo Company
import { School } from './school'; // Supondo que exista um módulo School

export interface IScholarship {
    id: string; // Identificador único
    title: string; // Título da bolsa
    description: string; // Descrição da bolsa
    providerId: string; // Identificador do provedor
    providerType: "School" | "Company"; // Tipo do provedor: escola ou empresa
    createdAt: string; // Data de criação no formato ISO string
    applications: IApplication[]; // Relação com aplicações
    providerSchool?: School; // Relação opcional com uma escola fornecedora
    providerCompany?: Company; // Relação opcional com uma empresa fornecedora
    amount?: number; // Quantia associada à bolsa (opcional)
    deadline: string; // Data limite para aplicação no formato ISO string
}
