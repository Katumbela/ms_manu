import cred from "@/styles/services/bolsas/verBolsa.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image"; 
import Button from "@/components/buttons";
import Layout from "@/components/Layout";
import { ScholarShipsService } from "@/services/scholarships_services";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { IScholarship } from "@/infra/interfacess/scholarship";
import { DateUtils } from "@/utils";


export default function VerBolsa() {
  const q = useSearchParams();
  const scholarshipId = q.get("scholarship");
  const [scholarship, setScholarship] = useState<IScholarship | null>(null);

  const ScholarshipService = new ScholarShipsService();

  useEffect(() => {
    async function GetScholarship() {
      const data = await ScholarshipService.getScholarshipById(
        scholarshipId || ""
      );
      setScholarship(data);
    }
    GetScholarship();
  }, [ScholarshipService, scholarshipId]);

  return (
    <>
      <Layout title="Bolsa Unitel S.A">
        <div className={cred.container}>
          <Top
            information={scholarship?.providerSchool?.schoolName || "Bolsa"}
            pagina="bolsas"
          ></Top>

          <div className={cred.top}>
            <Image src={scholarship?.providerSchool?.school_logo || ""} width={60} height={60} alt="" />
            <p>{scholarship?.providerSchool?.schoolName}</p>
          </div>

          <div className={cred.info}>
            <div className={cred.items}>
              <p className={cred.dark_g}>Vagas</p>
              <p className={`${cred.primary} ${cred.name}`}>{scholarship?.positions}</p>
            </div>
            <div className={cred.items}>
              <p className={cred.dark_g}>Tipo</p>
              <p className={`${cred.primary} ${cred.anolec}`}>{scholarship?.type}</p>
            </div>
            <div className={cred.items}>
              <p className={cred.dark_g}>Data limite</p>
              <p className={`${cred.success} ${cred.semestre}`}>{scholarship?.deadline ? DateUtils.getDatePt(new Date(scholarship.deadline)) : "Data não disponível"}</p>
            </div>
            <div className={cred.items}>
              <p className={cred.dark_g}>Público-alvo</p>
              <p className={`${cred.primary} ${cred.anoA}`}>{scholarship?.targetPeople}</p>
            </div>
            <div className={cred.items}>
              <p className={cred.dark_g}>Requisito máximo</p>
              <p className={`${cred.primary} ${cred.anoA}`}>{scholarship?.minimumGrade} Valores</p>
            </div>
          </div>

          <div className={cred.btn}>
            <Button description="Confirmar" redirect={"candidatura?scholarship="+scholarship?.id}></Button>
            <Button
              variant="light"
              description="Baixar edital"
              redirect=""
            ></Button>
          </div>
          <Menu />
        </div>
      </Layout>
    </>
  );
}
