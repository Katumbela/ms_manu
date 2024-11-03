import Header from "@/components/head";
import pay from "@/styles/services/menu.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";

export default function MenuServices() {
  return (
    <div className={pay.container}>
      <Header title="Serviços Multischool"></Header>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>
      <Top information="Serviços" pagina="/home"></Top>

      <div className={pay.lista}>
        <p>Escolha uma opção</p>
        <div className={pay.items}>
          <div className={pay.row1}>
            <Link href="bolsas/bolsas" className={pay.item}>
              <div className={pay.inner}>
                <div className={pay.icon}>
                  <Image
                    className={pay.avatar}
                    src={"/icons/bolsas.svg"}
                    alt="ba2ck"
                    width={25}
                    height={25}
                    priority
                  />
                </div>
                <p>Bolsas</p>
              </div>
            </Link>
            <Link href="/consultas/creditos/creditos" className={pay.item}>
              <div className={pay.inner}>
                <div className={pay.icon}>
                  <Image
                    className={pay.avatar}
                    src={"/icons/creditos.svg"}
                    alt="ba2ck"
                    width={25}
                    height={25}
                    priority
                  />
                </div>
                <p>Créditos</p>
              </div>
            </Link>

            <Link href="estagios/estagios" className={pay.item}>
              <div className={pay.inner}>
                <div className={pay.icon}>
                  <Image
                    className={pay.avatar}
                    src={"/icons/estagio.svg"}
                    alt="ba2ck"
                    width={25}
                    height={25}
                    priority
                  />
                </div>
                <p>Estágios</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* INÍCIO PENDENTES */}

      <div className={pay.pendentes}>
        <p>As minhas candidaturas</p>
        <div className={pay.pending}>
          <div className={pay.details}>
            <div className={pay.icon}>
              <Image
                className={pay.avatar}
                src={"/icons/bolsas.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <div className={pay.desc}>
              <p>Bolsa de Estudos: INAGBE</p>
              <small>10.09.2024 às 12h:30:50</small>
            </div>
            <div className={pay.amount}>
              <Link href="bolsas/resultados" className={`${pay.price} ${pay.warning}`}>
                <u>Abrir</u>
              </Link>
            </div>
          </div>
          <div className={pay.details}>
            <div className={pay.icon}>
              <Image
                className={pay.avatar}
                src={"/icons/bolsas.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <div className={pay.desc}>
              <p>Bolsa de Estudos: INAGBE</p>
              <small>10.09.2024 às 12h:30:50</small>
            </div>
            <div className={pay.amount}>
              <Link href="bolsas/resultados" className={`${pay.price} ${pay.warning}`}>
                <u>Abrir</u>
              </Link>
            </div>
          </div>

          <div className={pay.details}>
            <div className={pay.icon}>
              <Image
                className={pay.avatar}
                src={"/icons/service.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <div className={pay.desc}>
              <p>Bolsa de Estudos: INAGBE</p>
              <small>10.09.2024 às 12h:30:50</small>
            </div>
            <div className={pay.amount}>
              <Link href="bolsas/resultados" className={`${pay.price} ${pay.warning}`}>
                <u>Abrir</u>
              </Link>
            </div>
          </div>

          <div className={pay.details}>
            <div className={pay.icon}>
              <Image
                className={pay.avatar}
                src={"/icons/service.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <div className={pay.desc}>
              <p>Bolsa de Estudos: INAGBE</p>
              <small>10.09.2024 às 12h:30:50</small>
            </div>
            <div className={pay.amount}>
              <Link href="bolsas/resultados" className={`${pay.price} ${pay.warning}`}>
                <u>Abrir</u>
              </Link>
            </div>
          </div>

          <div className={pay.details}>
            <div className={pay.icon}>
              <Image
                className={pay.avatar}
                src={"/icons/service.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <div className={pay.desc}>
              <p>Bolsa de Estudos: INAGBE</p>
              <small>10.09.2024 às 12h:30:50</small>
            </div>
            <div className={pay.amount}>
              <Link href="bolsas/resultados" className={`${pay.price} ${pay.warning}`}>
                <u>Abrir</u>
              </Link>
            </div>
          </div>
        </div>
        {/* FINAL PENDENTES */}
      </div>
      <Menu />
    </div>
  );
}
