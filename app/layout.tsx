import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '博子 · Bozi',
  description: '亚马逊运营 / AI 产品探索者 / 出海实践者 · 杭州',
  openGraph: {
    title: '博子 · Bozi',
    description: '亚马逊运营 / AI 产品探索者 / 出海实践者 · 杭州',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    site: '@bzfree2003',
    creator: '@bzfree2003',
    title: '博子 · Bozi',
    description: '亚马逊运营 / AI 产品探索者 / 出海实践者 · 杭州',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  )
}
