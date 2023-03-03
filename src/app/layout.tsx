import Navigation from '@/components/Navigation'
import './globals.css'

export const metadata = {
  title: 'Beta Features',
  description: 'Playing with Next.js beta features',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
