import AxiosHttpClient from '@/api/axiosHttpClient';
import { IApplication } from '@/infra/interfacess/application';

export interface CreateApplicationDto {
    studentId: string; // ID of the student applying
    scholarshipId?: string; // Optional: ID of the scholarship being applied for
    internshipId?: string; // Optional: ID of the internship being applied for
}


export class ApplicationsService {
    private httpClient: AxiosHttpClient;
    private readonly applicationsUrl = '/applications';

    constructor() {
        this.httpClient = new AxiosHttpClient();
    }

    /**
     * Create a new application
     * @param applicationDto Data for creating the application
     * @returns The created application
     */
    async createApplication(applicationDto: CreateApplicationDto): Promise<IApplication> {
        try {
            const response = await this.httpClient.post<IApplication>(this.applicationsUrl, applicationDto);
            return response;
        } catch (error) {
            console.error('Error creating application', error);
            throw error;
        }
    }

    /**
     * Get all applications
     * @returns List of applications
     */
    async getApplications(): Promise<IApplication[]> {
        try {
            const response = await this.httpClient.get<IApplication[]>(this.applicationsUrl);
            return response;
        } catch (error) {
            console.error('Error fetching applications', error);
            throw new Error('An error occurred while getting the applications');
        }
    }

    /**
     * Get application details by ID
     * @param id Application ID
     * @returns Application details
     */
    async getApplicationById(id: string): Promise<IApplication> {
        try {
            const response = await this.httpClient.get<IApplication>(`${this.applicationsUrl}/${id}`);
            return response;
        } catch (error) {
            console.error('Error fetching application by ID', error);
            throw new Error('An error occurred while getting the application');
        }
    }
    async getApplicationByStudentId(id: string): Promise<any> {
        try {
            const response = await this.httpClient.get<any>(`${this.applicationsUrl}/student/${id}`);
            return response;
        } catch (error) {
            console.error('Error fetching application by ID', error);
            throw new Error('An error occurred while getting the application');
        }
    }

    async getApplicationByAdhesionNumber(adhesionNumber: string): Promise<IApplication> {
        try {
            const response = await this.httpClient.get<IApplication>(`${this.applicationsUrl}/adhesion/${adhesionNumber}`);
            return response;
        } catch (error) {
            console.error('Error fetching application by ID', error);
            throw new Error('An error occurred while getting the application');
        }
    }

    /**
     * Delete application by ID
     * @param id Application ID
     * @returns Deletion result
     */
    async deleteApplication(id: string): Promise<void> {
        try {
            await this.httpClient.delete(`${this.applicationsUrl}/${id}`);
        } catch (error) {
            console.error('Error deleting application', error);
            throw new Error('An error occurred while deleting the application');
        }
    }
}
