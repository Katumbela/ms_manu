import Header from "@/components/head";
import hor from "@/styles/educacional/notas.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";

export default function Payments() {
  return (
    <div className={hor.container}>
      <Header title="Educacional - Notas"></Header>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>
      <Top information="Notas" pagina="curso"></Top>

      <div className={hor.top}>
        <p>EINF6-M1 - Engenharia Informática</p>
      </div>

      <div className={hor.day}>
        <p className={hor.title}>VIº Semestre - 3º ano</p>
        <div className={hor.top}>
          <div className={hor.both}>
            <p>Data</p>
            <div className={hor.cad}>
              <p>Cadeira</p>
            </div>
          </div>
          <button className={hor.btn_order}>
            <Image
              className={hor.avatar}
              src={"/icons/curso/order.svg"}
              alt="ba2ck"
              width={25}
              height={25}
              priority
            />
          </button>
        </div>
        <div className={hor.details}>
          <div className={hor.time}>
            <p className={hor.inicio}>12/09</p>
          </div>
          <div className={hor.cadeira}>
            <div className={hor.inner1}>
              <h3>CDI I - Cálculo Difer. e Int...</h3>
            </div>
            <div className={hor.inner2}>
              <div className={hor.in}>
                <p>PP1: 12v</p>
                <span>|</span>
                <p>PP2: 12v</p>
              </div>
              <div className={`${hor.in} ${hor.in2}`}>
                <p>EXN: 9v </p>
                <span>|</span>
                <p>EXR: 19v </p>
              </div>
              <p className={`${hor.status}`}>Situação: APROVADO</p>
            </div>
          </div>
        </div>
        <div className={hor.details}>
          <div className={hor.time}>
            <p className={hor.inicio}>12/09</p>
          </div>
          <div className={`${hor.cadeira} ${hor.cadeira_not_act}`}>
            <div className={hor.inner1}>
              <h3>CDI I - Cálculo Difer. e Int...</h3>
            </div>
            <div className={hor.inner2}>
              <div className={hor.in}>
                <p>PP1: 12v</p>
                <span>|</span>
                <p>PP2: 12v</p>
              </div>
              <div className={`${hor.in} ${hor.in2}`}>
                <p>EXN: 9v </p>
                <span>|</span>
                <p>EXR: 19v </p>
              </div>
              <p className={`${hor.status2}`}>Situação: APROVADO</p>
            </div>
          </div>
        </div>
        <div className={hor.details}>
          <div className={hor.time}>
            <p className={hor.inicio}>12/09</p>
          </div>
          <div className={`${hor.cadeira} ${hor.cadeira_not_act}`}>
            <div className={hor.inner1}>
              <h3>CDI I - Cálculo Difer. e Int...</h3>
            </div>
            <div className={hor.inner2}>
              <div className={hor.in}>
                <p>PP1: 12v</p>
                <span>|</span>
                <p>PP2: 12v</p>
              </div>
              <div className={`${hor.in} ${hor.in2}`}>
                <p>EXN: 9v </p>
                <span>|</span>
                <p>EXR: 19v </p>
              </div>
              <p className={`${hor.status2}`}>Situação: APROVADO</p>
            </div>
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
}
