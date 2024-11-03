import tips from "../styles/tips.module.css";
import PurpleButton from "@/components/buttons";
import Image from "next/image";

export default function Tips() {
  return (
    <>
      <div className={tips.container}>
        <div className={tips.header}>
          <div className={tips.icon}>
            <Image
              className={tips.logo}
              src={"/img/logo.svg"}
              alt="ba2ck"
              width={80}
              height={80}
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
              <p className={`${tips.txt} ${tips.txt1}`}>
                Explorar opções de instituições de ensino
              </p>
            </div>
          </div>
          <div className={tips.arts2}>
            <div className={`${tips.inner2}`}>
              <div className={`${tips.number2}`}>
                <p>2</p>
              </div>
              <p className={`${tips.txt} ${tips.txt2}`}>
                Escolher instituição de ensino e realizar a inscrição
              </p>
            </div>
          </div>
          <div className={tips.arts3}>
            <div className={tips.inner}>
              <div className={` ${tips.number3}`}>
                <p>3</p>
              </div>
              <p className={`${tips.txt} ${tips.txt3}`}>
                Criar ou iniciar sessão na conta kwik
              </p>
            </div>
          </div>
        </div>

        <div className={tips.desc}>
          <div className={tips.txt}>
            <h1>Deixe-nos explicar:</h1>
            <p>
              Para criar uma conta, é necessário inscrever-se numa instituição
              de ensino médio ou superior. Assim, os próximos passos serão
              explorar e escolher uma instituição de ensino e, em seguida,
              realizar a inscrição tanto na instituição escolhida quanto na
              plataforma. Vamos começar?
            </p>
          </div>
          <PurpleButton
            description="Percebido"
            redirect="/explore"
          ></PurpleButton>
        </div>
      </div>
    </>
  );
}
