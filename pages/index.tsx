import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SnowAnimation from '../components/SnowAnimation';
import TabContent from '../components/TabContent';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  const tabs = [
    {
      id: 'tab1',
      label: 'Info',
      content: (
        <>
          <p>
            Welcome to <span className="shiny"><b>Agentic Lab!</b></span>
          </p>
          <p>
            We are an <span className="shiny"><b>AI Community and Club</b></span> dedicated to exploring the world of artificial intelligence, machine learning, and agentic systems!
          </p>
          <p>
            Our community focuses on building, learning, and experimenting with AI agents, automation, and cutting-edge technologies.
          </p>
          <div className="px-4">
            <p>
              <b>What we do:</b>
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="shiny"><b>AI Workshops & Learning</b></span> - Regular sessions on AI, ML, and agent development
              </li>
              <li>
                <span className="shiny"><b>Community Projects</b></span> - Collaborative builds and open-source contributions
              </li>
              <li>
                <span className="shiny"><b>Discussions & Networking</b></span> - Connect with fellow AI enthusiasts
              </li>
              <li>
                <span className="shiny"><b>Resources & Support</b></span> - Access to learning materials and mentorship
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      id: 'tab2',
      label: 'About',
      content: (
        <>
          <p>
            <span className="shiny"><b>Agentic Lab</b></span> is a community-driven initiative for AI enthusiasts of all levels.
          </p>
          <p>
            Whether you're just starting your AI journey or you're a seasoned practitioner, there's a place for you here!
          </p>
          <p>
            <span className="shiny"><b>Our Focus Areas:</b></span>
          </p>
          <ul className="list-disc list-inside space-y-2 px-4">
            <li>Large Language Models (LLMs) and prompt engineering</li>
            <li>AI agents and autonomous systems</li>
            <li>Machine learning and deep learning</li>
            <li>AI ethics and responsible AI development</li>
            <li>Real-world AI applications and case studies</li>
          </ul>
          <p>
            <span className="shiny"><b>Community Values:</b></span> Collaboration, continuous learning, innovation, and inclusivity.
          </p>
        </>
      ),
    },
    {
      id: 'tab3',
      label: 'W I P',
      content: (
        <>
          <p>
            This site is under continuous development! 🚧
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <b>Coming Soon:</b> Member profiles and project showcase
            </li>
            <li>
              <b>Coming Soon:</b> Event calendar and workshop schedules
            </li>
            <li>
              <b>Coming Soon:</b> Resource library and learning paths
            </li>
            <li>
              <b>Coming Soon:</b> Community blog and articles
            </li>
          </ul>
          <p className="mt-4 text-stone-400">
            Have ideas or suggestions? Join our Discord and let us know!
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Agentic Lab - Home</title>
        <meta name="description" content="Agentic Lab - AI Community and Club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SnowAnimation />
      <ScrollToTop />

      <div className="m-0 p-0 font-lexend flex flex-col min-h-screen overflow-x-hidden">
        <Header />

        <main className="pt-20 grow">
          <div className="w-full flex justify-center px-4">
            <div className="w-full max-w-6xl border-2 border-dashed rounded border-stone-600 p-4">
              <div className="text-center">
                <h1 className="mt-4 text-3xl">Welcome to Agentic Lab! ♡</h1>
                <p>
                  We are an <b><i>AI community focused on building intelligent agents and exploring AI technologies!</i></b>
                </p>
                <p>
                  Join us to learn, collaborate, and innovate together. Check out our community on social media!
                </p>
                <p>Click the tabs below to learn more about us 🤖</p>
              </div>

              <TabContent tabs={tabs} />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
