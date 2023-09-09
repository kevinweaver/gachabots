import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";
import * as chains from "wagmi/chains";

export default defineConfig({
  out: "src/generated.ts",
  plugins: [
    foundry({
      deployments: {
        Counter: {
          [chains.mainnet.id]: "0x1A61839Eb5fC6eBBcAe01eD5E79062E598792Dac",
          [chains.goerli.id]: "0x78991BB1D194C1235fe285240af8489CFA552151",
          [chains.foundry.id]: "0xDbC1fC13cE9605Cc7A3C442b22c95c04A61c9B58",
        },
      },
      project: "./contracts",
    }),
    react(),
  ],
});
