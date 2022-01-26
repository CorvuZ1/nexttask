import { useState } from "react";
import Head from 'next/head';
import NewsList from "../components/NewsList/NewsList";
import Layout from "../layout/Layout";
import Pagination from "../components/Pagination/Pagination";

const Home = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 6;
  const firstIndex = currentPage * newsPerPage;
  const lastIndex = firstIndex - newsPerPage;
  const news = data.slice(lastIndex, firstIndex);

  return (
    <>
      <Head>
        <title>Страница новостей</title>
      </Head>

      <Layout>
        <NewsList items={news} />
        <Pagination
          currentPage={currentPage}
          newsPerPage={newsPerPage}
          fullData={data}
          onNumberClick={value => setCurrentPage(value)}
        />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const request = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
  const data = await request.json();

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      data
    },
    revalidate: 60
  }
}

export default Home;
