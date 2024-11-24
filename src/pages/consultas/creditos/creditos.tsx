import cred from "@/styles/consultas/creditos/creditos.module.css";
import Top from "@/components/top";
import payC from "@/styles/payments/instituicao/confirmacao2.module.css";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";
import usePeriodicStudentUpdate from "@/hooks/usePeriodicStudentUpdate";
import { CreditRequest } from "@/infra/interfacess";
import { CreditRequestService } from "@/services";
import { useState, useEffect } from "react";
import { selectUser } from "@/store";
import { useAppSelector } from "@/hooks";
import { DateUtils, NumberUtils } from "@/utils";
import { getStatusColor } from "@/utils/getStatusColor.utils";
import { users } from "@/utils/image-exporter";
import Layout from "@/components/Layout";

export default function Credito() {
  const student = useAppSelector(selectUser);
  const account = student?.account;

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
  }, []);

  const lastCredit = myCredits[myCredits.length - 1];

  return (
    <>
      <Layout title="Créditos">
        <div className={cred.container}>
          <Top information="Créditos" pagina="/consultsM" />

          <div className={cred.first}>
            <div className={cred.inner1}>
              <Image src={users.user_default} width={80} height={80} alt="" />
              <p>O seu crédito actual é:</p>
              <h2>
                {lastCredit
                  ? NumberUtils.formatCurrency(lastCredit.amount)
                  : "35.000, 00 kz"}
              </h2>
              <small>
                Último crédito feito em:{" "}
                <span className={cred.lastDate}>
                  {lastCredit
                    ? DateUtils.getDateTimePt(lastCredit.createdAt)
                    : "N/A"}
                </span>
              </small>
            </div>
            <div className={cred.inner2}>
              <div className={cred.in}>
                <p className={cred.in1}>Prazo</p>
                <p className={cred.in2}>
                  {lastCredit
                    ? DateUtils.getDateTimePt(lastCredit.createdAt)
                    : "N/A"}
                </p>
              </div>
              <div className={cred.in}>
                <p className={cred.in1}>Valor a pagar</p>
                <p className={cred.in2}>
                  {lastCredit
                    ? NumberUtils.formatCurrency(
                        lastCredit.amount + lastCredit.amount * 0.1
                      )
                    : "N/A"}
                </p>
              </div>
              <div className={cred.in}>
                <p className={cred.in1}>Total de créditos</p>
                <p className={cred.in2}>{myCredits.length}</p>
              </div>
            </div>
          </div>
          <div className={cred.credores}>
            <div className={cred.icon}>
              <Image
                className={cred.avatar}
                src={"/icons/cons/money.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <div className={cred.desc}>
              <p>Ver opções de credores</p>
              <small>
                Explore instituições disponíveis para oferecer créditos
              </small>
            </div>
            <Link href="credores" className={cred.credor}>
              <Image
                className={cred.avatar}
                src={"/icons/credor.svg"}
                alt="ba2ck"
                width={45}
                height={45}
                priority
              />
            </Link>
          </div>

          <div className={`${payC.movimentos} ${cred.movimentos}`}>
            <div className={payC.top}>
              <p>Recentes</p>
              <p className={payC.subtitle}>Estado</p>
            </div>

            {myCredits.map((credit, i) => (
              <div key={i} className={payC.details}>
                <div className={payC.icon}>
                  <Image
                    className={payC.avatar}
                    src={"/icons/cons/money.svg"}
                    alt="ba2ck"
                    width={30}
                    height={30}
                    priority
                  />
                </div>
                <div className={payC.desc}>
                  <p>{credit.creditor ? credit.creditor : "Anonymous"}</p>
                  <small className="text-[11px]">
                    {DateUtils.getDateTimePt(credit.createdAt)}
                  </small>
                </div>
                <div className={""}>
                  <p className={``}>
                    <span
                      className={`text-xs font-bold tracking-wider ${getStatusColor(
                        credit.status ? credit.status : "denied"
                      )}`}
                    >
                      {credit.status === "approved"
                        ? "Aprovada"
                        : cred.status === "success"
                        ? "Sucesso"
                        : credit.status === "denied"
                        ? "Rejeitado"
                        : "Pendente"}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Menu></Menu>
        </div>
      </Layout>
    </>
  );
}
