import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { WagmiProvider } from "wagmi";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { config } from "./wagmi";

import { App } from "./App";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <App />
        <ReactQueryDevtools />
      </WagmiProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
