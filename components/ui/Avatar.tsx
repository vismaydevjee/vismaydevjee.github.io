import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const Avatar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);

  const pupilConfig = {
    left: { x: 35.3, y: 54.0 },
    right: { x: 62.7, y: 56.3 },
    size: 6.8,
    travel: 0.7,
  };

  useEffect(() => {
    const container = containerRef.current;
    const left = leftPupilRef.current;
    const right = rightPupilRef.current;
    if (!container || !left || !right) return;

    let frame = 0;
    let lastClientX = 0;
    let lastClientY = 0;
    let currentLeft = { x: 0, y: 0 };
    let currentRight = { x: 0, y: 0 };
    let targetLeft = { x: 0, y: 0 };
    let targetRight = { x: 0, y: 0 };

    const clampVector = (dx: number, dy: number, max: number) => {
      const distance = Math.hypot(dx, dy);
      const scale = distance > max ? max / distance : 1;
      return { x: dx * scale, y: dy * scale };
    };

    const update = () => {
      frame = 0;
      const rect = container.getBoundingClientRect();
      const leftCenter = {
        x: rect.left + rect.width * (pupilConfig.left.x / 100),
        y: rect.top + rect.height * (pupilConfig.left.y / 100),
      };
      const rightCenter = {
        x: rect.left + rect.width * (pupilConfig.right.x / 100),
        y: rect.top + rect.height * (pupilConfig.right.y / 100),
      };
      const maxOffset = Math.min(rect.width, rect.height) * 0.012 * pupilConfig.travel;

      targetLeft = clampVector(lastClientX - leftCenter.x, lastClientY - leftCenter.y, maxOffset);
      targetRight = clampVector(lastClientX - rightCenter.x, lastClientY - rightCenter.y, maxOffset);

      const lerp = 0.2;
      currentLeft = {
        x: currentLeft.x + (targetLeft.x - currentLeft.x) * lerp,
        y: currentLeft.y + (targetLeft.y - currentLeft.y) * lerp,
      };
      currentRight = {
        x: currentRight.x + (targetRight.x - currentRight.x) * lerp,
        y: currentRight.y + (targetRight.y - currentRight.y) * lerp,
      };

      left.style.transform = `translate(${currentLeft.x}px, ${currentLeft.y}px)`;
      right.style.transform = `translate(${currentRight.x}px, ${currentRight.y}px)`;

      if (
        Math.abs(currentLeft.x - targetLeft.x) > 0.1 ||
        Math.abs(currentLeft.y - targetLeft.y) > 0.1 ||
        Math.abs(currentRight.x - targetRight.x) > 0.1 ||
        Math.abs(currentRight.y - targetRight.y) > 0.1
      ) {
        frame = window.requestAnimationFrame(update);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      lastClientX = e.clientX;
      lastClientY = e.clientY;
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <img
        src="/face.png"
        alt="Vizzy avatar"
        className="absolute inset-0 w-full h-full object-contain select-none"
        draggable={false}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute"
          style={{
            left: `${pupilConfig.left.x}%`,
            top: `${pupilConfig.left.y}%`,
            width: `${pupilConfig.size}%`,
            height: `${pupilConfig.size}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="absolute -inset-[10%] rounded-full bg-[#e3deda]" />
          <div className="absolute inset-0">
            <div
              ref={leftPupilRef}
              className="absolute inset-0 rounded-full shadow-[0_0_0_2px_rgba(255,255,255,0.6)]"
              style={{ willChange: "transform" }}
            >
              <div className="absolute inset-0 rounded-full bg-[#6b4a2e]" />
              <div className="absolute inset-[14%] rounded-full bg-[#2b1d14]" />
              <div className="absolute left-[18%] top-[15%] w-[28%] h-[28%] rounded-full bg-white/80" />
            </div>
          </div>
        </div>
        <div
          className="absolute"
          style={{
            left: `${pupilConfig.right.x}%`,
            top: `${pupilConfig.right.y}%`,
            width: `${pupilConfig.size}%`,
            height: `${pupilConfig.size}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="absolute -inset-[10%] rounded-full bg-[#e3deda]" />
          <div className="absolute inset-0">
            <div
              ref={rightPupilRef}
              className="absolute inset-0 rounded-full shadow-[0_0_0_2px_rgba(255,255,255,0.6)]"
              style={{ willChange: "transform" }}
            >
              <div className="absolute inset-0 rounded-full bg-[#6b4a2e]" />
              <div className="absolute inset-[14%] rounded-full bg-[#2b1d14]" />
              <div className="absolute left-[18%] top-[15%] w-[28%] h-[28%] rounded-full bg-white/80" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
