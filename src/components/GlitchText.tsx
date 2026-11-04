import { useState, useEffect } from 'react';
import { prefersReducedMotion } from '../utils/deviceDetection';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span';
  // Delay before the one-time decode effect plays
  delay?: number;
}

const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`0123456789';

// Decodes the text from random characters once, then stays readable.
export default function GlitchText({ text, className = '', as: Tag = 'span', delay = 400 }: GlitchTextProps) {
  const [glitchedText, setGlitchedText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let glitchInterval: ReturnType<typeof setInterval> | undefined;

    const start = setTimeout(() => {
      setIsGlitching(true);
      let iterations = 0;
      const maxIterations = 8;

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
    }, delay);

    return () => {
      clearTimeout(start);
      clearInterval(glitchInterval);
    };
  }, [text, delay]);

  return (
    <Tag className={`${className} ${isGlitching ? 'text-glow' : ''}`} aria-label={text}>
      <span aria-hidden="true">{glitchedText}</span>
    </Tag>
  );
}
