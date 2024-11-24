/* eslint-disable @typescript-eslint/no-unused-vars */
import cred from "@/styles/consultas/creditos/infoCredor.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Button from "@/components/buttons";
import { useSearchParams } from "next/navigation";
import { Creditor } from "@/infra/interfacess";
import { useEffect, useState } from "react";
import { CreditorsService } from "@/services/creditors_services";
import styles from "@/styles/consultas/creditos/creditRange.module.css"; // Importing CSS module for styling
import { CreditRequestService } from "@/services";
import { useAppSelector } from "@/hooks";
import { selectUser } from "@/store";
import { AlertUtils, DateUtils } from "@/utils";
import Layout from "@/components/Layout";
import Image from "next/image"; 


export default function InfoCredor() {
  const [creditor, setCreditor] = useState<Creditor | null>(null);
  const [loading, setLoading] = useState(false);
  const student = useAppSelector(selectUser);
  const account = student?.account;

  const q = useSearchParams();
  const credor_id = q.get("credor");
  // State to track amount and term
  const [amount, setAmount] = useState(10000); // Default value: 10,000 kz
  const [term, setTerm] = useState<number>(2); // Default term: 2 months

  // Handlers to increase or decrease amount and term
  const handleAmountChange = (e: any) => setAmount(Number(e.target.value));
  const handleTermChange = (e: any) => setTerm(Number(e.target.value));

  const increaseAmount = () =>
    setAmount((prev) => Math.min(prev + 1000, 50000));
  const decreaseAmount = () => setAmount((prev) => Math.max(prev - 1000, 0));

  const increaseTerm = () => setTerm((prev) => Math.min(prev + 1, 24));
  const decreaseTerm = () => setTerm((prev) => Math.max(prev - 1, 1));

  const creditService = new CreditorsService();

  useEffect(() => {
    async function GetCreditor() {
      const data = await creditService.getCreditorById(
        credor_id ? credor_id : ""
      );
      setCreditor(data);
    }
    GetCreditor();
  }, []);

  const creditRequestService = new CreditRequestService();

  async function handleRequestCredit() {
    setLoading(true);

    if (student && account) {
      try {
        const response = await creditRequestService.createCreditRequest(
          account.account_number,
          amount,
          "Credito estudantil para o estudante " + student.studentName,
          term,
          creditor?.code_entity ? creditor?.code_entity : 0, 
        );

        setLoading(false);
        console.log(response);
        AlertUtils.success("Credito solicitado com sucesso!");
        window.location.href = "/consultas/creditos/success";
      } catch (error: any) {
        console.log(error.message);
        AlertUtils.error(
          "Ocorreu um erro ao solicitar seu crédito, tente novamente mais tarde!"
        );
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <>
      <Layout title="Crédito">
        <div className={cred.container}>
          <Top information="Informações do Credor" pagina="/consultsM"></Top>

          <div className={cred.top}>
            <Image src={creditor?.logo || ""} width={60} height={60} alt="" />
            <p>{creditor?.name}</p>
          </div>

          <div className={cred.info}>
            <div className={cred.items}>
              <p className={cred.dark_g}>Entidade nº</p>
              <p className={`${cred.primary} ${cred.name}`}>
                {creditor?.code_entity}
              </p>
            </div>
            <div className={cred.items}>
              <p className={cred.dark_g}>Tipo de crédito</p>
              <p className={`${cred.primary} ${cred.anolec}`}>Estudantil</p>
            </div>
            <div className={cred.items}>
              <p className={cred.dark_g}>Valor máximo</p>
              <p className={`${cred.success} ${cred.semestre}`}>30.000,00 kz</p>
            </div>
            <div className={cred.items}>
              <p className={cred.dark_g}>Data do pedido</p>
              <p className={`${cred.primary} ${cred.anoA}`}>
                {DateUtils.getDateTimePt(new Date())}
              </p>
            </div>
          </div>

          <div className={cred.details}>
            <p>Detalhes do crédito</p>
          </div>

          <div className={styles.container}>
            <div className={styles.sliderContainer}>
              <div className={styles.label}>Montante</div>
              <div className={styles.controls}>
                <button onClick={decreaseAmount} className={styles.button}>
                  -
                </button>
                <input
                  type="range"
                  min="26000"
                  max="3500000"
                  step="1000"
                  value={amount}
                  onChange={handleAmountChange}
                  className={styles.slider}
                />
                <button onClick={increaseAmount} className={styles.button}>
                  +
                </button>
              </div>
              <div className={styles.value}>{amount.toLocaleString()} kz</div>
            </div>

            <div className={styles.sliderContainer}>
              <div className={styles.label}>Prazo</div>
              <div className={styles.controls}>
                <button onClick={decreaseTerm} className={styles.button}>
                  -
                </button>
                <input
                  type="range"
                  min="1"
                  max="96"
                  step="1"
                  value={term}
                  onChange={handleTermChange}
                  className={styles.slider}
                />
                <button onClick={increaseTerm} className={styles.button}>
                  +
                </button>
              </div>
              <div className={styles.value}>{term} meses</div>
            </div>
          </div>
          <div className={cred.confirmar}>
            <Button
              loading={loading}
              onClick={handleRequestCredit}
              // redirect="confirmCredit"
              description="Confirmar"
            ></Button>
          </div>
          <Menu />
        </div>
      </Layout>
    </>
  );
}
