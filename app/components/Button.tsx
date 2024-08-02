import React from "react";
interface Props {
  name: string;
  handleClick: () => void;
}
function Button({ name, handleClick }: Props) {
  return (
    <button
      onClick={handleClick}
      className="w-full rounded-full h-[55px] hover:bg-red-900 bg-red text-white font-semibold text-base "
    >
      {name}
    </button>
  );
}

export default Button;
