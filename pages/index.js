import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import PageLayaout from '../components/PageLayout'

export default function Home({articles}) {

  return (
    <PageLayaout title='NewsApp - Home'>
    <div className={styles.container}>
     {articles.length === 0 && <p>No hay articulos</p>}
     {articles.length > 0 && articles.map((article,index) => (
          <article key={index}>
            <img 
            width={450} 
            height={300} 
            src={article.urlToImage} 
            alt={`Image for article' ${article.title}`}
            layout='responsive'
            />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </article>
      ))}
    </div>
    </PageLayaout>
  )
}

export async function getStaticProps(){
  const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-08-24E&sortBy=publishedAt&apiKey=3ea613a398da411cb09f26d42a6fd958')
  const {articles} = await response.json()
    return {
      props: {
        articles
      }
    }
  }

