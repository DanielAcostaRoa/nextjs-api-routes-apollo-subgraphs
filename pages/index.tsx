import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <Link href="/products">
            <a className={styles.card}>
              <h2>Products &rarr;</h2>
            </a>
          </Link>
          <Link href="/users">
            <a className={styles.card}>
              <h2>Users &rarr;</h2>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
