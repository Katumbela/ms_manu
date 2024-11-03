import Header from "@/components/head";
import prf from "@/styles/payments/proof.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import PurpleButton, { ProofButton } from "@/components/buttons";
import Image from "next/image";


export default function Proof() {
  return (
    <>
      <Header title="Pagamento Propina"></Header>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrapicons@1.11.3/font/bootstrapicons.min.css"
        />
      </Head>

      <div className={prf.container}>
        <Top information="Pagamentos" pagina="instituicao/propinas"></Top>

        <div className={prf.proof}>
          <div className={prf.top}>
            <img src="../../icons/suc_proof.svg" alt="" width="90" />
          </div>
          <div className={prf.inner}>
            <div className={prf.title}>
              <h3>Pagamento bem sucedido!</h3>
              <p>O seu pagamento foi feito com sucesso.</p>
            </div>
            <div className={prf.line}>
              <div className={prf.lineI}></div>
            </div>
            <div className={prf.valor}>
              <p className={prf.sub}>Valor:</p>
              <p className={prf.value}>109.201,2 kz</p>
            </div>

            <div className={prf.data}>
              <div className={prf.ref}>
                <p>Ref:</p>
                <p className={prf.bold}>000 445 449 4:</p>
              </div>
              <div className={prf.date}>
                <p>Data:</p>
                <p className={prf.bold}>15/0/24, 10:45</p>
              </div>
            </div>
            <div className={prf.dest}>
              <p>Destinatário:</p>
              <p className={prf.bold}>
                ISPTEC - Instituto Sup. Pol. de Tec. e Ciências
              </p>
            </div>
            <div className={prf.download}>
              <div className={prf.btnD}>
                <ProofButton></ProofButton>
              </div>
              <div className={prf.art}>
                <Image src={"/bg/backP2.jpg"} width={365} height={20} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className={prf.btn}>
          <div className={prf.btn}>
            <PurpleButton description="Boa!" redirect="../nfcP"></PurpleButton>
          </div>
        </div>
        <Menu></Menu>
      </div>
    </>
  );
}
