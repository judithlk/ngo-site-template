import "./global.css"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const metadata = {
  title: 'NGO Name',
  description: 'A template for an NGO website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen p-0 m-0">{children}</body>
    </html>
  )
}
