import Link from "next/link";
import styles from "./SidebarLayout.module.scss";

export interface ISidebarLayoutProps {}

const SidebarLayout: React.FC<ISidebarLayoutProps> = () => {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  );
};

export default SidebarLayout;
