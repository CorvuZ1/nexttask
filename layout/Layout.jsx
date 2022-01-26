import styles from './Layout.module.sass';
import Header from "../components/Header/Header";

const Layout = props => {
  const { children, size = "large" } = props;
  const classes = [styles.root, styles[size + "Width"]];

  return (
    <>
      <Header/>

      <main className={classes.join(" ")}>
        {children}
      </main>
    </>
  )
}

export default Layout;