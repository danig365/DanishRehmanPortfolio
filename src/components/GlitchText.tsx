import { useState, useEffect } from 'react';
import { prefersReducedMotion } from '../utils/deviceDetection';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span';
}

const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`0123456789';

export default function GlitchText({ text, className = '', as: Tag = 'span' }: GlitchTextProps) {
  const [glitchedText, setGlitchedText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let glitchInterval: ReturnType<typeof setInterval> | undefined;

    const interval = setInterval(() => {
      setIsGlitching(true);
      let iterations = 0;
      const maxIterations = 6;

      glitchInterval = setInterval(() => {
        setGlitchedText(
          text
            .split('')
            .map((char, index) => {
              if (index < iterations) return text[index];
              if (char === ' ') return ' ';
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            })
            .join('')
        );

        iterations += text.length / maxIterations;

        if (iterations >= text.length) {
          clearInterval(glitchInterval);
          setGlitchedText(text);
          setIsGlitching(false);
        }
      }, 50);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(glitchInterval);
    };
  }, [text]);

  return (
    <Tag className={`${className} ${isGlitching ? 'text-glow' : ''}`} aria-label={text}>
      <span aria-hidden="true">{glitchedText}</span>
    </Tag>
  );
}
