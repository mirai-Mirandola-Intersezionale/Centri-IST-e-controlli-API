import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>/api.mirai - API libere per tutt*</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>/api.<b>mirai</b></h1>
      
    </div>
  )
}
