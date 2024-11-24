import pay from "@/styles/payments/pagInst.module.css";
import payC from "@/styles/payments/instituicao/confirmacao2.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useAppSelector } from "@/hooks";
import { selectUser } from "@/store";

export default function Payments() {
  const student = useAppSelector(selectUser);
  return (
    <>
      <Layout title="Propinas">
        <div className={pay.container}>
          <Top information="Pagamentos" pagina="/payments/pagInst"></Top>
          <div className={pay.resume}>
            <div className={pay.info}>
              
              <Image
                className={pay.avatar}
                src={student?.enrollments?.[0].school.school_logo || ""}
                alt="ba2ck"
                width={70}
                height={70}
                priority
              />
              <div className={pay.inner}>
                <p className={pay.name}>
                 {student?.enrollments?.[0].school.schoolName}
                </p>
                <p className={pay.desc}>
                {student?.enrollments?.[0].school.province}</p>
              </div>
            </div>
          </div>
          <div className={payC.movimentos}>
            <div className={payC.top}>
              <p>Descrição</p>
              <p className={payC.subtitle}>Valor</p>
            </div>
            <Link href="confP" className={payC.details}>
              <div className={payC.icon}>
                <Image
                  className={payC.avatar}
                  src={"/icons/cons/money.svg"}
                  alt="ba2ck"
                  width={30}
                  height={30}
                  priority
                />
              </div>
              <div className={payC.desc}>
                <p>Propina Julho</p>
                <small>05.07.2024</small>
              </div>
              <div className={payC.amount}>
                <p className={`${payC.price} ${payC.danger}`}>50.000,00 kz</p>
              </div>
            </Link>
            <div className={payC.details}>
              <div className={payC.icon}>
                <Image
                  className={payC.avatar}
                  src={"/icons/cons/money.svg"}
                  alt="ba2ck"
                  width={30}
                  height={30}
                  priority
                />
              </div>
              <div className={payC.desc}>
                <p>Propina Julho</p>
                <small>05.07.2024</small>
              </div>
              <div className={payC.amount}>
                <p className={`${payC.price} ${pay.success}`}>50.000,00 kz</p>
              </div>
            </div>
            <div className={payC.details}>
              <div className={payC.icon}>
                <Image
                  className={payC.avatar}
                  src={"/icons/cons/money.svg"}
                  alt="ba2ck"
                  width={30}
                  height={30}
                  priority
                />
              </div>
              <div className={payC.desc}>
                <p>Propina Julho</p>
                <small>05.07.2024</small>
              </div>
              <div className={payC.amount}>
                <p className={`${payC.price} ${pay.success}`}>50.000,00 kz</p>
              </div>
            </div>
            <div className={payC.details}>
              <div className={payC.icon}>
                <Image
                  className={payC.avatar}
                  src={"/icons/cons/money.svg"}
                  alt="ba2ck"
                  width={30}
                  height={30}
                  priority
                />
              </div>
              <div className={payC.desc}>
                <p>Propina Julho</p>
                <small>05.07.2024</small>
              </div>
              <div className={payC.amount}>
                <p className={`${payC.price} ${pay.success}`}>50.000,00 kz</p>
              </div>
            </div>
            <div className={payC.details}>
              <div className={payC.icon}>
                <Image
                  className={payC.avatar}
                  src={"/icons/cons/money.svg"}
                  alt="ba2ck"
                  width={30}
                  height={30}
                  priority
                />
              </div>
              <div className={payC.desc}>
                <p>Propina Julho</p>
                <small>05.07.2024</small>
              </div>
              <div className={payC.amount}>
                <p className={`${payC.price} ${pay.success}`}>50.000,00 kz</p>
              </div>
            </div>
            <div className={payC.details}>
              <div className={payC.icon}>
                <Image
                  className={payC.avatar}
                  src={"/icons/cons/money.svg"}
                  alt="ba2ck"
                  width={30}
                  height={30}
                  priority
                />
              </div>
              <div className={payC.desc}>
                <p>Propina Julho</p>
                <small>05.07.2024</small>
              </div>
              <div className={payC.amount}>
                <p className={`${payC.price} ${pay.success}`}>50.000,00 kz</p>
              </div>
            </div>
            <div className={payC.details}>
              <div className={payC.icon}>
                <Image
                  className={payC.avatar}
                  src={"/icons/cons/money.svg"}
                  alt="ba2ck"
                  width={30}
                  height={30}
                  priority
                />
              </div>
              <div className={payC.desc}>
                <p>Propina Julho</p>
                <small>05.07.2024</small>
              </div>
              <div className={payC.amount}>
                <p className={`${payC.price} ${payC.warning}`}>50.000,00 kz</p>
              </div>
            </div>
          </div>
          <Menu></Menu>
        </div>
      </Layout>
    </>
  );
}
