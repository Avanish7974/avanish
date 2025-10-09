import { useEffect, useState, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  opacity: number;
  scale: number;
  id: number;
}

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0);
  const lastParticleTime = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Create particle trail
      const now = Date.now();
      if (now - lastParticleTime.current > 50) {
        lastParticleTime.current = now;
        const newParticle: Particle = {
          x: e.clientX,
          y: e.clientY,
          opacity: 1,
          scale: 1,
          id: particleIdRef.current++,
        };
        setParticles((prev) => [...prev.slice(-10), newParticle]);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Animate and remove particles
  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            opacity: p.opacity - 0.05,
            scale: p.scale * 0.95,
          }))
          .filter((p) => p.opacity > 0)
      );
    }, 50);

    return () => clearInterval(interval);
  }, [particles.length]);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Particle trail */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="cursor-particle"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            transform: `translate(-50%, -50%) scale(${particle.scale})`,
          }}
        />
      ))}

      {/* Main cursor circle */}
      <div
        className={`cursor-follower ${isHovering ? 'hovering' : ''}`}
        style={{
          left: position.x,
          top: position.y,
        }}
      >
        <div className="cursor-inner" />
      </div>

      {/* Outer glow ring */}
      <div
        className="cursor-ring"
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </>
  );
};

export default CursorFollower;
