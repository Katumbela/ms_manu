import Header from "@/components/head";
import transf from "@/styles/transfer/transferir.module.css";
import Head from "next/head";
import Top from "@/components/top";
import payC from "@/styles/payments/instituicao/confirmacao2.module.css";
import Menu from "@/components/menu";
import Image from "next/image";
import PurpleButton from "@/components/buttons";
import Link from "next/link";

export default function Transferir() {
  return (
    <>
      <div className={transf.container}>
        <Head>
          <link
            rel="cardsheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
          />
        </Head>
        <Header title="Efectuar Transferência"></Header>
        <Top information="Transferir" pagina="transfer"></Top>
        <div className={transf.bg}></div>
        <div className={transf.info}>
          <p>
            <i>Clique no botão para ler o QR code do destinatário</i>
          </p>
          <div className={transf.cta}>
            <PurpleButton
              description="Escanear código QR"
              redirect="checkTransf"
            ></PurpleButton>
            <Link href="transfManual">
              <u>Inserir o código manualmente</u>
            </Link>
          </div>
        </div>
        <Menu />
      </div>
    </>
  );
}
