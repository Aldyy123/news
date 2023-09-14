"use strict"
"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './globals.css'
import 'react-loading-skeleton/dist/skeleton.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient()

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  )
}
