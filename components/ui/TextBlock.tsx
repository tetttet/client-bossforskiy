import React from "react";

interface TextBlockProps {
  paragraphs: string[];
  className?: string;
  paragraphClassName?: string;
}

const TextBlock: React.FC<TextBlockProps> = ({
  paragraphs,
  className = "",
  paragraphClassName = "",
}) => {
  return (
    <div
      className={`text-black text-[13px] font-semibold text-center max-w-5xl mx-auto px-4 py-24 bg-white/90 backdrop-blur-md rounded-lg ${className}`}
    >
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`${paragraphClassName} ${index > 0 ? "mt-5" : ""}`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default TextBlock;
