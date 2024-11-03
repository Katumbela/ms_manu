import Header from "@/components/head";
import candidatura from "@/styles/services/bolsas/candidatura.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import PurpleButton from "@/components/buttons";

export default function Candidatura() {
  return (
    <>
      <Header title="Candidatura - Kwik Invest: bolsa de estudos  "></Header>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>

      <div className={candidatura.container}>
        <Top information="Candidatura" pagina="bolsas"></Top>
        <div className={candidatura.foto}>
          <Image
            src="../../avatars/fotoE.svg"
            width={190}
            height={190}
            alt=""
          />
        </div>
        <div className={candidatura.info}>
          <div className={candidatura.items}>
            <p className={candidatura.dark_g}>Número de estudante</p>
            <p className={`${candidatura.primary} ${candidatura.estnum}`}>
              20242190
            </p>
          </div>

          <div className={candidatura.items}>
            <p className={candidatura.dark_g}>Nome</p>
            <p className={`${candidatura.primary} ${candidatura.name}`}>
              Ana Correia de Assis Diogo
            </p>
          </div>

          <div className={candidatura.items}>
            <p className={candidatura.dark_g}>Curso</p>
            <p className={` ${candidatura.curso}`}>Engenharia informática</p>
          </div>

          <div className={candidatura.items}>
            <p className={candidatura.dark_g}>Ano lectivo</p>
            <p className={`${candidatura.primary} ${candidatura.anolec}`}>
              2024/25
            </p>
          </div>

          <div className={candidatura.items}>
            <p className={candidatura.dark_g}>Ano acadêmico</p>
            <p className={`${candidatura.primary} ${candidatura.anoA}`}>3º</p>
          </div>

          <div className={candidatura.items}>
            <p className={candidatura.dark_g}>Média anual</p>
            <p className={`${candidatura.primary} ${candidatura.semestre}`}>
              15 valores
            </p>
          </div>

          <div className={candidatura.items}>
            <p className={candidatura.dark_g}>Turma</p>
            <p className={`${candidatura.success} ${candidatura.turma}`}>
              EINF-M3
            </p>
          </div>
        </div>
        <div className={candidatura.button}>
          <PurpleButton
            description="Continuar"
            redirect="success"
          ></PurpleButton>
        </div>
        <Menu></Menu>
      </div>
    </>
  );
}
