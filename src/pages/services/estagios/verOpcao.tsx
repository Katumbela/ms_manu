import cred from "@/styles/services/bolsas/verBolsa.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Button from "@/components/buttons";
import Layout from "@/components/Layout";

export default function VerOpEstagio() {
  return (
    <>
      <Layout title="Estágio Unitel S.A">
        <div className={cred.container}>
          <Top
            information="Unitel S.A - Dep. de Inovação"
            pagina="estagios"
          ></Top>

          <div className={cred.top}>
            <Image src={"/icons/unitel.svg"} width={60} height={60} alt="" />
            <p>Unitel S.A - Dep. de Inovação</p>
          </div>

          <div className={cred.info}>
            <div className={cred.items}>
              <p className={cred.dark_g}>Vagas</p>
              <p className={`${cred.primary} ${cred.name}`}>10</p>
            </div>
            <div className={cred.items}>
              <p className={cred.dark_g}>Tipo</p>
              <p className={`${cred.primary} ${cred.anolec}`}>Full time</p>
            </div>
            <div className={cred.items}>
              <p className={cred.dark_g}>Data limite</p>
              <p className={`${cred.success} ${cred.semestre}`}>10/10/24</p>
            </div>
            <div className={cred.items}>
              <p className={cred.dark_g}>Público-alvo</p>
              <p className={`${cred.primary} ${cred.anoA}`}>20-25 anos</p>
            </div>
            <div className={cred.items}>
              <p className={cred.dark_g}>Requisito máximo</p>
              <p className={`${cred.primary} ${cred.anoA}`}>Finalista</p>
            </div>
          </div>

          <div className={cred.btn}>
            <Button description="Confirmar" redirect="candidatura"></Button>
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
