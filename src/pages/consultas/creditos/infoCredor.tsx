import Header from "@/components/head";
import cred from "@/styles/consultas/creditos/infoCredor.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import CreditDetails from "@/components/creditRange";
import PurpleButton from "@/components/buttons";

export default function InfoCredor() {
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
        <Top information="Kwik - Pag. Inst" pagina="/consultsM"></Top>

        <div className={cred.top}>
          <Image src={"/icons/kwik.svg"} width={60} height={60} alt="" />
          <p>Kwik Pagamentos Instantâneos</p>
        </div>

        <div className={cred.info}>
          <div className={cred.items}>
            <p className={cred.dark_g}>Entidade nº</p>
            <p className={`${cred.primary} ${cred.name}`}>00040</p>
          </div>
          <div className={cred.items}>
            <p className={cred.dark_g}>Tipo de crédito</p>
            <p className={`${cred.primary} ${cred.anolec}`}>Estudantil</p>
          </div>
          <div className={cred.items}>
            <p className={cred.dark_g}>Valor máximo</p>
            <p className={`${cred.success} ${cred.semestre}`}>30.000,00 kz</p>
          </div>
          <div className={cred.items}>
            <p className={cred.dark_g}>Data do pedido</p>
            <p className={`${cred.primary} ${cred.anoA}`}>
              17/09/24 às 10h:40:30
            </p>
          </div>
        </div>

        <div className={cred.details}>
          <p>Detalhes do crédito</p>
        </div>
        <CreditDetails />
        <PurpleButton
          description="Confirmar"
          redirect="confirmCredit"
        ></PurpleButton>
        <Menu />
      </div>
    </>
  );
}
