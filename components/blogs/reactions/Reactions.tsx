import React, { useState, FC } from "react";

interface ReactionsProps {
  onReactionSelected: (reaction: string) => void;
}

const Reactions: FC<ReactionsProps> = ({ onReactionSelected }) => {
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null);

  const handleReactionClick = (reaction: string) => {
    onReactionSelected(reaction);
    setSelectedReaction((prevReaction) =>
      prevReaction === reaction ? null : reaction
    );
  };

  return (
    <div>
      <h3>Select a reaction:</h3>
      <div className="flex justify-around text-3xl cursor-pointer">
        <span
          role="img"
          aria-label="Happy"
          onClick={() => handleReactionClick("happy")}
          style={{ opacity: selectedReaction === "happy" ? 1 : 0.6 }}
        >
          😄
        </span>
        <span
          role="img"
          aria-label="Sad"
          onClick={() => handleReactionClick("sad")}
          style={{ opacity: selectedReaction === "sad" ? 1 : 0.6 }}
        >
          😢
        </span>
      </div>
      <p>{selectedReaction}</p>
    </div>
  );
};

export default Reactions;
