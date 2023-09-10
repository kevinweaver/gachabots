"use client";

import { BaseError } from "viem";
import { useContractWrite, useWaitForTransaction } from "wagmi";

import { wagmiContractConfig } from "./contracts";
import { stringify } from "../utils/stringify";
import { useCounterGetNumber, useCounterIncrement } from "../generated";

export function IncrementCounter() {
  //const { data } = useCounterGetNumber({
  // const { data, error, isLoading, isError } = useCounterGetNumber({
  //   //address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  // });

  const { write, data, error, isLoading, isError } = useCounterIncrement();
  const {
    data: receipt,
    isLoading: isPending,
    isSuccess,
  } = useWaitForTransaction({ hash: data?.hash });

  return (
    <>
      <h3>Increment</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const tokenId = formData.get("tokenId") as string;
          write({});
        }}
      >
        <button disabled={isLoading} type="submit">
          Increment
        </button>
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
