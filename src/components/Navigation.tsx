import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FilmIcon, MenuIcon, XIcon, UserIcon } from 'lucide-react';
export const Navigation = ({
  isLoggedIn
}: {
  isLoggedIn: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    path: '/',
    label: 'Home',
    protected: true
  }, {
    path: '/what-is-altflicks',
    label: 'What is AltFlicks?'
  }, {
    path: '/discord',
    label: 'Discord Community'
  }, {
    path: '/pricing',
    label: 'Pricing'
  }, {
    path: '/contact',
    label: 'Contact Us'
  }];
  const filteredItems = navItems.filter(item => !item.protected || item.protected && isLoggedIn);
  return <nav className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <FilmIcon size={24} className="text-purple-400" />
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                AltFlicks
              </span>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {filteredItems.map(item => <Link key={item.path} to={item.path} className={`text-sm font-medium transition-colors hover:text-purple-400 ${location.pathname === item.path ? 'text-purple-400' : 'text-gray-300'}`}>
                {item.label}
              </Link>)}
            {isLoggedIn ? <Link to="/profile" className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-purple-400 ${location.pathname === '/profile' ? 'text-purple-400' : 'text-gray-300'}`}>
                <UserIcon size={16} />
                Profile
              </Link> : <Link to="/login" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Sign In
              </Link>}
          </div>
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation Menu */}
        {isOpen && <div className="md:hidden py-4 border-t border-gray-700">
            {filteredItems.map(item => <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className={`block py-2 text-base font-medium ${location.pathname === item.path ? 'text-purple-400' : 'text-gray-300'}`}>
                {item.label}
              </Link>)}
            {isLoggedIn ? <Link to="/profile" onClick={() => setIsOpen(false)} className={`flex items-center gap-2 py-2 text-base font-medium ${location.pathname === '/profile' ? 'text-purple-400' : 'text-gray-300'}`}>
                <UserIcon size={16} />
                Profile
              </Link> : <Link to="/login" onClick={() => setIsOpen(false)} className="block py-2 text-base font-medium text-purple-400">
                Sign In
              </Link>}
          </div>}
      </div>
    </nav>;
};