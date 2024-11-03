
import matr from "../styles/matr.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Button from "@/components/buttons";
import { routes } from "@/infra";
import { useState } from "react";

export default function Account() {


  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [pin, setPin] = useState("")
  const matricula = useSearchParams();
  const school_id = matricula.get('school')
  const school_name = matricula.get('school_name')
  const course = matricula.get('chosen_course')
  const course_id = matricula.get('course')


  return (
    <>
      <div className={matr.container}>
        <div className={matr.progress}>
          <div className={`${matr.line} ${matr.line_active}`}></div>
          <div className={`${matr.line}`}></div>
          <div className={`${matr.line}`}></div>
        </div>
        <div className={matr.top}>
          <Link href="detailsI" className={matr.back}>
            <Image
              className={matr.arrow}
              src={"/icons/left_arrow.svg"}
              alt="ba2ck"
              width={30}
              height={30}
              priority
            />
          </Link>
          <div className={matr.icon}>
            <Image
              className={matr.logo}
              src={"/img/logo.svg"}
              alt="ba2ck"
              width={90}
              height={90}
              priority
            />
          </div>
        </div>
        <div className={matr.header}>
          <h1>Dê o primeiro passo, crie a sua conta!</h1>
          <p>Junte-se à nossa comunidade e comece a sua jornada connosco</p>
        </div>

        <div className={matr.insName}>
          <p>{school_name}</p>
        </div>

        <div className={matr.inputs}>
          <div className={matr.inputContainer}>
            <div className={matr.iconContainer}>
              <Image
                className={matr.logo}
                src={"/icons/student.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome completo"
              className={matr.input}
            />
          </div>
          <div className={matr.inputContainer}>
            {/* <div className=""> */}
            <div className={matr.idCountry}>
              <Image
                className={matr.idCountry}
                src={"/icons/student.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
              <p>+244</p>
            </div>
            {/* </div> */}
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Número de telefone"
              className={matr.input}
            />
          </div>
          <div className={matr.inputContainer}>
            <div className={matr.iconContainer}>
              <Image
                className={matr.logo}
                src={"/icons/student.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <input
              disabled
              type="text"
              value={course ? course : ''}
              placeholder="Número de estudante"
              className={matr.input}
            />
          </div>
          <div className={matr.inputContainer}>
            <div className={matr.iconContainer}>
              <Image
                className={matr.logo}
                src={"/icons/pin.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <input
              type="text"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="PIN de acesso"
              className={matr.input}
            />
            <div className={matr.iconContainer}>
              <Image
                className={matr.logo}
                src={"/icons/eye.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
          </div>
          <div className={matr.inputContainer}>
            <div className={matr.iconContainer}>
              <Image
                className={matr.logo}
                src={"/icons/pin.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <input
              type="text"
              placeholder="Confirmar o PIN de acesso"
              className={matr.input}
            />
            <div className={matr.iconContainer}>
              <Image
                className={matr.logo}
                src={"/icons/eye.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
          </div>
        </div>
        <div className={matr.cta}>
          <Button
            description="Continuar"
            redirect={`${routes.REGISTER_ROUTE}?school=${school_id}&school_name=${school_name}&chosen_course=${course}&course=${course_id}&name=${name}&pin=${pin}&phone=${number}`}
          />
        </div>
      </div>
    </>
  );
}
