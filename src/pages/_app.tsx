import { ModalProvider } from "@/contexts";
import { store, persistor } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
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
