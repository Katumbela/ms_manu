import cred from "@/styles/educacional/listarMateriais.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";

const MaterialCard = ({ title, date }: { title: string; date: string }) => (
  <Link href="listaMateriais" className={cred.inner}>
    <Image
      src={"/icons/curso/materialIcon.svg"}
      width={70}
      height={70}
      alt="Ícone de material"
    />
    <p className={cred.in}>{title}</p>
    <p>{date}</p>
  </Link>
);

export default function ListarMateriais() {
  const materials = [
    { title: "CÁP I - Funções", date: "12/10/24" },
    { title: "CÁP I - Funções", date: "12/10/24" },
    { title: "CÁP I - Funções", date: "12/10/24" },
    { title: "CÁP I - Funções", date: "12/10/24" },
    { title: "CÁP I - Funções", date: "12/10/24" },
  ];

  return (
    <Layout title="Cálculo Diferencial e Integral I - Materiais">
      <div className={cred.container}>
        <Top information="Materiais" pagina="curso" />
        <div className={cred.top}>
          <div className={cred.prof}>
            <Image
              className={cred.avatar}
              src={"/avatars/manuel.svg"}
              alt="Perfil do Bernardo Manuel"
              width={42}
              height={42}
              priority
            />
            <h4>Bernardo Manuel</h4>
          </div>
          <div className={cred.cadeira}>
            <h3>Cálculo Diferencial e Integral I</h3>
          </div>
        </div>
        <div className={cred.list}>
          <div className={cred.top}>
            <p>Selecione o material</p>
            <p>Data</p>
          </div>
          <div className={cred.credL}>
            {materials.map((material, index) => (
              <MaterialCard
                key={index}
                title={material.title}
                date={material.date}
              />
            ))}
          </div>
        </div>
        <Menu />
      </div>
    </Layout>
  );
}
