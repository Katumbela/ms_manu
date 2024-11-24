import transf from "@/styles/transfer/transferir.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import PurpleButton from "@/components/buttons";
import Link from "next/link";
import Layout from "@/components/Layout";

export default function Transferir() {
  return (
    <>
      <Layout title="Transferir">
        <div className={transf.container}>
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
      </Layout>
    </>
  );
}
