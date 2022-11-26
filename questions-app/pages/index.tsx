import Head from 'next/head'
import Image from 'next/image'
import Questions from "../components/questions"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Any Questions? | AI Generated Questions</title>
        <meta name="description" content="Generated questions to ask anybody" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Questions />
    </div>
  )
}
