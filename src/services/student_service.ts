import AxiosHttpClient from "@/api/axiosHttpClient";
import { Student } from "@/infra/interfacess";

export class StudentService {
  private httpClient: AxiosHttpClient;

  constructor() {
    this.httpClient = new AxiosHttpClient();
  }


  async createStudent(studentData: Partial<any>, documents: File[]): Promise<Student | any> {
    const route = `/students`;

    // Criar um objeto FormData para enviar os dados e arquivos
    const formData = new FormData();

    // Adiciona os campos do estudante no FormData
    (Object.keys(studentData) as (keyof Student)[]).forEach(key => {
      const value = studentData[key];
      if (value !== undefined && value !== null) {
        formData.append(key as string, value as string | Blob); // O TypeScript agora reconhece que a chave é válida
      }
    });

    // Adiciona os arquivos no FormData
    documents.forEach((file) => {
      formData.append('documents', file);
    });

    // Definir os headers (incluindo o token de autorização, se necessário)
    const headers = {
      'Content-Type': 'multipart/form-data',
      // ...(token && { Authorization: `Bearer ${token}` }),  // Adiciona o token, se fornecido
    };

    // Enviar os dados usando FormData com headers
    const response = await this.httpClient.post<Student>(route, formData, { headers });

    return response;
  }



  async enrollStudent(enrollData: any): Promise<any> {
    const route = `/enrollments`;
    const response = await this.httpClient.post<any>(route, enrollData);
    return response;
  }

  async getStudentByAdhesionNumber(adhesionNumber: string): Promise<Student | any> {
    const route = `/students/${adhesionNumber}`;
    const response = await this.httpClient.get<Student>(route);
    return response;
  }


  async getStudentByAccountNumber(accountNumber: string): Promise<Student | any> {
    const route = `/students/account/${accountNumber}`;
    const response = await this.httpClient.get<Student>(route);
    return response;
  }

  async updateStudent(id: string, studentData: Partial<Student>): Promise<Student | any> {
    const route = `/students/${id}`;
    const response = await this.httpClient.patch<Student>(route, studentData);
    return response;
  }

  async deleteStudent(id: string): Promise<void> {
    const route = `/students/${id}`;
    await this.httpClient.delete<void>(route);
  }
}
