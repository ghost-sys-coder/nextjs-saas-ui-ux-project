import React from 'react'
import Link from 'next/link'

const HomePageFooter = () => {
  return (
    <footer className="border-t py-8 px-4">
        <div className="container flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">&copy; 2026 MockupGen. All rights reserved.</p>
          <nav className="flex space-x-6 text-sm">
            <Link href="/terms" className="text-muted-foreground hover:text-foreground">Terms</Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy</Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
          </nav>
        </div>
      </footer>
  )
}

export default HomePageFooter