import Link from "next/link"
import { useRouter } from "next/router"
import styles from "./404.module.css"

function NotFound() {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <h2 className={styles.header}>Oops! Page not found</h2>

      <p className={styles.descriptionText}>
        The page you're looking for doesn't exist or has been moved. You can go
        back to the previous page or head to the homepage.
      </p>

      <div className={styles.actions}>
        <button
          onClick={() => router.back()}
          className={styles.buttonSecondary}
        >
          ← Go Back
        </button>
        <Link href="/" className={styles.button}>
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
