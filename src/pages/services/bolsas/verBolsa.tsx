import Header from "@/components/head";
import cred from "@/styles/services/bolsas/verBolsa.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import PurpleButton, { LightButton } from "@/components/buttons";


export default function VerBolsa() {
  return (
    <>
      <div className={cred.container}>
        <Head>
          <link
            rel="cardsheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
          />
        </Head>
        <Header title="Kwik - Pagamentos Instantâneos"></Header>
        <Top information="Kwik - Pag. Inst" pagina="bolsas"></Top>

        <div className={cred.top}>
          <Image src={"/icons/kwik.svg"} width={60} height={60} alt="" />
          <p>Kwik invest: Bolsa de Estudos</p>
        </div>

        <div className={cred.info}>
          <div className={cred.items}>
            <p className={cred.dark_g}>Entidade nº</p>
            <p className={`${cred.primary} ${cred.name}`}>00040</p>
          </div>
          <div className={cred.items}>
            <p className={cred.dark_g}>Vagas</p>
            <p className={`${cred.primary} ${cred.anolec}`}>40</p>
          </div>
          <div className={cred.items}>
            <p className={cred.dark_g}>Data limite</p>
            <p className={`${cred.success} ${cred.semestre}`}>10/10/24</p>
          </div>
          <div className={cred.items}>
            <p className={cred.dark_g}>Público-alvo</p>
            <p className={`${cred.primary} ${cred.anoA}`}>
              17/09/24 às 10h:40:30
            </p>
          </div>
          <div className={cred.items}>
            <p className={cred.dark_g}>Nota mínima</p>
            <p className={`${cred.primary} ${cred.anoA}`}>14 valores</p>
          </div>
        </div>

        <div className={cred.btn}>
          <PurpleButton
            description="Confirmar"
            redirect="candidatura"
          ></PurpleButton>
          <LightButton
            description="Baixar edital"
            redirect=""
          ></LightButton>
        </div>
        <Menu />
      </div>
    </>
  );
}
