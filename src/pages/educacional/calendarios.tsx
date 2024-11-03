import Header from "@/components/head";
import cal from "@/styles/educacional/calendarios.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";

export default function Materiais() {
  return (
    <div className={cal.container}>
      <Header title="Educacional - Calendários"></Header>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>
      <Top information="Calendários" pagina="curso"></Top>

      <div className={cal.top}>
        <p>EINF6-M1 - Engenharia Informática</p>
        <p className={cal.title}>VIº Semestre - 3º ano</p>
      </div>

      {/* CALENDAR TABLE INI */}
      <div className={cal.table}>
        {/* ITEM INI */}
        <div className={cal.items}>
          <div className={cal.data}>
            <p>12/09/24</p>
            <div className={cal.line}></div>
          </div>
          <div className={cal.content}>
            <p>CDI I - Cálculo Dif. e Integral I</p>
            <p>
              <span className={cal.time}>08:00 - 10:30 </span>|{" "}
              <span className={cal.ano}>1º Ano</span>
            </p>
          </div>
        </div>
        {/* ITEM FINAL */}

        {/* ITEM INI */}
        <div className={cal.items}>
          <div className={cal.data}>
            <p>12/09/24</p>
            <div className={`${cal.line} ${cal.Lorange}`}></div>
          </div>
          <div className={`${cal.content} ${cal.Corange}`}>
            <p>CDI I - Cálculo Dif. e Integral I</p>
            <p>
              <span className={cal.time}>08:00 - 10:30 </span>|{" "}
              <span className={cal.ano}>1º Ano</span>
            </p>
          </div>
        </div>
        {/* ITEM FINAL */}

        {/* ITEM INI */}
        <div className={cal.items}>
          <div className={cal.data}>
            <p>12/09/24</p>
            <div className={`${cal.line} ${cal.Lred}`}></div>
          </div>
          <div className={`${cal.content} ${cal.Cred}`}>
            <p>CDI I - Cálculo Dif. e Integral I</p>
            <p>
              <span className={cal.time}>08:00 - 10:30 </span>|{" "}
              <span className={cal.ano}>1º Ano</span>
            </p>
          </div>
        </div>
        {/* ITEM FINAL */}

        {/* ITEM INI */}
        <div className={cal.items}>
          <div className={cal.data}>
            <p>12/09/24</p>
            <div className={`${cal.line} ${cal.Lpurple}`}></div>
          </div>
          <div className={`${cal.content} ${cal.Cpurple}`}>
            <p>CDI I - Cálculo Dif. e Integral I</p>
            <p>
              <span className={cal.time}>08:00 - 10:30 </span>|{" "}
              <span className={cal.ano}>1º Ano</span>
            </p>
          </div>
        </div>
        {/* ITEM FINAL */}

        {/* ITEM INI */}
        <div className={cal.items}>
          <div className={cal.data}>
            <p>12/09/24</p>
            <div className={`${cal.line} ${cal.Lblue}`}></div>
          </div>
          <div className={`${cal.content} ${cal.Cblue}`}>
            <p>CDI I - Cálculo Dif. e Integral I</p>
            <p>
              <span className={cal.time}>08:00 - 10:30 </span>|{" "}
              <span className={cal.ano}>1º Ano</span>
            </p>
          </div>
        </div>
        {/* ITEM FINAL */}

        {/* ITEM INI */}
        <div className={cal.items}>
          <div className={cal.data}>
            <p>12/09/24</p>
            <div className={`${cal.line} ${cal.LDblue}`}></div>
          </div>
          <div className={`${cal.content} ${cal.CDblue}`}>
            <p>CDI I - Cálculo Dif. e Integral I</p>
            <p>
              <span className={cal.time}>08:00 - 10:30 </span>|{" "}
              <span className={cal.ano}>1º Ano</span>
            </p>
          </div>
        </div>
        {/* ITEM FINAL */}
      </div>
      {/* CALENDAR TABLE FINAL */}
      <Menu />
    </div>
  );
}
