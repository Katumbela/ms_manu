import Header from "@/components/head";
import pay from "@/styles/payments/instituicao/confirmacao.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import PurpleButton from "@/components/buttons";

export default function PagInst() {
  return (
    <>
      <Header title="Instituição - Confirmação"></Header>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>

      <div className={pay.container}>
        <Top information="Confirmação" pagina="/payments/pagInst"></Top>
        <div className={pay.foto}>
          <Image
            src="../../avatars/fotoE.svg"
            width={190}
            height={190}
            alt=""
          />
        </div>
        <div className={pay.info}>
          <div className={pay.items}>
            <p className={pay.dark_g}>Nome</p>
            <p className={`${pay.primary} ${pay.name}`}>
              Ana Correia de Assis Diogo
            </p>
          </div>
          <div className={pay.items}>
            <p className={pay.dark_g}>Ano lectivo</p>
            <p className={`${pay.primary} ${pay.anolec}`}>2024/25</p>
          </div>
          <div className={pay.items}>
            <p className={pay.dark_g}>Semestre</p>
            <p className={`${pay.primary} ${pay.semestre}`}>IVº</p>
          </div>
          <div className={pay.items}>
            <p className={pay.dark_g}>Ano acadêmico</p>
            <p className={`${pay.primary} ${pay.anoA}`}>3º</p>
          </div>
          <div className={pay.items}>
            <p className={pay.dark_g}>Número de estudante</p>
            <p className={`${pay.primary} ${pay.estnum}`}>20242190</p>
          </div>
          <div className={pay.items}>
            <p className={pay.dark_g}>Curso</p>
            <p className={` ${pay.curso}`}>Engenharia informática</p>
          </div>
          <div className={pay.items}>
            <p className={pay.dark_g}>Turma</p>
            <p className={`${pay.success} ${pay.turma}`}>EINF-M3</p>
          </div>
        </div>
        <div className={pay.button}>
          <PurpleButton
            description="Continuar"
            redirect="confirm2"
          ></PurpleButton>
        </div>
        <Menu></Menu>
      </div>
    </>
  );
}
