import styles from "./NewsList.module.sass";
import NewsItem from "../NewsItem/NewsItem";

const NewsList = ({ items }) => (
  <ul className={styles.root}>
    {items.map(item => (
      <NewsItem
        key={item.id}
        id={item.id}
        title={item.title}
        newsSite={item.newsSite}
      />
    ))}
  </ul>
)

export default NewsList;
