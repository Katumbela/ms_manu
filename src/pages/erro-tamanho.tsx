import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import erro from "@/styles/erroTamanho.module.css";
import Layout from "@/components/Layout";

export default function ErroTamanho() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const router = useRouter();

  const checkScreenSize = () => {
    if (window.innerWidth <= 440 && window.innerHeight <= 956) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  useEffect(() => {
    checkScreenSize(); 
    window.addEventListener("resize", checkScreenSize); 
    return () => window.removeEventListener("resize", checkScreenSize); 
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      router.push("/welcome"); 
    }
  }, [isSmallScreen, router]);

  return (
    <Layout title="Dispositivo não suportado!">
      <div className={erro.container}>
        <Image
          className={erro.icon}
          src={"/img/logo.svg"}
          alt="Logotipo Multischool AO"
          width={90}
          height={90}
          priority
        />
        <p>
          Lamentamos, mas o tamanho do seu dispositivo ainda não é compatível.
          Por favor, aceda com um dispositivo de tamanho menor.
        </p>
      </div>
    </Layout>
  );
}
