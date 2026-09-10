export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-32" aria-labelledby="about-title">
      <div className="grid gap-16 md:grid-cols-[.65fr_1.35fr]">
        <p className="text-sm font-bold uppercase tracking-[.25em] text-zinc-500">01 / About</p>
        <div>
          <h2 id="about-title" className="text-4xl font-black leading-tight md:text-6xl">I like finding the <span className="text-gradient">“oh, I didn’t know that”</span> hiding inside technology.</h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">I explore software, AI, web technologies, creative experiments, and whatever catches my curiosity. This site is a living collection of things I build, learn, test, and share.</p>
        </div>
      </div>
    </section>
  );
}
