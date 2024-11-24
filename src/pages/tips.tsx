import tips from "../styles/tips.module.css";
import PurpleButton from "@/components/buttons";
import Image from "next/image";
import Link from "next/link";

export default function Tips() {
  return (
    <>
      <div className={tips.container}>
        <div className={tips.header}>
          <Link href="welcome" className={tips.back}>
            <Image
              className={tips.arrow}
              src={"/icons/left_arrow.svg"}
              alt="back"
              width={20}
              height={20}
              priority
            />
          </Link>
          <div className={tips.icon}>
            <Image
              className={tips.logo}
              src={"/img/logo.svg"}
              alt="ba2ck"
              width={60}
              height={60}
              priority
            />
          </div>
        </div>

        <div className={tips.arts}>
          <div className={tips.arts1}>
            <div className={tips.inner}>
              <div className={`${tips.number} ${tips.number1}`}>
                <p>1</p>
              </div>
              <p className={` ${tips.txt1} ${tips.txtin}`}>
                Explorar opções de instituições de ensino
              </p>
            </div>
          </div>
          <div className={tips.arts2}>
            <div className={`${tips.inner2}`}>
              <div className={`${tips.number2}`}>
                <p>2</p>
              </div>
              <p className={`${tips.txt2} ${tips.txtin}`}>
                Escolher instituição de ensino e realizar a inscrição
              </p>
            </div>
          </div>
          <div className={tips.arts3}>
            <div className={tips.inner}>
              <div className={` ${tips.number3}`}>
                <p>3</p>
              </div>
              <p className={`${tips.txt3} ${tips.txtin}`}>
                Criar ou iniciar sessão na conta kwik
              </p>
            </div>
          </div>
        </div>

        <div className={tips.desc}>
          <h1>Deixe-nos explicar:</h1>
          <div className={tips.txt}>
            <p>
              Para criar uma conta, é necessário inscrever-se numa instituição
              de ensino médio ou superior.
            </p>
            <p>
              Assim, os próximos passos serão explorar e escolher uma
              instituição de ensino e, em seguida, realizar a inscrição tanto na
              instituição escolhida quanto na plataforma. Vamos começar?
            </p>
          </div>
        </div>

        <div className={tips.buttoncta}>
          <PurpleButton
          className={tips.button}
            description="Percebido"
            redirect="/explore"
          ></PurpleButton>
        </div>
      </div>
    </>
  );
}
