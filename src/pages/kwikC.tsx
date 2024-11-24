import { ChangeEvent, KeyboardEvent, useState, useEffect } from "react";
import kwik from "../styles/kwik.module.css";
import Image from "next/image";
import PurpleButton from "@/components/buttons";
import Link from "next/link";
import Layout from "@/components/Layout";

export default function CodigoConfirmacao() {
  const [codigo, setCodigo] = useState<string[]>(Array(4).fill(""));
  const [timeLeft, setTimeLeft] = useState(119); //(1:59)
  const [resendAvailable, setResendAvailable] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setResendAvailable(true);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (value.length <= 1) {
      const newCodigo = [...codigo];
      newCodigo[index] = value;
      setCodigo(newCodigo);

      if (value !== "" && index < codigo.length - 1) {
        const nextInput = document.getElementById(`input-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !codigo[index] && index > 0) {
      const prevInput = document.getElementById(`input-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <Layout title="Kwik | Multischool Angola">
      <div className={kwik.container}>
        <div className={kwik.progress}>
          <div className={`${kwik.line} ${kwik.line_active}`}></div>
          <div className={`${kwik.line} ${kwik.line_active}`}></div>
          <div className={`${kwik.line} ${kwik.line_active}`}></div>
        </div>
        <div className={kwik.top}>
          <Link href="matricula" className={kwik.back}>
            <Image
              className={kwik.arrow}
              src={"/icons/left_arrow.svg"}
              alt="back"
              width={25}
              height={25}
              priority
            />
          </Link>
          <div className={kwik.icon}>
            <Image
              className={kwik.logo}
              src={"/img/logo.svg"}
              alt="logo"
              width={50}
              height={50}
              priority
            />
          </div>
        </div>
        <div className={kwik.header}>
          <h1>Agora, basta confirmares a tua conta Kwik!</h1>
          <p>Com a conta Kwik, vais maximizar o teu potencial acadêmico.</p>
        </div>

        <div className={kwik.insName}>
          <p>Conta Kwik</p>
        </div>
        <div className={kwik.info}>
          <p>
            Enviámos um código de confirmação para o número:{" "}
            <Link href="matricula" className={kwik.phoneN}>
              +244 941 767 307
            </Link>
          </p>
        </div>

        <div className={kwik.inputs}>
          <div
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              border: "2px solid #919191",
              padding: "5px",
              borderRadius: "25px",
            }}
          >
            {codigo.map((digit, index) => (
              <input
                key={index}
                id={`input-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                style={{
                  width: "40px",
                  height: "40px",
                  fontSize: "20px",
                  textAlign: "center",
                  border: "none",
                  borderBottom: "2px solid #919191",
                  borderRadius: "4px",
                  outline: "none",
                  background: "transparent",
                  color: "#6c5f8d",
                }}
              />
            ))}
          </div>
        </div>

        <div className={kwik.newCode}>
          {resendAvailable ? (
            <p>
              <Link href="matricula" className={kwik.resend}>
                Reenviar código de confirmação
              </Link>
            </p>
          ) : (
            <p>
              Solicitar novo código de confirmação dentro de{" "}
              <span className={kwik.countdown}>{formatTime(timeLeft)}</span>
            </p>
          )}
        </div>
        <div className={kwik.cta}>
          <PurpleButton
            className={kwik.button}
            description="Continuar"
            redirect="/home"
          ></PurpleButton>
        </div>
      </div>
    </Layout>
  );
}
