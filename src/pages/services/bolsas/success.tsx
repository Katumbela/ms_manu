import bolsas from "@/styles/services/bolsas/success.module.css";
import Top from "@/components/top";
import PurpleButton from "@/components/buttons";
import Menu from "@/components/menu";
import Image from "next/image";
import Layout from "@/components/Layout";

export default function SucessoBolsa() {
  return (
    <>
      <Layout title="Candidatura realizada com sucesso!">
        <div className={bolsas.container}>
          <Top information="Sucesso!" pagina="/services/menu"></Top>

          <div className={bolsas.art}>
            <div className={bolsas.art1}>
              <Image
                src={"/bg/sucessoBolsa.svg"}
                width={400}
                height={500}
                alt=""
              />
            </div>
          </div>
          <div className={bolsas.info}>
            <h1>Pedido enviado!!</h1>
            <p className={bolsas.art1}>
              A sua candidatura à Bolsa de Estudos{" "}
              <b>
                <span className={bolsas.bolsaName}>
                  Kwik invest: Bolsa de estudos
                </span>
              </b>{" "}
              foi feita com sucesso. Aguarde os resultados!
            </p>
          </div>
          <div className={bolsas.btn}>
            <PurpleButton
              description="Boa!"
              redirect="resultados"
            ></PurpleButton>
          </div>
          <Menu></Menu>
        </div>
      </Layout>
    </>
  );
}
