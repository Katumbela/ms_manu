import Header from "@/components/head";
import mov from "@/styles/educacional/movimentos.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";

export default function Movimentos() {
  return (
    <>
      <Header title="Educacional - Movimentos"></Header>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>
      <div className={mov.container}>
        <Top information="Movimentos" pagina="resume"></Top>
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
              <p className={mov.desc}>
                Conta <span className={mov.instituicao}>ISPTEC</span>
              </p>
            </div>
          </div>
        </div>

        <div className={mov.movimentos}>
          <div className={mov.top}>
            <p>Descrição</p>
            <p className={mov.subtitle}>Tempo</p>
          </div>
          <div className={mov.details}>
            <div className={mov.icon}>
              <Image
                className={mov.avatar}
                src={"/icons/graduate.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <div className={mov.desc}>
              <p>Biblioteca</p>
              <small>05.07.2024 às 12:45:50</small>
            </div>
            <div className={mov.amount}>
              <p className={`${mov.price} ${mov.danger}`}>há 1h</p>
            </div>
          </div>
          <div className={mov.details}>
            <div className={mov.icon}>
              <Image
                className={mov.avatar}
                src={"/icons/graduate.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <div className={mov.desc}>
              <p>Biblioteca</p>
              <small>05.07.2024 às 12:45:50</small>
            </div>
            <div className={mov.amount}>
              <p className={`${mov.price} ${mov.danger}`}>há 1h</p>
            </div>
          </div>
          <div className={mov.details}>
            <div className={mov.icon}>
              <Image
                className={mov.avatar}
                src={"/icons/graduate.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <div className={mov.desc}>
              <p>Biblioteca</p>
              <small>05.07.2024 às 12:45:50</small>
            </div>
            <div className={mov.amount}>
              <p className={`${mov.price} ${mov.danger}`}>há 1h</p>
            </div>
          </div>
          <div className={mov.details}>
            <div className={mov.icon}>
              <Image
                className={mov.avatar}
                src={"/icons/graduate.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <div className={mov.desc}>
              <p>Biblioteca</p>
              <small>05.07.2024 às 12:45:50</small>
            </div>
            <div className={mov.amount}>
              <p className={`${mov.price} ${mov.danger}`}>há 1h</p>
            </div>
          </div>
          <div className={mov.details}>
            <div className={mov.icon}>
              <Image
                className={mov.avatar}
                src={"/icons/graduate.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <div className={mov.desc}>
              <p>Biblioteca</p>
              <small>05.07.2024 às 12:45:50</small>
            </div>
            <div className={mov.amount}>
              <p className={`${mov.price} ${mov.danger}`}>há 1h</p>
            </div>
          </div>
          <div className={mov.details}>
            <div className={mov.icon}>
              <Image
                className={mov.avatar}
                src={"/icons/graduate.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <div className={mov.desc}>
              <p>Biblioteca</p>
              <small>05.07.2024 às 12:45:50</small>
            </div>
            <div className={mov.amount}>
              <p className={`${mov.price} ${mov.danger}`}>há 1h</p>
            </div>
          </div>
          <div className={mov.details}>
            <div className={mov.icon}>
              <Image
                className={mov.avatar}
                src={"/icons/graduate.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <div className={mov.desc}>
              <p>Biblioteca</p>
              <small>05.07.2024 às 12:45:50</small>
            </div>
            <div className={mov.amount}>
              <p className={`${mov.price} ${mov.danger}`}>há 1h</p>
            </div>
          </div>
          <div className={mov.details}>
            <div className={mov.icon}>
              <Image
                className={mov.avatar}
                src={"/icons/graduate.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <div className={mov.desc}>
              <p>Biblioteca</p>
              <small>05.07.2024 às 12:45:50</small>
            </div>
            <div className={mov.amount}>
              <p className={`${mov.price} ${mov.danger}`}>há 1h</p>
            </div>
          </div>
          <div className={mov.details}>
            <div className={mov.icon}>
              <Image
                className={mov.avatar}
                src={"/icons/graduate.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <div className={mov.desc}>
              <p>Biblioteca</p>
              <small>05.07.2024 às 12:45:50</small>
            </div>
            <div className={mov.amount}>
              <p className={`${mov.price} ${mov.danger}`}>há 1h</p>
            </div>
          </div>
          <div className={mov.details}>
            <div className={mov.icon}>
              <Image
                className={mov.avatar}
                src={"/icons/graduate.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <div className={mov.desc}>
              <p>Biblioteca</p>
              <small>05.07.2024 às 12:45:50</small>
            </div>
            <div className={mov.amount}>
              <p className={`${mov.price} ${mov.danger}`}>há 1h</p>
            </div>
          </div>
          <div className={mov.details}>
            <div className={mov.icon}>
              <Image
                className={mov.avatar}
                src={"/icons/graduate.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <div className={mov.desc}>
              <p>Biblioteca</p>
              <small>05.07.2024 às 12:45:50</small>
            </div>
            <div className={mov.amount}>
              <p className={`${mov.price} ${mov.danger}`}>há 1h</p>
            </div>
          </div>
          <div className={mov.details}>
            <div className={mov.icon}>
              <Image
                className={mov.avatar}
                src={"/icons/graduate.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <div className={mov.desc}>
              <p>Biblioteca</p>
              <small>05.07.2024 às 12:45:50</small>
            </div>
            <div className={mov.amount}>
              <p className={`${mov.price} ${mov.danger}`}>há 1h</p>
            </div>
          </div>
        </div>
        <Menu></Menu>
      </div>
    </>
  );
}
