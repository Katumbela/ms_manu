import app from "@/styles/app.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";

export default function InfoCredor() {
  return (
    <>
      <Layout title="Aplicações">
        <div className={app.container}>
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
      </Layout>
    </>
  );
}
