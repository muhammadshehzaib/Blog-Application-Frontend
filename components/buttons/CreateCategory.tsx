"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Example = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/category");
  };

  return (
    <DrawOutlineButton onClick={handleButtonClick}>
      Create New Category
    </DrawOutlineButton>
  );
};

const DrawOutlineButton = ({
  children,
  onClick,
  ...rest
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { onClick?: () => void }) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className="group inline-flex items-center gap-2 border border-rule text-paper px-4 py-2.5 hover:border-paper-3 hover:bg-ink-2 transition-colors duration-200 ease-out"
    >
      <span className="font-mono text-[0.7rem] text-paper-3 group-hover:text-accent transition-colors">
        [
      </span>
      <span className="text-sm">{children}</span>
      <span className="font-mono text-[0.7rem] text-paper-3 group-hover:text-accent transition-colors">
        ]
      </span>
    </button>
  );
};

export default Example;
