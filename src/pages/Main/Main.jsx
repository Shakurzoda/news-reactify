import NewsBaner from "/src/components/NewsBaner/NewsBaner";
import styles from "./styles.module.css";
import { getNews, getCategories } from "/src/api/apiNews.js";
import NewsList from "/src/components/NewsList/NewsList";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "./../../components/Search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFiltres } from "./../../helpers/hooks/useFiltres";

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

  const { data: dataCategories } = useFetch(getCategories);

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
    <main className={styles.main}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          selectedCategory={filtres.category}
          setSelectedCategory={(category) => changeFilter("category", category)}
        />
      ) : null}

      <Search
        keywords={filtres.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />

      <NewsBaner
        isLoading={isLoading}
        item={data && data.news && data.news[0]}
      />

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
    </main>
  );
};

export default Main;
