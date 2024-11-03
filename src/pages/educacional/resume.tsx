import Header from "@/components/head";
import edu from "@/styles/educacional/resume.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";
import cards from "@/styles/cards.module.css";
import { CartaoEstudante } from "@/components/cards";

export default function eduultsM() {
  return (
    <div className={edu.container}>
      <Head>
        {/* <title>eduultas</title> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-iedu@1.11.3/font/bootstrap-iedu.min.css"
        />
      </Head>
      <Header title="Multischool - Educacional"></Header>
      <Top information="Educacional" pagina="/cards"></Top>
      <div className={`${edu.bg} ${cards.container}`}>
        <div className={cards.cards}>
          <CartaoEstudante></CartaoEstudante>
        </div>
      </div>
      <div className={edu.options}>
        <Link href="movimentos" className={edu.op}>
          <div className={edu.circle}>
            <Image
              className={edu.arrow}
              src={"/icons/cons/mov.svg"}
              alt="ba2ck"
              width={25}
              height={25}
              priority
            />
          </div>
          <p>Movimentos</p>
        </Link>

        <Link href="curso" className={edu.op}>
          <div className={edu.circle}>
            <Image
              className={edu.arrow}
              src={"/icons/cons/pag.svg"}
              alt="ba2ck"
              width={30}
              height={30}
              priority
            />
          </div>
          <p>Curso</p>
        </Link>

        <Link href="/consultas/infoMulti" className={edu.op}>
          <div className={edu.circle}>
            <Image
              className={edu.arrow}
              src={"/icons/cons/info.svg"}
              alt="ba2ck"
              width={25}
              height={25}
              priority
              color="#000"
            />
          </div>
          <p>Informações</p>
        </Link>
      </div>

      {/* INFORMAÇÕES - ESTUDANTE */}
      <div className={edu.infor}>
        <div className={edu.info}>
          <Image
            className={edu.avatar}
            src={"/avatars/ana.svg"}
            alt="ba2ck"
            width={70}
            height={70}
            priority
          />
          <div className={edu.inner}>
            <p className={edu.name}>Ana Correia de Assis Diogo</p>
            <p className={edu.desc}>Engenharia Informática - 3º Ano</p>
          </div>
        </div>

        <div className={edu.inner2}>
          <div className={edu.data}>
            <div className={`${edu.ref}`}>
              <p className={` ${edu.gray}`}>Turma:</p>
              <p className={`${edu.bold}`}>EINF-M1</p>
            </div>
            <div className={`${edu.date}`}>
              <p className={` ${edu.gray}`}>Sala</p>
              <p className={edu.bold}>BAA3 - 2º andar</p>
            </div>
          </div>

          <div className={`${edu.tipo}`}>
            <div className={edu.type}>
              <p className={` ${edu.gray}`}>Tipo</p>
              <p className={edu.bold}>Manhã</p>
            </div>
            <div className={edu.dest}>
              <p className={` ${edu.gray}`}>Estado</p>
              <p className={`${edu.bold} ${edu.success}`}>Activo</p>
            </div>
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
}
