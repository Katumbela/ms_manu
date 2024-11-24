import courses from "../styles/courses.module.css";
import Link from "next/link";
export default function Courses() {
  return (
    <>
      <div className={courses.container}>
        <div className={courses.bg}></div>
        <div className={courses.up}>
          <div className={courses.inner}>
            <Link href="/detailsI" className={courses.line}></Link>
          </div>
          <div className={courses.desc}>
            <h3>Selecione um departamento</h3>
            <div className={courses.options}>
              <Link href="/infocur" className={courses.op}>
                <div className={courses.inner}>
                  <div className={courses.number}>1</div>
                  <div className={courses.desc2}>
                    <p> Departamento de Engenharias e Tecnologias (DET)</p>
                  </div>
                </div>
              </Link>
              <div className={courses.op}>
                <div className={courses.inner}>
                  <div className={courses.number}>2</div>
                  <div className={courses.desc2}>
                    <p> Departamento de Engenharias e Tecnologias (DET)</p>
                  </div>
                </div>
              </div>
              <div className={courses.op}>
                <div className={courses.inner}>
                  <div className={courses.number}>3</div>
                  <div className={courses.desc2}>
                    <p> Departamento de Engenharias e Tecnologias (DET)</p>
                  </div>
                </div>
              </div>
              <div className={courses.op}>
                <div className={courses.inner}>
                  <div className={courses.number}>3</div>
                  <div className={courses.desc2}>
                    <p> Departamento de Engenharias e Tecnologias (DET)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
