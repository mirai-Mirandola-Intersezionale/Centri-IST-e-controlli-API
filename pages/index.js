import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Benvenut* su /api.<b>mirai</b>
        </h1>

        <p className={styles.description}>
          Le API per trovare i luoghi sicuri dove chiedere aiuto.
        </p>

        <div className={styles.grid}>
            <Link href="/docs" className={styles.card}><h3>Documentazione</h3></Link>
            <p>Scopri i metodi per utilizzare la nostra lista di API nella tua app o sito web.</p>
        </div>
      </main>

      <footer className={styles.footer}>
      ©{new Date().getFullYear()} Dati raccolti da <a href="https://www.mirai.plus" target="_blank" rel="noopener noreferrer">@mirai</a>
      </footer>
    </div>
  )
}
