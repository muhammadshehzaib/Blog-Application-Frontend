import { useRouter } from "next/navigation";
import React from "react";

const Example = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/category");
  };
  return (
    <div className="bg-slate-900">
      <DrawOutlineButton onClick={handleButtonClick}>
        Create New Category
      </DrawOutlineButton>
    </div>
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
      className="group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default Example;
