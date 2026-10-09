"use client";

import { useEffect } from "react";

export default function PortfolioEffects() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.14 });
    document.querySelectorAll(".reveal-on-scroll").forEach((element) => observer.observe(element));

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeMenu = () => {
      menuToggle?.classList.remove("is-open");
      menuToggle?.setAttribute("aria-expanded", "false");
      mobileMenu?.classList.remove("is-open");
      mobileMenu?.setAttribute("aria-hidden", "true");
      document.body.classList.remove("menu-open");
    };
    const toggleMenu = () => {
      const isOpen = !menuToggle.classList.contains("is-open");
      menuToggle.classList.toggle("is-open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      mobileMenu?.classList.toggle("is-open", isOpen);
      mobileMenu?.setAttribute("aria-hidden", String(!isOpen));
      document.body.classList.toggle("menu-open", isOpen);
    };
    menuToggle?.addEventListener("click", toggleMenu);
    mobileMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    const finePointer = window.matchMedia("(pointer:fine)").matches;
    const onMove = (event) => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
      dot.style.left = `${event.clientX}px`;
      dot.style.top = `${event.clientY}px`;
      ring.animate({ left: `${event.clientX}px`, top: `${event.clientY}px` }, { duration: 380, fill: "forwards", easing: "cubic-bezier(.2,.8,.2,1)" });
    };
    const hoverables = document.querySelectorAll("a, button, .magnetic-card, canvas");
    const addHover = () => ring?.classList.add("is-hover");
    const removeHover = () => ring?.classList.remove("is-hover");
    if (finePointer && dot && ring) {
      window.addEventListener("pointermove", onMove);
      hoverables.forEach((element) => { element.addEventListener("mouseenter", addHover); element.addEventListener("mouseleave", removeHover); });
    }

    const magnetics = document.querySelectorAll(".magnetic");
    magnetics.forEach((element) => {
      const move = (event) => {
        const rect = element.getBoundingClientRect();
        element.style.transform = `translate(${(event.clientX - (rect.left + rect.width / 2)) * 0.12}px, ${(event.clientY - (rect.top + rect.height / 2)) * 0.12}px)`;
      };
      element.addEventListener("pointermove", move);
      element.addEventListener("pointerleave", () => { element.style.transform = ""; });
    });

    return () => {
      observer.disconnect();
      menuToggle?.removeEventListener("click", toggleMenu);
      if (finePointer && dot && ring) window.removeEventListener("pointermove", onMove);
      hoverables.forEach((element) => { element.removeEventListener("mouseenter", addHover); element.removeEventListener("mouseleave", removeHover); });
    };
  }, []);

  return null;
}
