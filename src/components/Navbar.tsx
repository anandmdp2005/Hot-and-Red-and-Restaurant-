import React, { useState, useEffect } from 'react';
import {
  Menu as MenuIcon,
  X,
  Phone,
  MapPin,
  Star,
  ShoppingBag,
  ExternalLink,
} from 'lucide-react';
import { RESTAURANT_INFO, getWhatsAppLink, getSwiggyLink } from '../data/restaurantData';
import { SwiggyIcon } from './SwiggyIcon';

interface NavbarProps {
  orderCount: number;
  onOpenOrderDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ orderCount, onOpenOrderDrawer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Find Us', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Announcement Bar */}
      <div className="bg-[#121214] text-stone-300 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex items-center gap-1 text-red-400 font-medium shrink-0">
              <MapPin className="w-3.5 h-3.5" />
              5th Floor, G.V Mall, Boring Road Crossing, Patna
            </span>
            <span className="hidden md:inline text-stone-600">·</span>
            <span className="hidden md:flex items-center gap-1 text-amber-400 shrink-0">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              {RESTAURANT_INFO.ownerRating} ({RESTAURANT_INFO.ownerTotalReviews} Google Reviews)
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs shrink-0">
            <a
              href={RESTAURANT_INFO.phoneDial}
              className="flex items-center gap-1 text-stone-300 hover:text-white transition-colors"
              title="Call restaurant"
            >
              <Phone className="w-3.5 h-3.5 text-red-400" />
              <span>{RESTAURANT_INFO.contactNumber}</span>
            </a>
            <span className="text-stone-700">|</span>
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full bg-[#FAF8F5]/95 backdrop-blur-md transition-shadow duration-300 border-b ${
          isScrolled
            ? 'shadow-md border-stone-200/80 py-3'
            : 'border-stone-200/50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group shrink-0 focus:outline-none"
            aria-label="Hot and Red Cafe and Restaurant Home"
          >
            <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:bg-red-700 transition-colors">
              H&R
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-stone-900 leading-tight">
                HOT &amp; RED
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-red-600">
                Cafe &amp; Restaurant · Patna
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-red-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Order Drawer Toggle (Basket) */}
            <button
              onClick={onOpenOrderDrawer}
              className="relative p-2.5 rounded-lg border border-stone-200 bg-white text-stone-800 hover:border-red-400 hover:text-red-600 transition-all shadow-xs"
              aria-label="View WhatsApp order list"
              title="View WhatsApp order list"
            >
              <ShoppingBag className="w-5 h-5" />
              {orderCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs animate-in zoom-in">
                  {orderCount}
                </span>
              )}
            </button>

            {/* WhatsApp CTA */}
            <a
              href={getWhatsAppLink(RESTAURANT_INFO.generalWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm transition-all hover:shadow-md"
            >
              {/* WhatsApp custom SVG icon */}
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.085-2.227-.55-1.957-.812-3.21-2.822-3.308-2.952-.097-.13-.787-1.047-.787-1.996 0-.95.498-1.417.674-1.611.176-.194.385-.243.513-.243.129 0 .257.002.37.008.119.006.278-.045.435.334.162.39.553 1.348.601 1.446.048.098.081.213.016.342-.065.13-.098.211-.194.324-.097.113-.205.253-.293.34-.098.098-.2.205-.086.401.114.195.507.836 1.088 1.354.747.666 1.378.873 1.573.971.195.097.309.081.423-.05.114-.13.487-.568.617-.763.13-.195.26-.162.438-.097.179.065 1.135.536 1.33.633.195.098.325.146.373.227.049.081.049.471-.095.876z" />
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* Swiggy CTA */}
            <a
              href={getSwiggyLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#FC8019] hover:bg-[#e26f12] rounded-lg shadow-sm transition-all hover:shadow-md"
              title="Order online from Hot and Red Cafe on Swiggy"
            >
              <SwiggyIcon className="w-4 h-4 text-white" />
              <span>Swiggy</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-100 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-[#FAF8F5] px-4 pt-4 pb-6 mt-3 space-y-3 animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-3 py-2 text-base font-medium text-stone-800 hover:text-red-600 hover:bg-stone-100 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
              <a
                href={getWhatsAppLink(RESTAURANT_INFO.generalWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-red-600 text-white font-semibold rounded-lg text-sm shadow-sm"
              >
                <span>Order on WhatsApp</span>
              </a>

              <a
                href={getSwiggyLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#FC8019] hover:bg-[#e26f12] text-white font-semibold rounded-lg text-sm shadow-sm transition-colors"
              >
                <SwiggyIcon className="w-5 h-5 text-white" />
                <span>Order on Swiggy</span>
              </a>

              <a
                href={RESTAURANT_INFO.phoneDial}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium rounded-lg text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-red-600" />
                <span>Call {RESTAURANT_INFO.contactNumber}</span>
              </a>

              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium rounded-lg text-sm transition-colors"
              >
                <MapPin className="w-4 h-4 text-red-600" />
                <span>Get Directions (Google Maps)</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
