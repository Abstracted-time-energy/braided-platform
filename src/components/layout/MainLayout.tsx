import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-montserrat font-bold text-wairua-dark flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-wairua to-wairua-dark flex items-center justify-center text-white">
              B
            </div>
            <span>Braided</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/learn" className="font-medium text-gray-600 hover:text-wairua-dark transition-colors">
              Learn
            </Link>
            <Link href="/assessment" className="font-medium text-gray-600 hover:text-wairua-dark transition-colors">
              Assessment
            </Link>
            <Link href="/chat" className="font-medium text-gray-600 hover:text-wairua-dark transition-colors">
              Chat
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden md:inline-block font-medium text-gray-600 hover:text-wairua-dark">
              Log in
            </Link>
            <Link href="/signup">
              <Button size="sm">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 font-montserrat">Braided</h3>
              <p className="text-gray-300 text-sm">
                Discover your path to wellbeing through the Whirlpool of Thrive model.
              </p>
            </div>
            <div>
              <h4 className="text-md font-bold mb-4 font-montserrat">Explore</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><Link href="/learn" className="hover:text-wairua-light">Learn</Link></li>
                <li><Link href="/assessment" className="hover:text-wairua-light">Assessment</Link></li>
                <li><Link href="/chat" className="hover:text-wairua-light">Chat</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-bold mb-4 font-montserrat">Resources</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><Link href="#" className="hover:text-wairua-light">Blog</Link></li>
                <li><Link href="#" className="hover:text-wairua-light">Research</Link></li>
                <li><Link href="#" className="hover:text-wairua-light">Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-bold mb-4 font-montserrat">Connect</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><Link href="#" className="hover:text-wairua-light">Contact</Link></li>
                <li><Link href="#" className="hover:text-wairua-light">About Us</Link></li>
                <li><Link href="#" className="hover:text-wairua-light">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Braided Platform. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}