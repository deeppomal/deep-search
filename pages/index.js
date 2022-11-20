import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { SearchHome } from './component/SearchHome'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Deep Search</title>
        <meta name="description" content="Learn things efficiently" />
      </Head>

      <main className={styles.main}>
        <SearchHome />
      </main>
    </div>
  )
}
