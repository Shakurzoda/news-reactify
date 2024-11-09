import { useFetch } from "../../helpers/hooks/useFetch";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import styles from "./styles.module.css";
import { getCategories } from "/src/api/apiNews.js";

const NewsFiltres = ({ filtres, changeFilter }) => {
  const { data: dataCategories } = useFetch(getCategories);
  return (
    <div className={styles.filtres}>
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
    </div>
  );
};

export default NewsFiltres;
