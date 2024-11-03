import Header from "@/components/head";
import bolsas from "@/styles/services/bolsas/bolsas.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";

export default function BolsasEstudo() {
  return (
    <div className={bolsas.container}>
      <Head>
        <link
          rel="cardsheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>
      <Header title="Bolsas de estudo disponíveis"></Header>
      <Top information="Bolsas" pagina="/services/menu"></Top>

      <div className={bolsas.top}>
        <p>Bolsas de estudo</p>
        <h2>30 disponíveis</h2>
      </div>
      <div className={bolsas.input}>
        <div className={bolsas.inputContainer}>
          <div className={bolsas.iconContainer}>
            <Image
              className={bolsas.logo}
              src={"/icons/magn.svg"}
              alt="ba2ck"
              width={25}
              height={35}
              priority
            />
          </div>
          <input
            type="text"
            placeholder="Pesquisar por descrição"
            className={bolsas.input3}
          />
        </div>
      </div>
      <div className={bolsas.list}>
        <div className={bolsas.top}>
          <p>Selecione uma opção</p>
          <p>Prazo</p>
        </div>
        <div className={bolsas.credL}>
          <Link href="verBolsa" className={bolsas.inner}>
            <Image src={"/icons/kwik.svg"} width={60} height={60} alt="" />
            <p className={bolsas.in}>Kwik invest: Bolsa est...</p>
            <p>10/10/24</p>
          </Link>
          <Link href="verBolsa" className={bolsas.inner}>
            <Image src={"/icons/kwik.svg"} width={60} height={60} alt="" />
            <p className={bolsas.in}>Kwik invest: Bolsa est...</p>
            <p>10/10/24</p>
          </Link>
          <Link href="verBolsa" className={bolsas.inner}>
            <Image src={"/icons/kwik.svg"} width={60} height={60} alt="" />
            <p className={bolsas.in}>Kwik invest: Bolsa est...</p>
            <p>10/10/24</p>
          </Link>
          <Link href="verBolsa" className={bolsas.inner}>
            <Image src={"/icons/kwik.svg"} width={60} height={60} alt="" />
            <p className={bolsas.in}>Kwik invest: Bolsa est...</p>
            <p>10/10/24</p>
          </Link>
          <Link href="verBolsa" className={bolsas.inner}>
            <Image src={"/icons/kwik.svg"} width={60} height={60} alt="" />
            <p className={bolsas.in}>Kwik invest: Bolsa est...</p>
            <p>10/10/24</p>
          </Link>
        </div>
      </div>

      <Menu></Menu>
    </div>
  );
}
