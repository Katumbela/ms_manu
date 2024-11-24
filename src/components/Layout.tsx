// Layout.tsx
import Head from "next/head";
import React from "react";
import { LayoutPropsP } from "@/types/LayoutProps";

const Layout = ({ title, children }: LayoutPropsP) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
