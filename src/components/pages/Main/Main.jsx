import { useEffect, useState } from "react";
import NewsBaner from "../../NewsBaner/NewsBaner";
import styles from "./styles.module.css";
import { getNews } from "/src/api/apiNews.js";
import NewsList from "../../NewsList/NewsList";

const Main = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const respons = await getNews();
        setNews(respons.news);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news.length > 0 ? <NewsBaner item={news[0]} /> : null}
      <NewsList news={news} />
    </main>
  );
};

export default Main;
