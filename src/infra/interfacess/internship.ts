import { Company } from './company';
import { School } from './school';

export interface IInternship {
    id: string
    providerType: "School" | "Company"
    createdAt: string
    providerCompany?: Company
    providerSchool?: School
    providerId: string
    title: string
    description: string
}