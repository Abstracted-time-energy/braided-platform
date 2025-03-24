"use client";

import React, { ReactNode, useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import Logo from '@/components/ui/Logo';

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
          <Link href="/" className="flex items-center">
            <Logo className="w-36 h-36" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Learn Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLearnDropdownOpen(!learnDropdownOpen)}
                className={`nav-link flex items-center gap-1 ${
                  pathname?.startsWith('/learn') ? 'text-[#2D3B4D]' : 'text-gray-600 hover:text-[#2D3B4D]'
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
                      className={`block px-4 py-2 text-sm tracking-wide ${
                        pathname === '/learn' ? 'bg-gray-100 text-[#2D3B4D]' : 'text-gray-600 hover:bg-gray-100 hover:text-[#2D3B4D]'
                      }`}
                      onClick={() => setLearnDropdownOpen(false)}
                    >
                      Overview
                    </Link>
                    <Link
                      href="/learn/biological-foundations"
                      className={`block px-4 py-2 text-sm tracking-wide ${
                        pathname === '/learn/biological-foundations' ? 'bg-gray-100 text-[#2D3B4D]' : 'text-gray-600 hover:bg-gray-100 hover:text-[#2D3B4D]'
                      }`}
                      onClick={() => setLearnDropdownOpen(false)}
                    >
                      Biological Foundations
                    </Link>
                    <Link
                      href="/learn/emotional-literacy"
                      className={`block px-4 py-2 text-sm tracking-wide ${
                        pathname === '/learn/emotional-literacy' ? 'bg-gray-100 text-[#2D3B4D]' : 'text-gray-600 hover:bg-gray-100 hover:text-[#2D3B4D]'
                      }`}
                      onClick={() => setLearnDropdownOpen(false)}
                    >
                      Emotional Literacy
                    </Link>
                    <Link
                      href="/learn/attachment"
                      className={`block px-4 py-2 text-sm tracking-wide ${
                        pathname === '/learn/attachment' ? 'bg-gray-100 text-[#2D3B4D]' : 'text-gray-600 hover:bg-gray-100 hover:text-[#2D3B4D]'
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
              className={`nav-link ${
                pathname?.startsWith('/assessment') ? 'text-[#2D3B4D]' : 'text-gray-600 hover:text-[#2D3B4D]'
              }`}
            >
              Assessment
            </Link>
            
            <Link 
              href="/chat" 
              className={`nav-link ${
                pathname?.startsWith('/chat') ? 'text-[#2D3B4D]' : 'text-gray-600 hover:text-[#2D3B4D]'
              }`}
            >
              Chat
            </Link>
            
            <Link 
              href="/consult" 
              className={`nav-link ${
                pathname?.startsWith('/consult') ? 'text-[#2D3B4D]' : 'text-gray-600 hover:text-[#2D3B4D]'
              }`}
            >
              Consult
            </Link>

            <Link 
              href="/app" 
              className={`nav-link ${
                pathname?.startsWith('/app') ? 'text-[#2D3B4D]' : 'text-gray-600 hover:text-[#2D3B4D]'
              }`}
            >
              App
            </Link>
          </nav>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="nav-link text-gray-600 hover:text-[#2D3B4D]">
              Log in
            </Link>
            <Link href="/signup">
              <Button size="sm" className="button-text">
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
                href="/learn/biological-foundations"
                className="font-medium text-gray-600 hover:text-wairua-dark pl-4 border-l-2 border-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Biological Foundations
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
              <Link 
                href="/consult"
                className="font-medium text-gray-600 hover:text-wairua-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                Consult
              </Link>
              <Link 
                href="/app"
                className="font-medium text-gray-600 hover:text-wairua-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                App
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