"use client"

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ModalContextProps {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const openModal = (content: ReactNode) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setModalContent(null);
    }, 300);
  };


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      //document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      //document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 bg-opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative p-6 mx-5 bg-white rounded-md shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <button onClick={() => closeModal()} className="absolute top-0 px-3 py-1 mt-4 text-xs text-red-700 transition-all rounded-md active:bg-red-600 active:text-white right-4 bg-red-300/40">Fechar</button>
              <div className={"w-full mb-6"}>
                <Image
                  className={"m-auto"}
                  src={"/icons/menuL.svg"}
                  alt="ba2ck"
                  width={110}
                  height={110}
                  priority
                />
              </div>
              {modalContent}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
