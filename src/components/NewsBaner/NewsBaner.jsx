import styles from "./styles.module.css";
import '/src/helpers/formatTimeAgo.js'
import Image from './../Image/Image';
import { formatTimeAgo } from './../../helpers/formatTimeAgo';
import withSkeleton from '../../helpers/hocs/withSkeleton';

const NewsBaner = ({item}) => {
    return (
      <div className={styles.banner}>
        <Image image={item?.image}/>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    );
};

const NewsBannerWithSkeleton = withSkeleton(NewsBaner, "banner", 1);

export default NewsBannerWithSkeleton;