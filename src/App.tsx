import { useAccount, useReadContract } from "wagmi";
import { parseAbi } from "viem";

const CONFIG = {
  address: "0xc3f733ca98E0daD0386979Eb96fb1722A1A05E69",
  abi: parseAbi([
    "function balanceOf(address owner) external view returns (uint256)",
    "function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256)",
  ]),
} as const;

export function App() {
  const { isConnected } = useAccount();

  // Is trace-able in TanStack devtools
  const rs1 = useReadContract({
    functionName: "balanceOf",
    args: ["0x5dEA60eEF2bFCEF3a808a219B562145D1b80bd7D"],
  });

  // Breaks whole page trying to be parsed by TanStack devtools
  const rs2 = useReadContract({
    functionName: "tokenOfOwnerByIndex",
    args: ["0x5dEA60eEF2bFCEF3a808a219B562145D1b80bd7D", 0n],
  });

  return (
    <>
      <h1>wagmi</h1>
    </>
  );
}
