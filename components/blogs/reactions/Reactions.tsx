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
          onClick={() => handleReactionClick("Happy")}
          style={{ opacity: selectedReaction === "Happy" ? 1 : 0.6 }}
        >
          😄
        </span>
        <span
          role="img"
          aria-label="Sad"
          onClick={() => handleReactionClick("Sad")}
          style={{ opacity: selectedReaction === "Sad" ? 1 : 0.6 }}
        >
          😢
        </span>
      </div>
      <p>{selectedReaction}</p>
    </div>
  );
};

export default Reactions;
