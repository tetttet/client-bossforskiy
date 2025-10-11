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
      className={`text-black text-[13px] font-semibold text-center max-w-3xl mx-auto ${className} px-4 py-24 bg-white/90 backdrop-blur-md rounded-lg !-mb-4`}
    >
      {paragraphs.map((paragraph, index) => (
        <p
          dangerouslySetInnerHTML={{ __html: paragraph }}
          key={index}
          className={`${paragraphClassName} ${index > 0 ? "" : ""}`}
        />
      ))}
    </div>
  );
};

export default TextBlock;
