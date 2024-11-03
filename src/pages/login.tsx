import login from "../styles/login.module.css";
import Image from "next/image";
import PurpleButton from "../components/buttons";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className={login.container}>
        <div className={login.top}>
          <Link href="welcome" className={login.back}>
            <Image
              className={login.arrow}
              src={"/icons/left_arrow.svg"}
              alt="ba2ck"
              width={30}
              height={30}
              priority
            />
          </Link>
          <div className={login.icon}>
            <Image
              className={login.logo}
              src={"/img/logo.svg"}
              alt="ba2ck"
              width={90}
              height={90}
              priority
            />
          </div>
        </div>
        <div className={login.header}>
          <h1>Vamos começar a jornada!</h1>
          <p>Inicie a sessão na sua conta</p>
        </div>

        <div className={login.inputs}>
          <div className={login.inputContainer}>
            <div className={login.iconContainer}>
              <Image
                className={login.logo}
                src={"/icons/student.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <input
              type="text"
              placeholder="Número de estudante"
              className={login.input}
            />
          </div>
          <div className={login.inputContainer}>
            <div className={login.iconContainer}>
              <Image
                className={login.logo}
                src={"/icons/pin.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <input
              type="password"
              placeholder="PIN de acesso"
              className={login.input}
            />
            <div className={login.iconContainer}>
              <Image
                className={login.logo}
                src={"/icons/eye.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
          </div>
        </div>

        <div className={login.cta}>
          <PurpleButton
            description="Iniciar sessão"
            redirect="/home"
          ></PurpleButton>
          <div className={login.links}>
            <Link href="/reset" className={login.purple}>
              Esqueci-me do PIN de acesso
            </Link>
            <Link href="/matricula">
              Não possui uma conta? -{" "}
              <span className={login.purple}> Criar conta</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
