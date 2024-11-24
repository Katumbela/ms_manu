import cons from "../styles/consultsM.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";
import { selectUser } from "@/store";
import { useAppSelector } from "@/hooks";
import { NumberUtils } from "@/utils";
import Layout from "@/components/Layout";
import ProgressChart from "@/components/progressChart";

export default function ConsultsM() {
  const student = useAppSelector(selectUser);
  const account = student?.account;

  // const adhesionNumber = student?.adhesionNumber
  //   ? String(student.adhesionNumber)
  //   : "";
  // // usePeriodicStudentUpdate({ studentAdhesionNumber: adhesionNumber });

  return (
    <Layout title="Consultas Multischool">
      <div className={cons.container}>
        <Top information="Consultas" pagina="cards"></Top>

        <br />

        <div className="hidden">
          <div className={`${cons.cardC} hidden`}></div>
        </div>

        {/* <MCardAccount
          clickable={false}
          balance={student?.account!.balance ? student?.account!.balance : 0}
          card_number={
            student?.account?.card_number ? student!.account?.card_number : ""
          }
          hodler={student!.studentName}
        /> */}

        <div className={cons.options}>
          <Link href="/consultas/movimentos" className={cons.op}>
            <div className={cons.circle}>
              <Image
                className={cons.arrow}
                src={"/icons/cons/mov.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <p>Movimentos</p>
          </Link>
          <Link href="/consultas/payments" className={cons.op}>
            <div className={cons.circle}>
              <Image
                className={cons.arrow}
                src={"/icons/cons/pag.svg"}
                alt="ba2ck"
                width={30}
                height={30}
                priority
              />
            </div>
            <p>Pagamentos</p>
          </Link>
          <Link href="/consultas/infoMulti" className={cons.op}>
            <div className={cons.circle}>
              <Image
                className={cons.arrow}
                src={"/icons/cons/info.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <p>Informações</p>
          </Link>
        </div>

        <div className={cons.available}>
          <div className={cons.saldo}>
            <div className={cons.inner}>
              <p>Saldo disponível</p>
              <h2 className={cons.amount}>
                {NumberUtils.formatCurrency(
                  account?.balance || 0
                )}{" "}
              </h2>
            </div>
          </div>
          <Link href="/consultas/creditos/creditos" className={cons.creditos}>
            <div className={cons.inner}>
              <Image
                className={cons.arrow}
                src={"/icons/cons/pag.svg"}
                alt="ba2ck"
                width={35}
                height={35}
                priority
              />
              <p>Créditos</p>
            </div>
          </Link>
        </div>
        <div className={cons.count}>
          <div className={cons.chart}>
            <ProgressChart />
          </div>
          <div className={cons.resume}>
            <Image
              className={cons.arrow}
              src={"/icons/cons/bullet.svg"}
              alt="ba2ck"
              width={130}
              height={130}
              priority
            />
          </div>
        </div>
        <Menu />
      </div>
    </Layout>
  );
}
