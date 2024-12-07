import candidatura from "@/styles/services/estagios/resultados.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import PurpleButton from "@/components/buttons";
import { users } from "@/utils/image-exporter";
import Layout from "@/components/Layout";
import { selectUser } from "@/store";
import { useAppSelector } from "@/hooks";
import { ApplicationsService } from "@/services/application_service";
import { useEffect, useState } from "react";
import { DateUtils } from "@/utils";
import { useSearchParams } from "next/navigation";

export default function ResultadosEstagio() {
  
  
  const q = useSearchParams();
  const internshipId = q.get("internship");
  
  const student = useAppSelector(selectUser);
  
  const [myApplication, setMyApplication] = useState<any | null>(null);

  
  const applicationService = new ApplicationsService();

  useEffect(() => {
    async function GetCreditor() {
      const data = await applicationService.getApplicationById(
        internshipId || ""
      );
      setMyApplication(data);
    }
    GetCreditor();
  }, []);


  // console.warn(myApplication);

  

  return (
    <>
      <Layout title="Resultados estágios">
        <div className={candidatura.container}>
          <Top information="Resultados" pagina="/services/menu"></Top>
          <div className={candidatura.foto}>
            <Image src={student?.profile_pic || users.user_default} width={130} height={130} alt="" />

            <h2>{student?.studentName} </h2>
          </div>
          <div className={candidatura.info}>
            <div className={candidatura.items}>
              <p className={candidatura.dark_g}>Número de estudante</p>
              <p className={`${candidatura.primary} ${candidatura.estnum}`}>
              {student?.adhesionNumber}
              </p>
            </div>

            {/* <div className={candidatura.items}>
            <p className={candidatura.dark_g}>Nome</p>
            <p className={`${candidatura.primary} ${candidatura.name}`}>
              Ana Correia de Assis Diogo
            </p>
          </div> */}

            <div className={candidatura.items}>
              <p className={candidatura.dark_g}>Curso</p>
              <p className={` ${candidatura.curso}`}>{student?.enrollments?.[0].course.name}</p>
            </div>

            <div className={candidatura.items}>
              <p className={candidatura.dark_g}>Média anual</p>
              <p className={`${candidatura.primary} ${candidatura.semestre}`}>
                --
              </p>
            </div>

            <div className={candidatura.items}>
              <p className={candidatura.dark_g}>Idade</p>
              <p className={`${candidatura.primary} ${candidatura.anolec}`}>
                --
              </p>
            </div>

            <div className={candidatura.items}>
              <p className={candidatura.dark_g}>Data da candidatura</p>
              <p className={`${candidatura.primary} ${candidatura.anoA}`}>
                {DateUtils.getDateTimePt(new Date(myApplication?.appliedAt || ""))}
              </p>
            </div>

            <div className={candidatura.items}>
              <p className={candidatura.dark_g}>Estado</p>
              <p className={`${candidatura.danger} ${candidatura.turma}`}>
                {myApplication?.status}
              </p>
            </div>
          </div>
          <div className={candidatura.button}>
            <PurpleButton
              description="Continuar"
              redirect="/services/menu"
            ></PurpleButton>
          </div>
          <Menu></Menu>
        </div>
      </Layout>
    </>
  );
}
