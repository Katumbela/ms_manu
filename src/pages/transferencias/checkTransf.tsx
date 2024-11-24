/* eslint-disable @typescript-eslint/no-unused-vars */
import transf from "@/styles/transfer/checkTransfer.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import PurpleButton from "@/components/buttons";
import { useEffect, useState } from "react";
import { Student } from "@/infra/interfacess";
import { StudentService } from "@/services";
import { useSearchParams } from "next/navigation";
import Layout from "@/components/Layout";
import { useAppSelector } from "@/hooks";
import { selectUser } from "@/store";
import { BankAccountService } from "@/services/transfer_services";
import { AlertUtils, DateUtils } from "@/utils";
import Button from "@/components/buttons";
import { users } from "@/utils/image-exporter";

export default function CheckTransferencia() {
  const q = useSearchParams();
  const dest_account = q.get("account");
  const [loading, setLoading] = useState(false)
  const [dest, setDest] = useState<Student | null>(null);
  const [amount, setAmount] = useState<number | undefined>(undefined);

  const student = useAppSelector(selectUser)
  const account = student?.account

  const backAccountService = new BankAccountService()
  const studentService = new StudentService();

  async function handleTransfer() {
    setLoading(true)
    if (amount && amount === 0) {
      AlertUtils.error("Insira a quantia quer deseja transferir para " + dest?.studentName)
      return
    }

    if (student && account) {

      try {

        const response = await backAccountService.transferFunds(account.account_number, dest_account ? dest_account : "", amount || 0)

        setLoading(false)
        console.log(response)
        AlertUtils.success("Credito solicitado com sucesso!")
        window.location.href = `/payments/proof?account=${dest_account}&account_name=${dest?.studentName}&amount=${amount}`

      } catch (error: any) {
        AlertUtils.error("Ocorreu um erro ao solicitar seu crédito, tente novamente mais tarde!")

      } finally {

        setLoading(false)
      }

    }
     
  }

  useEffect(() => {
    async function fetchUser() {
      try {
        const destinoConta = await studentService.getStudentByAccountNumber(
          dest_account ? dest_account : ""
        );
        //console.log(destinoConta);
        setDest(destinoConta);
      } catch (error: any) {
        console.log(error.message);
      }
    }

    fetchUser();
  }, [dest_account]);

  // console.log(dest_account)

  return (
    <>
      <Layout title="Transferências">
        <div className={transf.container}>
          <Top information="Transferências" pagina="transferir"></Top>

          <div className={transf.top}>
            <Image
              className={transf.avatar}
              src={users.user_default}
              width={120}
              height={120}
              alt=""
            />
            <p className={transf.name}>
              <center>
                <span className="text-xs">Transferir para </span>
              {dest?.studentName}
              </center>
            </p>
          </div>

          <div className={transf.info}>
            <div className={transf.items}>
              <p className={transf.dark_g}>Número da Conta</p>
              <p className={`${transf.primary} ${transf.cardN}`}>
                {dest?.account?.account_number}
              </p>
            </div>
            <div className={transf.items}>
              <p className={transf.dark_g}>Tipo de transferência</p>
              <p className={`${transf.primary} ${transf.tipo}`}>
                Intrabancária
              </p>
            </div>
            <div className={transf.items}>
              <p className={transf.dark_g}>Montante</p>
              <p className={`${transf.success} ${transf.semestre}`}>
                <input value={amount} onChange={(e) => setAmount(Number(e.target.value))} type="text" placeholder="Insira a quantia " className="px-2 py-1 bg-white border" />
              </p>
            </div>
            <div className={transf.items}>
              <p className={transf.dark_g}>Data da transferência</p>
              <p className={`${transf.primary} ${transf.anoA}`}>
              {DateUtils.getDateTimePt(new Date())}
              </p>
            </div>
          </div>
          <Button
          loading={loading}
          variant="purple"
          onClick={handleTransfer}
            description="Continuar"
            // redirect="/payments/proof"
          ></Button>
          <Menu />
        </div>
      </Layout>
    </>
  );
}
