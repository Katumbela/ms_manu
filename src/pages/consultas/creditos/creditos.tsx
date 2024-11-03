import Header from "@/components/head";
import cred from "@/styles/consultas/creditos/creditos.module.css";
import Head from "next/head";
import Top from "@/components/top";
import payC from "@/styles/payments/instituicao/confirmacao2.module.css";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";

export default function Credito() {
  return (
    <>
      <div className={cred.container}>
        <Head>
          <link
            rel="cardsheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
          />
        </Head>
        <Header title="Créditos Multischool"></Header>
        <Top information="Créditos" pagina="/consultsM"></Top>

        <div className={cred.first}>
          <div className={cred.inner1}>
            <Image src={"/avatars/ana.svg"} width={80} height={80} alt="" />
            <p>O seu crédito actual é:</p>
            <h2>35.000,00 kz</h2>
            <small>
              Último crédito feito em:{" "}
              <span className={cred.lastDate}>
                22 de Agosto de 2024 às 10:44:50
              </span>
            </small>
          </div>
          <div className={cred.inner2}>
            <div className={cred.in}>
              <p className={cred.in1}>Prazo</p>
              <p className={cred.in2}>17 de Setembro de 2024</p>
            </div>
            <div className={cred.in}>
              <p className={cred.in1}>Valor</p>
              <p className={cred.in2}>20.000,00 kz</p>
            </div>
            <div className={cred.in}>
              <p className={cred.in1}>Total de créditos</p>
              <p className={cred.in2}>3</p>
            </div>
          </div>
        </div>
        <div className={cred.credores}>
          <div className={cred.icon}>
            <Image
              className={cred.avatar}
              src={"/icons/cons/money.svg"}
              alt="ba2ck"
              width={25}
              height={25}
              priority
            />
          </div>
          <div className={cred.desc}>
            <p>Ver opções de credores</p>
            <small>
              Explore instituições disponíveis para oferecer créditos
            </small>
          </div>
          <Link href="credores" className={cred.credor}>
            <Image
              className={cred.avatar}
              src={"/icons/credor.svg"}
              alt="ba2ck"
              width={45}
              height={45}
              priority
            />
          </Link>
        </div>

        <div className={`${payC.movimentos} ${cred.movimentos}`}>
          <div className={payC.top}>
            <p>Recentes</p>
            <p className={payC.subtitle}>Estado</p>
          </div>
          <div className={payC.details}>
            <div className={payC.icon}>
              <Image
                className={payC.avatar}
                src={"/icons/cons/money.svg"}
                alt="ba2ck"
                width={30}
                height={30}
                priority
              />
            </div>
            <div className={payC.desc}>
              <p>Kwik Pag. Inst.</p>
              <small>05.07.2024</small>
            </div>
            <div className={payC.amount}>
              <p className={`${payC.price} ${payC.danger}`}>Rejeitado</p>
            </div>
          </div>
          <div className={payC.details}>
            <div className={payC.icon}>
              <Image
                className={payC.avatar}
                src={"/icons/cons/money.svg"}
                alt="ba2ck"
                width={30}
                height={30}
                priority
              />
            </div>
            <div className={payC.desc}>
              <p>Kwik Pag. Inst.</p>
              <small>05.07.2024</small>
            </div>
            <div className={payC.amount}>
              <p className={`${payC.price} ${cred.success}`}>Confirmado</p>
            </div>
          </div>
          <div className={payC.details}>
            <div className={payC.icon}>
              <Image
                className={payC.avatar}
                src={"/icons/cons/money.svg"}
                alt="ba2ck"
                width={30}
                height={30}
                priority
              />
            </div>
            <div className={payC.desc}>
              <p>Kwik Pag. Inst.</p>
              <small>05.07.2024</small>
            </div>
            <div className={payC.amount}>
              <p className={`${payC.price} ${payC.warning}`}>Pendente</p>
            </div>
          </div>
        </div>
        <Menu></Menu>
      </div>
    </>
  );
}
