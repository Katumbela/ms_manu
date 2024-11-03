import { ChangeEvent, KeyboardEvent, useState } from "react";
import kwik from "../styles/kwik.module.css";
import account from "../styles/account.module.css";
import Image from "next/image";
import PurpleButton from "@/components/buttons";
import Link from "next/link";

export default function CodigoConfirmacao() {
  const [codigo, setCodigo] = useState<string[]>(Array(4).fill(""));

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
    <div className={account.container}>
      <div className={account.progress}>
        <div className={`${account.line} ${account.line_active}`}></div>
        <div className={`${account.line} ${account.line_active}`}></div>
        <div className={`${account.line} ${account.line_active}`}></div>
      </div>
      <div className={account.top}>
        <Link href="matricula" className={account.back}>
          <Image
            className={account.arrow}
            src={"/icons/left_arrow.svg"}
            alt="ba2ck"
            width={30}
            height={30}
            priority
          />
        </Link>
        <div className={account.icon}>
          <Image
            className={account.logo}
            src={"/img/logo.svg"}
            alt="ba2ck"
            width={90}
            height={90}
            priority
          />
        </div>
      </div>
      <div className={account.header}>
        <h1>Agora, basta confirmares a tua conta Kwik!</h1>
        <p>Com a conta Kwik, vais maximizar o teu potencial acadêmico.</p>
      </div>

      <div className={account.insName}>
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

      <div className={account.inputs}>
        <div
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            border: "2px solid #919191",
            padding: "10px",
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
        <p>
          Solicitar novo código de confirmação dentro de{" "}
          <span className={kwik.countdown}>1:59</span>
        </p>
      </div>
      <div className={kwik.cta}>
        <PurpleButton description="Continuar" redirect="/home"></PurpleButton>
      </div>
    </div>
  );
}
