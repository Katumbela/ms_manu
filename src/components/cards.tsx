import styles from "@/styles/cards.module.css";
import Link from "next/link";
import Image from "next/image";

export default function CartaoMultischool(){
    return (
      <Link href="/consultsM" className={`${styles.card} ${styles.card_m}`}>
        <div className={styles.top}>
          <Image
            src={"/img/cards.svg"}
            alt="ba2ck"
            width={200}
            height={90}
            priority
          />
          <Image
            src={"/img/nfc.png"}
            alt="ba2ck"
            width={65}
            height={38}
            priority
          />
        </div>
        <div className={styles.corpo}>
          <div className={styles.c_number}>
            <p>043 345 160 9</p>
          </div>
          <div className={styles.amount}>
            <h1>50.000,00 kz</h1>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>Ana Diogo</p>
          <Image
            src={"/img/kwik.svg"}
            alt="ba2ck"
            width={40}
            height={17}
            priority
          />
        </div>
      </Link>
    );
}

export function CartaoEstudante() {
  return (
    <Link
      href="/educacional/resume"
      className={`${styles.card} ${styles.card_e}`}
    >
      <div className={styles.top}>
        <div className={styles.icon}>
          <Image
            src={"/img/ispt.svg"}
            alt="ba2ck"
            width={45}
            height={45}
            priority
          />
        </div>
        <div className={styles.inst}>
          <p>
            Instituto Superior Politécnico de Tecnologias e Ciências - ISPTEC
          </p>
        </div>
      </div>
      <div className={styles.corpo}>
        <div className={styles.ft}>
          <Image
            src={"/img/id.svg"}
            alt="ba2ck"
            width={67}
            height={95}
            priority
          />
        </div>
        <div className={styles.info}>
          <ul>
            <li>
              <b>Nome:</b> Ana Correia de Assis Diogo
            </li>
            <li>
              <b>Curso:</b> Engenharia informática
            </li>
            <li>
              <b>Nº matrícula:</b> 20242190
            </li>
            <li>
              <b>Turma:</b> EINF-M1
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.img}>
          <Image
            src={"/img/cards.svg"}
            alt="ba2ck"
            width={200}
            height={90}
            priority
          />
        </div>
        <Image
          src={"/img/qr_code.svg"}
          alt="ba2ck"
          width={55}
          height={55}
          priority
        />
      </div>
    </Link>
  );
}

export function CartaoEstagiario(){
    return (
      <Link href="" className={`${styles.card} ${styles.card_est}`}>
        <div className={styles.top}>
          <div className={styles.gp}>
            <div className={styles.icon}>
              <img src="img/unitel.svg" alt="" />
            </div>
            <div className={styles.inst}>
              <p>Unitel S.A</p>
            </div>
          </div>
          <div className={styles.desc}>
            <p>Cartão de estagiário</p>
          </div>
        </div>
        <div className={styles.corpo}>
          <div className={styles.ft}>
            <img src="img/id.svg" alt="" />
          </div>
          <div className={styles.info}>
            <ul>
              <li>
                <b>Nome:</b> Ana Correia de Assis Diogo
              </li>
              <li>
                <b>Sector:</b> Departamento de TI
              </li>
              <li>
                <b>Turno:</b> Matinal
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.img}>
            <img src="img/cards.svg" alt="" />
          </div>
          <img src="img/qr_code.svg" alt="" />
        </div>
      </Link>
    );
}