/*
  Design: Modernismo Corporativo Brasileiro
  - Contador animado com easing suave
  - Animação ao entrar no viewport
*/

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
  label,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function (easeOutCubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-navy mb-2" style={{ fontFamily: 'Montserrat' }}>
        {count.toLocaleString('pt-BR')}
        {suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
}
