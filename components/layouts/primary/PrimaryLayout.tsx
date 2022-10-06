import Head from "next/head";
import { ReactNode } from "react";
import styles from "./PrimaryLayout.module.scss";

export interface IPrimaryLayoutProps {
  children: ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default PrimaryLayout;
