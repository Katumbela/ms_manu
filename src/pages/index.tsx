import { useEffect, useState } from "react";
import Header from "../components/head";
import Image from "next/image";
import splash from "@/styles/splash.module.css";


export default function Home() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header title="Multischool AO" />
      {showSplash ? (
        <Splash />
      ) : (
        <div className={splash.container}>
          <Image
            className={splash.icon}
            src={"/img/logo.svg"}
            alt="Logotipo Multischool AO"
            width={150}
            height={150}
            priority
          />
        </div>
      )}
    </>
  );
}

export function Splash() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/welcome";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className={splash.container_s}>
        <Image src={"/img/white.png"} alt="" width={210} height={90} priority />
      </div>
    </>
  );
}
