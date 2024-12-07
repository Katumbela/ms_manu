import pay from "@/styles/services/menu.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useAppSelector } from "@/hooks";
import { ApplicationsService } from "@/services/application_service";
import { selectUser } from "@/store";
import { useState, useEffect } from "react";
import { IApplication } from '../../infra/interfacess/application';

export default function MenuServices() {

  
  const student = useAppSelector(selectUser);
  
  const [myApplication, setMyApplication] = useState<IApplication[] | []>([]);

  
  const applicationService = new ApplicationsService();

  useEffect(() => {
    async function GetCreditor() {
      const data = await applicationService.getApplicationByStudentId(
        student?.id || ""
      );
      setMyApplication(data);
    }
    GetCreditor();
  }, []);

  
  return (
    <Layout title="Menu multischool">
      <div className={pay.container}>
        <Top information="Serviços" pagina="/home"></Top>

        <div className={pay.lista}>
          <p>Escolha uma opção</p>
          <div className={pay.items}>
            <div className={pay.row1}>
              <Link href="bolsas/bolsas" className={pay.item}>
                <div className={pay.inner}>
                  <div className={pay.icon}>
                    <Image
                      className={pay.avatar}
                      src={"/icons/bolsas.svg"}
                      alt="ba2ck"
                      width={25}
                      height={25}
                      priority
                    />
                  </div>
                  <p>Bolsas</p>
                </div>
              </Link>
              <Link href="/consultas/creditos/creditos" className={pay.item}>
                <div className={pay.inner}>
                  <div className={pay.icon}>
                    <Image
                      className={pay.avatar}
                      src={"/icons/creditos.svg"}
                      alt="ba2ck"
                      width={25}
                      height={25}
                      priority
                    />
                  </div>
                  <p>Créditos</p>
                </div>
              </Link>

              <Link href="estagios/estagios" className={pay.item}>
                <div className={pay.inner}>
                  <div className={pay.icon}>
                    <Image
                      className={pay.avatar}
                      src={"/icons/estagio.svg"}
                      alt="ba2ck"
                      width={25}
                      height={25}
                      priority
                    />
                  </div>
                  <p>Estágios</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* INÍCIO PENDENTES */}

        <div className={pay.pendentes}>
          <p>As minhas candidaturas</p>
          <div className={pay.pending}>

          {
              myApplication.map((application, index) => (
                <div key={index} className={pay.details}>
                  <div className={pay.icon}>
                    <Image
                      className={pay.avatar}
                      src={"/icons/bolsas.svg"}
                      alt="ba2ck"
                      width={25}
                      height={25}
                      priority
                    />
                  </div>
                  <div className={pay.desc}>
                    <p>
                      {application.scholarship ? `Bolsa de Estudos: ${application.scholarship.providerCompany?.companyName}` : `Estágio: ${application.internship?.title}`}
                    </p>
                    <small>{new Date(application.appliedAt).toLocaleString()}</small>
                  </div>
                  <div className={pay.amount}>
                    <Link
                      href={application.scholarship ? "bolsas/resultados?scholarship=" + application.id : "estagios/resultados?internship=" + application.id}
                      className={`${pay.price} ${pay.warning}`}
                    >
                      <u>Abrir</u>
                    </Link>
                  </div>
                </div>
              ))
            }
           
          </div>
          </div> 
        </div>
        <Menu /> 
    </Layout>
  );
}
