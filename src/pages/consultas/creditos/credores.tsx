import cred from "@/styles/consultas/creditos/credores.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu"; 
import Link from "next/link";
import { Creditor } from "@/infra/interfacess";
import { CreditorsService } from "@/services/creditors_services";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StringUtils } from "@/utils";

export default function Credores() {


  const [creditors, setCreditors] = useState<Creditor[]>([])
  const creditService = new CreditorsService()

  useEffect(() => {
    async function GetCreditors() {
      const data = await creditService.getCreditors()
      setCreditors(data)
    }

    GetCreditors()
  }, [])



  return (
    <>
      <div className={cred.container}>
        <Top information="Credores" pagina="/consultsM"/>
        <div className={cred.top}>
          <p>Crédito Actual</p>
          <h1>35.000,00 kz</h1>
        </div>
        <div className={cred.list}>
          <div className={cred.top}>
            <p>Selecione um credor</p>
            <p>Valor máximo</p>
          </div>
          <div className={cred.credL}>

            {
              creditors.map((creditor, i) => (
                <Link key={i} href={"infoCredor?credor=" + creditor.id} className={cred.inner}>
                  <Image src={creditor.logo} width={60} height={60} alt="" />
                  <p className={cred.in}>{StringUtils.abbreviateText(creditor.name, 20)}</p>
                  <p>30.000,00 kz</p>
                </Link>
              ))
            }

          </div>
        </div>
        <Menu></Menu>
      </div>
    </>
  );
}
