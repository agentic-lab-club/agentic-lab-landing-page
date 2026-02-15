import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import SnowAnimation from '@components/SnowAnimation';
import { FaInstagram, FaTelegram, FaLinkedin, FaDiscord } from 'react-icons/fa';
import styles from '../styles/Socials.module.css';

export default function Socials() {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/agentic_lab',
    },
    {
      name: 'Telegram Channel',
      icon: <FaTelegram />,
      url: 'https://t.me/agenticslab',
    },
    {
      name: 'Telegram Chat',
      icon: <FaTelegram />,
      url: 'https://t.me/+mNVOoDBnPxs2MTgy',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/company/agentics-lab',
    },
    {
      name: 'Discord Server',
      icon: <FaDiscord />,
      url: 'https://discord.gg/3u3ZseCK7v',
    },
  ];

  return (
    <>
      <Head>
        <title>Agentic Lab Socials</title>
        <meta name="description" content="Connect with Agentic Lab on social media" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SnowAnimation />
      <Header />

      <main>
        <div className="container">
          <div className={styles.socialsWrapper}>
            <div className={styles.profileSection}>
              <img 
                src="/agentic-lab-ai-community-red.svg" 
                alt="Agentic Lab Profile"
                className={styles.profileImage}
              />
              <h1 className={styles.title}>Our Socials:</h1>
            </div>

            <div className={styles.socialsList}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                >
                  <span className={styles.socialIcon}>{social.icon}</span>
                  <span className={styles.socialName}>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
