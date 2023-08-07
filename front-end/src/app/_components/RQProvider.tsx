"use client";
import { useRef } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

interface RQProviderProps {
    children: React.ReactNode
}

export const RQProvider: React.FC<RQProviderProps> = ({ children }) => {
    const _queryClientRef = useRef<QueryClient>(new QueryClient());
    return (
        <QueryClientProvider client={_queryClientRef.current}>
            {children}
        </QueryClientProvider>
    )
}