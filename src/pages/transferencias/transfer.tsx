import cred from "@/styles/transfer/transfer.module.css";
import Top from "@/components/top";
import payC from "@/styles/payments/instituicao/confirmacao2.module.css";
import Menu from "@/components/menu";
import Image from "next/image";
import PurpleButton from "@/components/buttons";
import { selectUser } from "@/store";
import { useAppSelector } from "@/hooks";
import { NumberUtils } from "@/utils";
import usePeriodicStudentUpdate from "@/hooks/usePeriodicStudentUpdate";
import { Transaction } from "@/infra/interfacess";
import { TransactionService } from "@/services";
import { useState, useEffect } from "react";
import { users } from "@/utils/image-exporter";
import Layout from "@/components/Layout";


export default function Transfer() {
  const student = useAppSelector(selectUser);
  const account = student?.account;

  const [transactions, setTransactions] = useState<Transaction[]>([]);
 
  usePeriodicStudentUpdate();

  const TransactsService = new TransactionService();

  async function getTransacts() {
    if (student?.account?.id) {
      const datas = await TransactsService.getTransactionsByAccount(
        student.account.id
      );
      return datas;
    }
    return [];
  }

  useEffect(() => {
    async function fetchTransactions() {
      const transacts = await getTransacts();
      console.log(transacts);
      setTransactions(transacts); // Atualizando o estado com as transações
    }

    fetchTransactions();
  }, []);

  console.log(transactions);
  console.log(student);
  return (
    <>
      <Layout title="Transferências">
        <div className={cred.container}>
          <Top information="Transferências" pagina="/home"></Top>

          <div className={cred.first}>
            <div className={cred.inner1}>
              <Image src={users.user_default} width={80} height={80} alt="" />
              <p>Saldo disponível</p>
              <h1>
                {NumberUtils.formatCurrency(
                  account?.balance ? account?.balance : 0
                )}
              </h1>
            </div>
          </div>

          <div className={payC.movimentos}>
            <div className={payC.top}>
              <p>Descrição</p>
              <p className={payC.subtitle}>Montante</p>
            </div>
            <div className={payC.details}>
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
                <p>António Marques</p>
                <small>05.07.2024</small>
              </div>
              <div className={payC.amount}>
                <p className={`${payC.price} ${payC.danger}`}>-50.000,00 kz</p>
              </div>
            </div>
            <div className={payC.details}>
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
                <p>António Marques</p>
                <small>05.07.2024</small>
              </div>
              <div className={payC.amount}>
                <p className={`${payC.price} ${cred.success}`}>+50.000,00 kz</p>
              </div>
            </div>
            <div className={payC.details}>
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
                <p>António Marques</p>
                <small>05.07.2024</small>
              </div>
              <div className={payC.amount}>
                <p className={`${payC.price} ${payC.danger}`}>-50.000,00 kz</p>
              </div>
            </div>
          </div>
          <div className={cred.cta}>
            <PurpleButton
              description="Efectuar transferência"
              redirect="transferir"
              className={cred.button}
            ></PurpleButton>
          </div>
          <Menu />
        </div>
      </Layout>
    </>
  );
}
