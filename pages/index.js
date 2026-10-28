import { useRouter } from "next/router"
import styles from "../styles/Home.module.css"

function Home() {
  const router = useRouter()

  const carsHandler = () => {
    router.push("/cars")
  }

  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <p className={styles.subtitle}>YOUR JOURNEY STARTS HERE</p>

          <h1>
            Find Your
            <br />
            <span>Perfect Ride.</span>
          </h1>

          <p className={styles.description}>
            Discover the car that matches your lifestyle. Explore our collection
            and find your next favorite ride.
          </p>

          <button className={styles.cta} onClick={carsHandler}>
            See All Cars
            <span aria-hidden="true">→</span>
          </button>

          <div className={styles.stats}>
            <div>
              <strong>100+</strong>
              <span>Cars Available</span>
            </div>

            <div>
              <strong>50+</strong>
              <span>Happy Customers</span>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.imageWrapper}>
            <img
              src="/images/BMW-M4-Competition-xDrive.jpg"
              alt="Luxury sports car"
              className={styles.carImage}
            />
          </div>

          <div className={styles.floatingCard}>
            <span className={styles.dot} />
            <div>
              <strong>Find your next car</strong>
              <p>Ready for the road?</p>
            </div>
          </div>

          <div className={styles.circle} />
        </div>
      </section>
    </main>
  )
}

export default Home
