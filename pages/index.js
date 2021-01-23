import Head from 'next/head'
import styles from '../styles/Home.module.css'
import '@animxyz/core'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <XyzTransition xyz="fade up big">
        {true && <h1>/api.<b>mirai</b></h1>}
      </XyzTransition>
      
    </div>
  )
}
