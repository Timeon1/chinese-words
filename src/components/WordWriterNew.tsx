import { useEffect, useRef, useState } from "react";
import HanziWriter from "hanzi-writer";

interface Props {
  word: string;
  index: number;
}

export default function WordWriterNew({ word }: Props) {
  const svgRef = useRef<any>(null);
  const [writer, setWriter] = useState<HanziWriter | null>(null);
  useEffect(() => {
    const writer = HanziWriter.create(svgRef.current, word, {
      width: 100,
      height: 100,
      padding: 5,
      showOutline: true,
      // strokeColor: "#ccc",
    });
    setWriter(writer);
  }, []);

  const onAnimateHandle = () => {
    writer && writer.animateCharacter();
    const voice =  new SpeechSynthesisUtterance(word)
    speechSynthesis.speak(voice);
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      ref={svgRef}
      className="word bg-white cursor-pointer"
      data-word={word}
      onClick={onAnimateHandle}
    >
      <line x1="0" y1="0" x2="100" y2="100" stroke="#fca5a5"></line>
      <line x1="100" y1="0" x2="0" y2="100" stroke="#fca5a5"></line>
      <line x1="50" y1="0" x2="50" y2="100" stroke="#fca5a5"></line>
      <line x1="0" y1="50" x2="100" y2="50" stroke="#fca5a5"></line>
      <line x1="0" y1="0" x2="0" y2="100" stroke="#fca5a5"></line>
      <line x1="0" y1="0" x2="100" y2="0" stroke="#fca5a5"></line>
      <line x1="100" y1="100" x2="100" y2="0" stroke="#fca5a5"></line>
      <line x1="100" y1="100" x2="0" y2="100" stroke="#fca5a5"></line>
    </svg>
  );
}
