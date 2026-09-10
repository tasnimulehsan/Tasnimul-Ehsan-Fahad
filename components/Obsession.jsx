const topics = ["AI", "Python", "JavaScript", "Next.js", "Cloud", "Linux"];

export default function Obsession() {
  return (
    <section className="grid-bg border-y border-white/10 px-6 py-32" aria-labelledby="obsession-title">
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 text-sm font-bold uppercase tracking-[.25em] text-zinc-500">03 / Current obsession</p>
        <div className="grid gap-8 md:grid-cols-2">
          <h2 id="obsession-title" className="text-5xl font-black tracking-tight md:text-7xl">Always<br /><span className="text-gradient">learning.</span></h2>
          <div className="glass glow rounded-[2rem] p-7">
            <p className="text-sm text-zinc-500">RIGHT NOW</p>
            <p className="mt-4 text-2xl font-bold">AI × Web × Open Source</p>
            <p className="mt-4 leading-7 text-zinc-400">Turning “what if?” into small working prototypes—and documenting the useful bits along the way.</p>
            <div className="mt-7 flex flex-wrap gap-2" aria-label="Current technology interests">
              {topics.map((topic) => <span key={topic} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-300">{topic}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
