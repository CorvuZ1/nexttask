import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from "../../layout/Layout";
import styles from "./NewsData.module.sass";

const NewsId = props => {
  const { title, newsSite, publishedAt } = props;
  const router = useRouter();
  const formattedDate = new Date(publishedAt).toLocaleDateString();

  const goHome = () => {
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Layout size="small">
        <div className={styles.root}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.subtitleInfo}>
            <span className={styles.date}>{newsSite} </span>
            <span className={styles.source}>{formattedDate}</span>
          </div>
          <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequatur consequuntur culpa deserunt doloremque dolorum enim error ex, iure magni officia omnis placeat porro quaerat quia quidem quis quisquam rerum saepe <br/><br/> ut vel veniam vitae voluptatem! Consequatur doloremque enim eveniet, facere id illum molestias suscipit unde velit veniam. Ab asperiores aspernatur assumenda doloribus ex laboriosam maxime obcaecati quasi rem sapiente similique ut, vel. A alias aperiam architecto consectetur deleniti distinctio dolor dolore eaque eius, eum eveniet harum id illo impedit laudantium molestias nemo neque nisi nobis non obcaecati optio pariatur quaerat quo ratione recusandae rem repellat tempore, vel vero? Consectetur eius laudantium nemo numquam officia provident. Aliquid animi deserunt dicta dolores facere, harum molestiae molestias pariatur quaerat. Asperiores assumenda distinctio dolore esse eum exercitationem fugit harum ipsa magnam magni molestiae molestias nemo neque nobis omnis optio placeat porro quam sapiente temporibus tenetur <br/><br/> ut, voluptates. Autem dolores eaque explicabo harum natus quidem quisquam sequi! Fugiat incidunt ipsam pariatur possimus sequi. Animi atque blanditiis cupiditate dicta, doloribus ipsam iure laboriosam, minus mollitia, odit pariatur quasi quibusdam quidem reiciendis sunt totam voluptate voluptatem! Accusantium adipisci, consectetur cupiditate doloribus earum ex fugiat hic ipsam itaque laborum libero natus neque repudiandae rerum temporibus? Cum eaque necessitatibus quibusdam quo ratione soluta veritatis? Aliquid enim explicabo modi nam officia omnis, porro quaerat sequi suscipit. Assumenda aut deleniti distinctio dolore doloremque ducimus ex explicabo hic officiis optio quae qui quo reiciendis repudiandae sed, sit, tenetur totam unde. Accusantium aliquid eius eos error ipsa, laudantium maiores? Ab aperiam at atque commodi, consectetur delectus dicta, dolor est exercitationem expedita fuga hic incidunt inventore ipsum iusto maxime nulla perferendis quaerat quasi quibusdam quod ratione reiciendis rem <br/><br/> repellendus rerum veritatis voluptas? Consequatur dolorem ipsam minima mollitia nobis pariatur tempore</p>
          <button className={styles.goHomeButton} onClick={goHome}>На главную страницу</button>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles`);
  const data = await request.json();



  return {
    paths: data.map(news => {
      return {
        params: {
          "news-id": news.id.toString()
        }
      }
    }),
    fallback: "blocking"
  }
}

export async function getStaticProps(ctx) {
  const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${ctx.params["news-id"]}`);
  const data = await request.json();

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      title: data.title,
      newsSite: data.newsSite,
      publishedAt: data.publishedAt
    },
    revalidate: 60
  }
}

export default NewsId;
