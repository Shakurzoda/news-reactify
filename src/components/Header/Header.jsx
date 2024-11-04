import styles from "./Header.module.css";
import { formatDate } from "/src/helpers/formatDate.js";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>NEWS REACTIFY</h1>
      <p className={styles.date}>{formatDate(new Date())}</p>
    </header>
  );
};

export default Header;
