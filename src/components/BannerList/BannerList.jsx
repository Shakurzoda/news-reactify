import styles from "./style.module.css";
import withSkeleton from "./../../helpers/hocs/withSkeleton";
import NewsBaner from "../NewsBaner/NewsBaner";

const BannerList = ({ banners }) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBaner key={banner.id} item={banner} />;
      })}
    </ul>
  );
};

const BannerListWithSkeleton = withSkeleton(BannerList, "banner", 10, "row");

export default BannerListWithSkeleton;
