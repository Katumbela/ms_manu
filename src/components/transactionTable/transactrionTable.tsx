"use client";
import React, { useEffect } from 'react';
import { FaMoneyBillWave, FaRegMoneyBillAlt } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { IconType } from 'react-icons';
import { NumberUtils } from '@/utils';
import { routes } from '@/infra';
import Link from 'next/link';
import type { Transaction } from '@/infra/interfacess';

import { useModal } from '@/contexts';
import { FaHourglass } from 'react-icons/fa6';
import { useAppSelector } from '@/hooks';
import { selectIsAuthenticated } from '@/store';

interface TransactionListProps {
  transactions: Transaction[];
  showShowMore?: boolean;
}

const getIcon = (type: 'credit' | 'debit'): IconType => {
  switch (type) {
    case 'credit':
      return GiReceiveMoney; // Recebimento
    case 'debit':
      return FaMoneyBillWave; // Saída
    default:
      return FaRegMoneyBillAlt; // Transação padrão
  }
};

const getStatusColor = (status: 'approved' | 'pending' | 'success' | 'failed'): string => {
  return status === 'approved' || 'success' ? 'text-green-500' : 'text-orange-500'; // Verde para aprovado, laranja para pendente
};

const NoTransactions: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 text-center">
      <FaHourglass className="mb-2 text-4xl text-gray-400 rotate-45 animate-pulse-slow" />
      <p className="text-gray-600 text-md">Nenhuma transação encontrada</p>
      <p className="text-xs text-gray-500">Você ainda não realizou nenhuma transação.</p>
      <br />
      <br />
    </div>
  );
}; 


const abbreviateText = (text: string, maxLength: number): string => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
};

export const TransactionList: React.FC<TransactionListProps> = ({ transactions, showShowMore = true }) => {
  const { openModal } = useModal();
  const isAuth = useAppSelector(selectIsAuthenticated)

  const handleTransactionClick = (transaction: Transaction) => {
    const modalContent = (
      <div>
        <h2 className="mb-2 font-thin text-md">{transaction.description || 'Transação'}</h2>
        <p className='text-sm'><strong>Valor:</strong> {NumberUtils.formatCurrency(transaction.amount)}</p>
        <p className='text-sm'><strong>Data:</strong> {new Date(transaction.createdAt).toLocaleDateString()}</p>
        <p className='text-sm'><strong>Status:</strong> <span className="underline">{transaction.status === 'approved' ? 'Aprovada' : transaction.status === 'success' ? 'Sucesso' : transaction.status === 'failed' ? 'Falhou' : 'Pendente'}</span></p>
      </div>
    );
    openModal(modalContent);
  };


  useEffect(() => {
    if (!isAuth) {
      //  window.location.href = routes.WELCOME_ROUTE
    }
  }, [])
  return (
    <div className=''>
      <div className="p-4 rounded-lg shadow-md bg-purple-50">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-primary">Resumo</h3>
          {showShowMore && (
            <Link href={routes.CONSULT_MOVMENTS_ROUTE} className="font-semibold text-primary">
              Ver mais
            </Link>
          )}
        </div>
        {transactions.length === 0 ? ( // Verifica se não há transações
          <NoTransactions /> // Exibe mensagem e ícone se não houver transações
        ) : (
          <ul>
            {transactions.map((transaction) => {
              const Icon = getIcon(transaction.type);
              const amountColor = transaction.type === 'debit' ? 'text-red-500' : 'text-green-500';

              return (
                <li
                  key={transaction._id}
                  className="flex items-center justify-between py-3 border-b-2 border-gray-200 cursor-pointer last:border-b-0"
                  onClick={() => handleTransactionClick(transaction)} // Adiciona o evento de clique
                >
                  <div className="flex items-center">
                    <div className="p-3 bg-white rounded-full shadow-md">
                      <Icon className="text-lg text-primary" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-sm text-gray-900">{abbreviateText(transaction.description || 'Transação', 22)}</p> {/* Texto abreviado */}
                      <p className="text-xs text-gray-500">{new Date(transaction.createdAt).toLocaleDateString()}</p>
                      <span className={`text-xs ${getStatusColor(transaction.status)}`}>
                        {transaction.status === 'approved' ? 'Aprovada' : transaction.status === 'success' ? 'Sucesso' : transaction.status === 'failed' ? 'Falhou' : 'Pendente'}
                      </span>
                    </div>
                  </div>
                  <div className={`font-semibold text-xs ${amountColor}`}>
                    {transaction.type === 'debit' ? '-' : '+'} {NumberUtils.formatCurrency(transaction.amount)}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
