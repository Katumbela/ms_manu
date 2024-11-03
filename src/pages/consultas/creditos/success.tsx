import Header from "@/components/head";
import cred from "@/styles/consultas/creditos/success.module.css";
import Head from "next/head";
import Top from "@/components/top";
import PurpleButton from "@/components/buttons";
import Menu from "@/components/menu";
import Image from "next/image";

export default function SucessoCred() {
  return (
    <>
      <div className={cred.container}>
        <Head>
          <link
            rel="cardsheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
          />
        </Head>
        <Header title="Pedido de crédito enviado"></Header>
        <Top information="Sucesso!" pagina="creditos"></Top>

        <div className={cred.art}>
          <div className={cred.art1}>
            <Image src={"/bg/art2.svg"} width={400} height={500} alt="" />
          </div>
        </div>
        <div className={cred.info}>
          <h1>Pedido enviado!!</h1>
          <p className={cred.art1}>
            O seu pedido de crédito foi enviado com sucesso. Irá receber uma
            notificação com a resposta dentro de 24H.
          </p>
        </div>
        <div className={cred.btn}>
          <PurpleButton description="Boa!" redirect="creditos"></PurpleButton>
        </div>
        <Menu></Menu>
      </div>
    </>
  );
}
