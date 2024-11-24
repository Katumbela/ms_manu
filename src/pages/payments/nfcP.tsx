import pay from "@/styles/payments/nfcPay.module.css";
import payC from "@/styles/payments/instituicao/confP.module.css";
import styles from "@/styles/cards.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import React, { useRef } from "react";
import Button from "@/components/buttons";
import CartaoMultischool from "@/components/cards";
import Layout from "@/components/Layout";
import Image from "next/image";


export default function Nfcpayment() {
  const videoRef = useRef<HTMLVideoElement | null>(null); // Especificar o tipo

  const startCamera = async () => {
    try {
      // Solicitar acesso à câmara
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      // Atribuir o stream ao elemento de vídeo
      if (videoRef.current) {
        videoRef.current.srcObject = stream; // Agora o TypeScript reconhece o tipo
      }
    } catch (error) {
      console.error("Erro ao acessar a câmara: ", error);
    }
  };

  return (
    <>
      <Layout title="Pagamento">
        <div className={styles.container}>
          <Top information="Pagamentos" pagina="instituicao/propinas"></Top>

          <div className={`${styles.cards} ${payC.card}  ${pay.card}`}>
            <CartaoMultischool />
          </div>
          <div className={pay.nfc}>
            <Image src="/icons/nfc.svg" alt="" width="90" />
            <p>Aproxime o seu smartphone ao TPA...</p>
          </div>

          <div className={payC.btn} onClick={startCamera}>
            <Button
              description="Pagamento via QR code"
              redirect="proof"
            ></Button>
          </div>
          <video
            ref={videoRef}
            autoPlay
            style={{ width: "100%", height: "auto" }}
          />
          <Menu></Menu>
        </div>
      </Layout>
    </>
  );
}
