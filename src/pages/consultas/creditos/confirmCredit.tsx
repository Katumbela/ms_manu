import Header from "@/components/head";
import cred from "@/styles/consultas/creditos/confirmCred.module.css";
import Head from "next/head";
import Top from "@/components/top";
import PurpleButton from "@/components/buttons";
import { LightButton } from "@/components/buttons";
import Menu from "@/components/menu";
import Image from "next/image";

export default function ConfirmCredit() {
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
        <Top information="Confirmar" pagina="infoCredor"></Top>

        <div className={cred.card}>
          <div className={cred.inner}>
            <p>Detalhes do crédito</p>
            <div className={cred.in}>
              <Image
                src={"/icons/kwik.svg"}
                width={60}
                height={60}
                alt=""
                className={cred.icon}
              />
              <div className={cred.subin}>
                <p>Kwik Pagamentos Instantâneos</p>
                <small>2175800040</small>
              </div>
              <div className={cred.subin2}>
                <p className={cred.success}>10.000,00 kz</p>
                <small>17 de Set - 10h:24</small>
              </div>
            </div>

            <div className={cred.in2}>
              <div className={cred.subin}>
                <p>
                  Ana Correia de Assis Diogo 20242190 - ISPTEC, Multischool{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={cred.cta}>
          <PurpleButton
            description="Confirmar"
            redirect="success"
          ></PurpleButton>
          <LightButton
            description="Editar detalhes"
            redirect="infoCredor"
          ></LightButton>
        </div>
        <Menu/>
      </div>
    </>
  );
}
