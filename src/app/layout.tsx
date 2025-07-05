import './globals.css'

export const metadata = {
  title: 'Andzh | Blog',
  description: 'Personal blog and portfolio of Andzh.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-blue text-gray-100 min-h-screen flex flex-col">
        {/* NAVBAR */}
        <nav className="w-full border-b bg-white shadow-sm">
          <div className="container mx-auto flex items-center justify-between p-4">
            <span className="font-bold text-2xl text-black tracking-tight">Andrew Zhao</span>
            <ul className="flex space-x-6 font-medium">
              <li><a href="/" className="font-bold text-black transition">Home</a></li>
              <li><a href="/resume" className="font-bold text-black transition">Resume</a></li>
              <li><a href="/blog" className="font-bold text-black transition">Blog</a></li>
            </ul>
          </div>
        </nav>
        {/* MAIN CONTENT */}
        <main className="flex-1 flex flex-col">{children}</main>
        {/* FOOTER */}
        <footer className="w-full text-center py-4 mt-8 text-black text-sm border-t">
          &copy; {new Date().getFullYear()} Andrew Zhao. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
