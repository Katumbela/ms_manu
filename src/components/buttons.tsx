import Image from "next/image";
import btn from "../styles/buttons.module.css";

export function ProofButton() {
  return (
    <button className={btn.downloadButton}>
      <span className={btn.icon}>
        {" "}
        <Image src={"/icons/download.svg"} width={20} height={20} alt="" />
      </span>{" "}
      Baixar comprovativo
    </button>
  );
}


interface ButtonProps {
  description: string;
  redirect?: string;
  variant?: "purple" | "light" | "light2" | "purple2" | "download";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  loading?: boolean
  onClick?: () => void;
}

export default function Button({
  description,
  redirect,
  variant = "purple",
  leftIcon,
  rightIcon,
  className = "",
  loading = false,
  onClick,
}: ButtonProps) {

  const variantClass = {
    purple: `${btn.btn} ${btn.btn_purple}`,
    light: `${btn.btn} ${btn.btn_light}`,
    light2: `${btn.btn} ${btn.btn_light}`,
    purple2: `${btn.btn2} ${btn.btn_purple}`,
    download: `${btn.downloadButton}`,
  }[variant];


  return (
    <button
      className={`${variantClass} ${className}`}
      onClick={onClick}
      disabled={loading}
    >
      {variant === "download" ? (
        <>
          <span className={btn.icon}>
            <Image src="/icons/download.svg" width={20} height={20} alt="" />
          </span>
          {description || "Baixar comprovativo"}
        </>
      ) : (
        <a href={redirect}>
          {leftIcon && <span className={btn.icon}>{leftIcon}</span>}
          {description}
          {rightIcon && <span className={btn.icon}>{rightIcon}</span>}
        </a>
      )}
    </button>
  );
}

