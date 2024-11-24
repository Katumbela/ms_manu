import React, { useEffect, useRef } from "react";
import styles from "../styles/Lmenu.module.css";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { logout } from "@/store";

interface MenuItem {
  icon: string;
  label: string;
  link: string;
}

const menuItems: MenuItem[] = [
  { icon: "/icons/menuL/consu.svg", label: "Consultas", link: "/consultsM" },
  {
    icon: "/icons/menuL/transf.svg",
    label: "Transferências",
    link: "/transferencias/transfer",
  },
  {
    icon: "/icons/menuL/mens.svg",
    label: "Mensalidades",
    link: "/payments/instituicao/propinas",
  },
  {
    icon: "/icons/menuL/payment.svg",
    label: "Pagamentos",
    link: "/payments/nfcP",
  },
  {
    icon: "/icons/menuL/educ.svg",
    label: "Educacional",
    link: "/educacional/resume",
  },
  {
    icon: "/icons/menuL/services.svg",
    label: "Serviços multischool",
    link: "/services/menu",
  },
  {
    icon: "/icons/menuL/transf.svg",
    label: "Definições",
    link: "/profile",
  },
];

const MenuLateral = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleTouchStart = (event: React.TouchEvent) => {
    const startX = event.touches[0].clientX;

    const handleTouchMove = (moveEvent: TouchEvent) => {
      const currentX = moveEvent.touches[0].clientX;
      if (startX - currentX > 50) {
        onClose();
        document.removeEventListener("touchmove", handleTouchMove);
      }
    };

    document.addEventListener("touchmove", handleTouchMove);

    const handleTouchEnd = () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };

    document.addEventListener("touchend", handleTouchEnd);
  };

  const dispatch = useDispatch()

  return (
    <>
    <div
        className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
        onClick={onClose}
      />
    <div
      className={`${styles.menuLateral} ${
        isOpen ? styles.open : styles.closed
      }`}
      ref={menuRef}
      onTouchStart={handleTouchStart}
    >
      <button onClick={onClose} className={styles.closeButton}>
        ✖
      </button>
      <div className={styles.container}>
        <div className={styles.first}>
          <div className={styles.logo}>
            <Image
              src="/icons/menuL.svg"
              alt="Logo"
              width={110}
              height={110}
              priority
            />
          </div>
          <ul>
            {menuItems.map(({ icon, label, link }, index) => (
              <li key={index}>
                <Image src={icon} alt={label} width={25} height={25} priority />
                <Link href={link} className={styles.item}>
                  <p>{label}</p>
                </Link>
                <Image
                  src="/icons/menuL/right.svg"
                  alt="Arrow"
                  width={20}
                  height={20}
                  priority
                />
              </li>
            ))}
          </ul>
        </div>
        <p onClick={ () => dispatch(logout())} className={styles.bottom}>
          <p>Terminar sessão</p>
        </p>
      </div>
    </div>
    </>
  );
};

export default MenuLateral;
