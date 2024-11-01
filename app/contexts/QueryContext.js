'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const QueryContext = ({ children }) => {
    const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false, // default: true
          },
        },
      });
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default QueryContext;