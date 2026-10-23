import React from 'react';
import {
  Coffee,
  Users,
  MapPin,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { RESTAURANT_INFO, getWhatsAppLink } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#FAF8F5] text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Photography Collage */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Primary Image: Cafe Seating */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
                    alt="Welcoming modern cafe interior with cozy seating"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 bg-white border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">
                      Cozy Ambience on 5th Floor
                    </h4>
                    <p className="text-xs text-stone-500 mt-0.5">
                      G.V Mall, Boring Road Crossing, Patna
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-red-600 bg-red-50 px-2.5 py-1 rounded-md">
                    Dine-in
                  </span>
                </div>
              </div>

              {/* Secondary Overlapping Card: Beverage Craft */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 w-48 sm:w-56 rounded-xl overflow-hidden shadow-xl border-2 border-white bg-white hidden sm:block">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80"
                    alt="Espresso latte art prepared with fresh milk foam"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-2.5 bg-white text-left">
                  <p className="text-xs font-bold text-stone-800">Fresh Brews &amp; Shakes</p>
                  <p className="text-[11px] text-stone-500">Crafted to refresh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            <div>
              <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-red-600">
                About Hot &amp; Red
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-1 font-serif">
                Your Favorite Cafe in Patna
              </h2>
            </div>

            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              <p>
                Perched high on the <strong>5th Floor of G.V Mall at Boring Road Crossing</strong>, Hot and Red Cafe and Restaurant brings together good food, refreshing drinks, and a relaxed, welcoming atmosphere right in the bustling heart of Sri Krishna Puri, Patna.
              </p>
              <p>
                Whether you are catching up with college friends, taking a break from shopping in G.V Mall, organizing a casual family dinner, or seeking a quiet corner with a warm cup of coffee and pizza, our cafe offers a comfortable space designed for real conversations and hearty meals.
              </p>
              <p>
                From hand-stretched pizzas, crunchy gourmet burgers, and creamy pastas to sizzling Indian starters and chilled mocktails, we focus on serving freshly prepared dishes with warm, attentive hospitality.
              </p>
            </div>

            {/* Core Values / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-red-50 text-red-600 shrink-0">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-stone-900">
                    Welcoming Cafe Ambience
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Pleasant lighting, ambient music, and comfortable seating elevated above city bustle.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-red-50 text-red-600 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-stone-900">
                    Friends &amp; Family Hangout
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Spacious tables for group celebrations, birthdays, dates, and relaxing get-togethers.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-red-50 text-red-600 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-stone-900">
                    Diverse Multi-Cuisine Menu
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Carefully prepared pizzas, burgers, pasta, mocktails, coffee, and savory Indian favorites.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-red-50 text-red-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-stone-900">
                    Central Boring Road Location
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Easy to reach at G.V Mall with convenient elevator access and underground mall parking.
                  </p>
                </div>
              </div>
            </div>

            {/* Transparent Note */}
            <div className="pt-2">
              <a
                href={getWhatsAppLink(RESTAURANT_INFO.generalWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 group"
              >
                <span>Have a question or plan a visit? Chat with us on WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
