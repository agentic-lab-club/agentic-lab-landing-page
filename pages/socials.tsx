import Head from 'next/head';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa6';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SnowAnimation from '../components/SnowAnimation';
import ScrollToTop from '../components/ScrollToTop';

export default function Socials() {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/agenticlab',
      icon: <FaInstagram className="inline" height="20" width="20" />,
    },
    {
      name: 'Telegram Channel',
      url: 'https://t.me/agenticlab',
      icon: <FaTelegram className="inline" height="20" width="20" />,
    },
    {
      name: 'Telegram Chat',
      url: 'https://t.me/agenticlab_chat',
      icon: <FaTelegram className="inline" height="20" width="20" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/agenticlab',
      icon: <FaLinkedin className="inline" height="20" width="20" />,
    },
    {
      name: 'Discord Server',
      url: 'https://discord.gg/agenticlab',
      icon: <FaDiscord className="inline" height="20" width="20" />,
    },
  ];

  return (
    <>
      <Head>
        <title>Agentic Lab - Socials</title>
        <meta name="description" content="Connect with Agentic Lab on social media" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SnowAnimation />
      <ScrollToTop />

      <div className="m-0 p-0 font-lexend flex flex-col min-h-screen overflow-x-hidden">
        <Header />

        <main className="pt-20 grow">
          <div className="flex items-center justify-center py-4">
            <div className="text-center">
              <img
                src="/agentic-lab-ai-community-red.svg"
                alt="Agentic Lab"
                className="size-75 mx-auto"
                width="300"
                height="300"
              />
              <h1 className="text-3xl mt-4">♡ Agentic Lab ♡ Socials</h1>

              <div className="mt-4 space-y-2 flex flex-col max-w-md mx-auto">
                {socialLinks.map((social) => (
                  <button key={social.name} className="p-[3px] relative">
                    <div className="absolute inset-0 bg-stone-500 rounded-lg"></div>
                    <div className="px-8 py-2 bg-black/50 rounded-md relative group transition duration-200 text-white hover:bg-transparent">
                      {social.icon}
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4"
                      >
                        {social.name}
                      </a>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
