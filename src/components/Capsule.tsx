"use client";

import { useAccount } from "wagmi";
import { CapsuleSVG } from "./CapsuleSVG";

export function Capsule({ className = "" }: { className?: string }) {
  //const { address } = useAccount();

  return (
    <>
      <CapsuleSVG />
    </>
  );
}
