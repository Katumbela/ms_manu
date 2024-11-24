import hor from "@/styles/educacional/notas.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";

// Função para limitar o nome da cadeira a 12 caracteres
const truncateName = (name: string): string =>
  name.length > 12 ? `${name.slice(0, 12)}...` : name;


const subjects = [
  {
    date: "12/09",
    name: "CDI I - Cálculo Difer. e Int...",
    scores: { PP1: "12v", PP2: "12v", EXN: "9v", EXR: "19v" },
    status: "APROVADO",
    isActive: true,
  },
  {
    date: "12/09",
    name: "CDI I - Cálculo Difer. e Int...",
    scores: { PP1: "12v", PP2: "12v", EXN: "9v", EXR: "19v" },
    status: "APROVADO",
    isActive: false,
  },
  {
    date: "12/09",
    name: "CDI I - Cálculo Difer. e Int...",
    scores: { PP1: "12v", PP2: "12v", EXN: "9v", EXR: "19v" },
    status: "APROVADO",
    isActive: false,
  },
];

export default function Payments() {
  return (
    <div className={hor.container}>
      <Top information="Notas" pagina="curso" />
      <div className={hor.top}>
        <p>EINF6-M1 - Engenharia Informática</p>
      </div>

      <div className={hor.day}>
        <p className={hor.title}>VIº Semestre - 3º ano</p>
        <div className={hor.top}>
          <div className={hor.both}>
            <p>Data</p>
            <div className={hor.cad}>
              <p>Cadeira</p>
            </div>
          </div>
          <button className={hor.btn_order}>
            <Image
              className={hor.avatar}
              src={"/icons/curso/order.svg"}
              alt="ordenar"
              width={25}
              height={25}
              priority
            />
          </button>
        </div>
        {subjects.map((subject, index) => (
          <div
            key={index}
            className={`${hor.details} ${
              !subject.isActive ? hor.cadeira_not_act : ""
            }`}
          >
            <div className={hor.time}>
              <p className={hor.inicio}>{subject.date}</p>
            </div>
            <div className={hor.cadeira}>
              <div className={hor.inner1}>
                <h3>{truncateName(subject.name)}</h3>
              </div>
              <div className={hor.inner2}>
                <div className={hor.in}>
                  <p>PP1: {subject.scores.PP1}</p>
                  <span>|</span>
                  <p>PP2: {subject.scores.PP2}</p>
                </div>
                <div className={`${hor.in} ${hor.in2}`}>
                  <p>EXN: {subject.scores.EXN}</p>
                  <span>|</span>
                  <p>EXR: {subject.scores.EXR}</p>
                </div>
                <p
                  className={`${hor.status} ${
                    !subject.isActive ? hor.status2 : ""
                  }`}
                >
                  Situação: {subject.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Menu />
    </div>
  );
}
