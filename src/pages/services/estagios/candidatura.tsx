import candidatura from "@/styles/services/estagios/candidatura.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import PurpleButton from "@/components/buttons";
import Layout from "@/components/Layout";
import { ApplicationsService } from "@/services/application_service";
import { useSearchParams } from "next/navigation";
import { useAppSelector } from "@/hooks";
import { selectUser } from "@/store";
import { logos } from "@/utils/image-exporter"; 
import { useRouter } from 'next/navigation';
import AlertUtils from '@/utils/alert-utils';


export default function Candidatura() {

  const student = useAppSelector(selectUser);
  
  const q = useSearchParams();
  const internshipId = q.get("internship");

  const ApplicationService = new ApplicationsService();
  const router = useRouter();

  const handleApplication = async () => {
    try {
      await ApplicationService.createApplication({
        studentId: student?.id || '',
        internshipId: internshipId || ''
        
      });
      router.push('success');
    } catch (error: any) {
      console.log(error.message);
      AlertUtils.error('Erro ao enviar a candidatura. Tente novamente.');
    }
  };

   

  return (
    <>
      <Layout title="Ver estágio ">
        <div className={candidatura.container}>
          <Top information="Candidatura" pagina="estagios"></Top>
          <div className={candidatura.foto}>
            <Image
              src={student?.profile_pic || logos.logo}
              width={190}
              height={190}
              alt=""
            />
          </div>
          <div className={candidatura.info}>
            <div className={candidatura.items}>
              <p className={candidatura.dark_g}>Número de estudante</p>
              <p className={`${candidatura.primary} ${candidatura.estnum}`}>
                {student?.adhesionNumber}
              </p>
            </div>

            <div className={candidatura.items}>
              <p className={candidatura.dark_g}>Nome</p>
              <p className={`${candidatura.primary} ${candidatura.name}`}>
                {student?.studentName}
              </p>
            </div>

            <div className={candidatura.items}>
              <p className={candidatura.dark_g}>Curso</p>
              <p className={` ${candidatura.curso}`}>{student?.enrollments?.[0].course.name}</p>
            </div>

            <div className={candidatura.items}>
              <p className={candidatura.dark_g}>Ano lectivo</p>
              <p className={`${candidatura.primary} ${candidatura.anolec}`}>
              {new Date().getFullYear()}/{new Date().getFullYear() + 1}
              </p>
            </div>

            <div className={candidatura.items}>
              <p className={candidatura.dark_g}>Ano acadêmico</p>
              <p className={`${candidatura.primary} ${candidatura.anoA}`}>              {student?.enrollments?.[0].course.disciplines?.[0].year.year_number}º</p>
            </div>

            <div className={candidatura.items}>
              <p className={candidatura.dark_g}>Média anual</p>
              <p className={`${candidatura.primary} ${candidatura.semestre}`}>
                15 valores
              </p>
            </div>

            <div className={candidatura.items}>
              <p className={candidatura.dark_g}>Turma</p>
              <p className={`${candidatura.success} ${candidatura.turma}`}>
             {student?.class}
              </p>
            </div>
          </div>
          <div className={candidatura.button}>
            <PurpleButton
              description="Continuar"
              onClick={handleApplication}
            ></PurpleButton>
          </div>
          <Menu></Menu>
        </div>
      </Layout>
    </>
  );
}
