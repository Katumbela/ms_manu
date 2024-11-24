/* eslint-disable @typescript-eslint/no-unused-vars */
import prf from "@/styles/payments/proof.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import PurpleButton, { ProofButton } from "@/components/buttons";
import Layout from "@/components/Layout";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { DateUtils, NumberUtils } from "@/utils";
import { jsPDF } from "jspdf";
import { logos } from "@/utils/image-exporter";
import btn from "../../styles/buttons.module.css";

export default function Proof() {
  const q = useSearchParams();
  const dest_account = q.get("account");
  const dest_name = q.get("account_name");
  const amount = q.get("amount");

  const handleDownload = () => {
    const doc = new jsPDF();
    const logo = logos.logo; // Logo da multischool

    doc.addImage(logo.src, "PNG", 10, 10, 40, 50); // Ajustar para ser quadrada
    doc.text("Comprovativo de Pagamento", 10, 75);
    doc.text(`Valor: ${NumberUtils.formatCurrency(amount || 0)}`, 10, 85);
    doc.text(`Destino: ${dest_account}`, 10, 95);
    doc.text(`Data: ${DateUtils.getDateTimePt(new Date())}`, 10, 105);
    doc.text(`Destinatário: ${dest_name}`, 10, 115);

    doc.save(`comprovativo_pagamento_multiSchool_${DateUtils.getDateTime(new Date())}.pdf`);
  };

  return (
    <>
      <Layout title="Comprovativo do pagamento">
        <div className={prf.container}>
          <Top information="Pagamentos" pagina="instituicao/propinas" />

          <div className={prf.proof}>
            <div className={prf.top}>
              <Image src="/icons/suc_proof.svg" alt="" width="90" height={90} />
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
                <p className={prf.value}>{NumberUtils.formatCurrency(amount || 0)}</p>
              </div>
              <div className={prf.data}>
                <div className={prf.ref}>
                  <p>Destino:</p>
                  <p className={prf.bold}>{dest_account}</p>
                </div>
                <div className={prf.date}>
                  <p>Data:</p>
                  <p className={prf.bold}>{DateUtils.getDateTimePt(new Date())}</p>
                </div>
              </div>
              <div className={prf.dest}>
                <p>Destinatário:</p>
                <p className={prf.bold}>
                 {dest_name}
                </p>
              </div>
              <div className={prf.download}>
                <div className={prf.btnD}>
                  <button onClick={handleDownload} className={btn.downloadButton}>
                    <span className={btn.icon}>
                      {" "}
                      <Image src={"/icons/download.svg"} width={20} height={20} alt="" />
                    </span>{" "}
                    Baixar comprovativo
                  </button>
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
