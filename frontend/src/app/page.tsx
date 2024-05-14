import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./components/home";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <HomePage/>
      </div>
    </main>
  );
}
