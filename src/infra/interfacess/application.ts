import { Student } from './student'; // Supondo que exista um módulo Student
import { IInternship } from './internship'; // Supondo que exista um módulo Internship
import { IScholarship } from './scholarship';

export interface IApplication {
    id: string;
    status?: "Pending" | "Accepted" | "Rejected"; // Status da aplicação, opcional
    studentId: string; // Identificador do estudante
    student: Student; // Relação com o estudante
    scholarshipId?: string; // Identificador da bolsa de estudos, opcional
    scholarship?: IScholarship; // Relação opcional com a bolsa de estudos
    internshipId?: string; // Identificador do estágio, opcional
    internship?: IInternship; // Relação opcional com o estágio
    appliedAt: string; // Data da aplicação no formato ISO string
}
