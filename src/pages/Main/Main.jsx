import styles from "./styles.module.css";
import { getNews } from "/src/api/apiNews.js";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE } from "../../constants/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFiltres } from "./../../helpers/hooks/useFiltres";
import LatestNews from "./../../components/LatestNews/LatestNews";
import NewsByFiltres from "../../components/NewsByFiltres/NewsByFiltres";

const Main = () => {
  const { filtres, changeFilter } = useFiltres({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeyWords = useDebounce(filtres.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    ...filtres,
    keywords: debouncedKeyWords,
  });

  return (
    <main className={styles.main}>
      <LatestNews isLoading={isLoading} banners={data && data.news} />

      <NewsByFiltres
        news={data?.news}
        isLoading={isLoading}
        filtres={filtres}
        changeFilter={changeFilter}
      />
    </main>
  );
};

export default Main;
