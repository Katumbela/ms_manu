import mov from "@/styles/educacional/movimentos.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import { users } from "@/utils/image-exporter";
import Layout from "@/components/Layout";
import { useAppSelector } from "@/hooks";
import { selectUser } from "@/store";
import { StringUtils } from "@/utils";

export default function Movimentos() {
  const student = useAppSelector(selectUser)
  return (
    <>
      <Layout title="Movimentos | Institucional">
        <div className={mov.container}>
          <Top information="Movimentos" pagina="resume"></Top>
          <div className={mov.resume}>
            <div className={mov.info}>
              <Image
                className={mov.avatar}
                src={users.user_default}
                alt="ba2ck"
                width={70}
                height={70}
                priority
              />
              <div className={mov.inner}>
                <p className={mov.name}>{student?.studentName}</p>
                <p className={mov.desc}>
                  Conta <span className={mov.instituicao}>{StringUtils.getFirstWord(student?.enrollments?.[0].school.schoolName || "")}</span>
                </p>
              </div>
            </div>
          </div>

          <div className={mov.movimentos}>
            <div className={mov.top}>
              <p>Descrição</p>
              <p className={mov.subtitle}>Tempo</p>
            </div>
            <div className={mov.details}>
              <div className={mov.icon}>
                <Image
                  className={mov.avatar}
                  src={"/icons/graduate.svg"}
                  alt="ba2ck"
                  width={25}
                  height={25}
                  priority
                />
              </div>
              <div className={mov.desc}>
                <p>Biblioteca</p>
                <small>05.07.2024 às 12:45:50</small>
              </div>
              <div className={mov.amount}>
                <p className={`${mov.price} ${mov.danger}`}>há 1h</p>
              </div>
            </div>
            <div className={mov.details}>
              <div className={mov.icon}>
                <Image
                  className={mov.avatar}
                  src={"/icons/graduate.svg"}
                  alt="ba2ck"
                  width={25}
                  height={25}
                  priority
                />
              </div>
              <div className={mov.desc}>
                <p>Biblioteca</p>
                <small>05.07.2024 às 12:45:50</small>
              </div>
              <div className={mov.amount}>
                <p className={`${mov.price} ${mov.danger}`}>há 1h</p>
              </div>
            </div>
            <div className={mov.details}>
              <div className={mov.icon}>
                <Image
                  className={mov.avatar}
                  src={"/icons/graduate.svg"}
                  alt="ba2ck"
                  width={25}
                  height={25}
                  priority
                />
              </div>
              <div className={mov.desc}>
                <p>Biblioteca</p>
                <small>05.07.2024 às 12:45:50</small>
              </div>
              <div className={mov.amount}>
                <p className={`${mov.price} ${mov.danger}`}>há 1h</p>
              </div>
            </div>
            <div className={mov.details}>
              <div className={mov.icon}>
                <Image
                  className={mov.avatar}
                  src={"/icons/graduate.svg"}
                  alt="ba2ck"
                  width={25}
                  height={25}
                  priority
                />
              </div>
              <div className={mov.desc}>
                <p>Biblioteca</p>
                <small>05.07.2024 às 12:45:50</small>
              </div>
              <div className={mov.amount}>
                <p className={`${mov.price} ${mov.danger}`}>há 1h</p>
              </div>
            </div>
            <div className={mov.details}>
              <div className={mov.icon}>
                <Image
                  className={mov.avatar}
                  src={"/icons/graduate.svg"}
                  alt="ba2ck"
                  width={25}
                  height={25}
                  priority
                />
              </div>
              <div className={mov.desc}>
                <p>Biblioteca</p>
                <small>05.07.2024 às 12:45:50</small>
              </div>
              <div className={mov.amount}>
                <p className={`${mov.price} ${mov.danger}`}>há 1h</p>
              </div>
            </div>
            <div className={mov.details}>
              <div className={mov.icon}>
                <Image
                  className={mov.avatar}
                  src={"/icons/graduate.svg"}
                  alt="ba2ck"
                  width={25}
                  height={25}
                  priority
                />
              </div>
              <div className={mov.desc}>
                <p>Biblioteca</p>
                <small>05.07.2024 às 12:45:50</small>
              </div>
              <div className={mov.amount}>
                <p className={`${mov.price} ${mov.danger}`}>há 1h</p>
              </div>
            </div>
            <div className={mov.details}>
              <div className={mov.icon}>
                <Image
                  className={mov.avatar}
                  src={"/icons/graduate.svg"}
                  alt="ba2ck"
                  width={25}
                  height={25}
                  priority
                />
              </div>
              <div className={mov.desc}>
                <p>Biblioteca</p>
                <small>05.07.2024 às 12:45:50</small>
              </div>
              <div className={mov.amount}>
                <p className={`${mov.price} ${mov.danger}`}>há 1h</p>
              </div>
            </div>
            <div className={mov.details}>
              <div className={mov.icon}>
                <Image
                  className={mov.avatar}
                  src={"/icons/graduate.svg"}
                  alt="ba2ck"
                  width={25}
                  height={25}
                  priority
                />
              </div>
              <div className={mov.desc}>
                <p>Biblioteca</p>
                <small>05.07.2024 às 12:45:50</small>
              </div>
              <div className={mov.amount}>
                <p className={`${mov.price} ${mov.danger}`}>há 1h</p>
              </div>
            </div>
            <div className={mov.details}>
              <div className={mov.icon}>
                <Image
                  className={mov.avatar}
                  src={"/icons/graduate.svg"}
                  alt="ba2ck"
                  width={25}
                  height={25}
                  priority
                />
              </div>
              <div className={mov.desc}>
                <p>Biblioteca</p>
                <small>05.07.2024 às 12:45:50</small>
              </div>
              <div className={mov.amount}>
                <p className={`${mov.price} ${mov.danger}`}>há 1h</p>
              </div>
            </div>
            <div className={mov.details}>
              <div className={mov.icon}>
                <Image
                  className={mov.avatar}
                  src={"/icons/graduate.svg"}
                  alt="ba2ck"
                  width={25}
                  height={25}
                  priority
                />
              </div>
              <div className={mov.desc}>
                <p>Biblioteca</p>
                <small>05.07.2024 às 12:45:50</small>
              </div>
              <div className={mov.amount}>
                <p className={`${mov.price} ${mov.danger}`}>há 1h</p>
              </div>
            </div>
            <div className={mov.details}>
              <div className={mov.icon}>
                <Image
                  className={mov.avatar}
                  src={"/icons/graduate.svg"}
                  alt="ba2ck"
                  width={25}
                  height={25}
                  priority
                />
              </div>
              <div className={mov.desc}>
                <p>Biblioteca</p>
                <small>05.07.2024 às 12:45:50</small>
              </div>
              <div className={mov.amount}>
                <p className={`${mov.price} ${mov.danger}`}>há 1h</p>
              </div>
            </div>
            <div className={mov.details}>
              <div className={mov.icon}>
                <Image
                  className={mov.avatar}
                  src={"/icons/graduate.svg"}
                  alt="ba2ck"
                  width={25}
                  height={25}
                  priority
                />
              </div>
              <div className={mov.desc}>
                <p>Biblioteca</p>
                <small>05.07.2024 às 12:45:50</small>
              </div>
              <div className={mov.amount}>
                <p className={`${mov.price} ${mov.danger}`}>há 1h</p>
              </div>
            </div>
          </div>
          <Menu></Menu>
        </div>
      </Layout>
    </>
  );
}
