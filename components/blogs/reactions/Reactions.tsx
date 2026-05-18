import React, { useState, FC } from "react";

interface ReactionsProps {
  onReactionSelected: (reaction: string) => void;
}

const reactionItems: { key: string; glyph: string; label: string }[] = [
  { key: "happy", glyph: "◠", label: "happy" },
  { key: "sad", glyph: "◡", label: "sad" },
  { key: "angry", glyph: "▲", label: "angry" },
  { key: "love", glyph: "♥", label: "love" },
  { key: "surprised", glyph: "◎", label: "surprised" },
  { key: "boring", glyph: "─", label: "boring" },
  { key: "excited", glyph: "★", label: "excited" },
  { key: "laugh", glyph: "✦", label: "laugh" },
  { key: "shocked", glyph: "◐", label: "shocked" },
];

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
      <p className="font-mono text-[0.7rem] tracking-label uppercase text-paper-3 mb-4">
        &gt; react
      </p>
      <div className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-sm">
        {reactionItems.map((r) => {
          const active = selectedReaction === r.key;
          return (
            <button
              key={r.key}
              type="button"
              aria-label={r.label}
              aria-pressed={active}
              onClick={() => handleReactionClick(r.key)}
              className={`group inline-flex items-center gap-2 px-3 py-1.5 border transition-colors ${
                active
                  ? "border-accent text-accent bg-accent-soft"
                  : "border-rule text-paper-2 hover:border-paper-3 hover:text-paper"
              }`}
            >
              <span
                className={`text-xs ${
                  active ? "text-accent" : "text-paper-3 group-hover:text-paper-2"
                }`}
              >
                [
              </span>
              <span aria-hidden="true">{r.glyph}</span>
              <span className="text-xs uppercase tracking-label">{r.label}</span>
              <span
                className={`text-xs ${
                  active ? "text-accent" : "text-paper-3 group-hover:text-paper-2"
                }`}
              >
                ]
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Reactions;
