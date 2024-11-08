"use client"


import Head from "next/head";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import styles2 from "@/styles/inicio.module.css";
import styles from "@/styles/cards.module.css";
import Top2 from "@/components/top";
import Header from "@/components/head";
import Menu from "@/components/menu";
import CartaoMultischool, { CartaoEstudante } from "@/components/cards";
import InstituicaoResume  from "@/components/resumeHome";
import { useAppSelector } from "@/hooks";
import { selectUser } from "@/store";
import { StringUtils } from "@/utils";
import usePeriodicStudentUpdate from "@/hooks/usePeriodicStudentUpdate";
import { TransactionService } from "@/services";
import { Transaction } from "@/infra/interfacess";
import { TransactionList } from "@/components/transactionTable/transactrionTable";



export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const student = useAppSelector(selectUser)
  const [transactions, setTransactions] = useState<Transaction[]>([])


  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % 2),
    onSwipedRight: () =>
      setCurrentIndex((prevIndex) => (prevIndex - 1 + 2) % 2),
  });



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
      setTransactions(transacts); // Atualizando o estado com as transações
    }

    fetchTransactions();
  }, []);

  return (
    <div className={`${styles.container} ${styles2.container}`}>
      {" "}
      <Head>
        <title>Os meus cartões</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>
      <Header title="Início" />
      <Top2 information={`Olá, ${StringUtils.getFirstAndLastWord(student?.studentName ? student?.studentName : '')}`} />

      {/* Carousel container */}
      <div className={styles2.carouselContainer} {...handlers}>
        <div
          className={`${styles2.carousel} ${styles.cards} ${styles2.cards}`}
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 20
              }px))`,
          }}
        >
          <div
            className={`${styles2.cardWrapper} ${currentIndex === 0 ? styles2.activeCard : ""
              }`}
          >
            <CartaoMultischool />
          </div>

          <div
            className={`${styles2.cardWrapper} ${currentIndex === 1 ? styles2.activeCard : ""
              }`}
          >
            <CartaoEstudante />
          </div>
        </div>
      </div>
      {/* Resumo */}
      <div className={styles2.resume}>
        <ul>
          {currentIndex === 0 && (
            <>
              <TransactionList transactions={transactions} />
            </>
          )}

          {currentIndex === 1 && (
            <>
              <InstituicaoResume />
            </>
          )}
        </ul>
      </div>
      {/* Menu */}
      <Menu />
    </div>
  );
}
