import styles from "../../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Link href="/">
        <img className={styles.logo} src="/img/gnglogo.png"></img>
      </Link>
    </div>
  );
}
