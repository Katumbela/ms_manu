import Header from "@/components/head";
import pay from "@/styles/payments/pagInst.module.css";
// import payC from "@/styles/payments/instituicao/confirmacao2.module.css";
import payC from "@/styles/payments/instituicao/confP.module.css";
import styles from "@/styles/cards.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";
import PurpleButton from "@/components/buttons";

export default function ConfPPropina() {
  return (
    <>
      <Header title="Pagamento Propina"></Header>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrapicons@1.11.3/font/bootstrapicons.min.css"
        />
      </Head>

      <div className={styles.container}>
        <Top
          information="Pagamentos"
          pagina="/payments/instituicao/propinas"
        ></Top>

        <div className={`${styles.cards} ${payC.card}`}>
          <Link href="/consultsM" className={`${styles.card} ${styles.card_m}`}>
            <div className={styles.top}>
              <img src="../../img/cards.svg" alt="" width="190" />
              <img src="../../img/nfc.png" alt="" />
            </div>
            <div className={styles.corpo}>
              <div className={styles.c_number}>
                <p>043 345 160 9</p>
              </div>
              <div className={styles.amount}>
                <h1>Ana Diogo</h1>
              </div>
            </div>
            <div className={styles.bottom}>
              <p>50.000,00 kz</p>
              <img src="/img/Kwik.svg" alt="" width="40" />
            </div>
          </Link>
        </div>

        <div className={payC.movimentos}>
          <div className={payC.top}>
            <p>Confirmar pagamento </p>
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
          <div className={payC.total}>
            <p>Total: 109.201,2 kz </p>
          </div>
        </div>
        <Menu></Menu>
        <div className={payC.btn}>
          <PurpleButton
            description="Continuar"
            redirect="../nfcP"
          ></PurpleButton>
        </div>
      </div>
    </>
  );
}
