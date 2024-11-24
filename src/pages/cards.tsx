import styles from "@/styles/cards.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import CartaoMultischool, {
  CartaoEstudante,
  CartaoEstagiario,
} from "@/components/cards";
import Layout from "@/components/Layout";

export default function Home() {
  const colorI = "#f9d048";
  const colorEst = "#e65525";

  return (
    <Layout title="Os meus cartões">
      <div className={`${styles.container} ${styles.container2}`}>
        <Top information="Os meus cartões" pagina="home" />

        <div className={`${styles.cards} ${styles.cards2}`}>
          <CartaoMultischool />
          <CartaoEstudante
            student={{
              name: "Ana Correia de Assis Diogo",
              course: "Engenharia Informática",
              registrationNumber: "20231234",
              classGroup: "EINF-M2",
              institution:
                "ISPTEC - Instituto Superior Politécnico de Tecnologias e Ciências",
              logo: "ispt.svg",
              avatar: "id.svg",
            }}
            color={colorI}
          />

          <CartaoEstagiario
            student={{
              name: "Ana Correia de Assis Diogo",
              dept: "TI",
              turno: "Matinal",
              institution:
                "ISPTEC - Instituto Superior Politécnico de Tecnologias e Ciências",
              logo: "unitel.svg",
              avatar: "id.svg",
              company: "Unitel S.A",
            }}
            color={colorEst}
          />
        </div>
        <Menu></Menu>
      </div>
    </Layout>
  );
}
