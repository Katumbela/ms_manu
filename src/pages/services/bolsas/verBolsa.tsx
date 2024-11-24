import cred from "@/styles/services/bolsas/verBolsa.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import PurpleButton from "@/components/buttons";
import Button from "@/components/buttons";
import Layout from "@/components/Layout";


export default function VerBolsa() {
  return (
    <>
      <Layout title="Ver candidatura">
        <div className={cred.container}>
          <Top information="Kwik - Pag. Inst" pagina="bolsas"></Top>

          <div className={cred.top}>
            <Image src={"/icons/kwik.svg"} width={60} height={60} alt="" />
            <p>Kwik invest: Bolsa de Estudos</p>
          </div>

          <div className={cred.info}>
            <div className={cred.items}>
              <p className={cred.dark_g}>Entidade nº</p>
              <p className={`${cred.primary} ${cred.name}`}>00040</p>
            </div>
            <div className={cred.items}>
              <p className={cred.dark_g}>Vagas</p>
              <p className={`${cred.primary} ${cred.anolec}`}>40</p>
            </div>
            <div className={cred.items}>
              <p className={cred.dark_g}>Data limite</p>
              <p className={`${cred.success} ${cred.semestre}`}>10/10/24</p>
            </div>
            <div className={cred.items}>
              <p className={cred.dark_g}>Público-alvo</p>
              <p className={`${cred.primary} ${cred.anoA}`}>
                17/09/24 às 10h:40:30
              </p>
            </div>
            <div className={cred.items}>
              <p className={cred.dark_g}>Nota mínima</p>
              <p className={`${cred.primary} ${cred.anoA}`}>14 valores</p>
            </div>
          </div>

          <div className={cred.btn}>
            <PurpleButton
              description="Confirmar"
              redirect="candidatura"
            ></PurpleButton>
            <Button
              variant="light"
              description="Baixar edital"
              redirect=""
            ></Button>
          </div>
          <Menu />
        </div>
      </Layout>
    </>
  );
}
