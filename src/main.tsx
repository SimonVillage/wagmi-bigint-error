import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { WagmiConfig, createConfig, mainnet } from 'wagmi';
import { createPublicClient, http } from 'viem';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { App } from './App';

const queryClient = new QueryClient();

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
  queryClient,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <App />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </WagmiConfig>
  </React.StrictMode>
);
