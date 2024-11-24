import welcome from "@/styles/welcome.module.css";
import Link from "next/link";
import Button from "@/components/buttons";
import Layout from "@/components/Layout";

export default function Welcome() {
  return (
    <>
      <Layout title="Bem-vindo ao Multischool Angola">
        <div className={welcome.container}>
          <div className={welcome.box}></div>
          <div className={welcome.inner_c}>
            <div className={welcome.text}>
              <h1>Bem-vindo ao Multischool Angola</h1>
              <p>
                Facilitamos a gestão da sua vida acadêmica com soluções que
                quebram o convencional!
              </p>
            </div>
            <div className={welcome.cta}>
              <Button
                className={welcome.button}
                variant="purple"
                description="Fazer login"
                redirect="/login"
              ></Button>
              <Button
                className={welcome.button}
                variant="light"
                description="Inscrever-me"
                redirect="/tips"
              ></Button>
              <Link href="/explore" prefetch={true} className={welcome.link}>
                Explorar instituições de ensino
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
