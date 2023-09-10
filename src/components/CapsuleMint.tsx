"use client";

import { Address, BaseError, keccak256, toBytes } from "viem";
import { useAccount, useWaitForTransaction } from "wagmi";
import { stringify } from "../utils/stringify";
import { useRedeemableCapsuleMint } from "../generated";
import { Mint } from "./Mint";
import { useEffect } from "react";

export const CapsuleMint = ({
  className = "",
  setShowCapsule = () => {},
}: {
  className?: string;
  setShowCapsule?: Function;
}) => {
  const { address } = useAccount();
  const { write, data, error, isLoading, isError } = useRedeemableCapsuleMint();
  const {
    data: receipt,
    isLoading: isPending,
    isSuccess,
  } = useWaitForTransaction({ hash: data?.hash });
  useEffect(() => {
    if (isPending || isSuccess || isError) {
      setShowCapsule(true);
      console.log("Showing capsule");
    }
  }, [isPending, isSuccess, isError]);

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
        <button disabled={isLoading} type="submit">
          <Mint
            className={`${isLoading ? "disabled" : ""} cursor-pointer`}
            // onClick={(e) => {
            //   e.preventDefault();
            //   e.stopPropagation();
            //   if (!isLoading) {
            //     const form = e.currentTarget.closest("form");
            //     if (form) {
            //       form.dispatchEvent(new Event("submit", { cancelable: true }));
            //     }
            //   }
            // }
            // }
          />
        </button>
      </form>

      {/* {(isPending || isSuccess) && setShowCapsule(true)} */}
      {/* {isLoading && <div>Check wallet...</div>}
      {isPending && <div>Transaction pending...</div>}
      {isSuccess && (
        <>
          <div>Transaction Hash: {data?.hash}</div>
          <div>
            Transaction Receipt: <pre>{stringify(receipt, null, 2)}</pre>
          </div>
        </>
      )}
      {isError && <div>{(error as BaseError)?.shortMessage}</div>} */}
    </>
  );
};
