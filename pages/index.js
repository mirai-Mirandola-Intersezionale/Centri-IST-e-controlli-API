import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Benvenut* su api.mirai
        </h1>

        <p className={styles.description}>
          Le API per trovare i luoghi sicuri dove chiedere aiuto.
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentazione &rarr;</h3>
            <p>Scopri i metodi per utilizzare la nostra lista di API nella tua app.</p>
          </a>

          
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dati raccolti da @mirai
        </a>
      </footer>
    </div>
  )
}
