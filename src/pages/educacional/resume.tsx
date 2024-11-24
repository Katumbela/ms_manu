import edu from "@/styles/educacional/resume.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";
import cards from "@/styles/cards.module.css";
import { CartaoEstudante } from "@/components/cards";
import { users } from "@/utils/image-exporter";

// Dados estáticos
const studentInfo = {
  name: "Ana Correia de Assis Diogo",
  course: "Engenharia Informática",
  registrationNumber: "20231234",
  classGroup: "EINF-M2",
  institution:
    "ISPTEC - Instituto Superior Politécnico de Tecnologias e Ciências",
  logo: "ispt.svg",
  avatar: "id.svg",
};

const studentDetails = [
  { label: "Turma", value: "EINF-M1" },
  { label: "Sala", value: "BAA3 - 2º andar" },
];

const studentStatus = [
  { label: "Tipo", value: "Manhã" },
  { label: "Estado", value: "Activo", statusClass: edu.success },
];

const options = [
  {
    href: "movimentos",
    icon: "/icons/cons/mov.svg",
    alt: "Movimentos",
    label: "Movimentos",
    iconSize: { width: 25, height: 25 },
  },
  {
    href: "curso",
    icon: "/icons/cons/pag.svg",
    alt: "Curso",
    label: "Curso",
    iconSize: { width: 30, height: 30 },
  },
  {
    href: "/consultas/infoMulti",
    icon: "/icons/cons/info.svg",
    alt: "Informações",
    label: "Informações",
    iconSize: { width: 25, height: 25 },
  },
];

// Componente principal
export default function EduultsM() {
  const colorI = "#f9d048";

  return (
    <div className={edu.container}>
      <Top information="Educacional" pagina="/cards" />

      <div className={`${edu.bg} ${cards.container}`}>
        <div className={`${cards.cards} ${edu.cards}`}>
          <CartaoEstudante student={studentInfo} color={colorI} />
        </div>
      </div>

      {/* Opções de navegação */}
      <div className={edu.options}>
        {options.map((option, index) => (
          <Link key={index} href={option.href} className={edu.op}>
            <div className={edu.circle}>
              <Image
                className={edu.arrow}
                src={option.icon}
                alt={option.alt}
                width={option.iconSize.width}
                height={option.iconSize.height}
                priority
              />
            </div>
            <p>{option.label}</p>
          </Link>
        ))}
      </div>

      {/* Informações do estudante */}
      <div className={edu.infor}>
        <div className={edu.info}>
          <Image
            className={edu.avatar}
            src={users.user_default}
            alt="Avatar do estudante"
            width={70}
            height={70}
            priority
          />
          <div className={edu.inner}>
            <p className={edu.name}>{studentInfo.name}</p>
            <p className={edu.desc}>{`${studentInfo.course} - 3º Ano`}</p>
          </div>
        </div>

        <div className={edu.inner2}>
          <div className={edu.data}>
            {studentDetails.map((detail, index) => (
              <div key={index} className={`${edu.ref}`}>
                <p className={edu.gray}>{detail.label}:</p>
                <p className={edu.bold}>{detail.value}</p>
              </div>
            ))}
          </div>

          <div className={`${edu.tipo}`}>
            {studentStatus.map((status, index) => (
              <div key={index} className={edu.type}>
                <p className={edu.gray}>{status.label}:</p>
                <p className={`${edu.bold} ${status.statusClass || ""}`}>
                  {status.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Menu />
    </div>
  );
}
