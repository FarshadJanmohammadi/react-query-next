"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { ReactNode } from 'react'

const QueryProvider = ({ children }: { children: ReactNode }) => {

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: 5
            }
        }
    })


    return (
        <QueryClientProvider client={queryClient} >{children}</QueryClientProvider>
    )
}

export default QueryProvider