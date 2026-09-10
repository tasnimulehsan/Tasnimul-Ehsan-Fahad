export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32" aria-labelledby="contact-title">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[110px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl text-center">
        <p className="text-sm font-bold uppercase tracking-[.25em] text-zinc-500">04 / Say hello</p>
        <h2 id="contact-title" className="mx-auto mt-5 max-w-4xl text-5xl font-black tracking-tight md:text-8xl">Got an idea?<br /><span className="text-gradient">Let&apos;s make it.</span></h2>
        <p className="mx-auto mt-8 max-w-lg text-zinc-400">Open to interesting projects, experiments, collaborations, and conversations about tech.</p>
        <a href="mailto:hello@tefahad.com" className="mt-9 inline-block rounded-full bg-white px-8 py-4 font-black text-black transition-transform hover:scale-105 focus-visible:scale-105">hello@tefahad.com ↗</a>
      </div>
    </section>
  );
}
