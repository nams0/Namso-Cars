import styles from "./Layout.module.css"
import Link from "next/link"

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>Namso Cars</h2>
          <p>Discover. Choose. Drive.</p>
        </Link>
      </header>

      <div className={styles.container}>{children}</div>

      <footer className={styles.footer}>
        Namso Cars <code className={styles.code}>Next.js</code> project |{" "}
        <a href="https://github.com/nams0" target="_blank">
          Namso
        </a>{" "}
        &copy;
      </footer>
    </>
  )
}

export default Layout
