import React, { useState } from "react";

const Reactions = ({ onReactionSelected }) => {
  const [selectedReaction, setSelectedReaction] = useState(null);

  const handleReactionClick = (reaction) => {
    setSelectedReaction(reaction);
    onReactionSelected(reaction);
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
