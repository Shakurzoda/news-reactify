import { useEffect, useState } from "react";
import NewsBaner from "/src/components/NewsBaner/NewsBaner";
import styles from "./styles.module.css";
import { getNews } from "/src/api/apiNews.js";
import NewsList from "/src/components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true)
        const respons = await getNews();
        setNews(respons.news);
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news.length > 0 && !isLoading ? (
        <NewsBaner item={news[0]} />
      ) : (
        <Skeleton type={"banner"} count={1} />
      )}
      {!isLoading ? (
        <NewsList news={news} />
      ) : 
        <Skeleton type={"item"} count={10} />
      }
    </main>
  );
};

export default Main;
