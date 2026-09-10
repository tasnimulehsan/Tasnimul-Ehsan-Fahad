import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Obsession from "../components/Obsession";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />

      <div className="overflow-hidden border-y border-white/10 py-4" aria-hidden="true">
        <div className="marquee flex w-max gap-8 text-2xl font-black uppercase tracking-tight text-zinc-500">
          {Array(2).fill(["BUILD", "LEARN", "BREAK", "FIX", "REPEAT", "OH, I DIDN'T KNOW THAT."]).flat().map((item, index) => (
            <span key={`${item}-${index}`}>{item} <b className="text-white">✦</b></span>
          ))}
        </div>
      </div>

      <About />
      <Projects />
      <Obsession />
      <Contact />
      <Footer />
    </main>
  );
}
