"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  // Add handler for clicking outside drawer
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const drawer = document.getElementById('mobile-drawer');
      const hamburgerBtn = document.getElementById('hamburger-btn');
      
      if (isDrawerOpen && 
          drawer && 
          hamburgerBtn && 
          !drawer.contains(event.target as Node) && 
          !hamburgerBtn.contains(event.target as Node)) {
        setIsDrawerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDrawerOpen]);

  const toggleDrawer = () => {
    setIsSearchOpen(false);
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleSearch = () => {
    setIsDrawerOpen(false);
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const searchContainer = document.getElementById('search-container');
      if (searchContainer && !searchContainer.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full bg-white shadow-sm">
      <nav className="flex items-center justify-between p-4 max-w-[1280px] mx-auto">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/vectors/fitwise_logo.svg"
              alt="FitWise"
              width={120}
              height={32}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <Link 
              href="/" 
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors
                ${pathname === '/' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Dashboard</span>
            </Link>
            
            <Link 
              href="/calendar" 
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors
                ${pathname === '/calendar' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Kalendarz</span>
            </Link>
            
            <Link 
              href="/clients" 
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors
                ${pathname === '/clients' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span>Klienci</span>
            </Link>
            
            <Link 
              href="/employees" 
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors
                ${pathname === '/employees' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Pracownicy</span>
            </Link>
          </div>
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-4">
          <div className="relative" id="search-container">
            <button 
              className={`hidden md:block p-2 rounded-full transition-colors ${
                isSearchOpen ? 'bg-gray-100' : 'hover:bg-gray-100'
              }`}
              onClick={toggleSearch}
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {isSearchOpen && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Szukaj..."
                    className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    autoFocus
                  />
                  <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            )}
          </div>

          <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

          <button className="hidden md:block w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-medium">
            BJ
          </button>
          
          <button 
            id="hamburger-btn"
            className="md:hidden p-2 hover:bg-gray-100 rounded-full"
            onClick={toggleDrawer}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Mobile Drawer */}
          <div 
            id="mobile-drawer"
            className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-6">
                <button className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-medium">
                  BJ
                </button>
                <button 
                  className="p-2 hover:bg-gray-100 rounded-full"
                  onClick={toggleDrawer}
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <Link 
                  href="/" 
                  className={`flex items-center gap-2 p-2 rounded-lg transition-colors
                    ${pathname === '/' 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                    }`}
                  onClick={toggleDrawer}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Dashboard
                </Link>
                
                <Link 
                  href="/calendar" 
                  className={`flex items-center gap-2 p-2 rounded-lg transition-colors
                    ${pathname === '/calendar' 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                    }`}
                  onClick={toggleDrawer}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Kalendarz
                </Link>
                
                <Link 
                  href="/clients" 
                  className={`flex items-center gap-2 p-2 rounded-lg transition-colors
                    ${pathname === '/clients' 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                    }`}
                  onClick={toggleDrawer}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  Klienci
                </Link>
                
                <Link 
                  href="/employees" 
                  className={`flex items-center gap-2 p-2 rounded-lg transition-colors
                    ${pathname === '/employees' 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                    }`}
                  onClick={toggleDrawer}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Pracownicy</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}