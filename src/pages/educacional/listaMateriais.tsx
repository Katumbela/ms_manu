import Header from "@/components/head";
import cred from "@/styles/educacional/listarMateriais.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";

export default function ListarMateriais() {
  return (
    <>
      <div className={cred.container}>
        <Head>
          <link
            rel="cardsheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
          />
        </Head>
        <Header title="Cálculo Diferencial e Integral I - Materiais"></Header>
        <Top information="Materiais" pagina="curso"></Top>
        <div className={cred.top}>
          <div className={cred.prof}>
            <Image
              className={cred.avatar}
              src={"/avatars/manuel.svg"}
              alt="ba2ck"
              width={42}
              height={42}
              priority
            />
            <h4>Bernardo Manuel</h4>
          </div>
          <h3>Cálculo Diferencial e Integral I</h3>
        </div>
        <div className={cred.list}>
          <div className={cred.top}>
            <p>Selecione o material</p>
            <p>Data</p>
          </div>
          <div className={cred.credL}>
            <Link href="listaMateriais" className={cred.inner}>
              <Image src={"/icons/curso/materialIcon.svg"} width={70} height={70} alt="" />
              <p className={cred.in}>CÁP I - Funções</p>
              <p>12/10/24</p>
            </Link>
            <Link href="listaMateriais" className={cred.inner}>
              <Image src={"/icons/curso/materialIcon.svg"} width={70} height={70} alt="" />
              <p className={cred.in}>CÁP I - Funções</p>
              <p>12/10/24</p>
            </Link>
            <Link href="listaMateriais" className={cred.inner}>
              <Image src={"/icons/curso/materialIcon.svg"} width={70} height={70} alt="" />
              <p className={cred.in}>CÁP I - Funções</p>
              <p>12/10/24</p>
            </Link>
            <Link href="listaMateriais" className={cred.inner}>
              <Image src={"/icons/curso/materialIcon.svg"} width={70} height={70} alt="" />
              <p className={cred.in}>CÁP I - Funções</p>
              <p>12/10/24</p>
            </Link>
            <Link href="listaMateriais" className={cred.inner}>
              <Image src={"/icons/curso/materialIcon.svg"} width={70} height={70} alt="" />
              <p className={cred.in}>CÁP I - Funções</p>
              <p>12/10/24</p>
            </Link>
          </div>
        </div>
        <Menu></Menu>
      </div>
    </>
  );
}
