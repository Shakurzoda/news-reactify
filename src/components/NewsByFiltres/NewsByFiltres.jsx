import styles from "./styles.module.css";
import Pagination from "./../Pagination/Pagination";
import NewsList from "./../NewsList/NewsList";
import { TOTAL_PAGES } from "./../../constants/constants";
import NewsFiltres from "../NewsFiltres/NewsFiltres";

const NewsByFiltres = ({ filtres, changeFilter, isLoading, news }) => {
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

      <NewsList isLoading={isLoading} news={news} />

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
