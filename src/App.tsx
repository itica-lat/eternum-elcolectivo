import { SEO } from "./components/SEO";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Talk } from "./components/Talk";
import { Papers } from "./components/Papers";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <SEO />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Talk />
        <Papers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}