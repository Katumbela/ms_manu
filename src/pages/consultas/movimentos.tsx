"use client"

import Header from "@/components/head";
import mov from "@/styles/consultas/movimentos.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import { selectUser } from "@/store";
import { useAppSelector } from "@/hooks";
import { Transaction } from "@/infra/interfacess";
import { useEffect, useState } from "react";
import usePeriodicStudentUpdate from "@/hooks/usePeriodicStudentUpdate";
import { TransactionService } from "@/services";
import { StringUtils } from '../../utils/string-utils';
import { DateUtils, NumberUtils } from "@/utils";

export default function Movimentos() {


  const student = useAppSelector(selectUser)

  const [transactions, setTransactions] = useState<Transaction[]>([])


  const adhesionNumber = student?.adhesionNumber ? String(student.adhesionNumber) : "";
  usePeriodicStudentUpdate({ studentAdhesionNumber: adhesionNumber });


  const TransactsService = new TransactionService()

  async function getTransacts() {
    if (student?.account?._id) {
      const datas = await TransactsService.getTransactionsByAccount(student.account._id);
      return datas;
    }
    return [];
  }

  useEffect(() => {
    async function fetchTransactions() {
      const transacts = await getTransacts();
      console.log(transacts);
      setTransactions(transacts);
    }

    fetchTransactions();
  }, []);


  return (
    <>
      <Header title="Consultas - Movimentos"></Header>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>

      <div className={mov.container}>
        <Top information="Movimentos" pagina="/consultsM"></Top>
        <div className={mov.resume}>
          <div className={mov.info}>
            <Image
              className={mov.avatar}
              src={"/avatars/ana.svg"}
              alt="ba2ck"
              width={70}
              height={70}
              priority
            />
            <div className={mov.inner}>
              <p className={mov.name}>{student?.studentName}</p>
              <p className={mov.desc}>Conta multischool</p>
            </div>
          </div>
          <div className={mov.btn}>
            <button className={mov.extracto}>Extracto</button>
          </div>
        </div>

        <div className={mov.movimentos}>
          <div className={mov.top}>
            <p>Descrição</p>
            <p className={mov.subtitle}>Montante</p>
          </div>
          {
            transactions.map((transaction, i) =>
            (
              <div key={i} className={mov.details}>
                <div className={mov.icon}>
                  <Image
                    className={mov.avatar}
                    src={"/icons/cons/money.svg"}
                    alt="ba2ck"
                    width={30}
                    height={30}
                    priority
                  />
                </div>
                <div className={mov.desc}>
                  <p>{StringUtils.abbreviateText(transaction.description || 'Transação', 20)}</p>
                  <small>{DateUtils.getDateTimePt(transaction.createdAt)}</small>
                </div>
                <div className={mov.amount}>
                  <p className={`${mov.price} text-xs ${transaction.type === "credit" ? "text-green-600" : "text-red-600"}`}>{transaction.type == "credit" ? "+" : "-"} {NumberUtils.formatCurrency(transaction.amount)}</p>
                </div>
              </div>
            ))
          }

        </div>
        <Menu></Menu>
      </div>
    </>
  );
}
