import cal from "@/styles/educacional/calendarios.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Layout from "@/components/Layout";

interface CalendarItemProps {
  date: string;
  title: string;
  time: string;
  year: string;
  lineClass: string;
  contentClass: string;
}

// Componente reutilizável para os itens do calendário
const CalendarItem: React.FC<CalendarItemProps> = ({
  date,
  title,
  time,
  year,
  lineClass,
  contentClass,
}) => (
  <div className={cal.items}>
    <div className={cal.data}>
      <p>{date}</p>
      <div className={`${cal.line} ${lineClass}`}></div>
    </div>
    <div className={`${cal.content} ${contentClass}`}>
      <p>{title}</p>
      <p>
        <span className={cal.time}>{time}</span> |{" "}
        <span className={cal.ano}>{year}</span>
      </p>
    </div>
  </div>
);

export default function Materiais() {
  return (
    <Layout title="Calendários">
      <div className={cal.container}>
        <Top information="Calendários" pagina="curso" />

        <div className={cal.top}>
          <p>EINF6-M1 - Engenharia Informática</p>
          <p className={cal.title}>VIº Semestre - 3º ano</p>
        </div>

        {/* CALENDAR TABLE */}
        <div className={cal.table}>
          <CalendarItem
            date="12/09/24"
            title="CDI I - Cálculo Dif. e Integral I"
            time="08:00 - 10:30"
            year="1º Ano"
            lineClass={cal.Lorange}
            contentClass={cal.Corange}
          />
          <CalendarItem
            date="12/09/24"
            title="CDI I - Cálculo Dif. e Integral I"
            time="08:00 - 10:30"
            year="1º Ano"
            lineClass={cal.Lred}
            contentClass={cal.Cred}
          />
          <CalendarItem
            date="12/09/24"
            title="CDI I - Cálculo Dif. e Integral I"
            time="08:00 - 10:30"
            year="1º Ano"
            lineClass={cal.Lpurple}
            contentClass={cal.Cpurple}
          />
          <CalendarItem
            date="12/09/24"
            title="CDI I - Cálculo Dif. e Integral I"
            time="08:00 - 10:30"
            year="1º Ano"
            lineClass={cal.Lblue}
            contentClass={cal.Cblue}
          />
          <CalendarItem
            date="12/09/24"
            title="CDI I - Cálculo Dif. e Integral I"
            time="08:00 - 10:30"
            year="1º Ano"
            lineClass={cal.LDblue}
            contentClass={cal.CDblue}
          />
        </div>
        {/* CALENDAR TABLE FINAL */}

        <Menu />
      </div>
    </Layout>
  );
}
