import transf from "@/styles/transfer/transferirManual.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Button from "@/components/buttons";
import Link from "next/link";
import { useState } from "react";
import Layout from "@/components/Layout";

export default function CheckTransferir() {
  const [accountNumber, setAccountNumber] = useState("");

  return (
    <>
      <Layout title="Transferência manual">
        <div className={transf.container}>
          <Top information="Transferências" pagina="transferir"></Top>
          <div className={transf.header}>
            <h2>Insira o número do cartão multischool do destinatário</h2>
            <p>Certifica-te de verificar e inserir o número correctamente!</p>
          </div>

          <div className={transf.inputs}>
            <div className={transf.inputContainer}>
              <div className={transf.iconContainer}>
                <Image
                  className={transf.logo}
                  src={"/icons/student.svg"}
                  alt="ba2ck"
                  width={25}
                  height={25}
                  priority
                />
              </div>
              <input
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                placeholder="Insira o número do cartão destinatário"
                className={transf.input}
              />
            </div>
          </div>
          <div className={transf.info}>
            <div className={transf.cta}>
              <Button
                description="Continuar"
                redirect={"checkTransf?account=" + accountNumber}
              ></Button>
              <Link href="transferir">
                <u>Transferir via código QR</u>
              </Link>
            </div>
          </div>
          <Menu />
        </div>
      </Layout>
    </>
  );
}
