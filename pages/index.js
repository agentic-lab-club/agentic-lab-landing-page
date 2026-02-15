import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import SnowAnimation from '@components/SnowAnimation';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Agentic Lab - AI Community & Club</title>
        <meta name="description" content="Welcome to Agentic Lab - AI Community and Club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SnowAnimation />
      <Header />

      <main>
        <div className="container">
          <section className={styles.hero}>
            <h1 className={styles.title}>Welcome to Agentic Lab!</h1>
            <p className={styles.subtitle}>
              AI Community, Innovation, and Collaboration
            </p>
            <p className={styles.description}>
              This site is your hub for connecting with our AI community, learning about our projects, 
              and joining our collaborative initiatives. Check out our socials to connect with us!
            </p>
          </section>

          <div className={styles.contentWrapper}>
            <div className={styles.mainContent}>
              <div className={styles.contentSection}>
                <div className={styles.textContent}>
                  <h2>Hello! Welcome to Agentic Lab!</h2>
                  <p>
                    My name is Agentic Lab, and we're building the future of AI innovation! Welcome in!
                  </p>
                  <p>
                    We're a community of AI enthusiasts, developers, and innovators working on cutting-edge 
                    artificial intelligence projects and applications.
                  </p>
                  <p>
                    We've been passionate about AI and technology since our inception, and this is us 
                    finally unleashing our creative potential~
                  </p>
                </div>

                <div className={styles.imageContent}>
                  <img 
                    src="/agentic-lab-ai-community-core-red-500-500.svg" 
                    alt="Agentic Lab Logo"
                    className={styles.logoImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
