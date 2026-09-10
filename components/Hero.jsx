"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="grid-bg relative flex min-h-screen items-center px-6 pt-28" aria-labelledby="hero-title">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[100px]" aria-hidden="true" />
      <div className="mx-auto w-full max-w-6xl">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 text-sm font-bold uppercase tracking-[.28em] text-zinc-400">
          Tasnimul Ehsan Fahad · Bangladesh
        </motion.p>
        <motion.h1 id="hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.7 }} className="max-w-5xl text-[clamp(3.5rem,10vw,9rem)] font-black leading-[.86] tracking-[-.07em]">
          I BUILD THINGS<br /><span className="text-gradient">WORTH EXPLORING.</span>
        </motion.h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="mt-10 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-lg leading-relaxed text-zinc-400">Tech, experiments, design, and the occasional rabbit hole. <span className="text-white">Curious by default.</span></p>
          <motion.a whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} href="#work" className="w-fit rounded-full bg-white px-7 py-4 text-sm font-black text-black">
            EXPLORE MY WORK ↓
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
