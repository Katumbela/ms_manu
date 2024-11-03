import Header from "@/components/head";
import cred from "@/styles/consultas/creditos/credores.module.css";
import Head from "next/head";
import Top from "@/components/top";
import payC from "@/styles/payments/instituicao/confirmacao2.module.css";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";

export default function Credores() {
  return (
    <>
      <div className={cred.container}>
        <Head>
          <link
            rel="cardsheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
          />
        </Head>
        <Header title="Credores disponíveis"></Header>
        <Top information="Credores" pagina="/consultsM"></Top>
        <div className={cred.top}>
          <p>Crédito Actual</p>
          <h1>35.000,00 kz</h1>
        </div>
        <div className={cred.list}>
          <div className={cred.top}>
            <p>Selecione um credor</p>
            <p>Valor máximo</p>
          </div>
          <div className={cred.credL}>
            <Link href="infoCredor" className={cred.inner}>
              <Image src={"/icons/kwik.svg"} width={60} height={60} alt="" />
              <p className={cred.in}>Kwik</p>
              <p>30.000,00 kz</p>
            </Link>
            <Link href="infoCredor" className={cred.inner}>
              <Image src={"/icons/kwik.svg"} width={60} height={60} alt="" />
              <p className={cred.in}>Kwik</p>
              <p>30.000,00 kz</p>
            </Link>
            <Link href="infoCredor" className={cred.inner}>
              <Image src={"/icons/kwik.svg"} width={60} height={60} alt="" />
              <p className={cred.in}>Kwik</p>
              <p>30.000,00 kz</p>
            </Link>
            <Link href="infoCredor" className={cred.inner}>
              <Image src={"/icons/kwik.svg"} width={60} height={60} alt="" />
              <p className={cred.in}>Kwik</p>
              <p>30.000,00 kz</p>
            </Link>
            <Link href="infoCredor" className={cred.inner}>
              <Image src={"/icons/kwik.svg"} width={60} height={60} alt="" />
              <p className={cred.in}>Kwik</p>
              <p>30.000,00 kz</p>
            </Link>
            
          </div>
        </div>

        <Menu></Menu>
      </div>
    </>
  );
}
