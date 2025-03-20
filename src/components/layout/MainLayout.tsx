"use client";

import React, { ReactNode, useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [learnDropdownOpen, setLearnDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLearnDropdownOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 bg-white z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl text-wairua-dark flex items-center gap-2">
            <span>Braided</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Learn Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLearnDropdownOpen(!learnDropdownOpen)}
                className={`flex items-center gap-1 font-medium ${
                  pathname?.startsWith('/learn') ? 'text-wairua-dark' : 'text-gray-600 hover:text-wairua-dark'
                }`}
              >
                Learn
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform ${learnDropdownOpen ? 'rotate-180' : ''}`}
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {learnDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50">
                  <div className="py-1">
                    <Link
                      href="/learn"
                      className={`block px-4 py-2 text-sm ${
                        pathname === '/learn' ? 'bg-gray-100 text-wairua-dark' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setLearnDropdownOpen(false)}
                    >
                      Overview
                    </Link>
                    <Link
                      href="/learn/emotional-literacy"
                      className={`block px-4 py-2 text-sm ${
                        pathname === '/learn/emotional-literacy' ? 'bg-gray-100 text-wairua-dark' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setLearnDropdownOpen(false)}
                    >
                      Emotional Literacy
                    </Link>
                    <Link
                      href="/learn/attachment"
                      className={`block px-4 py-2 text-sm ${
                        pathname === '/learn/attachment' ? 'bg-gray-100 text-wairua-dark' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setLearnDropdownOpen(false)}
                    >
                      Attachment Theory
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link 
              href="/assessment" 
              className={`font-medium ${
                pathname?.startsWith('/assessment') ? 'text-wairua-dark' : 'text-gray-600 hover:text-wairua-dark'
              }`}
            >
              Assessment
            </Link>
            
            <Link 
              href="/chat" 
              className={`font-medium ${
                pathname?.startsWith('/chat') ? 'text-wairua-dark' : 'text-gray-600 hover:text-wairua-dark'
              }`}
            >
              Chat
            </Link>
          </nav>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="font-medium text-gray-600 hover:text-wairua-dark">
              Log in
            </Link>
            <Link href="/signup">
              <Button size="sm">
                Sign Up
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden p-4 bg-white border-t">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/learn"
                className="font-medium text-gray-600 hover:text-wairua-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                Learn
              </Link>
              <Link 
                href="/learn/emotional-literacy"
                className="font-medium text-gray-600 hover:text-wairua-dark pl-4 border-l-2 border-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Emotional Literacy
              </Link>
              <Link 
                href="/learn/attachment"
                className="font-medium text-gray-600 hover:text-wairua-dark pl-4 border-l-2 border-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Attachment Theory
              </Link>
              <Link 
                href="/assessment"
                className="font-medium text-gray-600 hover:text-wairua-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                Assessment
              </Link>
              <Link 
                href="/chat"
                className="font-medium text-gray-600 hover:text-wairua-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                Chat
              </Link>
              <div className="pt-2 flex flex-col space-y-2">
                <Link 
                  href="/login"
                  className="font-medium text-gray-600 hover:text-wairua-dark"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link 
                  href="/signup"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full" size="sm">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>© {new Date().getFullYear()} Braided. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}