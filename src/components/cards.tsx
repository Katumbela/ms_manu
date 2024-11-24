import styles from "@/styles/cards.module.css";
import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/hooks";
import { selectUser } from "@/store";
import { NumberUtils, StringUtils } from "@/utils";
import QRCode from "react-qr-code";

export default function CartaoMultischool() {
  const student = useAppSelector(selectUser);
  const account = student?.account;
console.log(account)


  return (
    <Link href="/consultsM" className={`${styles.card} ${styles.card_m}`}>
      <div className={styles.top}>
        <div className={styles.inner}>
          <div className={`${styles.image1}`}>
            <div className={` ${styles.mslogo}`}></div>
          </div>
          <div className={`${styles.image2}`}>
            <div className={`${styles.nfc}`}></div>
          </div>
        </div>
      </div>
      <div className={styles.corpo}>
        <div className={styles.c_number}>
          <p>{account?.account_number}3883 9234 786</p>
        </div>
        <div className={styles.amount}>
          <h1>
            {NumberUtils.formatCurrency(
              account?.balance ||0
            )}
          </h1>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>
          {StringUtils.getFirstAndLastWord(
            student?.studentName
              ? student?.studentName
              : "Ana Correia de Assis Diogo"
          )}
        </p>
        <Image
          src={"/img/Kwik.svg"}
          alt="ba2ck"
          width={40}
          height={17}
          priority
        />
      </div>
    </Link>
  );
}

export function CartaoEstudante({
  student,
  color,
}: {
  student: {
    name: string;
    course: string;
    registrationNumber: string;
    classGroup: string;
    institution: string;
    logo: string;
    avatar: string;
  };
  color: string;
}) {
  const gradiente = `linear-gradient(to left bottom, #535353, ${color})`;

  // GERAR QR CODE PARA O CARTÃO DE ESTUDANTE
  const qrData = JSON.stringify({
    name: student.name,
    course: student.course,
    registrationNumber: student.registrationNumber,
    classGroup: student.classGroup,
    institution: student.institution,
  });

  return (
    <Link
      href="/educacional/resume"
      className={`${styles.card} ${styles.card_e}`}
      style={{
        background: gradiente,
      }}
    >
      <div className={styles.top}>
        <div className={styles.icon}>
          <Image
            src={`/img/${student.logo}`}
            alt="Logo da instituição"
            width={45}
            height={45}
            priority
            className={styles.logoI}
          />
        </div>
        <div className={styles.inst}>
          <p>{student.institution || "Instituição indisponível"}</p>
        </div>
      </div>
      <div className={styles.corpo}>
        <div className={styles.ft}>
          <Image
            src={`/img/${student.avatar}`}
            alt="avatar do estudante"
            width={67}
            height={95}
            priority
            className={styles.avatarStudent}
          />
        </div>
        <div className={styles.info}>
          <ul>
            <li>
              <b>Nome:</b> {student.name || "Nome indisponível"}
            </li>
            <li>
              <b>Curso:</b> {student.course || "Curso indisponível"}
            </li>
            <li>
              <b>Nº matrícula:</b> {student.registrationNumber || "N/A"}
            </li>
            <li>
              <b>Turma:</b> {student.classGroup || "Turma indisponível"}
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.img}>
          <Image
            src={"/img/cards.svg"}
            alt="Cartão"
            width={200}
            height={90}
            priority
            className={styles.logoM}
          />
        </div>
        <QRCode value={qrData} size={53} className={styles.qrcode} />
      </div>
    </Link>
  );
}

export function CartaoEstagiario({
  student,
  color,
}: {
  student: {
    name: string;
    dept: string;
    turno: string;
    institution: string;
    logo: string;
    avatar: string;
    company: string;
  };
  color: string;
}) {
  const gradiente = `linear-gradient(to top right, ${color}, #5c2d88)`;

  const getSiglaInstituicao = (institution: string) => {
    const partes = institution.split(" - ");
    return partes[0];
  };

  const siglaInstituicao = getSiglaInstituicao(student.institution);

  const qrData = JSON.stringify({
    name: student.name,
    dept: student.dept,
    turno: student.turno,
    institution: student.institution,
    company: student.company,
  });

  return (
    <Link
      href=""
      className={`${styles.card} ${styles.card_est}`}
      style={{
        background: gradiente,
      }}
    >
      <div className={styles.top}>
        <div className={styles.gp}>
          <div className={styles.icon}>
            <div className={styles.icon}>
              <Image
                src={`/img/${student.logo}`}
                alt="Logo da instituição"
                width={45}
                height={45}
                priority
              />
            </div>
          </div>
          <div className={styles.inst}>
            <p>{student.company}</p>
          </div>
        </div>
        <div className={styles.desc}>
          <p>Cartão de estagiário</p>
        </div>
      </div>
      <div className={styles.corpo}>
        <div className={styles.ft}>
          <div className={styles.icon}>
            <Image
              src={`/img/${student.avatar}`}
              alt="Avatar estudante"
              width={67}
              height={95}
              priority
            />
          </div>
        </div>
        <div className={styles.info}>
          <ul>
            <li>
              <b>Nome:</b> {student.name || "Nome indisponível"}
            </li>
            <li>
              <b>Sector:</b> {student.dept || "Departamento indisponível"}
            </li>
            <li>
              <b>Turno:</b> {student.turno || "Turno indisponível"}
            </li>
            <li>
              <b>Instituição:</b>{" "}
              {siglaInstituicao || "Instituição indisponível"}
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
            height={47}
            priority
          />
        </div>
        <QRCode value={qrData} size={53} />
      </div>
    </Link>
  );
}
