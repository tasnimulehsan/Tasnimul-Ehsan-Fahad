"use client";

import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 pb-32" aria-labelledby="work-title">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[.25em] text-zinc-500">02 / Selected work</p>
          <h2 id="work-title" className="text-5xl font-black md:text-7xl">Things I made.</h2>
        </div>
        <span className="hidden text-zinc-500 md:block">03 projects / experiments</span>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <motion.article key={project.n} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 250 }} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950">
            <div className={`relative aspect-[4/3] bg-gradient-to-br ${project.tone} p-6`} aria-hidden="true">
              <div className="absolute inset-0 bg-black/15" />
              <span className="relative text-sm font-black text-black/70">{project.n}</span>
              <span className="absolute bottom-5 left-5 right-5 text-4xl font-black tracking-tighter text-white drop-shadow-lg">{project.title}</span>
            </div>
            <div className="p-6">
              <p className="text-xs font-bold tracking-[.2em] text-zinc-500">{project.tag}</p>
              <p className="mt-3 leading-6 text-zinc-400">{project.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
