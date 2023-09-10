"use client";
import { MintSVG } from "./MintSVG";

export const Mint = ({
  className = "",
  onClick = (e: React.MouseEvent<HTMLDivElement>) => {},
}: {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}) => {
  return (
    <div className={className} onClick={onClick}>
      <MintSVG />
    </div>
  );
};
