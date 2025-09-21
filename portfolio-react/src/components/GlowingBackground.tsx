'use client';

import { useEffect, useRef } from 'react';

export default function GlowingBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(window.innerHeight, document.documentElement.scrollHeight);
    };

    const drawSmoothGlow = (
      x: number,
      y: number,
      radius: number,
      color: string,
      intensity: number
    ) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, `${color}${Math.floor(intensity * 255).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(0.5, `${color}${Math.floor(intensity * 0.3 * 255).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(1, `${color}00`);

      ctx.fillStyle = gradient;
      ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    };

    const animate = () => {
      time += 0.005; // Much slower animation
      
      // Pure black background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Soft blend mode
      ctx.globalCompositeOperation = 'screen';

      // Single large subtle glow in center-left
      drawSmoothGlow(
        canvas.width * 0.3 + Math.sin(time * 0.3) * 50,
        canvas.height * 0.4 + Math.cos(time * 0.2) * 30,
        300,
        '#64ffda',
        0.08
      );

      // Single smaller glow in top-right
      drawSmoothGlow(
        canvas.width * 0.7 + Math.cos(time * 0.4) * 40,
        canvas.height * 0.3 + Math.sin(time * 0.25) * 25,
        200,
        '#8892b0',
        0.05
      );

      // Reset blend mode
      ctx.globalCompositeOperation = 'source-over';

      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Canvas for minimal animated background */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-20 pointer-events-none"
        style={{ 
          filter: 'blur(4px)',
          background: '#000000'
        }}
      />
      
      {/* Minimal static overlay */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 30% 40%, rgba(100, 255, 218, 0.06) 0%, transparent 60%),
              radial-gradient(circle at 70% 30%, rgba(136, 146, 176, 0.04) 0%, transparent 50%)
            `
          }}
        />
      </div>
    </>
  );
}