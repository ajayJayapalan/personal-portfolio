import { useEffect, useRef, useState } from "react";

export default function DynamicText({
  words = [
    "React.js Developer;",
    "Three.js Enthusiast;",
    "Creative Thinker.",
    "Problem Solver.",
  ],
  typingSpeed = 120,
  deletingSpeed = 60,
  pauseBetweenWords = 1500,
  className = "",
  style = {},
}) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentFullWord = words[wordIndex % words.length];

    // Decide delay until next tick
    let delay = isDeleting ? deletingSpeed : typingSpeed;
    if (!isDeleting && text === currentFullWord) delay = pauseBetweenWords;
    if (isDeleting && text === "") delay = 400;

    const timeout = setTimeout(() => {
      if (!mounted.current) return;

      // If we're at the full word and not deleting, start deleting
      if (!isDeleting && text === currentFullWord) {
        setIsDeleting(true);
        return;
      }

      // If we're deleting and the text is empty, move to next word
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((w) => (w + 1) % words.length);
        return;
      }

      // Normal typing
      if (!isDeleting) {
        setText(currentFullWord.slice(0, text.length + 1));
      } else {
        // Normal deleting
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
  ]);

  return (
    <span
      className={`dynamic-text-container ${className}`}
      style={{ display: "inline-block", verticalAlign: "bottom", ...style }}
      aria-live="polite"
    >
      <span className="dynamic-text">{text}</span>
      <span className="dynamic-cursor" aria-hidden="true" />

      {/* Local styles for the component (keeps it single-file) */}
      <style>{`
        .dynamic-text-container { color: #ffffffaa; }
        .dynamic-text {  white-space: nowrap; display: inline-block; padding-right: 6px; }
        .dynamic-cursor { display: inline-block; width: 2px; height: 1em; background: #ffffffaa; vertical-align: bottom; animation: blink 0.8s step-end infinite; margin-left: -2px; }

        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        /* Small responsive tweak so long words don't wrap awkwardly */
        @media (max-width: 420px) {
          .dynamic-text-container { font-size: 0.95rem; }
        }
      `}</style>
    </span>
  );
}
