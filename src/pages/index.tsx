import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import splash from "@/styles/splash.module.css";
import Layout from "@/components/Layout";

export default function Home() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout title="Bem-vindo ao Multischool Angola">
      {showSplash ? (
        <Splash />
      ) : (
        <div className={splash.container}>
          <Image
            className={splash.icon}
            src={"/img/logo.svg"}
            alt="Logotipo Multischool AO"
            width={90}
            height={90}
            priority
          />
        </div>
      )}
    </Layout>
  );
}

export function Splash() {
  const [redirecting, setRedirecting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirecting(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (redirecting) {
      router.push("/welcome");
    }
  }, [redirecting, router]);

  return (
    <>
      <div className={splash.container_s}>
        <Image src={"/img/white.png"} alt="" width={210} height={90} priority />
      </div>
    </>
  );
}
