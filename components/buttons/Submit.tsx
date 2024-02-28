import React, { FC } from "react";

interface NeuButtonProps {
  button: string;
}

const NeuButton: FC<NeuButtonProps> = ({ button }) => {
  return (
    <div className="flex items-center justify-center">
      <button className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        {button}
      </button>
    </div>
  );
};

export default NeuButton;
