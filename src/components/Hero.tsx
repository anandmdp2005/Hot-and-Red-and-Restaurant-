import React from 'react';
import {
  UtensilsCrossed,
  MapPin,
  Star,
  ArrowRight,
  Clock,
  Sparkles,
} from 'lucide-react';
import { RESTAURANT_INFO, getWhatsAppLink, getSwiggyLink } from '../data/restaurantData';
import { SwiggyIcon } from './SwiggyIcon';

export const Hero: React.FC = () => {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-[#121214] text-white overflow-hidden">
      {/* Background with real photography and measured dark gradient scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80"
          alt="Warm authentic cafe and restaurant interior ambiance"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121214] via-[#121214]/90 to-[#121214]/75" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headings, Subheading, CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Top location badge without pill enclosure */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-stone-300 font-medium">
              <span className="text-red-400 font-semibold tracking-wide uppercase">
                Patna’s Rooftop Dining Destination
              </span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                5th Floor, G.V Mall, Boring Road Crossing
              </span>
            </div>

            {/* Main Headings */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance font-serif">
                Welcome to <span className="text-red-500">Hot and Red</span> Cafe &amp; Restaurant
              </h1>
              <p className="text-lg sm:text-2xl text-stone-200 font-medium">
                Delicious Food, Great Taste, Unforgettable Moments.
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-stone-300 max-w-xl leading-relaxed">
              Discover a welcoming cafe experience with delicious food and refreshing beverages in the heart of Patna. Enjoy oven-fresh pizzas, crispy burgers, authentic Indian specialties, and handcrafted beverages overlooking Boring Road.
            </p>

            {/* Action Buttons: Menu, WhatsApp, Swiggy, Directions */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-3.5 pt-2">
              {/* Button 1: Explore Our Menu */}
              <a
                href="#menu"
                onClick={scrollToMenu}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm rounded-lg shadow-lg hover:shadow-red-600/25 transition-all duration-200 group"
              >
                <UtensilsCrossed className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
                <span>Explore Menu</span>
              </a>

              {/* Button 2: Order on WhatsApp */}
              <a
                href={getWhatsAppLink(RESTAURANT_INFO.generalWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm rounded-lg shadow-md transition-all duration-200"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.085-2.227-.55-1.957-.812-3.21-2.822-3.308-2.952-.097-.13-.787-1.047-.787-1.996 0-.95.498-1.417.674-1.611.176-.194.385-.243.513-.243.129 0 .257.002.37.008.119.006.278-.045.435.334.162.39.553 1.348.601 1.446.048.098.081.213.016.342-.065.13-.098.211-.194.324-.097.113-.205.253-.293.34-.098.098-.2.205-.086.401.114.195.507.836 1.088 1.354.747.666 1.378.873 1.573.971.195.097.309.081.423-.05.114-.13.487-.568.617-.763.13-.195.26-.162.438-.097.179.065 1.135.536 1.33.633.195.098.325.146.373.227.049.081.049.471-.095.876z" />
                </svg>
                <span>WhatsApp Order</span>
              </a>

              {/* Button 3: Order on Swiggy */}
              <a
                href={getSwiggyLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#FC8019] hover:bg-[#e26f12] text-white font-semibold text-sm rounded-lg shadow-md transition-all duration-200"
                title="Order on Swiggy for home delivery"
              >
                <SwiggyIcon className="w-4 h-4 text-white" />
                <span>Order on Swiggy</span>
              </a>

              {/* Button 4: Get Directions */}
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-stone-800/90 hover:bg-stone-700 text-stone-200 hover:text-white font-medium text-sm rounded-lg border border-stone-700 transition-all duration-200"
              >
                <MapPin className="w-4 h-4 text-red-400" />
                <span>Directions</span>
              </a>
            </div>

            {/* Quick stats & trust signals */}
            <div className="pt-4 border-t border-stone-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div>
                <div className="flex items-center gap-1.5 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="text-xl font-bold font-mono tracking-tight text-white">4.7 / 5</span>
                </div>
                <p className="text-xs text-stone-400 mt-0.5">
                  950 Google Reviews (Owner-provided)
                </p>
              </div>

              <div>
                <div className="text-xl font-bold text-white font-mono tracking-tight">
                  5th Floor
                </div>
                <p className="text-xs text-stone-400 mt-0.5">
                  G.V Mall, Boring Road Crossing
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="text-xl font-bold text-white font-mono tracking-tight">
                  Multi-Cuisine
                </div>
                <p className="text-xs text-stone-400 mt-0.5">
                  Cafe, Pizza, Sizzlers, Shakes
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Feature Showcase with real authentic food photos */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Featured Card: Real Artisan Pizza */}
              <div className="rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 shadow-2xl relative group">
                <div className="aspect-[4/3] w-full overflow-hidden bg-stone-950 relative">
                  <img
                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
                    alt="Wood-fired crispy artisan pizza with bubbling mozzarella and fresh basil"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-3 right-3 bg-red-600/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-xs shadow-xs">
                    Popular Item
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-xs text-red-400 font-medium">Chef’s Special</span>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      Freshly Baked Farmhouse Pizza
                    </h3>
                    <p className="text-xs text-stone-300 mt-0.5">
                      Crisp golden crust topped with garden veggies &amp; mozzarella
                    </p>
                  </div>
                </div>

                {/* Secondary 2-card strip below */}
                <div className="p-3 bg-stone-900/95 grid grid-cols-2 gap-3 border-t border-stone-800">
                  <div className="flex items-center gap-2.5 p-2 rounded-lg bg-stone-800/60 border border-stone-700/50">
                    <img
                      src="https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=200&q=80"
                      alt="Chilled cold coffee with ice cream"
                      className="w-12 h-12 rounded-md object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="min-w-0 text-left">
                      <p className="text-xs font-semibold text-white truncate">Cold Coffee</p>
                      <p className="text-[11px] text-stone-400">With Ice Cream</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-2 rounded-lg bg-stone-800/60 border border-stone-700/50">
                    <img
                      src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=200&q=80"
                      alt="Crisp gourmet chicken burger"
                      className="w-12 h-12 rounded-md object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="min-w-0 text-left">
                      <p className="text-xs font-semibold text-white truncate">Tower Burger</p>
                      <p className="text-[11px] text-stone-400">Double Cheddar</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating review callout badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-[#FAF8F5] text-stone-900 p-3.5 rounded-xl border border-stone-200 shadow-xl hidden sm:flex items-center gap-3 max-w-xs text-left animate-in fade-in">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-stone-900">4.7 / 5.0 Rating</span>
                    <span className="text-[10px] text-stone-500">· 950 Reviews</span>
                  </div>
                  <p className="text-[11px] text-stone-600 line-clamp-1">
                    “Great ambience &amp; pizza at G.V Mall Boring Rd”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
