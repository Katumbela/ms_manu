import Header from "@/components/head";
import pay from "@/styles/payments/instituicao/confirmacao.module.css";
import payC from "@/styles/payments/instituicao/confirmacao2.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import PurpleButton from "@/components/buttons";

export default function PagInst() {
  return (
    <>
      <Header title="Instituição - Confirmação"></Header>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>

      <div className={pay.container}>
        <Top information="Confirmação" pagina="confirmacao"></Top>
        <div className={pay.foto}>
          <Image
            src="../../avatars/fotoE.svg"
            width={190}
            height={190}
            alt=""
          />
        </div>
        <div className={payC.data}>
          <p className={payC.name}>Ana Correia de Assis Diogo</p>
          <p className={payC.desc}>Confirmação Ano Lectivo 2024/25</p>
        </div>
        <div className={payC.movimentos}>
          <div className={payC.top}>
            <p>Descrição</p>
            <p className={payC.subtitle}>Valor</p>
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
              <p>Propina Julho</p>
              <small>05.07.2024</small>
            </div>
            <div className={payC.amount}>
              <p className={`${payC.price} ${payC.danger}`}>50.000,00 kz</p>
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
              <p>Propina Julho</p>
              <small>05.07.2024</small>
            </div>
            <div className={payC.amount}>
              <p className={`${payC.price} ${pay.success}`}>50.000,00 kz</p>
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
              <p>Propina Julho</p>
              <small>05.07.2024</small>
            </div>
            <div className={payC.amount}>
              <p className={`${payC.price} ${payC.warning}`}>50.000,00 kz</p>
            </div>
          </div>
        </div>
        <div className={payC.total}>
          <p className={payC.title}>Total:</p>
          <p className={payC.value}>150.000,00 kz</p>
        </div>
        <div className={payC.btn}>
          <PurpleButton
            description="Continuar"
            redirect="propinas"
          ></PurpleButton>
        </div>
        <Menu></Menu>
      </div>
    </>
  );
}
