import { useEffect, useRef, useState } from "react";

export default function DynamicText({
  words = [
    "React.js Developer;",
    "Three.js Enthusiast;",
    "Creative Thinker.",
    "Problem Solver.",
  ],
  typingSpeed = 100,
  deletingSpeed = 30,
  pauseBetweenWords = 1500,
  initialPause = 6000, // ⏸️ pause before deleting the first word
  className = "",
  style = {},
}) {
  const [text, setText] = useState(words[0] || "");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [started, setStarted] = useState(false); // ⬅️ controls animation start
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  // Start animation after showing first word for `initialPause`
  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), initialPause);
    return () => clearTimeout(timer);
  }, [initialPause]);

  useEffect(() => {
    if (!started || !words || words.length === 0) return;

    const currentFullWord = words[wordIndex % words.length];

    // Decide delay until next tick
    let delay = isDeleting ? deletingSpeed : typingSpeed;
    if (!isDeleting && text === currentFullWord) delay = pauseBetweenWords;
    if (isDeleting && text === "") delay = 400;

    const timeout = setTimeout(() => {
      if (!mounted.current) return;

      if (!isDeleting && text === currentFullWord) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((w) => (w + 1) % words.length);
        return;
      }

      if (!isDeleting) {
        setText(currentFullWord.slice(0, text.length + 1));
      } else {
        setText(currentFullWord.slice(0, text.length - 1));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseBetweenWords,
    started,
  ]);

  return (
    <span
      className={`dynamic-text-container ${className}`}
      style={{ display: "inline-block", verticalAlign: "bottom", ...style }}
      aria-live="polite"
    >
      <span className="dynamic-text">{text}</span>
      <span className="dynamic-cursor" aria-hidden="true" />

      <style>{`
        .dynamic-text-container { color: #ffffffaa; }
        .dynamic-text { white-space: nowrap; display: inline-block; padding-right: 6px; }
        .dynamic-cursor { display: inline-block; width: 2px; height: 1em; background: #ffffffaa; vertical-align: bottom; animation: blink 0.8s step-end infinite; margin-left: -2px; }

        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        @media (max-width: 420px) {
          .dynamic-text-container { font-size: 0.95rem; }
        }
      `}</style>
    </span>
  );
}
