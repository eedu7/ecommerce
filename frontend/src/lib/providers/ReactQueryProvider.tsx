"use client";

import {
    QueryClient,
    QueryClientProvider,
    isServer,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import * as React from "react";

function makeQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
            },
        },
    });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
    if (isServer) {
        return makeQueryClient();
    } else {
        if (!browserQueryClient) {
            browserQueryClient = makeQueryClient();
        }
        return browserQueryClient;
    }
}

export function ReactQueryProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const queryClient = getQueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryStreamedHydration>
                {children}
            </ReactQueryStreamedHydration>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}