import Header from "@/components/head";
import cred from "@/styles/transfer/transfer.module.css";
import Head from "next/head";
import Top from "@/components/top";
import payC from "@/styles/payments/instituicao/confirmacao2.module.css";
import Menu from "@/components/menu";
import Image from "next/image";
import PurpleButton from "@/components/buttons";


export default function Transfer() {
  return (
    <>
      <div className={cred.container}>
        <Head>
          <link
            rel="cardsheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
          />
        </Head>
        <Header title="Transferências Multischool"></Header>
        <Top information="Transferências" pagina="/home"></Top>

        <div className={cred.first}>
          <div className={cred.inner1}>
            <Image src={"/avatars/ana.svg"} width={80} height={80} alt="" />
            <p>Saldo disponível</p>
            <h1>35.000,00 kz</h1>
          </div>
        </div>

        <div className={payC.movimentos}>
          <div className={payC.top}>
            <p>Descrição</p>
            <p className={payC.subtitle}>Montante</p>
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
              <p>António Marques</p>
              <small>05.07.2024</small>
            </div>
            <div className={payC.amount}>
              <p className={`${payC.price} ${payC.danger}`}>-50.000,00 kz</p>
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
              <p>António Marques</p>
              <small>05.07.2024</small>
            </div>
            <div className={payC.amount}>
              <p className={`${payC.price} ${cred.success}`}>+50.000,00 kz</p>
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
              <p>António Marques</p>
              <small>05.07.2024</small>
            </div>
            <div className={payC.amount}>
              <p className={`${payC.price} ${payC.danger}`}>-50.000,00 kz</p>
            </div>
          </div>
        </div>
        <div className={cred.cta}>
          <PurpleButton
            description="Efectuar transferência"
            redirect="transferir"
          ></PurpleButton>
        </div>
        <Menu />
      </div>
    </>
  );
}
