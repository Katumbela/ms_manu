import Header from "../components/head"; 
import welcome from "../styles/welcome.module.css";
import Link from "next/link";
import Button from "../components/buttons";

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
          <Button
            variant="purple"
            description="Fazer login"
            redirect="/login"
          ></Button>
          <Button
            variant="light"
            description="Inscrever-me"
            redirect="/explore"
          ></Button>
          <Link href="/explore" prefetch={true} className={welcome.link}>
            Explorar instituições de ensino
          </Link>
        </div>
      </div>
    </>
  );
}
