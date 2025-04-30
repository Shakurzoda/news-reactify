import styles from "./styles.module.css";
import LatestNews from "./../../components/LatestNews/LatestNews";
import NewsByFiltres from "../../components/NewsByFiltres/NewsByFiltres";

const Main = () => {
  return (
    <main className={styles.main}>
      <LatestNews />

      <NewsByFiltres />
    </main>
  );
};

export default Main;
