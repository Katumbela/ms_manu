// pages/index.js
import Head from "next/head";
import styles from "@/styles/cards.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import CartaoMultischool, {
  CartaoEstudante,
  CartaoEstagiario,
} from "@/components/cards";

// import "bootstrap-icons/font/bootstrap-icons.css"; // Importando ícones

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Os meus cartões</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>
      <Top information="Os meus cartões" pagina="home"></Top>

      <div className={styles.cards}>
        <CartaoMultischool></CartaoMultischool>
        <CartaoEstudante></CartaoEstudante>
        <CartaoEstagiario></CartaoEstagiario>
      </div>
      <Menu></Menu>
    </div>
  );
}
