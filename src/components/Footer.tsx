import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  Shield,
  Heart,
  HelpCircle,
  X,
} from 'lucide-react';
import { RESTAURANT_INFO, getWhatsAppLink, getSwiggyLink } from '../data/restaurantData';
import { SwiggyIcon } from './SwiggyIcon';

export const Footer: React.FC = () => {
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121214] text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 text-left">
          {/* Brand Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold text-base shadow-xs">
                H&R
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-white block leading-tight">
                  HOT &amp; RED
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-red-400">
                  Cafe &amp; Restaurant · Patna
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Discover a welcoming cafe experience elevated on the 5th Floor of G.V Mall, Boring Road Crossing, Patna. Fresh pizzas, burgers, artisanal coffee, and refreshing mocktails in a cozy rooftop atmosphere.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-medium">
                ★ 4.7 out of 5 · 950 Google Reviews (Owner-provided)
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Food &amp; Drinks Menu
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Find Us (Map)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact &amp; Reserve
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <p className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span>
                  Phone:{' '}
                  <a
                    href={RESTAURANT_INFO.phoneDial}
                    className="text-stone-200 hover:text-white font-medium"
                  >
                    {RESTAURANT_INFO.contactNumber}
                  </a>
                </span>
              </p>

              <p className="flex items-start gap-2">
                <span className="w-3.5 h-3.5 text-emerald-400 font-bold shrink-0 mt-0.5">
                  WA
                </span>
                <span>
                  WhatsApp:{' '}
                  <a
                    href={getWhatsAppLink(RESTAURANT_INFO.generalWhatsAppMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-200 hover:text-white font-medium"
                  >
                    +91 7004059179
                  </a>
                </span>
              </p>

              <p className="flex items-start gap-2">
                <span className="w-3.5 h-3.5 text-[#FC8019] font-bold shrink-0 mt-0.5">
                  <SwiggyIcon className="w-3.5 h-3.5 text-[#FC8019]" />
                </span>
                <span>
                  Swiggy:{' '}
                  <a
                    href={getSwiggyLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FC8019] hover:underline font-medium inline-flex items-center gap-1"
                  >
                    <span>Order Online</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </span>
              </p>

              <p className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-stone-500 shrink-0 mt-0.5" />
                <span>Hours: 11:00 AM – 11:00 PM (Tentative)</span>
              </p>
            </div>
          </div>

          {/* Full Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Location
            </h4>
            <div className="text-xs text-stone-400 space-y-2">
              <p className="flex items-start gap-2 leading-relaxed">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.fullAddress}</span>
              </p>

              <div className="pt-2">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 hover:text-red-300 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Developer & Owner Guide Trigger */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {currentYear} Hot and Red Cafe and Restaurant - Patna. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-stone-300 transition-colors"
            >
              Privacy &amp; Terms
            </button>
            <span className="text-stone-700">·</span>
            <button
              onClick={() => setShowGuideModal(true)}
              className="text-stone-400 hover:text-red-400 transition-colors flex items-center gap-1"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Owner &amp; Developer Guide</span>
            </button>
          </div>
        </div>
      </div>

      {/* Owner & Developer Guide Modal */}
      {showGuideModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 text-stone-900"
          onClick={() => setShowGuideModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-7 shadow-2xl space-y-4 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-600" />
                <h3 className="font-bold text-base text-stone-900">
                  Owner Content Verification &amp; Publishing Guide
                </h3>
              </div>
              <button
                onClick={() => setShowGuideModal(false)}
                className="text-stone-400 hover:text-stone-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-stone-600 leading-relaxed">
              <p>
                <strong>1. Updating Menu &amp; Prices:</strong> All sample menu items and prices are maintained in{' '}
                <code className="bg-stone-100 px-1 py-0.5 rounded text-stone-800 font-mono">
                  src/data/restaurantData.ts
                </code>. Once the restaurant owner confirms the official printed menu, replace the items in the list.
              </p>
              <p>
                <strong>2. Replacing Food &amp; Ambience Photos:</strong> The website utilizes authentic culinary stock photography from Unsplash to ensure reliable high-quality styling. To feature your actual restaurant interior and kitchen preparations, simply replace the image URLs in{' '}
                <code className="bg-stone-100 px-1 py-0.5 rounded text-stone-800 font-mono">
                  SAMPLE_MENU_ITEMS
                </code>{' '}
                and{' '}
                <code className="bg-stone-100 px-1 py-0.5 rounded text-stone-800 font-mono">
                  GALLERY_ITEMS
                </code>.
              </p>
              <p>
                <strong>3. Confirming Official Operating Hours:</strong> The current hours (11:00 AM – 11:00 PM) are marked as tentative. Update them in{' '}
                <code className="bg-stone-100 px-1 py-0.5 rounded text-stone-800 font-mono">
                  RESTAURANT_INFO.openingHours
                </code>{' '}
                upon owner confirmation.
              </p>
              <p>
                <strong>4. WhatsApp &amp; Maps:</strong> WhatsApp routing is active with contact number{' '}
                <strong>+91 7004059179</strong> and Google Maps is linked directly to your verified listing at{' '}
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-600 underline"
                >
                  G.V Mall, Boring Road Crossing
                </a>.
              </p>
              <p>
                <strong>5. Swiggy Online Delivery:</strong> Visitors can click the Swiggy logo and buttons to order food online directly to their doorstep. You can update your direct Swiggy outlet URL in{' '}
                <code className="bg-stone-100 px-1 py-0.5 rounded text-stone-800 font-mono">
                  RESTAURANT_INFO.swiggyUrl
                </code>{' '}
                in{' '}
                <code className="bg-stone-100 px-1 py-0.5 rounded text-stone-800 font-mono">
                  src/data/restaurantData.ts
                </code>.
              </p>
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setShowGuideModal(false)}
                className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Modal */}
      {showPrivacyModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 text-stone-900"
          onClick={() => setShowPrivacyModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <h3 className="font-bold text-base text-stone-900">
                Privacy Policy &amp; Terms
              </h3>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="text-stone-400 hover:text-stone-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2.5 text-xs text-stone-600 leading-relaxed">
              <p>
                Hot and Red Cafe and Restaurant is committed to respecting your privacy.
              </p>
              <p>
                <strong>WhatsApp Ordering:</strong> When you initiate an order or table reservation through WhatsApp, your communication is transmitted directly via WhatsApp’s encrypted service to the restaurant staff (+91 7004059179). We do not store or sell personal phone numbers.
              </p>
              <p>
                <strong>Website Cookies:</strong> This website does not use tracking cookies or third-party marketing beacons.
              </p>
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
