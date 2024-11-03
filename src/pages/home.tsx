// pages/index.js
import Head from "next/head";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import styles2 from "@/styles/inicio.module.css";
import styles from "@/styles/cards.module.css";
import Top2 from "@/components/top";
import Header from "@/components/head";
import Menu from "@/components/menu";
import CartaoMultischool, { CartaoEstudante } from "@/components/cards";
import InstituicaoResume, { MultischoolResume } from "@/components/resumeHome";



export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % 2),
    onSwipedRight: () =>
      setCurrentIndex((prevIndex) => (prevIndex - 1 + 2) % 2),
  });

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
      <Top2 information="Olá, Ana Diogo" />
      {/* Carousel container */}
      <div className={styles2.carouselContainer} {...handlers}>
        <div
          className={`${styles2.carousel} ${styles.cards} ${styles2.cards}`}
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% - ${
              currentIndex * 20
            }px))`,
          }}
        >
          <div
            className={`${styles2.cardWrapper} ${
              currentIndex === 0 ? styles2.activeCard : ""
            }`}
          >
            <CartaoMultischool />
          </div>

          <div
            className={`${styles2.cardWrapper} ${
              currentIndex === 1 ? styles2.activeCard : ""
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
              <MultischoolResume/>
            </>
          )}

          {currentIndex === 1 && (
            <>
              <InstituicaoResume></InstituicaoResume>
            </>
          )}
        </ul>
      </div>
      {/* Menu */}
      <Menu />
    </div>
  );
}
