"use client";

import { useEffect, useRef } from "react";

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.THREE || !mountRef.current) return;

    const THREE = window.THREE;
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const count = 1800;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 16;
      positions[i + 1] = (Math.random() - 0.5) * 12;
      positions[i + 2] = (Math.random() - 0.5) * 12;

      const tint = new THREE.Color().setHSL(0.62 + Math.random() * 0.2, 0.9, 0.7);
      colors[i] = tint.r;
      colors[i + 1] = tint.g;
      colors[i + 2] = tint.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    const pointLight = new THREE.PointLight(0xa78bfa, 2.5, 50);
    pointLight.position.set(3, 2, 4);
    scene.add(ambientLight, pointLight);

    const pointer = { x: 0, y: 0 };

    const onPointerMove = (event) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("resize", handleResize);

    let animationFrame;
    const render = () => {
      animationFrame = requestAnimationFrame(render);

      particles.rotation.y += 0.0007;
      particles.rotation.x += 0.0003;
      particles.position.x += (pointer.x * 0.7 - particles.position.x) * 0.04;
      particles.position.y += (pointer.y * 0.5 - particles.position.y) * 0.04;

      pointLight.position.x = Math.sin(Date.now() * 0.001) * 4;
      pointLight.position.y = Math.cos(Date.now() * 0.0015) * 3;

      renderer.render(scene, camera);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="pointer-events-none fixed inset-0 -z-10 opacity-80" aria-hidden="true" />;
}
