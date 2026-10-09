"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function LiquidScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = canvas?.parentElement;
    if (!canvas || !stage || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch {
      stage.classList.add("webgl-fallback");
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 0.15, 6.9);
    scene.add(new THREE.HemisphereLight(0xbce9e1, 0x081119, 2.1));

    const key = new THREE.DirectionalLight(0xb2fff0, 4.2);
    key.position.set(-3, 4, 5);
    scene.add(key);
    const rim = new THREE.PointLight(0x769bff, 11, 10);
    rim.position.set(3, -1, 3);
    scene.add(rim);
    const warm = new THREE.PointLight(0xffbc78, 7, 9);
    warm.position.set(-3, -2, 2);
    scene.add(warm);

    const root = new THREE.Group();
    scene.add(root);
    const uniforms = { uTime: { value: 0 }, uPointer: { value: new THREE.Vector2() } };
    const liquid = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.52, 5),
      new THREE.ShaderMaterial({
        uniforms,
        transparent: true,
        side: THREE.DoubleSide,
        vertexShader: `uniform float uTime; uniform vec2 uPointer; varying vec3 vNormal; varying vec3 vWorld; void main(){ vec3 p=position; float wave=sin(p.x*3.2+uTime*.85)*.08+sin(p.y*4.1-uTime*.6)*.06+cos(p.z*3.4+uTime*.7)*.06; float pulse=sin(uTime*1.35+length(p)*3.)*.025; p+=normal*(wave+pulse+uPointer.x*p.y*.025-uPointer.y*p.x*.025); vec4 worldPosition=modelMatrix*vec4(p,1.); vWorld=worldPosition.xyz; vNormal=normalize(normalMatrix*normal); gl_Position=projectionMatrix*viewMatrix*worldPosition; }`,
        fragmentShader: `uniform float uTime; varying vec3 vNormal; varying vec3 vWorld; void main(){ vec3 viewDir=normalize(cameraPosition-vWorld); float fresnel=pow(1.-max(dot(viewDir,vNormal),0.),2.); float shimmer=.5+.5*sin(uTime*.8+vWorld.y*3.+vWorld.x*2.); vec3 deep=vec3(.12,.25,.39); vec3 aqua=vec3(.36,.89,.78); vec3 warm=vec3(.98,.61,.30); vec3 color=mix(deep,aqua,fresnel*.95+shimmer*.08); color=mix(color,warm,max(0.,fresnel-.75)*.55); gl_FragColor=vec4(color,.86); }`,
      }),
    );
    liquid.scale.set(1, 1.17, 1);
    root.add(liquid);

    const glass = new THREE.Mesh(
      new THREE.SphereGeometry(1.78, 64, 64),
      new THREE.MeshPhysicalMaterial({ color: 0xb9fbec, transmission: 0.9, opacity: 0.32, transparent: true, roughness: 0.08, metalness: 0.05, ior: 1.44, thickness: 0.6, clearcoat: 1, clearcoatRoughness: 0.08, iridescence: 0.65, iridescenceIOR: 1.35 }),
    );
    root.add(glass);

    const ringA = new THREE.Mesh(new THREE.TorusGeometry(2.05, 0.012, 8, 160), new THREE.MeshBasicMaterial({ color: 0xb9fff1, transparent: true, opacity: 0.48, blending: THREE.AdditiveBlending }));
    ringA.rotation.set(0.63, 0.2, -0.25);
    root.add(ringA);
    const ringB = new THREE.Mesh(new THREE.TorusGeometry(2.32, 0.008, 8, 160), new THREE.MeshBasicMaterial({ color: 0x8aa5ff, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending }));
    ringB.rotation.set(-0.5, 0.4, 0.5);
    root.add(ringB);
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.33, 32, 32), new THREE.MeshBasicMaterial({ color: 0xffe1b2, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending }));
    core.position.set(-0.45, 0.48, 0.52);
    root.add(core);

    const count = window.innerWidth < 700 ? 380 : 760;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 2.5 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.cos(phi);
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }
    const starsGeometry = new THREE.BufferGeometry();
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const stars = new THREE.Points(starsGeometry, new THREE.PointsMaterial({ color: 0xa3e6d0, size: 0.018, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, sizeAttenuation: true }));
    root.add(stars);

    const pointer = new THREE.Vector2();
    const targetRotation = new THREE.Vector2();
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let frame;
    const updatePointer = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      if (dragging) {
        targetRotation.y += (event.clientX - lastX) * 0.007;
        targetRotation.x += (event.clientY - lastY) * 0.005;
      }
      lastX = event.clientX;
      lastY = event.clientY;
    };
    const onDown = (event) => { dragging = true; lastX = event.clientX; lastY = event.clientY; canvas.setPointerCapture(event.pointerId); };
    const onUp = (event) => { dragging = false; canvas.releasePointerCapture(event.pointerId); };
    canvas.addEventListener("pointermove", updatePointer);
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointerleave", () => { if (!dragging) pointer.set(0, 0); });

    const resize = () => {
      const width = stage.clientWidth;
      const height = stage.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    };
    resize();
    window.addEventListener("resize", resize);
    const clock = new THREE.Clock();
    const render = () => {
      const time = clock.getElapsedTime();
      uniforms.uTime.value = time;
      uniforms.uPointer.value.lerp(pointer, 0.08);
      if (!dragging) targetRotation.y += 0.0025;
      root.rotation.x += (targetRotation.x * 0.34 - root.rotation.x) * 0.04;
      root.rotation.y += (targetRotation.y * 0.34 + pointer.x * 0.11 - root.rotation.y) * 0.04;
      root.position.x += (pointer.x * 0.08 - root.position.x) * 0.03;
      root.position.y += (pointer.y * 0.06 - root.position.y) * 0.03;
      liquid.rotation.y = time * 0.00165;
      liquid.rotation.z = Math.sin(time * 0.45) * 0.07;
      glass.rotation.y = -time * 0.0006;
      ringA.rotation.z += 0.002;
      ringB.rotation.x -= 0.0015;
      stars.rotation.y = time * 0.012;
      core.scale.setScalar(1 + Math.sin(time * 1.5) * 0.08);
      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", updatePointer);
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointerup", onUp);
      starsGeometry.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} id="webgl-canvas" aria-label="Interactive generative glass object" />;
}
