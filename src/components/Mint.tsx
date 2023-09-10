"use client";
import { MintSVG } from "./MintSVG";

export const Mint = ({
  className = "",
  onClick = (e: React.MouseEvent<HTMLButtonElement>) => {},
}: {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <button
      type="button"
      className={`${className} focus:outline-none`}
      // onClick={(e) => {
      //   e.preventDefault();
      //   e.stopPropagation();
      //   onClick(e);
      // }}
    >
      <MintSVG />
    </button>
  );
};
