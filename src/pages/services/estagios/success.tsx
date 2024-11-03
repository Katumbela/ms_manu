import Header from "@/components/head";
import bolsas from "@/styles/services/bolsas/success.module.css";
import Head from "next/head";
import Top from "@/components/top";
import PurpleButton from "@/components/buttons";
import Menu from "@/components/menu";
import Image from "next/image";

export default function SucessoEstagio() {
  return (
    <>
      <div className={bolsas.container}>
        <Head>
          <link
            rel="cardsheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
          />
        </Head>
        <Header title="Candidatura enviada com sucesso!"></Header>
        <Top information="Sucesso!" pagina="/services/menu"></Top>

        <div className={bolsas.art}>
          <div className={bolsas.art1}>
            <Image
              src={"/bg/sucessoEstagio.svg"}
              width={400}
              height={500}
              alt=""
            />
          </div>
        </div>
        <div className={bolsas.info}>
          <h1>Candidatura enviada!</h1>
          <p className={bolsas.art1}>
            A sua candidatura à vaga de estágio{" "}
            <b>
              <span className={bolsas.bolsaName}>
                Unitel S.A - Dep. de Inovação
              </span>
            </b>{" "}
            foi feita com sucesso. Aguarde os resultados!
          </p>
        </div>
        <div className={bolsas.btn}>
          <PurpleButton description="Boa!" redirect="resultados"></PurpleButton>
        </div>
        <Menu></Menu>
      </div>
    </>
  );
}
