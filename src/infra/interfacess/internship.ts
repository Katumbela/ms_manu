import { IApplication } from './application';
import { Company } from './company';
import { School } from './school'; 

export interface IInternship {
    id: string;
    title: string;
    description: string;
    positions?: number; // Campo opcional
    limitDate?: string; // Representado como ISO string
    catalog?: string; // Campo opcional
    type?: string
    targetPeople?: string; // Campo opcional, por padrão "Licenciados"
    minimumGrade?: number; // Campo opcional
    providerId: string; // Identificador do provedor
    providerType: "School" | "Company"; // Indica o tipo do provedor
    createdAt: string; // Data de criação no formato ISO string
    applications?: IApplication[]; // Lista de aplicações associadas
    providerSchool?: School; // Relação opcional com uma escola
    providerCompany?: Company; // Relação opcional com uma empresa
}
