import cred from "@/styles/services/bolsas/verBolsa.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Button from "@/components/buttons";
import Layout from "@/components/Layout";
import { useSearchParams } from "next/navigation"; 
import { useEffect, useState } from "react";
import { InternShipsService } from "@/services/interships_services";
import { IInternship } from "@/infra/interfacess/internship";
import { DateUtils } from "@/utils";

export default function VerOpEstagio() {
  const q = useSearchParams();
  const internshipId = q.get("internship");
  const [internship, setInternShip] = useState<IInternship | null>(null);



  
  const InternshipService = new InternShipsService();

  useEffect(() => {
    async function GetCreditor() {
      const data = await InternshipService.getInternshipById(
        internshipId || ""
      );
      setInternShip(data);
    }
    GetCreditor();
  }, [InternshipService, internshipId]);


  return (
    <>
      <Layout title="Estágio Unitel S.A">
        <div className={cred.container}>
          <Top
            information={internship?.providerCompany?.companyName || "Estágio"}
            pagina="estagios"
          ></Top>

          <div className={cred.top}>
            <Image src={internship?.providerCompany?.company_logo || ""} width={60} height={60} alt="" />
            <p>{internship?.providerCompany?.companyName}</p>
          </div>

          <div className={cred.info}>
            <div className={cred.items}>
              <p className={cred.dark_g}>Vagas</p>
              <p className={`${cred.primary} ${cred.name}`}>{internship?.positions}</p>
            </div>
            <div className={cred.items}>
              <p className={cred.dark_g}>Tipo</p>
              <p className={`${cred.primary} ${cred.anolec}`}>{internship?.type}</p>
            </div>
            <div className={cred.items}>
              <p className={cred.dark_g}>Data limite</p>
              <p className={`${cred.success} ${cred.semestre}`}>{internship?.limitDate ? DateUtils.getDatePt(new Date(internship.limitDate)) : "Data não disponível"}</p>
            </div>
            <div className={cred.items}>
              <p className={cred.dark_g}>Público-alvo</p>
              <p className={`${cred.primary} ${cred.anoA}`}>{internship?.targetPeople}</p>
            </div>
            <div className={cred.items}>
              <p className={cred.dark_g}>Requisito máximo</p>
              <p className={`${cred.primary} ${cred.anoA}`}>{internship?.minimumGrade} Valores</p>
            </div>
          </div>

          <div className={cred.btn}>
            <Button description="Confirmar" redirect={"candidatura?internship="+internship?.id}></Button>
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
