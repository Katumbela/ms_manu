import PurpleButton, { PurpleButton2 } from "@/components/buttons";
import uninet from "@/styles/uninet.module.css";
import Image from "next/image";


export default function HomePage() {
  return (
    <div className={uninet.container}>
      <div className={uninet.bg}>
        <Image
          src={"/bg/uninet/homepage.svg"}
          width={340}
          height={340}
          alt=""
        />
      </div>

      <div className={uninet.content}>
        <div className={uninet.txt}>
          <h1>Bora te conectar a mais gente!</h1>
        </div>
        <div className={uninet.btn}>
        <PurpleButton description="Continuar" redirect=""></PurpleButton>
        </div>
      </div>
    </div>
  );
}
