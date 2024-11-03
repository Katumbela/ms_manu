import Header from "@/components/head";
import cred from "@/styles/services/bolsas/verBolsa.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import PurpleButton, { LightButton } from "@/components/buttons";


export default function VerOpEstagio() {
  return (
    <>
      <div className={cred.container}>
        <Head>
          <link
            rel="cardsheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
          />
        </Head>
        <Header title="Estágio - Unitel S.A - Dep. de Inovação"></Header>
        <Top information="Unitel S.A - Dep. de Inovação" pagina="estagios"></Top>

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
            <p className={`${cred.primary} ${cred.anoA}`}>
              20-25 anos
            </p>
          </div>
          <div className={cred.items}>
            <p className={cred.dark_g}>Requisito máximo</p>
            <p className={`${cred.primary} ${cred.anoA}`}>Finalista</p>
          </div>
        </div>

        <div className={cred.btn}>
          <PurpleButton
            description="Confirmar"
            redirect="candidatura"
          ></PurpleButton>
          <LightButton description="Baixar edital" redirect=""></LightButton>
        </div>
        <Menu />
      </div>
    </>
  );
}
