import Header from "@/components/head";
import transf from "@/styles/transfer/transferirManual.module.css";
import Head from "next/head";
import Top from "@/components/top";
import payC from "@/styles/payments/instituicao/confirmacao2.module.css";
import Menu from "@/components/menu";
import Image from "next/image";
import PurpleButton from "@/components/buttons";
import Link from "next/link";

export default function CheckTransferir() {
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
        <div className={transf.header}>
          <h2>Insira o número do cartão multischool do destinatário</h2>
          <p>Certifica-te de verificar e inserir o número correctamente!</p>
        </div>

        <div className={transf.inputs}>
          <div className={transf.inputContainer}>
            <div className={transf.iconContainer}>
              <Image
                className={transf.logo}
                src={"/icons/student.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <input
              type="text"
              placeholder="Insira o número do cartão destinatário"
              className={transf.input}
            />
          </div>
        </div>
        <div className={transf.info}>
          <div className={transf.cta}>
            <PurpleButton
              description="Continuar"
              redirect="checkTransf"
            ></PurpleButton>
            <Link href="transferir">
              <u>Transferir via código QR</u>
            </Link>
          </div>
        </div>
        <Menu />
      </div>
    </>
  );
}
