import Header from "@/components/head";
import prf from "@/styles/transfer/proof.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import PurpleButton, { ProofButton } from "@/components/buttons";
import Image from "next/image";

export default function Proof() {
  return (
    <>
      <Header title="Transferência efectuada com sucesso!"></Header>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrapicons@1.11.3/font/bootstrapicons.min.css"
        />
      </Head>

      <div className={prf.container}>
        <Top information="Transferências" pagina="instituicao/propinas"></Top>

        <div className={prf.proof}>
          <div className={prf.top}>
            <img src="../../icons/suc_proof.svg" alt="" width="90" />
          </div>
          <div className={prf.inner}>
            <div className={prf.title}>
              <h3>Transferência bem sucedida!</h3>
              <p>A sua transferência foi feita com sucesso.</p>
            </div>
            <div className={prf.line}>
              <div className={prf.lineI}></div>
            </div>
            <div className={prf.valor}>
              <p className={prf.sub}>Montante:</p>
              <p className={prf.value}>30.000,00 kz</p>
            </div>

            <div className={prf.data}>
              <div className={`${prf.ref} ${prf.gray}`}>
                <p>Ref:</p>
                <p className={`${prf.bold}`}>000 445 449 4:</p>
              </div>
              <div className={`${prf.date} ${prf.gray}`}>
                <p>Data:</p>
                <p className={prf.bold}>15/0/24, 10:45</p>
              </div>
            </div>
            <div className={`${prf.tipo} ${prf.gray}`}>
              <div className={prf.type}>
                <p>Tipo:</p>
                <p className={prf.bold}>Intrabancária</p>
              </div>
              <div className={prf.dest}>
                <p>Destinatário:</p>
                <p className={prf.bold}>Manuel Jesus</p>
              </div>
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
          <PurpleButton description="Boa!" redirect="../nfcP"></PurpleButton>
        </div>

        <Menu></Menu>
      </div>
    </>
  );
}
