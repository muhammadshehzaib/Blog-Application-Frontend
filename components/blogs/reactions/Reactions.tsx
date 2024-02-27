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
        <span
          role="img"
          aria-label="angry"
          onClick={() => handleReactionClick("angry")}
          style={{ opacity: selectedReaction === "angry" ? 1 : 0.6 }}
        >
          😡
        </span>
        <span
          role="img"
          aria-label="love"
          onClick={() => handleReactionClick("love")}
          style={{ opacity: selectedReaction === "love" ? 1 : 0.6 }}
        >
          ❤️
        </span>
        <span
          role="img"
          aria-label="surprised"
          onClick={() => handleReactionClick("surprised")}
          style={{ opacity: selectedReaction === "surprised" ? 1 : 0.6 }}
        >
          😮
        </span>
        <span
          role="img"
          aria-label="boring"
          onClick={() => handleReactionClick("boring")}
          style={{ opacity: selectedReaction === "boring" ? 1 : 0.6 }}
        >
          😑
        </span>
        <span
          role="img"
          aria-label="excited"
          onClick={() => handleReactionClick("excited")}
          style={{ opacity: selectedReaction === "excited" ? 1 : 0.6 }}
        >
          🤩
        </span>
        <span
          role="img"
          aria-label="laugh"
          onClick={() => handleReactionClick("laugh")}
          style={{ opacity: selectedReaction === "laugh" ? 1 : 0.6 }}
        >
          😆
        </span>
        <span
          role="img"
          aria-label="shocked"
          onClick={() => handleReactionClick("shocked")}
          style={{ opacity: selectedReaction === "shocked" ? 1 : 0.6 }}
        >
          😱
        </span>
      </div>
    </div>
  );
};

export default Reactions;
