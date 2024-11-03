import details from "../styles/detailsI.module.css";
import Image from "next/image";
import PurpleButton from "@/components/buttons";
import { LightButton } from "@/components/buttons";
import Link from "next/link";

export default function DetailsI() {
  return (
    <>
      <div className={details.container}>
        <div className={details.bg}>
          <Link href="search" className={details.back}>
            <Image
              className={details.logo}
              src={"/icons/left_arrow.svg"}
              alt="done"
              width={30}
              height={60}
              priority
            />
          </Link>
          <div className={details.inner}>
            <Link href="/courses" className={details.courses}>
              <div className={details.in}>
                <Image
                  className={details.logo}
                  src={"/icons/courses.svg"}
                  alt="done"
                  width={30}
                  height={60}
                  priority
                />
                <p>Cursos</p>
              </div>
            </Link>
          </div>
        </div>
        <div className={details.info}>
          <p>Informações</p>
          <h3 className={details.instituicao}>
            ISPTEC - Instituto Superior Politécnico de Tecnologias e Ciências
          </h3>
          <div className={details.location}>
            <Image
              className={details.loc}
              src={"/icons/location.svg"}
              alt="done"
              width={30}
              height={60}
              priority
            />
            <p className={details.txt}>Município da Ingombota, Luanda</p>
          </div>
          <p>
            <span className={`${details.nstudents} ${details.purple}`}>
              6000 estudantes
            </span>{" "}
            - Actualmente
          </p>
          <div className={details.desc}>
            O Instituto Superior Politécnico de Tecnologias e Ciências é uma
            instituição de ensino superior privada localizada no município do
            Talatona, cidade de Luanda, em Angola. A instituição tem como órgão
            de tutela o Ministério do Ensino Superior, Ciência, Tecnologia e
            Inovação.
          </div>
          <div className={details.btns}>
            <PurpleButton
              description="Fazer matrícula"
              redirect="/matricula"
            ></PurpleButton>
            <LightButton
              description="Ver requisitos"
              redirect="/requisitos"
            ></LightButton>
          </div>
        </div>
      </div>
    </>
  );
}
