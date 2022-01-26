import Link from "next/link";
import styles from "./NewsItem.module.sass";

const NewsItem = props => {
  const { title, id, newsSite } = props;

  return (
    <li className={styles.root}>
      <article className={styles.wrapper}>
        <h2 className={styles.title}>
          <Link href={`/news/${id}`}>
            <a className={styles.link}>{newsSite}: {title}</a>
          </Link>
        </h2>
        <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deserunt, dolorem eligendi ipsa ipsum labore libero odit quas quasi sapiente suscipit, tenetur voluptatem! Accusantium, voluptate?</p>
      </article>
    </li>
  )
}

export default NewsItem;
