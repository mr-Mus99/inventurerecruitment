import styles from "./page.module.css";
import Footer from "./components/footer/Footer";
import Navbar from "@/app/components/Navbar/navbar";
export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.Container}>
          <section className={styles.hero}>
            <h1>Recruiting Without Limits</h1>
          </section>

          <section className={styles.description}>
            <h2>Speed and Scale</h2>
            <p>
              We’re building a new model for recruitment.
              One that combines revenue sharing,
              a marketing engine,
              a competitive broker community,
              and an AI-driven learning platform
            </p>

          </section>
        </div>
      </main>
      <Footer />
    </>

  );
}
