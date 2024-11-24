import cred from "@/styles/consultas/creditos/success.module.css";
import Top from "@/components/top";
import PurpleButton from "@/components/buttons";
import Menu from "@/components/menu";
import Image from "next/image";
import Layout from "@/components/Layout";

export default function SucessoCred() {
  return (
    <>
      <Layout title="Pedido de crédito enviado com sucesso!">
        <div className={cred.container}>
          <Top information="Sucesso!" pagina="creditos"></Top>

          <div className={cred.art}>
            <div className={cred.art1}>
              <Image src={"/bg/art2.svg"} width={320} height={500} alt="" />
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
      </Layout>
    </>
  );
}
