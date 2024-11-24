import { StudentService } from '@/services/student_service';
import { loginSuccess, selectUser } from '@/store';
import { getLocalStorage } from '@/utils/local-storage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';  // Importar a ação para atualizar o estado do Redux
import { useAppSelector } from './useSelector';


const usePeriodicStudentUpdate = () => {
  const dispatch = useDispatch();
  const studentService = new StudentService();
  const Student = useAppSelector(selectUser)

  useEffect(() => {
    const fetchStudentData = async () => {
      const token = await getLocalStorage('token');
      if (!token) {
        console.error("Token não encontrado");
        return;
      }
      try {
        if (Student?.adhesionNumber) {
          const studentData = await studentService.getStudentByAdhesionNumber(Student?.adhesionNumber);
          // console.log(studentData)
          if (studentData) {
            dispatch(loginSuccess({ access_token: token || "", student: studentData.data }));
          } else {
            console.error("Dados do aluno não encontrados");
          }
        }
      } catch (error) {
        console.error("Erro ao atualizar os dados do aluno:", error);
      }
    };

    fetchStudentData();

    const interval = setInterval(fetchStudentData, 15000);

    return () => clearInterval(interval);
  }, [dispatch]);
};

export default usePeriodicStudentUpdate;