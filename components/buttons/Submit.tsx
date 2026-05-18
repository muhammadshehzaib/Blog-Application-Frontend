import React, { FC } from "react";

interface NeuButtonProps {
  button: string;
}

const NeuButton: FC<NeuButtonProps> = ({ button }) => {
  return (
    <button
      type="submit"
      className="group inline-flex items-center gap-3 bg-accent text-ink px-6 py-3 hover:bg-paper transition-colors duration-200 ease-out"
    >
      <span className="font-mono text-xs opacity-70">▸</span>
      <span className="font-medium text-sm">{button}</span>
    </button>
  );
};

export default NeuButton;
