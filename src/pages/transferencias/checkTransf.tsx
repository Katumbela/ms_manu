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

export default function CheckTransferencia() {
  const q = useSearchParams();
  const dest_account = q.get("account");
  // const [loading, setLoading] = useState(false)
  const [dest, setDest] = useState<Student | null>(null);

  // const student = useAppSelector(selectUser)
  // const account = student?.account

  // const backAccountService = new BankAccountService()
  const studentService = new StudentService();

  // async function handleTransfer() {
  //   // setLoading(true)

  //   if (student && account) {

  //     try {

  //       const response = await backAccountService.transferFunds(account.account_number, dest_account ? dest_account : "", 2)

  //       // setLoading(false)
  //       console.log(response)
  //       AlertUtils.success("Credito solicitado com sucesso!")
  //       window.location.href = "/success"

  //     } catch (error: any) {
  //       AlertUtils.error("Ocorreu um erro ao solicitar seu crédito, tente novamente mais tarde!")

  //     } finally {

  //       // setLoading(false)
  //     }

  //   }
  // }

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
              src={"/avatars/manuel.svg"}
              width={120}
              height={120}
              alt=""
            />
            <p className={transf.name}>
              <center>
                <span className="text-sm">Transferir para:</span>
              </center>
              {dest?.studentName}
            </p>
          </div>

          <div className={transf.info}>
            <div className={transf.items}>
              <p className={transf.dark_g}>Número do cartão</p>
              <p className={`${transf.primary} ${transf.cardN}`}>
                {dest?.account?.card_number}
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
                30.000,00 kz
              </p>
            </div>
            <div className={transf.items}>
              <p className={transf.dark_g}>Data da transferência</p>
              <p className={`${transf.primary} ${transf.anoA}`}>
                17/09/24 às 10h:40:30
              </p>
            </div>
          </div>
          <PurpleButton
            description="Continuar"
            redirect="/payments/proof"
          ></PurpleButton>
          <Menu />
        </div>
      </Layout>
    </>
  );
}
