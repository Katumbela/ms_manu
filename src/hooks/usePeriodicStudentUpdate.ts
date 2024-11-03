import { StudentService } from '@/services/student_service';
import { loginSuccess } from '@/store';
import { getLocalStorage } from '@/utils/local-storage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';  // Importar a ação para atualizar o estado do Redux

interface PI {
  studentAdhesionNumber: string; // Aceitar número, string, null ou undefined
}

const usePeriodicStudentUpdate = ({ studentAdhesionNumber }: PI) => {
  const dispatch = useDispatch();
  const studentService = new StudentService();

  useEffect(() => {
    const fetchStudentData = async () => {
      const token = await getLocalStorage('token');
      try {
        const studentData = await studentService.getStudentByAdhesionNumber(studentAdhesionNumber); // Método correto para buscar aluno
        dispatch(loginSuccess({ access_token: token ? token : '', student: studentData })); // Atualiza os dados do aluno no Redux
      } catch (error) {
        console.error("Erro ao atualizar os dados do aluno:", error);
      }
    };

    fetchStudentData(); // Executa a atualização ao montar o componente

    const interval = setInterval(fetchStudentData, 5000); // Atualiza a cada 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [studentAdhesionNumber, dispatch]);
};

export default usePeriodicStudentUpdate;