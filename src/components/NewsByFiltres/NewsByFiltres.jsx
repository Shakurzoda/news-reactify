import styles from "./styles.module.css";
import Pagination from "./../Pagination/Pagination";
import NewsList from "./../NewsList/NewsList";
import { PAGE_SIZE, TOTAL_PAGES } from "./../../constants/constants";
import NewsFiltres from "../NewsFiltres/NewsFiltres";
import { useFiltres } from "../../helpers/hooks/useFiltres";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getNews } from "../../api/apiNews";

const NewsByFiltres = () => {
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
  const handleNextPage = () => {
    if (filtres.page_number < TOTAL_PAGES) {
      changeFilter("page_number", filtres.page_number + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filtres.page_number > 1) {
      changeFilter("page_number", filtres.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilter("page_number", pageNumber);
  };

  return (
    <section className={styles.section}>
      <NewsFiltres filtres={filtres} changeFilter={changeFilter} />

      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filtres.page_number}
      />

      <NewsList isLoading={isLoading} news={data?.news} />

      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filtres.page_number}
      />
    </section>
  );
};

export default NewsByFiltres;
