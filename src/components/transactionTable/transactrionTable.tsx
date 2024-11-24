/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import { AbreviateString, NumberUtils, StringUtils } from "@/utils";
import { routes } from "@/infra";
import Link from "next/link";
import type { Transaction } from "@/infra/interfacess";
import home from "@/styles/resumeHome.module.css";
import { useModal } from "@/contexts";
import { useAppSelector } from "@/hooks";
import { selectIsAuthenticated } from "@/store";
import Image from "next/image";

interface TransactionListProps {
  transactions: Transaction[];
  showShowMore?: boolean;
}

const abbreviateText = (text: string, maxLength: number): string => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  showShowMore = true,
}) => {
  const { openModal } = useModal();
  const isAuth = useAppSelector(selectIsAuthenticated);

  const handleTransactionClick = (transaction: Transaction) => {
    const modalContent = (
      <div>
        <h2 className="mb-2 font-thin text-md">
          {transaction.description || "Transação"}
        </h2>
        <p className="text-sm">
          <strong>Valor:</strong>{" "}
          {NumberUtils.formatCurrency(transaction.amount)}
        </p>
        <p className="text-sm">
          <strong>Data:</strong>{" "}
          {new Date(transaction.createdAt).toLocaleDateString()}
        </p>
        <p className="text-sm">
          <strong>Status:</strong>{" "}
          <span className="underline">
            {transaction.status === "approved"
              ? "Aprovada"
              : transaction.status === "success"
              ? "Sucesso"
              : transaction.status === "failed"
              ? "Falhou"
              : "Pendente"}
          </span>
        </p>
      </div>
    );
    openModal(modalContent);
  };

  useEffect(() => {
    if (!isAuth) {
      // Redirecionar se não autenticado
      // window.location.href = routes.WELCOME_ROUTE;
    }
  }, [isAuth]);

  return (
    <div className={home.container}>
      <div className={home.content}>
        <div className={home.movimentos}>
          <div className={home.top}>
            <p>Resumo</p>
            {showShowMore && (
              <Link href="/consultas/movimentos" className={home.subtitle}>
                <u>Ver mais</u>
              </Link>
            )}
          </div>
          {transactions.length === 0 ? (
            <p>Nenhuma transação encontrada.</p>
          ) : (
            transactions.slice(0, 5).map(
              (
                transaction // Limitar a 5 transações
              ) => (
                <div
                  key={transaction.id}
                  className={home.details}
                  onClick={() => handleTransactionClick(transaction)}
                >
                  <div className={home.icon}>
                    <Image
                      className={home.avatar}
                      src="/icons/cons/money.svg"
                      alt="Ícone de transação"
                      width={30}
                      height={30}
                      priority
                    />
                  </div>
                  <div className={home.desc}>
                    <p>{AbreviateString.abbreviate(transaction.description || "", 50) || "Sem descrição"}</p>
                    <small>
                      {new Date(transaction.createdAt).toLocaleDateString()}
                    </small>
                  </div>
                  <div className={home.amount}>
                    <p
                      className={`${home.price} ${
                        transaction.type === "credit"
                          ? home.success
                          : home.danger
                      }`}
                    >
                      {transaction.type === "credit" ? "+" : "-"}
                      {NumberUtils.formatCurrency(transaction.amount)}
                    </p>
                  </div>
                </div>
              )
            )
          )}
        </div>
      </div>
    </div>
  );
};
