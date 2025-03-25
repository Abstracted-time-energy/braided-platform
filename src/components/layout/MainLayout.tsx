"use client";

import React, { ReactNode, useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

interface MainLayoutProps {
  children: ReactNode;
}

// Logo component with the new braided design
const BraidedLogo = ({ className = "", darkMode = false }) => {
  const baseClass = `relative ${className}`;
  
  return (
    <div className={baseClass}>
      <div className="relative flex items-center">
        {/* SVG Circle with Half Circles */}
        <div className="mr-3">
          <svg width="40" height="40" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            {/* Background */}
            <circle cx="60" cy="60" r="58" fill="#F5F0E1" stroke="#3A2718" strokeWidth="2" />
            
            {/* Top half-circles */}
            <path d="M20,60 C20,35 38,20 60,20 C82,20 100,35 100,60" 
                  fill="none" stroke="#64B5BA" strokeWidth="8" strokeLinecap="round" />
            <path d="M28,60 C28,40 42,28 60,28 C78,28 92,40 92,60" 
                  fill="none" stroke="#8ED3D7" strokeWidth="8" strokeLinecap="round" />
            <path d="M36,60 C36,45 46,36 60,36 C74,36 84,45 84,60" 
                  fill="none" stroke="#AA7C52" strokeWidth="8" strokeLinecap="round" />
            
            {/* Bottom half-circles */}
            <path d="M20,60 C20,85 38,100 60,100 C82,100 100,85 100,60" 
                  fill="none" stroke="#64B5BA" strokeWidth="8" strokeLinecap="round" />
            <path d="M28,60 C28,80 42,92 60,92 C78,92 92,80 92,60" 
                  fill="none" stroke="#8ED3D7" strokeWidth="8" strokeLinecap="round" />
            <path d="M36,60 C36,75 46,84 60,84 C74,84 84,75 84,60" 
                  fill="none" stroke="#AA7C52" strokeWidth="8" strokeLinecap="round" />
            
            {/* Center band */}
            <rect x="15" y="55" width="90" height="10" fill="#F5F0E1" />
            
            {/* Border */}
            <circle cx="60" cy="60" r="58" fill="none" stroke="#3A2718" strokeWidth="2" />
          </svg>
        </div>
        
        {/* Text */}
        <div className={`font-semibold tracking-wider text-2xl ${darkMode ? "text-white" : "text-[#3A2718]"}`}>
          BRAIDED
        </div>
      </div>
    </div>
  );
};

export default function MainLayout({ children }: MainLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [learnDropdownOpen, setLearnDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      <header 
        className={`fixed top-0 w-full z-30 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' 
            : 'bg-gray-900/30 backdrop-blur-sm py-5 shadow-lg'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <BraidedLogo className={`transition-all duration-300`} darkMode={!isScrolled} />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Learn Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLearnDropdownOpen(!learnDropdownOpen)}
                className={`nav-link flex items-center gap-1 font-light text-base ${
                  pathname?.startsWith('/learn') 
                    ? isScrolled ? 'text-[#2D3B4D] font-medium' : 'text-white font-medium'
                    : isScrolled ? 'text-gray-700 hover:text-[#2D3B4D]' : 'text-white hover:text-white/80'
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

              <AnimatePresence>
                {learnDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-50 overflow-hidden"
                  >
                    <div className="py-1">
                      <Link
                        href="/learn"
                        className={`block px-4 py-3 text-sm tracking-wide transition-colors ${
                          pathname === '/learn' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50 hover:text-[#2D3B4D]'
                        }`}
                        onClick={() => setLearnDropdownOpen(false)}
                      >
                        <div className="font-medium">Overview</div>
                        <div className="text-xs text-gray-500 mt-1">The complete framework</div>
                      </Link>
                      <Link
                        href="/learn/biological-foundations"
                        className={`block px-4 py-3 text-sm tracking-wide transition-colors ${
                          pathname === '/learn/biological-foundations' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50 hover:text-[#2D3B4D]'
                        }`}
                        onClick={() => setLearnDropdownOpen(false)}
                      >
                        <div className="font-medium">Biological Foundations</div>
                        <div className="text-xs text-gray-500 mt-1">The science of our evolution</div>
                      </Link>
                      <Link
                        href="/learn/emotional-literacy"
                        className={`block px-4 py-3 text-sm tracking-wide transition-colors ${
                          pathname === '/learn/emotional-literacy' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50 hover:text-[#2D3B4D]'
                        }`}
                        onClick={() => setLearnDropdownOpen(false)}
                      >
                        <div className="font-medium">Emotional Literacy</div>
                        <div className="text-xs text-gray-500 mt-1">Understanding our inner world</div>
                      </Link>
                      <Link
                        href="/learn/attachment"
                        className={`block px-4 py-3 text-sm tracking-wide transition-colors ${
                          pathname === '/learn/attachment' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50 hover:text-[#2D3B4D]'
                        }`}
                        onClick={() => setLearnDropdownOpen(false)}
                      >
                        <div className="font-medium">Attachment Theory</div>
                        <div className="text-xs text-gray-500 mt-1">How we connect with others</div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link 
              href="/assessment" 
              className={`nav-link font-light text-base ${
                pathname?.startsWith('/assessment') 
                  ? isScrolled ? 'text-[#2D3B4D] font-medium' : 'text-white font-medium'
                  : isScrolled ? 'text-gray-700 hover:text-[#2D3B4D]' : 'text-white hover:text-white/80'
              }`}
            >
              Assessment
            </Link>
            
            <Link 
              href="/chat" 
              className={`nav-link font-light text-base ${
                pathname?.startsWith('/chat') 
                  ? isScrolled ? 'text-[#2D3B4D] font-medium' : 'text-white font-medium'
                  : isScrolled ? 'text-gray-700 hover:text-[#2D3B4D]' : 'text-white hover:text-white/80'
              }`}
            >
              Chat
            </Link>
            
            <Link 
              href="/consult" 
              className={`nav-link font-light text-base ${
                pathname?.startsWith('/consult') 
                  ? isScrolled ? 'text-[#2D3B4D] font-medium' : 'text-white font-medium'
                  : isScrolled ? 'text-gray-700 hover:text-[#2D3B4D]' : 'text-white hover:text-white/80'
              }`}
            >
              Consult
            </Link>

            <Link 
              href="/app" 
              className={`nav-link font-light text-base ${
                pathname?.startsWith('/app') 
                  ? isScrolled ? 'text-[#2D3B4D] font-medium' : 'text-white font-medium'
                  : isScrolled ? 'text-gray-700 hover:text-[#2D3B4D]' : 'text-white hover:text-white/80'
              }`}
            >
              App
            </Link>
          </nav>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link 
              href="/login" 
              className={`nav-link font-light text-base ${
                isScrolled ? 'text-gray-700 hover:text-[#2D3B4D]' : 'text-white hover:text-white/80'
              }`}
            >
              Log in
            </Link>
            <Link href="/signup">
              <Button 
                size="sm" 
                className={`transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-white hover:bg-white/90 text-blue-700'
                }`}
              >
                Sign Up
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span 
                className={`absolute h-0.5 w-6 transform transition-all duration-300 ${
                  isMenuOpen 
                    ? 'rotate-45 translate-y-2.5 bg-gray-700' 
                    : isScrolled 
                      ? 'bg-gray-700' 
                      : 'bg-white'
                }`}
                style={{ top: '0' }}
              ></span>
              <span 
                className={`absolute h-0.5 w-6 transform transition-all duration-300 ${
                  isMenuOpen 
                    ? 'opacity-0' 
                    : isScrolled 
                      ? 'bg-gray-700' 
                      : 'bg-white'
                }`}
                style={{ top: '8px' }}
              ></span>
              <span 
                className={`absolute h-0.5 w-6 transform transition-all duration-300 ${
                  isMenuOpen 
                    ? '-rotate-45 -translate-y-2.5 bg-gray-700' 
                    : isScrolled 
                      ? 'bg-gray-700' 
                      : 'bg-white'
                }`}
                style={{ top: '16px' }}
              ></span>
            </div>
          </button>
        </div>
        
        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden fixed inset-0 z-40 bg-white"
            >
              <div className="h-full flex flex-col pt-24 px-6 pb-8 overflow-y-auto">
                <div className="flex flex-col space-y-6">
                  <div className="border-b border-gray-100 pb-6">
                    <div className="text-lg font-medium text-gray-900 mb-4">Learn</div>
                    <div className="flex flex-col space-y-4">
                      <Link 
                        href="/learn"
                        className="text-gray-600 hover:text-blue-600 transition-colors pl-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Overview
                      </Link>
                      <Link 
                        href="/learn/biological-foundations"
                        className="text-gray-600 hover:text-blue-600 transition-colors pl-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Biological Foundations
                      </Link>
                      <Link 
                        href="/learn/emotional-literacy"
                        className="text-gray-600 hover:text-blue-600 transition-colors pl-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Emotional Literacy
                      </Link>
                      <Link 
                        href="/learn/attachment"
                        className="text-gray-600 hover:text-blue-600 transition-colors pl-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Attachment Theory
                      </Link>
                    </div>
                  </div>
                  
                  <Link 
                    href="/assessment"
                    className="text-gray-900 font-medium text-lg hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Assessment
                  </Link>
                  
                  <Link 
                    href="/chat"
                    className="text-gray-900 font-medium text-lg hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Chat
                  </Link>
                  
                  <Link 
                    href="/consult"
                    className="text-gray-900 font-medium text-lg hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Consult
                  </Link>
                  
                  <Link 
                    href="/app"
                    className="text-gray-900 font-medium text-lg hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    App
                  </Link>
                </div>
                
                <div className="mt-auto pt-8 border-t border-gray-100">
                  <div className="flex flex-col space-y-4">
                    <Link 
                      href="/login"
                      className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Log in
                    </Link>
                    <Link 
                      href="/signup"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Button className="w-full font-medium" size="lg">
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      {/* Add space for the fixed header */}
      <div className="h-20"></div>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="inline-block mb-6">
                <BraidedLogo darkMode={true} />
              </Link>
              <p className="text-gray-400 text-sm mt-4">
                Explore the interconnected layers that form your experience through our unique whirlpool model.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/learn" className="text-gray-400 hover:text-white transition-colors">Model Overview</Link>
                </li>
                <li>
                  <Link href="/assessment" className="text-gray-400 hover:text-white transition-colors">Assessment</Link>
                </li>
                <li>
                  <Link href="/chat" className="text-gray-400 hover:text-white transition-colors">Chat</Link>
                </li>
                <li>
                  <Link href="/consult" className="text-gray-400 hover:text-white transition-colors">Consult</Link>
                </li>
                <li>
                  <Link href="/app" className="text-gray-400 hover:text-white transition-colors">Mobile App</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about/vision" className="text-gray-400 hover:text-white transition-colors">Vision</Link>
                </li>
                <li>
                  <Link href="/about/team" className="text-gray-400 hover:text-white transition-colors">Team</Link>
                </li>
                <li>
                  <Link href="/about/research" className="text-gray-400 hover:text-white transition-colors">Research</Link>
                </li>
                <li>
                  <Link href="/about/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
                </li>
                <li>
                  <Link href="/about/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Braided. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}