import cred from "@/styles/consultas/creditos/credores.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu"; 
import Link from "next/link";
import { Creditor, CreditRequest } from "@/infra/interfacess";
import { CreditorsService } from "@/services/creditors_services";
import { useState, useEffect } from "react";
import Image from "next/image";
import { NumberUtils, StringUtils } from "@/utils";
import { selectUser } from "@/store";
import { useAppSelector } from "@/hooks";
import { CreditRequestService } from "@/services";

export default function Credores() {

  const student = useAppSelector(selectUser)
  const account = student?.account
  

  const [creditors, setCreditors] = useState<Creditor[]>([])
  const creditService = new CreditorsService()

  useEffect(() => {
    async function GetCreditors() {
      const data = await creditService.getCreditors()
      setCreditors(data)
    }

    GetCreditors()
  }, [creditService])


  
  const [myCredits, setMyCredits] = useState<CreditRequest[]>([]);

  // const adhesionNumber = student?.adhesionNumber
  //   ? String(student.adhesionNumber)
  //   : "";
  // usePeriodicStudentUpdate({ studentAdhesionNumber: adhesionNumber });

  const creditsService = new CreditRequestService();

  async function getCredits() {
    if (account) {
      const datas = await creditsService.getCreditRequestHistory(
        account.account_number
      );
      return datas;
    }
    return [];
  }

  useEffect(() => {
    async function fetchTransactions() {
      const transacts = await getCredits();
      // console.log(transacts);
      setMyCredits(transacts);
    }

    fetchTransactions();
  }, [getCredits]);

  const lastCredit = myCredits[myCredits.length - 1];



  return (
    <>
      <div className={cred.container}>
        <Top information="Credores" pagina="/consultsM"/>
        <div className={cred.top}>
          <p>Crédito Actual</p>
          <h1>{lastCredit ? NumberUtils.formatCurrency(lastCredit.amount) : NumberUtils.formatCurrency(0)} kz</h1>
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
