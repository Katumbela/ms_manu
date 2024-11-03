// Lmenu.tsx

import React, { useEffect, useRef } from "react";
import styles from "../styles/Lmenu.module.css"; // Adapte o caminho conforme necessário
import Image from "next/image";
import Link from "next/link";

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

  return (
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
              className={styles.arrow}
              src={"/icons/menuL.svg"}
              alt="ba2ck"
              width={110}
              height={110}
              priority
            />
          </div>
          <ul>
            <li>
              <Image
                className={styles.arrow}
                src={"/icons/menuL/consu.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
              <Link href="/consultsM" className={styles.item}>
                <p>Consultas</p>
              </Link>
              <Image
                className={styles.arrow}
                src={"/icons/menuL/right.svg"}
                alt="ba2ck"
                width={20}
                height={20}
                priority
              />
            </li>
            <li>
              <Image
                className={styles.arrow}
                src={"/icons/menuL/transf.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
              <Link href="/transferencias/transfer" className={styles.item}>
                <p>Transferências</p>
              </Link>
              <Image
                className={styles.arrow}
                src={"/icons/menuL/right.svg"}
                alt="ba2ck"
                width={20}
                height={20}
                priority
              />
            </li>
            <li>
              <Image
                className={styles.arrow}
                src={"/icons/menuL/mens.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
              <Link
                href="/payments/instituicao/propinas"
                className={styles.item}
              >
                <p>Mensalidades</p>
              </Link>
              <Image
                className={styles.arrow}
                src={"/icons/menuL/right.svg"}
                alt="ba2ck"
                width={20}
                height={20}
                priority
              />
            </li>
            <li>
              <Image
                className={styles.arrow}
                src={"/icons/menuL/payment.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
              <Link href="/payments/nfcP" className={styles.item}>
                <p>Pagamentos</p>
              </Link>
              <Image
                className={styles.arrow}
                src={"/icons/menuL/right.svg"}
                alt="ba2ck"
                width={20}
                height={20}
                priority
              />
            </li>
            <li>
              <Image
                className={styles.arrow}
                src={"/icons/menuL/educ.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
              <Link href="/educacional/resume" className={styles.item}>
                <p>Educacional</p>
              </Link>
              <Image
                className={styles.arrow}
                src={"/icons/menuL/right.svg"}
                alt="ba2ck"
                width={20}
                height={20}
                priority
              />
            </li>
            <li>
              <Image
                className={styles.arrow}
                src={"/icons/menuL/services.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
              <Link href="/services/menu" className={styles.item}>
                <p>Serviços multischool</p>
              </Link>
              <Image
                className={styles.arrow}
                src={"/icons/menuL/right.svg"}
                alt="ba2ck"
                width={20}
                height={20}
                priority
              />
            </li>
            <li>
              <Image
                className={styles.arrow}
                src={"/icons/menuL/transf.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
              <Link href="/profile" className={styles.item}>
                <p>Definições</p>
              </Link>
              <Image
                className={styles.arrow}
                src={"/icons/menuL/right.svg"}
                alt="ba2ck"
                width={20}
                height={20}
                priority
              />
            </li>
          </ul>
        </div>
        <Link href="/login" className={styles.bottom}>
          <p>Terminar sessão</p>
        </Link>
      </div>
    </div>
  );
};

export default MenuLateral;
