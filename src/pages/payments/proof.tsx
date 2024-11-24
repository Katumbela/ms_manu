import prf from "@/styles/payments/proof.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import PurpleButton, { ProofButton } from "@/components/buttons";
import Layout from "@/components/Layout";
import Image from "next/image";


export default function Proof() {
  return (
    <>
      <Layout title="Comprovativo do pagamento">
        <div className={prf.container}>
          <Top information="Pagamentos" pagina="instituicao/propinas" />

          <div className={prf.proof}>
            <div className={prf.top}>
              <Image src="/icons/suc_proof.svg" alt="" width="90" />
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
              </div>
            </div>
          </div>

          <div className={prf.btn}>
            <PurpleButton description="Boa!" redirect="/nfcP" />
          </div>
          <Menu></Menu>
        </div>
      </Layout>
    </>
  );
}
