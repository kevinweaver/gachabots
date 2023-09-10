"use client";

import { Address, BaseError, keccak256, toBytes } from "viem";
import { useAccount, useWaitForTransaction } from "wagmi";
import { stringify } from "../utils/stringify";
import { useRedeemableCapsuleMint } from "../generated";
import { Mint } from "./Mint";
import { useEffect, useState } from "react";

import "../styles/mint.css";

export const CapsuleMint = ({
  className = "",
  setShowCapsule = () => {},
}: {
  className?: string;
  setShowCapsule?: Function;
}) => {
  const { address } = useAccount();

  const [animationClass, setAnimationClass] = useState("");

  const { write, data, error, isLoading, isError } = useRedeemableCapsuleMint();
  const {
    data: receipt,
    isLoading: isPending,
    isSuccess,
  } = useWaitForTransaction({ hash: data?.hash });
  useEffect(() => {
    if (isPending || isSuccess || isError) {
      setShowCapsule(true);
    }
  }, [isPending, isSuccess, isError]);

  const handleMintClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    //e.preventDefault();
    e.currentTarget.classList.add("spin-clockwise"); // Add clockwise spinning animation
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          write({
            args: [address as Address, BigInt(1), keccak256(toBytes(""))],
          });
        }}
      >
        <button disabled={isLoading} type="submit" onClick={handleMintClick}>
          <Mint
            className={`${
              isLoading ? "disabled" : ""
            } cursor-pointer ${animationClass} `}
          />
        </button>
      </form>
    </>
  );
};
