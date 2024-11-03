import Header from "../components/head";
import PurpleButton from "../components/buttons";
import { LightButton } from "../components/buttons";
import welcome from "../styles/welcome.module.css";
import Link from "next/link";

export default function Welcome() {
  return (
    <>
      <Header title="Multischool AO" />
      <div className={welcome.container}>
        <div className={welcome.text}>
          <h1>Bem-vindo ao Multischool Angola</h1>
          <p>
            Facilitamos a gestão da sua vida acadêmica com soluções que quebram
            o convencional!
          </p>
        </div>
        <div className={welcome.cta}>
          <PurpleButton
            description="Fazer login"
            redirect="/login"
          ></PurpleButton>
          <LightButton
            description="Inscrever-me"
            redirect="/explore"
          ></LightButton>
          <Link href="/explore" prefetch={true} className={welcome.link}>
            Explorar instituições de ensino
          </Link>
        </div>
      </div>
    </>
  );
}
