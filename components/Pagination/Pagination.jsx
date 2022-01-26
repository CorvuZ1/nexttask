import styles from "./Pagination.module.sass";

const Pagination = props => {
  const { newsPerPage, fullData, onNumberClick, currentPage } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(fullData.length / newsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className={styles.root}>
      {pageNumbers.map(number => {
        const buttonClassName = currentPage === number ? [styles.button, styles.selectedButton].join(" ") : styles.button;

        return (
          <li className={styles.item} key={number} onClick={() => onNumberClick(number)}>
            <button className={buttonClassName}>
              {number}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default Pagination;
