'use client';

import { useEffect, useState } from 'react';

interface TypingTextProps {
  words: string[];
  speed?: number;
  pause?: number;
}

export default function TypingText({ words, speed = 80, pause = 1800 }: TypingTextProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!deleting && subIndex === words[index].length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [subIndex, deleting, index, words, speed, pause]);

  return (
    <>
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse" aria-hidden="true">|</span>
    </>
  );
}
