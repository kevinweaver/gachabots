"use client";

import { useState } from "react";
import { BaseError } from "viem";
import { type Address, useContractRead, useAccount } from "wagmi";
import { useRedeemableCapsuleTokensOwnedBy } from "../generated"; // Make sure the path is correct

import { wagmiContractConfig } from "./contracts";

export function CapsuleBalance() {
  return (
    <div>
      <div>
        <TokensOwnedBy />
        {/* <br />
        <TotalSupply /> */}
      </div>
    </div>
  );
}

// function TotalSupply() {
//   const { data, isRefetching, refetch } = useContractRead({
//     ...wagmiContractConfig,
//     functionName: "totalSupply",
//   });

//   return (
//     <div>
//       Total Supply: {data?.toString()}
//       <button
//         disabled={isRefetching}
//         onClick={() => refetch()}
//         style={{ marginLeft: 4 }}
//       >
//         {isRefetching ? "loading..." : "refetch"}
//       </button>
//     </div>
//   );
// }

function TokensOwnedBy() {
  const { address } = useAccount();

  const { data, error, isLoading, isSuccess, isRefetching, refetch } =
    useRedeemableCapsuleTokensOwnedBy({
      args: [address as Address],
      enabled: Boolean(address),
    });

  return (
    <div>
      Tokens owned by address: {isSuccess && data?.toString()}
      <button disabled={isRefetching} onClick={() => refetch()}>
        {isLoading ? "fetching..." : "fetch"}
      </button>
      {error && <div>{(error as BaseError).shortMessage}</div>}
    </div>
  );
}
