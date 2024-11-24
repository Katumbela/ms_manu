import { Discipline } from './discipline';
export interface Year {
    id: string
    year_number: number
    createdAt: string
    updatedAt: string
    Discipline: Discipline[]
}