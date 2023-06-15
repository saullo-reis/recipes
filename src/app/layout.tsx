import { Inter } from 'next/font/google'
import Head from 'next/head'
import './GlobalStyle.sass'
import icon from './favicon.ico'

export const metadata = {
  title: 'Recipes | Easy Foods',
  description: 'Recipes easy for today',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
