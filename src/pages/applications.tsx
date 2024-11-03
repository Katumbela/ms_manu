import Header from "@/components/head";
import app from "@/styles/app.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";


export default function InfoCredor() {
  return (
    <>
      <div className={app.container}>
        <Head>
          <link
            rel="cardsheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
          />
        </Head>
        <Header title="Aplicações multischool"></Header>
        <Top information="Aplicações" pagina="/consultsM"></Top>

        <div className={app.top}>
          <h2>Aplicações disponíveis</h2>
          <p>Divirta-se ao explorar as aplicações multischool</p>
        </div>

        <div className={app.items}>
          <Link href="uninet" className={app.item}>
            <div className={app.image}></div>
            <div className={app.desc}>
              <div className={app.in}>
                <Image
                  src={"/icons/uninet.svg"}
                  width={40}
                  height={40}
                  alt=""
                />
                <h3>Universinet - Multischool</h3>
              </div>
            </div>
          </Link>

          {/* SECOND */}
          <div className={app.item}>
            <div className={app.image}></div>
            <div className={app.desc}>
              <div className={app.in}>
                <Image
                  src={"/icons/unitel.svg"}
                  width={40}
                  height={40}
                  alt=""
                />
                <h3>Unitel GO - Startups</h3>
              </div>
            </div>
          </div>
        </div>
        <Menu />
      </div>
    </>
  );
}
