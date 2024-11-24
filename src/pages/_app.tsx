import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ModalProvider } from "@/contexts";
import { store, persistor } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const router = useRouter();

  const checkScreenSize = () => {
    if (window.innerWidth > 440 || window.innerHeight > 956) {
      setIsSmallScreen(false);
    } else {
      setIsSmallScreen(true);
    }
  };

  useEffect(() => {
    checkScreenSize(); 
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isSmallScreen) {
      router.push("/erro-tamanho");
    }
  }, [isSmallScreen, router]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ModalProvider>
          <Component {...pageProps} />
          <Toaster />
        </ModalProvider>
      </PersistGate>
    </Provider>
  );
}
