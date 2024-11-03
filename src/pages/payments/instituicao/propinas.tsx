import Header from "@/components/head";
import pay from "@/styles/payments/pagInst.module.css";
import payC from "@/styles/payments/instituicao/confirmacao2.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";

export default function Payments() {
  return (
    <>
      <Header title="Consultas - Pagamentos"></Header>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrapicons@1.11.3/font/bootstrapicons.min.css"
        />
      </Head>

      <div className={pay.container}>
        <Top information="Pagamentos" pagina="/payments/pagInst"></Top>
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
        <div className={payC.movimentos}>
          <div className={payC.top}>
            <p>Descrição</p>
            <p className={payC.subtitle}>Valor</p>
          </div>
          <Link href="confP" className={payC.details}>
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
          </Link>
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
        <Menu></Menu>
      </div>
    </>
  );
}
