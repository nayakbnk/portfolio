import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onResumeClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onResumeClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 py-3 px-4 sm:px-6 lg:px-8 ${scrolled
        ? 'bg-[#F5F0E8]/95 dark:bg-[#121214]/95 backdrop-blur-sm'
        : 'bg-[#F5F0E8] dark:bg-[#121214]'
        }`}
    >
      <div className="max-w-7xl mx-auto">
        <nav
          aria-label="Main Navigation"
          className="bg-[#F5F0E8] dark:bg-[#1B1B20] border-[3px] border-[#111111] dark:border-[#FFFFFF] shadow-[4px_4px_0px_#111111] dark:shadow-[4px_4px_0px_#000000] px-4 sm:px-6 py-3 flex items-center justify-between"
        >
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group font-display font-black text-base sm:text-lg tracking-tight text-[#111111] dark:text-[#F5F0E8] focus:outline-none focus:ring-2 focus:ring-[#111111]"
          >
            <span className="w-4 h-4 bg-[#FFD84D] border-2 border-[#111111] dark:border-[#FFFFFF] inline-block shadow-[1.5px_1.5px_0px_#111111] group-hover:rotate-45 transition-transform" />
            <span className="bg-[#111111] dark:bg-[#FFFFFF] text-[#FFFFFF] dark:text-[#111111] px-2 py-0.5 text-sm sm:text-base font-black tracking-wider uppercase">
              BHAGYASHREE
            </span>
            <span className="font-extrabold text-[#111111] dark:text-[#F5F0E8]">NAYAK K</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-[#111111] dark:text-[#F5F0E8] hover:bg-[#FFD84D] dark:hover:bg-[#FFD84D] dark:hover:text-[#111111] hover:shadow-[2px_2px_0px_#111111] border border-transparent hover:border-[#111111] dark:hover:border-[#FFFFFF] transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action: Theme Toggle, Resume & Mobile Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">

            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (onResumeClick) {
                  e.preventDefault();
                  onResumeClick();
                }
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FFD84D] text-[#111111] font-black text-xs sm:text-sm tracking-wider uppercase border-2 border-[#111111] dark:border-[#FFFFFF] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#111111] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
              title="Download Bhagyashree's Resume"
            >
              <FileText className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>RESUME</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 bg-[#FFFFFF] dark:bg-[#1E1E24] text-[#111111] dark:text-[#F5F0E8] border-2 border-[#111111] dark:border-[#FFFFFF] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#FFD84D] active:translate-x-[1px] active:translate-y-[1px] transition-all focus:outline-none focus:ring-2 focus:ring-[#111111]"
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 stroke-[2.5]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[2.5]" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 bg-[#F5F0E8] dark:bg-[#1B1B20] border-[3px] border-[#111111] dark:border-[#FFFFFF] shadow-[6px_6px_0px_#111111] dark:shadow-[6px_6px_0px_#000000] p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between pb-2 border-b-2 border-[#111111] dark:border-[#FFFFFF]/20 mb-1">
              <span className="text-xs font-black uppercase tracking-widest text-[#111111]/70 dark:text-[#F5F0E8]/70">
                NAVIGATION
              </span>
              <div className="flex items-center gap-2">
                <ThemeToggle showLabel />
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="flex items-center justify-between px-3 py-2 text-sm font-bold uppercase tracking-wider text-[#111111] dark:text-[#F5F0E8] bg-[#FFFFFF] dark:bg-[#141418] border-2 border-[#111111] dark:border-[#FFFFFF] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#FFD84D] dark:hover:bg-[#FFD84D] dark:hover:text-[#111111] transition-all"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono font-black">→</span>
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (onResumeClick) {
                  e.preventDefault();
                  onResumeClick();
                }
                setIsMobileMenuOpen(false);
              }}
              className="mt-2 flex items-center justify-center gap-2 w-full py-2.5 bg-[#FFD84D] text-[#111111] font-black text-sm uppercase tracking-wider border-2 border-[#111111] dark:border-[#FFFFFF] shadow-[3px_3px_0px_#111111]"
            >
              <FileText className="w-4 h-4 stroke-[2.5]" />
              <span>DOWNLOAD RESUME ↗</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
