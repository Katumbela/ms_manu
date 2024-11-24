import hor from "@/styles/educacional/horario.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";

// Função para limitar o texto a 12 caracteres e adicionar "..."
const truncateText = (text: string, maxLength: number = 12): string =>
  text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
// Dados do horário
const schedule = [
  {
    day: "Segunda-feira",
    classes: [
      {
        startTime: "07:30",
        endTime: "09:00",
        subject: "CDI I - Cálculo Difer. e Integral",
        chapter: "Capítulo I: Funções",
        room: "BAA3",
        teacher: "Bernardo Manuel",
        active: true,
      },
      {
        startTime: "07:30",
        endTime: "09:00",
        subject: "CDI I - Cálculo Difer. e Integral",
        chapter: "Capítulo I: Funções",
        room: "BAA3",
        teacher: "Bernardo Manuel",
        active: false,
      },
      {
        startTime: "07:30",
        endTime: "09:00",
        subject: "CDI I - Cálculo Difer. e Integral",
        chapter: "Capítulo I: Funções",
        room: "BAA3",
        teacher: "Bernardo Manuel",
        active: false,
      },
    ],
  },
];

export default function Payments() {
  return (
    <div className={hor.container}>
      <Top information="Horários" pagina="curso"></Top>

      <div className={hor.top}>
        <p>EINF6-M1 - Engenharia Informática</p>
      </div>

      {schedule.map((daySchedule, index) => (
        <div key={index} className={hor.day}>
          <p className={hor.title}>{daySchedule.day}</p>
          <div className={hor.top}>
            <div className={hor.both}>
              <p>Hora</p>
              <div className={hor.cad}>
                <p>Cadeira</p>
              </div>
            </div>
            <button className={hor.btn_order}>
              <Image
                className={hor.avatar}
                src={"/icons/curso/order.svg"}
                alt="Order"
                width={25}
                height={25}
                priority
              />
            </button>
          </div>
          {daySchedule.classes.map((classItem, idx) => (
            <div key={idx} className={hor.details}>
              <div className={hor.time}>
                <p className={hor.inicio}>{classItem.startTime}</p>
                <p className={hor.termino}>{classItem.endTime}</p>
              </div>
              <div
                className={`${hor.cadeira} ${
                  !classItem.active ? hor.cadeira_not_act : ""
                }`}
              >
                <div className={hor.inner1}>
                  <h3>{truncateText(classItem.subject)}</h3>
                  <small>{classItem.chapter}</small>
                </div>
                <div className={hor.inner2}>
                  <div className={hor.in}>
                    <Image
                      className={hor.avatar}
                      src={
                        classItem.active
                          ? "/icons/curso/loc.svg"
                          : "/icons/curso/loc2.svg"
                      }
                      alt="Location"
                      width={23}
                      height={23}
                      priority
                    />
                    <p className={hor.ico}>
                      Sala: <span className={hor.salaN}>{classItem.room}</span>
                    </p>
                  </div>
                  <div className={`${hor.in} ${hor.in2}`}>
                    <Image
                      className={hor.avatar}
                      src={"/avatars/manuel.svg"}
                      alt="Teacher"
                      width={22}
                      height={22}
                      priority
                    />
                    <p>{classItem.teacher}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
      <Menu />
    </div>
  );
}
