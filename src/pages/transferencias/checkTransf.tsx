import Header from "@/components/head";
import transf from "@/styles/transfer/checkTransfer.module.css";
import Head from "next/head";
import Top from "@/components/top";
import payC from "@/styles/payments/instituicao/confirmacao2.module.css";
import Menu from "@/components/menu";
import Image from "next/image";
import PurpleButton from "@/components/buttons";
import Link from "next/link";

export default function CheckTransferencia() {
  return (
    <>
      <div className={transf.container}>
        <Head>
          <link
            rel="cardsheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
          />
        </Head>
        <Header title="Efectuar Transferência"></Header>
        <Top information="Transferências" pagina="transferir"></Top>

        <div className={transf.top}>
          <Image
            className={transf.avatar}
            src={"/avatars/manuel.svg"}
            width={120}
            height={120}
            alt=""
          />
          <p className={transf.name}>
            Manuel Teodoro de Jesus
          </p>
        </div>

        <div className={transf.info}>
          <div className={transf.items}>
            <p className={transf.dark_g}>Número do cartão</p>
            <p className={`${transf.primary} ${transf.cardN}`}>043 445 550 0</p>
          </div>
          <div className={transf.items}>
            <p className={transf.dark_g}>Tipo de transferência</p>
            <p className={`${transf.primary} ${transf.tipo}`}>Intrabancária</p>
          </div>
          <div className={transf.items}>
            <p className={transf.dark_g}>Montante</p>
            <p className={`${transf.success} ${transf.semestre}`}>
              30.000,00 kz
            </p>
          </div>
          <div className={transf.items}>
            <p className={transf.dark_g}>Data da transferência</p>
            <p className={`${transf.primary} ${transf.anoA}`}>
              17/09/24 às 10h:40:30
            </p>
          </div>
        </div>
        <PurpleButton
          description="Continuar"
          redirect="proof"
        ></PurpleButton>
        <Menu />
      </div>
    </>
  );
}
