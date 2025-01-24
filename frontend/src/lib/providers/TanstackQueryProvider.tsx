"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type React from "react";

const TanstackQueryProvider = ({
    children,
}: Readonly<{ children: React.ReactNode }>) => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
    );
};

export default TanstackQueryProvider;
