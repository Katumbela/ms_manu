import Header from "@/components/head";
import pay from "@/styles/educacional/curso.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";

export default function Payments() {
  return (
    <div className={pay.container}>
      <Header title="Educacional - Curso"></Header>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>
      <Top information="Curso" pagina="resume"></Top>

      <div className={pay.lista}>
        <p>Menu Curso</p>
        <div className={pay.items}>
          <div className={pay.row1}>
            <Link href="horarios" className={pay.item}>
              <div className={pay.inner}>
                <div className={pay.icon}>
                  <Image
                    className={pay.avatar}
                    src={"/icons/curso/grid.svg"}
                    alt="ba2ck"
                    width={25}
                    height={25}
                    priority
                  />
                </div>
                <p>Horários</p>
              </div>
            </Link>
            <Link href="notas" className={pay.item}>
              <div className={pay.inner}>
                <div className={pay.icon}>
                  <Image
                    className={pay.avatar}
                    src={"/icons/curso/grad.svg"}
                    alt="ba2ck"
                    width={25}
                    height={25}
                    priority
                  />
                </div>
                <p>Notas</p>
              </div>
            </Link>

            <Link href="materiais" className={pay.item}>
              <div className={pay.inner}>
                <div className={pay.icon}>
                  <Image
                    className={pay.avatar}
                    src={"/icons/curso/books.svg"}
                    alt="ba2ck"
                    width={25}
                    height={25}
                    priority
                  />
                </div>
                <p>Materiais</p>
              </div>
            </Link>
          </div>

          <div className={`${pay.row1} ${pay.row2}`}>
            <Link href="aulason" className={pay.item}>
              <div className={pay.inner}>
                <div className={pay.icon}>
                  <Image
                    className={pay.avatar}
                    src={"/icons/curso/aulas.svg"}
                    alt="ba2ck"
                    width={25}
                    height={25}
                    priority
                  />
                </div>
                <p>Aulas - ON</p>
              </div>
            </Link>
            <Link href="calendarios" className={pay.item}>
              <div className={pay.inner}>
                <div className={pay.icon}>
                  <Image
                    className={pay.avatar}
                    src={"/icons/curso/calendar.svg"}
                    alt="ba2ck"
                    width={25}
                    height={25}
                    priority
                  />
                </div>
                <p>Calendários</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className={pay.pendentes}>
        <p>Recentes</p>
        <div className={pay.pending}>
          <div className={pay.details}>
            <div className={pay.icon}>
              <Image
                className={pay.avatar}
                src={"/icons/curso/grad.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <div className={pay.desc}>
              <p>Nota de álgebra</p>
              <small>10.09.2024 às 12h:30:50</small>
            </div>
            <div className={pay.amount}>
              <Link href="notas" className={`${pay.price} ${pay.warning}`}><u>Abrir</u></Link>
            </div>
          </div>
          <div className={pay.details}>
            <div className={pay.icon}>
              <Image
                className={pay.avatar}
                src={"/icons/curso/grad.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <div className={pay.desc}>
              <p>Nota de álgebra</p>
              <small>10.09.2024 às 12h:30:50</small>
            </div>
            <div className={pay.amount}>
              <Link href="notas" className={`${pay.price} ${pay.warning}`}><u>Abrir</u></Link>
            </div>
          </div>
          <div className={pay.details}>
            <div className={pay.icon}>
              <Image
                className={pay.avatar}
                src={"/icons/curso/grad.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <div className={pay.desc}>
              <p>Nota de álgebra</p>
              <small>10.09.2024 às 12h:30:50</small>
            </div>
            <div className={pay.amount}>
              <Link href="notas" className={`${pay.price} ${pay.warning}`}><u>Abrir</u></Link>
            </div>
          </div>
        </div>
      </div>
      <Menu></Menu>
    </div>
  );
}
