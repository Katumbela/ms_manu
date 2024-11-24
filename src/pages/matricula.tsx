import matr from "../styles/matr.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Button from "@/components/buttons";
import { routes } from "@/infra";
import { useState } from "react";
import Layout from "@/components/Layout";

export default function Account() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [pin, setPin] = useState("");
  const matricula = useSearchParams();
  const school_id = matricula.get("school");
  const school_name = matricula.get("school_name");
  const course = matricula.get("chosen_course");
  const course_id = matricula.get("course");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <Layout title="Inscrição | Multischool Angola">
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
              width={25}
              height={25}
              priority
            />
          </Link>
          <div className={matr.icon}>
            <Image
              className={matr.logo}
              src={"/img/logo.svg"}
              alt="ba2ck"
              width={55}
              height={55}
              priority
            />
          </div>
        </div>
        <div className={matr.header}>
          <h1>Dê o primeiro passo, crie a sua conta!</h1>
          <p>Junte-se à nossa comunidade e comece a sua jornada connosco</p>
        </div>

        <div className={matr.insName}>
          <p>{school_name} </p>
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
            <div className={matr.flagContainer}>
              <Image
                className={matr.logo}
                src={"/icons/angoflag.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
              <span className={matr.phoneCode}>+244</span>
            </div>
            <input
              type="tel"
              placeholder="Número de telefone"
              className={matr.phoneInput}
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
              type="text"
              value={course ? course : ""}
              placeholder="Morada"
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
              type={passwordVisible ? "text" : "password"}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="PIN de acesso"
              className={matr.input}
            />
            <div
              className={matr.iconContainer}
              onClick={togglePasswordVisibility}
              style={{ cursor: "pointer" }}
            >
              <Image
                className={matr.logo}
                src={passwordVisible ? "/icons/eye_open.svg" : "/icons/eye.svg"}
                alt="eye"
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
              type={passwordVisible ? "text" : "password"}
              placeholder="Confirmar o PIN de acesso"
              className={matr.input}
            />
            <div
              className={matr.iconContainer}
              onClick={togglePasswordVisibility}
              style={{ cursor: "pointer" }}
            >
              <Image
                className={matr.logo}
                src={passwordVisible ? "/icons/eye_open.svg" : "/icons/eye.svg"}
                alt="eye"
                width={25}
                height={25}
                priority
              />
            </div>
          </div>
        </div>
        <div className={matr.cta}>
          <Button
            className={matr.button}
            description="Continuar"
            redirect={`${routes.REGISTER_ROUTE}?school=${school_id}&school_name=${school_name}&chosen_course=${course}&course=${course_id}&name=${name}&pin=${pin}&phone=${number}`}
          />
        </div>
      </div>
      </Layout>
    </>
  );
}
