import './globals.css'

export const metadata = {
  title: 'A Personal Blog written by amol',
  description: 'A personal blog written by amol',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
