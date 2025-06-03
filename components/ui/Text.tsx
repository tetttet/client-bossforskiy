import React from "react";

interface TextProps {
  text: string;
}

const Text: React.FC<TextProps> = ({ text }) => {
  return (
    <div className="text-black text-[13px] font-semibold text-center max-w-5xl mx-auto px-4 py-24 bg-white/90 backdrop-blur-md rounded-lg">
      {text}
    </div>
  );
};

export default Text;
