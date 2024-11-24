import bolsas from "@/styles/services/bolsas/bolsas.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";

export default function BolsasEstudo() {
  return (
    <Layout title="Bolsas">
      <div className={bolsas.container}>
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

        <Menu/>
      </div>
    </Layout>
  );
}
