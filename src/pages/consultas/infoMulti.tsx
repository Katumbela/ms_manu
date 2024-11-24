import info from "@/styles/consultsM.module.css";
import info2 from "@/styles/consultas/infoM.module.css";
import Top from "@/components/top";
import cards from "@/styles/cards.module.css";
import Menu from "@/components/menu";
import CartaoMultischool from "@/components/cards";
import { useAppSelector } from "@/hooks";
import { selectUser } from "@/store";
import Layout from "@/components/Layout";

export default function InfoMulti() {
  const student = useAppSelector(selectUser);
  const account = student?.account;

  return (
    <>
      <Layout title="Detalhes multischool">
        <div className={info.container}>
          <Top information="Informações" pagina="/consultsM"></Top>
          <div className={`${cards.container}`}>
            <div className={`${cards.cards} ${info2.pad}`}>
              <CartaoMultischool></CartaoMultischool>
            </div>
            <div className={info2.info}>
              <div className={info2.items}>
                <p className={info2.dark_g}>Tipo de conta</p>
                <p className={`${info2.primary} ${info2.name}`}>Estudante</p>
              </div>
              <div className={info2.items}>
                <p className={info2.dark_g}>Número de conta</p>
                <p className={`${info2.primary} ${info2.anolec}`}>
                  {account?.account_number}
                </p>
              </div>
              <div className={info2.items}>
                <p className={info2.dark_g}>Titular</p>
                <p className={`${info2.primary} ${info2.semestre}`}>
                  {student?.studentName}
                </p>
              </div>
              <div className={info2.items}>
                <p className={info2.dark_g}>Cartão</p>
                <p className={`${info2.primary} ${info2.anoA}`}>
                  {account?.card_number}
                </p>
              </div>

              <div className={info2.items}>
                <p className={info2.dark_g}>Estado</p>
                <p className={`${info2.success} ${info2.curso}`}>Disponível</p>
              </div>
              <div className={info2.items}>
                <p className={info2.dark_g}>Banco</p>
                <p className={`${info2.blue} ${info2.turma}`}>
                  BAI - Banco Angolano de In.
                </p>
              </div>
            </div>
          </div>
          <Menu></Menu>
        </div>
      </Layout>
    </>
  );
}
