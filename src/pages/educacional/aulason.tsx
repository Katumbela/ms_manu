import aulas from "@/styles/educacional/aulason.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Link from "next/link";
import Layout from "@/components/Layout";

export default function Materiais() {
  return (
    <Layout title="Aulas online">
      <div className={aulas.container}>
        <Top information="Aulas online" pagina="curso"></Top>

        <div className={aulas.top}>
          <Link href="grelhaAulas" className={aulas.desc}>
            <div className={aulas.photo}>
              <div className={aulas.in}></div>
            </div>
            <p>Judson</p>
          </Link>
          {/* PHOTO 2 */}
          <Link href="grelhaAulas" className={aulas.desc}>
            <div className={aulas.photo}>
              <div className={aulas.in}></div>
            </div>
            <p>Benvindo</p>
          </Link>

          {/* PHOTO 2 */}
          <Link href="grelhaAulas" className={aulas.desc}>
            <div className={aulas.photo}>
              <div className={aulas.in}></div>
            </div>
            <p>Sebastião</p>
          </Link>

          {/* PHOTO 2 */}
          <Link href="grelhaAulas" className={aulas.desc}>
            <div className={aulas.photo}>
              <div className={aulas.in}></div>
            </div>
            <p>José</p>
          </Link>

          {/* PHOTO 2 */}
          <Link href="grelhaAulas" className={aulas.desc}>
            <div className={aulas.photo}>
              <div className={aulas.in}></div>
            </div>
            <p>António</p>
          </Link>

          {/* PHOTO 2 */}
          <Link href="grelhaAulas" className={aulas.desc}>
            <div className={aulas.photo}>
              <div className={aulas.in}></div>
            </div>
            <p>Rodrigues</p>
          </Link>
        </div>

        <div className={aulas.banner}>
          <div className={aulas.in}>
            <h2>Aprenda em qualquer lugar!</h2>
            <div className={aulas.in2}>
              <p>Multischool Angola</p>
              <p>
                <span className={aulas.Anumber}>+350</span> aulas gravadas
              </p>
            </div>
          </div>
        </div>

        <div className={aulas.recents}>
          <h2>Recentes</h2>
          <Link href="player" className={aulas.content}>
            <div className={aulas.back}></div>
            <div className={aulas.desc}>
              <div className={aulas.cadeiraDet}>
                <p className={aulas.title}>CDI I - CÁP I: Funções</p>
                <p className={aulas.ref}>1º Ano | 20 aulas</p>
                <p className={aulas.prof}>Bernardo Manuel</p>
              </div>
              <div className={aulas.videoR}>
                <small className={aulas.view}>390 visualizações</small>
                <small>|</small>
                <small className={aulas.time}> Há 2 dias</small>
              </div>
            </div>
          </Link>

          <Link href="player" className={aulas.content}>
            <div className={aulas.back}></div>
            <div className={aulas.desc}>
              <div className={aulas.cadeiraDet}>
                <p className={aulas.title}>CDI I - CÁP I: Funções</p>
                <p className={aulas.ref}>1º Ano | 20 aulas</p>
                <p className={aulas.prof}>Bernardo Manuel</p>
              </div>
              <div className={aulas.videoR}>
                <small className={aulas.view}>390 visualizações</small>
                <small>|</small>
                <small className={aulas.time}> Há 2 dias</small>
              </div>
            </div>
          </Link>

          <Link href="player" className={aulas.content}>
            <div className={aulas.back}></div>
            <div className={aulas.desc}>
              <div className={aulas.cadeiraDet}>
                <p className={aulas.title}>CDI I - CÁP I: Funções</p>
                <p className={aulas.ref}>1º Ano | 20 aulas</p>
                <p className={aulas.prof}>Bernardo Manuel</p>
              </div>
              <div className={aulas.videoR}>
                <small className={aulas.view}>390 visualizações</small>
                <small>|</small>
                <small className={aulas.time}> Há 2 dias</small>
              </div>
            </div>
          </Link>
        </div>

        <Menu />
      </div>
    </Layout>
  );
}
