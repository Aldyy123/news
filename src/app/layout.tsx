"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './globals.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { RecoilRoot } from 'recoil'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient()

  return (
    <html lang="en">
      <body>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </RecoilRoot>
      </body>
    </html>
  )
}
