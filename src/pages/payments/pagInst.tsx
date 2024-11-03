import Header from "@/components/head";
import pay from "@/styles/payments/pagInst.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";

export default function PagInst() {
  return (
    <>
      <Header title="Consultas - Pagamentos"></Header>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>

      <div className={pay.container}>
        <Top information="Pagamentos" pagina="/consultas/payments"></Top>
        <div className={pay.resume}>
          <div className={pay.info}>
            <Image
              className={pay.avatar}
              src={"/img/isptec.svg"}
              alt="ba2ck"
              width={70}
              height={70}
              priority
            />
            <div className={pay.inner}>
              <p className={pay.name}>
                ISPTEC - Instituto Superior Politécnico de Tecnologias e
                Ciências
              </p>
              <p className={pay.desc}>Av. Luanda Sul, Talatona</p>
            </div>
          </div>
        </div>

        <div className={pay.lista}>
          <p>Lista de pagamentos</p>
          <div className={pay.items}>
            <div className={pay.row1}>
              <Link href="instituicao/confirmacao" className={pay.item}>
                <div className={pay.inner}>
                  <div className={pay.icon}>
                    <Image
                      className={pay.avatar}
                      src={"/icons/cons/payments/instit/student.svg"}
                      alt="ba2ck"
                      width={25}
                      height={25}
                      priority
                    />
                  </div>
                  <p>Confirmação</p>
                </div>
              </Link>
              <Link href="instituicao/propinas" className={pay.item}>
                <div className={pay.inner}>
                  <div className={pay.icon}>
                    <Image
                      className={pay.avatar}
                      src={"/icons/cons/payments/instit/pp.svg"}
                      alt="ba2ck"
                      width={25}
                      height={25}
                      priority
                    />
                  </div>
                  <p>Propinas</p>
                </div>
              </Link>
              <Link href="/pagTransp" className={pay.item}>
                <div className={pay.inner}>
                  <div className={pay.icon}>
                    <Image
                      className={pay.avatar}
                      src={"/icons/cons/payments/instit/note.svg"}
                      alt="ba2ck"
                      width={25}
                      height={25}
                      priority
                    />
                  </div>
                  <p>Taxas</p>
                </div>
              </Link>
            </div>
            <div className={`${pay.row1} ${pay.row2}`}>
              <Link href="/pagCurso" className={pay.item}>
                <div className={pay.inner}>
                  <div className={pay.icon}>
                    <Image
                      className={pay.avatar}
                      src={"/icons/cons/payments/instit/ex.svg"}
                      alt="ba2ck"
                      width={25}
                      height={25}
                      priority
                    />
                  </div>
                  <p>Exames</p>
                </div>
              </Link>
              <Link href="/pagGym" className={pay.item}>
                <div className={pay.inner}>
                  <div className={pay.icon}>
                    <Image
                      className={pay.avatar}
                      src={"/icons/cons/payments/instit/dec.svg"}
                      alt="ba2ck"
                      width={25}
                      height={25}
                      priority
                    />
                  </div>
                  <p>Declarações</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Menu></Menu>
      </div>
    </>
  );
}
