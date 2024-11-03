import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
  // Animação para a entrada do modal (de baixo para cima)
  const modalVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
    exit: { y: '100%', opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <>
      {isOpen && (
        <div className=''>
          {/* Background escuro */}
          <motion.div
            className="fixed top-0 bottom-0 left-0 right-0 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose} // Fecha o modal ao clicar no fundo
          ></motion.div>

          {/* Modal com animação */}
          <motion.div
            className={`fixed bottom-0 left-0 right-0 p-5 bg-white rounded-t-2xl ${className}`}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div onClick={onClose} className="w-16 px-6 py-1 mx-auto mb-8 rounded-full bg-slate-300"></div>
            {/* Conteúdo do modal passado via children */}
            {children}
          </motion.div>
        </div>
      )}
    </>
  );
};

