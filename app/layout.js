import NavBar from './_components/Navbar'
import './globals.css'
import './markdown.css'

export const metadata = {
  title: 'Vast',
  description: 'A personal blog written by amol',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
