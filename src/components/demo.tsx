"use client";
import React, { useEffect, useRef } from 'react';
import { Phone } from 'lucide-react';

const HalideLanding: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Mouse Parallax Logic
    const handleMouseMove = (e: MouseEvent) => {
      // Slower, more subtle movement for a premium feel
      const x = (window.innerWidth / 2 - e.pageX) / 35;
      const y = (window.innerHeight / 2 - e.pageY) / 35;

      // Rotate the 3D Canvas
      canvas.style.transform = `rotateX(${55 + y / 2}deg) rotateZ(${-25 + x / 2}deg)`;

      // Apply depth shift to layers
      layersRef.current.forEach((layer, index) => {
        if (!layer) return;
        const depth = (index + 1) * 20;
        const moveX = x * (index + 1) * 0.3;
        const moveY = y * (index + 1) * 0.3;
        layer.style.transform = `translateZ(${depth}px) translate(${moveX}px, ${moveY}px)`;
      });
    };

    // Entrance Animation
    canvas.style.opacity = '0';
    canvas.style.transform = 'rotateX(90deg) rotateZ(0deg) scale(0.8)';
    
    const timeout = setTimeout(() => {
      canvas.style.transition = 'all 2.5s cubic-bezier(0.16, 1, 0.3, 1)';
      canvas.style.opacity = '1';
      canvas.style.transform = 'rotateX(55deg) rotateZ(-25deg) scale(1)';
    }, 300);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <style>{`
        :root {
          --bg: #0a0a0a;
          --silver: #e0e0e0;
          --accent: #14b8a6; /* Clean teal color */
          --grain-opacity: 0.15;
        }

        .halide-body {
          background-color: var(--bg);
          color: var(--silver);
          overflow: hidden;
          position: relative;
          height: 100vh;
          width: 100%;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .halide-grain {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          z-index: 100;
          opacity: var(--grain-opacity);
        }

        .viewport {
          perspective: 2000px;
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
        }

        .canvas-3d {
          position: relative;
          width: 800px; height: 500px;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Mobile specific canvas sizing to make it fit well and show the photo clearly */
        @media (max-width: 768px) {
          .canvas-3d {
             width: 85vw;
             height: 120vw; /* Make it taller on mobile so the portrait photo looks good */
             max-height: 60vh;
          }
        }

        .layer {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(224, 224, 224, 0.1);
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease;
          border-radius: 20px;
        }

        .layer-1 { background-image: url('/bg.png'); filter: grayscale(0.2) contrast(1.1) brightness(0.7); }
        .layer-2 { background-image: url('/bg.png'); filter: grayscale(0.1) contrast(1.2) brightness(0.8); opacity: 0.7; mix-blend-mode: screen; }
        .layer-3 { background-image: url('/bg.png'); filter: grayscale(0.0) contrast(1.3) brightness(0.9); opacity: 0.5; mix-blend-mode: overlay; }

        .contours {
          position: absolute;
          width: 200%; height: 200%;
          top: -50%; left: -50%;
          background-image: repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 40px, rgba(255,255,255,0.05) 41px, transparent 42px);
          transform: translateZ(120px);
          pointer-events: none;
        }

        .interface-grid {
          position: absolute;
          inset: 0;
          padding: 4rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 10;
          pointer-events: none;
        }

        .hero-title {
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(2.5rem, 8vw, 8rem);
          line-height: 0.85;
          letter-spacing: -0.04em;
          font-weight: 800;
          mix-blend-mode: difference;
          color: white;
          text-shadow: 0 4px 20px rgba(0,0,0,0.5);
          text-align: center;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 2rem);
          color: var(--accent);
          margin-top: 1rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-align: center;
        }

        .cta-button {
          pointer-events: auto;
          background: var(--silver);
          color: var(--bg);
          padding: 1rem 2rem;
          text-decoration: none;
          font-weight: 700;
          clip-path: polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%);
          transition: 0.3s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cta-button:hover { background: var(--accent); transform: translateY(-5px); color: white; }

        .scroll-hint {
          position: absolute;
          bottom: 2rem; left: 50%;
          width: 1px; height: 60px;
          background: linear-gradient(to bottom, var(--silver), transparent);
          animation: flow 2s infinite ease-in-out;
        }

        @keyframes flow {
          0%, 100% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
        }
        
        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
        }

        .bottom-bar {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          width: 100%;
        }

        @media (max-width: 768px) {
          .interface-grid {
             padding: 2rem 1.5rem;
          }
          .top-bar {
             flex-direction: column;
             gap: 1rem;
          }
          .top-bar-right {
             display: none; /* Hide complex coordinates on mobile */
          }
          .bottom-bar {
             flex-direction: column;
             align-items: center;
             gap: 1.5rem;
          }
          .bottom-bar-left {
             text-align: center;
          }
        }
      `}</style>

      <div className="halide-body">
        {/* SVG Filter for Grain */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>

        <div className="halide-grain" style={{ filter: 'url(#grain)' }}></div>

        <div className="interface-grid">
          <div className="top-bar">
            <div style={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <img src="/logo.png" alt="Sakine Reinigung Logo" style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
              <span className="text-sm md:text-base">SAKINE REINIGUNG</span>
            </div>
            <div className="top-bar-right" style={{ textAlign: 'right', fontFamily: 'monospace', color: 'var(--accent)', fontSize: '0.7rem' }}>
              <div>DEUTSCHLAND</div>
              <div>GEWINNEN KANN JEDER</div>
              <div>LERNE WEITER 💯</div>
            </div>
          </div>

          <div style={{ pointerEvents: 'none' }}>
            <h1 className="hero-title">PERFEKTE<br />SAUBERKEIT</h1>
            <div className="hero-subtitle">Professionelle Reinigungsdienste</div>
          </div>

          <div className="bottom-bar">
            <div className="bottom-bar-left" style={{ fontFamily: 'monospace', fontSize: '0.75rem', textTransform: 'uppercase' }}>
              <p>[ VERFÜGBAR ]</p>
              <p>ZUVERLÄSSIG & GRÜNDLICH</p>
            </div>
            <a href="tel:+4915733783739" className="cta-button">
              <Phone size={18} />
              JETZT ANRUFEN
            </a>
          </div>
        </div>

        <div className="viewport">
          <div className="canvas-3d" ref={canvasRef}>
            <div className="layer layer-1" ref={(el) => { if (el) layersRef.current[0] = el; }}></div>
            <div className="layer layer-2" ref={(el) => { if (el) layersRef.current[1] = el; }}></div>
            <div className="layer layer-3" ref={(el) => { if (el) layersRef.current[2] = el; }}></div>
            <div className="contours"></div>
          </div>
        </div>

        <div className="scroll-hint"></div>
      </div>
    </>
  );
};

export default HalideLanding;
