"use client";

import { Address, BaseError, keccak256, toBytes } from "viem";
import { useAccount, useWaitForTransaction } from "wagmi";
import { stringify } from "../utils/stringify";
import { useRedeemableCapsuleMint } from "../generated";
import { Mint } from "./Mint";

export function CapsuleMint() {
  const { address } = useAccount();
  const { write, data, error, isLoading, isError } = useRedeemableCapsuleMint();
  const {
    data: receipt,
    isLoading: isPending,
    isSuccess,
  } = useWaitForTransaction({ hash: data?.hash });

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
        <Mint
          className={isLoading ? "disabled" : ""}
          onClick={(e) => {
            if (!isLoading) {
              const form = e.currentTarget.closest("form");
              if (form) {
                form.submit();
              }
            }
          }}
        />

        {/* <button disabled={isLoading} type="submit">
          Mint
        </button> */}
      </form>

      {isLoading && <div>Check wallet...</div>}
      {isPending && <div>Transaction pending...</div>}
      {isSuccess && (
        <>
          <div>Transaction Hash: {data?.hash}</div>
          <div>
            Transaction Receipt: <pre>{stringify(receipt, null, 2)}</pre>
          </div>
        </>
      )}
      {isError && <div>{(error as BaseError)?.shortMessage}</div>}
    </>
  );
}
