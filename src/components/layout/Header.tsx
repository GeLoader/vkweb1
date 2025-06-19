import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../../types';
import NavLink from './NavLink';

const navItems: NavItem[] = [
  { title: 'Home', href: '#' },
  { title: 'Services', href: '#services' },
  // { title: 'Search Products', href: '#products' },
  // { title: 'Resources', href: '#resources' },
  { title: 'About Us', href: '#about' },
  { title: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
          <a href="" target="_self">
            <img
              src={`${import.meta.env.BASE_URL}${isScrolled ? '/vklogo-black.svg' : '/vklogo.svg'}`}
              alt="Volove Kashrus Logo"
              className="h-12 w-12 mr-2"
            />
          </a>
            <span className={`font-serif text-2xl font-bold ${
              isScrolled ? 'text-navy' : 'text-white'
            }`}>
              <a href="" target="_self"> Volove Kashrus</a>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.title}
                item={item}
                isScrolled={isScrolled}
              />
            ))}
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden text-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-navy font-medium text-lg hover:text-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;