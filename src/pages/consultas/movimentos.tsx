import Header from "@/components/head";
import mov from "@/styles/consultas/movimentos.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";

export default function Movimentos() {
  return (
    <>
      <Header title="Consultas - Movimentos"></Header>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>

      <div className={mov.container}>
        <Top information="Movimentos" pagina="/consultsM"></Top>
        <div className={mov.resume}>
          <div className={mov.info}>
            <Image
              className={mov.avatar}
              src={"/avatars/ana.svg"}
              alt="ba2ck"
              width={70}
              height={70}
              priority
            />
            <div className={mov.inner}>
              <p className={mov.name}>Ana Correia de Assis Diogo</p>
              <p className={mov.desc}>Conta multischool</p>
            </div>
          </div>
          <div className={mov.btn}>
            <button className={mov.extracto}>Extracto</button>
          </div>
        </div>

        <div className={mov.movimentos}>
          <div className={mov.top}>
            <p>Descrição</p>
            <p className={mov.subtitle}>Montante</p>
          </div>
          <div className={mov.details}>
            <div className={mov.icon}>
              <Image
                className={mov.avatar}
                src={"/icons/cons/money.svg"}
                alt="ba2ck"
                width={30}
                height={30}
                priority
              />
            </div>
            <div className={mov.desc}>
              <p>Propina Julho</p>
              <small>05.07.2024</small>
            </div>
            <div className={mov.amount}>
              <p className={`${mov.price} ${mov.danger}`}>-50.000,00 kz</p>
            </div>
          </div>
          <div className={mov.details}>
            <div className={mov.icon}>
              <Image
                className={mov.avatar}
                src={"/icons/cons/money.svg"}
                alt="ba2ck"
                width={30}
                height={30}
                priority
              />
            </div>
            <div className={mov.desc}>
              <p>Propina Julho</p>
              <small>05.07.2024</small>
            </div>
            <div className={mov.amount}>
              <p className={`${mov.price} ${mov.danger}`}>-50.000,00 kz</p>
            </div>
          </div>
          <div className={mov.details}>
            <div className={mov.icon}>
              <Image
                className={mov.avatar}
                src={"/icons/cons/money.svg"}
                alt="ba2ck"
                width={30}
                height={30}
                priority
              />
            </div>
            <div className={mov.desc}>
              <p>Propina Julho</p>
              <small>05.07.2024</small>
            </div>
            <div className={mov.amount}>
              <p className={`${mov.price} ${mov.danger}`}>-50.000,00 kz</p>
            </div>
          </div>
          <div className={mov.details}>
            <div className={mov.icon}>
              <Image
                className={mov.avatar}
                src={"/icons/cons/money.svg"}
                alt="ba2ck"
                width={30}
                height={30}
                priority
              />
            </div>
            <div className={mov.desc}>
              <p>Propina Julho</p>
              <small>05.07.2024</small>
            </div>
            <div className={mov.amount}>
              <p className={`${mov.price} ${mov.danger}`}>-50.000,00 kz</p>
            </div>
          </div>
          <div className={mov.details}>
            <div className={mov.icon}>
              <Image
                className={mov.avatar}
                src={"/icons/cons/money.svg"}
                alt="ba2ck"
                width={30}
                height={30}
                priority
              />
            </div>
            <div className={mov.desc}>
              <p>Propina Julho</p>
              <small>05.07.2024</small>
            </div>
            <div className={mov.amount}>
              <p className={`${mov.price} ${mov.danger}`}>-50.000,00 kz</p>
            </div>
          </div>
          <div className={mov.details}>
            <div className={mov.icon}>
              <Image
                className={mov.avatar}
                src={"/icons/cons/money.svg"}
                alt="ba2ck"
                width={30}
                height={30}
                priority
              />
            </div>
            <div className={mov.desc}>
              <p>Propina Julho</p>
              <small>05.07.2024</small>
            </div>
            <div className={mov.amount}>
              <p className={`${mov.price} ${mov.danger}`}>-50.000,00 kz</p>
            </div>
          </div>
          <div className={mov.details}>
            <div className={mov.icon}>
              <Image
                className={mov.avatar}
                src={"/icons/cons/money.svg"}
                alt="ba2ck"
                width={30}
                height={30}
                priority
              />
            </div>
            <div className={mov.desc}>
              <p>Propina Julho</p>
              <small>05.07.2024</small>
            </div>
            <div className={mov.amount}>
              <p className={`${mov.price} ${mov.success}`}>+50.000,00 kz</p>
            </div>
          </div>
          <div className={mov.details}>
            <div className={mov.icon}>
              <Image
                className={mov.avatar}
                src={"/icons/cons/money.svg"}
                alt="ba2ck"
                width={30}
                height={30}
                priority
              />
            </div>
            <div className={mov.desc}>
              <p>Propina Julho</p>
              <small>05.07.2024</small>
            </div>
            <div className={mov.amount}>
              <p className={`${mov.price} ${mov.danger}`}>-50.000,00 kz</p>
            </div>
          </div>
          <div className={mov.details}>
            <div className={mov.icon}>
              <Image
                className={mov.avatar}
                src={"/icons/cons/money.svg"}
                alt="ba2ck"
                width={30}
                height={30}
                priority
              />
            </div>
            <div className={mov.desc}>
              <p>Propina Julho</p>
              <small>05.07.2024</small>
            </div>
            <div className={mov.amount}>
              <p className={`${mov.price} ${mov.danger}`}>-50.000,00 kz</p>
            </div>
          </div>
          <div className={mov.details}>
            <div className={mov.icon}>
              <Image
                className={mov.avatar}
                src={"/icons/cons/money.svg"}
                alt="ba2ck"
                width={30}
                height={30}
                priority
              />
            </div>
            <div className={mov.desc}>
              <p>Propina Julho</p>
              <small>05.07.2024</small>
            </div>
            <div className={mov.amount}>
              <p className={`${mov.price} ${mov.danger}`}>-50.000,00 kz</p>
            </div>
          </div>
          <div className={mov.details}>
            <div className={mov.icon}>
              <Image
                className={mov.avatar}
                src={"/icons/cons/money.svg"}
                alt="ba2ck"
                width={30}
                height={30}
                priority
              />
            </div>
            <div className={mov.desc}>
              <p>Propina Julho</p>
              <small>05.07.2024</small>
            </div>
            <div className={mov.amount}>
              <p className={`${mov.price} ${mov.danger}`}>-50.000,00 kz</p>
            </div>
          </div>
          <div className={mov.details}>
            <div className={mov.icon}>
              <Image
                className={mov.avatar}
                src={"/icons/cons/money.svg"}
                alt="ba2ck"
                width={30}
                height={30}
                priority
              />
            </div>
            <div className={mov.desc}>
              <p>Propina Julho</p>
              <small>05.07.2024</small>
            </div>
            <div className={mov.amount}>
              <p className={`${mov.price} ${mov.danger}`}>-50.000,00 kz</p>
            </div>
          </div>
        </div>
        <Menu></Menu>
      </div>
    </>
  );
}
