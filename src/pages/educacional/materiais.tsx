import Header from "@/components/head";
import hor from "@/styles/educacional/horario.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";

export default function Materiais() {
  return (
    <div className={hor.container}>
      <Header title="Educacional - Materiais"></Header>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>
      <Top information="Materiais" pagina="curso"></Top>

      <div className={hor.top}>
        <p>EINF6-M1 - Engenharia Informática</p>
      </div>

      <div className={hor.day}>
        <p className={hor.title}>Segunda-feira</p>
        <div className={hor.top}>
          <div className={hor.both}>
            <p>Hora</p>
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
            <p className={hor.inicio}>07:30</p>
            <p className={hor.termino}>09:00</p>
          </div>
          <Link href="listaMateriais" className={hor.cadeira}>
            <div className={hor.inner1}>
              <h3>CDI I - Cálculo Difer. e Int...</h3>
              <small>Capítulo I: Funções</small>
            </div>
            <div className={hor.inner2}>
              <div className={hor.in}>
                <Image
                  className={hor.avatar}
                  src={"/icons/curso/loc.svg"}
                  alt="ba2ck"
                  width={23}
                  height={23}
                  priority
                />
                <p>
                  Sala: <span className={hor.salaN}>BAA3</span>
                </p>
              </div>
              <div className={`${hor.in} ${hor.in2}`}>
                <Image
                  className={hor.avatar}
                  src={"/avatars/manuel.svg"}
                  alt="ba2ck"
                  width={22}
                  height={22}
                  priority
                />
                <p>Bernardo Manuel</p>
              </div>
            </div>
          </Link>
        </div>
        <div className={hor.details}>
          <div className={hor.time}>
            <p className={hor.inicio}>07:30</p>
            <p className={hor.termino}>09:00</p>
          </div>
          <Link
            href="listaMateriais"
            className={`${hor.cadeira} ${hor.cadeira_not_act}`}
          >
            <div className={hor.inner1}>
              <h3>CDI I - Cálculo Difer. e Int...</h3>
              <small>Capítulo I: Funções</small>
            </div>
            <div className={hor.inner2}>
              <div className={hor.in}>
                <Image
                  className={hor.avatar}
                  src={"/icons/curso/loc2.svg"}
                  alt="ba2ck"
                  width={23}
                  height={23}
                  priority
                />
                <p>
                  Sala: <span className={hor.salaN}>BAA3</span>
                </p>
              </div>
              <div className={`${hor.in} ${hor.in2}`}>
                <Image
                  className={hor.avatar}
                  src={"/avatars/manuel.svg"}
                  alt="ba2ck"
                  width={22}
                  height={22}
                  priority
                />
                <p>Bernardo Manuel</p>
              </div>
            </div>
          </Link>
        </div>

        <div className={hor.details}>
          <div className={hor.time}>
            <p className={hor.inicio}>07:30</p>
            <p className={hor.termino}>09:00</p>
          </div>
          <Link
            href="listaMateriais"
            className={`${hor.cadeira} ${hor.cadeira_not_act}`}
          >
            <div className={hor.inner1}>
              <h3>CDI I - Cálculo Difer. e Int...</h3>
              <small>Capítulo I: Funções</small>
            </div>
            <div className={hor.inner2}>
              <div className={hor.in}>
                <Image
                  className={hor.avatar}
                  src={"/icons/curso/loc2.svg"}
                  alt="ba2ck"
                  width={23}
                  height={23}
                  priority
                />
                <p>
                  Sala: <span className={hor.salaN}>BAA3</span>
                </p>
              </div>
              <div className={`${hor.in} ${hor.in2}`}>
                <Image
                  className={hor.avatar}
                  src={"/avatars/manuel.svg"}
                  alt="ba2ck"
                  width={22}
                  height={22}
                  priority
                />
                <p>Bernardo Manuel</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Menu />
    </div>
  );
}
