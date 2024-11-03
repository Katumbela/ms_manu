// pages/index.js
import VideoPlayer from "@/components/videoP";
import player from "@/styles/educacional/player.module.css";
import Image from "next/image";
import Head from "next/head";
import Top from "@/components/top";
import Header from "@/components/head";
import Menu from "@/components/menu";
import Link from "next/link";

export default function Player() {
  return (
    <div className={player.container}>
      <Header title="Educacional - Bernardo Manuel"></Header>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>
      <Top information="Aulas online" pagina="grelhaAulas"></Top>
      <div className={player.resume}>
        <div className={player.info}>
          <Image
            className={player.avatar}
            src={"/avatars/manuel.svg"}
            alt="ba2ck"
            width={70}
            height={70}
            priority
          />
          <div className={player.inner}>
            <p className={player.name}>Bernardo Gelson Manuel</p>
            <p className={player.desc}>
              <span className={player.cadeira}>
                Cálculo Diferencial e Integral I
              </span>
            </p>
          </div>
        </div>
      </div>
      <VideoPlayer />
      <div className={player.cab}>
        <div className={player.info}>
          <h3>
            Cálculo Diferencial e Integral I - CÁP I: Introdução às Funções
          </h3>
        </div>
        <div className={player.details}>
          <div className={player.views}>
            <Image src="/bg/aulas/eye.svg" width={30} height={30} alt="" />
            <p>230 visualizações</p>
          </div>
          <div className={player.likes}>
            <Image src="/bg/aulas/like.svg" width={30} height={30} alt="" />
            <p className={player.likes2}>230 gostos</p>
          </div>
        </div>
      </div>
      <div className={player.messages}>
        <div className={player.message}>
          <div className={player.image}>
            <Image
              className={player.avatar}
              src={"/avatars/manuel.svg"}
              alt="ba2ck"
              width={50}
              height={50}
              priority
            />
          </div>
          <div className={player.content}>
            <p className={player.name}>Zacarias Manuel Francisco</p>
            <p className={player.message2}>Amei a aula!</p>
          </div>
        </div>
        <div className={player.message}>
          <div className={player.image}>
            <Image
              className={player.avatar}
              src={"/avatars/manuel.svg"}
              alt="ba2ck"
              width={50}
              height={50}
              priority
            />
          </div>
          <div className={player.content}>
            <p className={player.name}>Zacarias Manuel Francisco</p>
            <p className={player.message2}>Amei a aula!</p>
          </div>
        </div>
        <div className={player.message}>
          <div className={player.image}>
            <Image
              className={player.avatar}
              src={"/avatars/manuel.svg"}
              alt="ba2ck"
              width={50}
              height={50}
              priority
            />
          </div>
          <div className={player.content}>
            <p className={player.name}>Zacarias Manuel Francisco</p>
            <p className={player.message2}>Amei a aula!</p>
          </div>
        </div>
        <div className={player.message}>
          <div className={player.image}>
            <Image
              className={player.avatar}
              src={"/avatars/manuel.svg"}
              alt="ba2ck"
              width={50}
              height={50}
              priority
            />
          </div>
          <div className={player.content}>
            <p className={player.name}>Zacarias Manuel Francisco</p>
            <p className={player.message2}>Amei a aula!</p>
          </div>
        </div>
      </div>
      <div className={player.inputContainer}>
        <button className={player.likeButton}>
          <svg
            width="24"
            height="24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
        <input
          className={player.input}
          placeholder="Escreva o seu comentário"
        />
        <button className={player.sendButton}>
          <svg
            width="24"
            height="24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
