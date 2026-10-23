import React, { useState } from 'react';
import {
  MapPin,
  ExternalLink,
  Navigation,
  Clock,
  Building,
  Check,
  Copy,
  Info,
  Car,
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const FindUsSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-20 bg-[#FAF8F5] text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-red-600">
            Location &amp; Visit
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 font-serif">
            Find Us on Boring Road, Patna
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed text-balance">
            Conveniently situated atop G.V Mall with dedicated elevators and central city accessibility.
          </p>
        </div>

        {/* Location Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Location Details & Hours Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-7 shadow-xs text-left space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-xl bg-red-50 text-red-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900 leading-tight">
                    Hot and Red Cafe &amp; Restaurant
                  </h3>
                  <p className="text-xs text-red-600 font-semibold mt-0.5">
                    5th Floor, G.V Mall
                  </p>
                </div>
              </div>

              {/* Full Address Block */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Full Registered Address:
                </p>
                <p className="text-sm text-stone-800 leading-relaxed font-medium">
                  {RESTAURANT_INFO.fullAddress}
                </p>

                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-red-600 transition-colors pt-1"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Address copied to clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Full Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Landmark & Access Guidance */}
              <div className="space-y-3 text-xs text-stone-600 leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <Building className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Mall Elevator:</strong> Take the main elevators or escalators inside G.V Mall directly up to the 5th floor.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Car className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Parking:</strong> Two-wheeler and four-wheeler parking available at G.V Mall premises at Boring Road Crossing.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                </a>

                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 border border-stone-200"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs text-left space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-stone-100 text-stone-700">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-stone-900">
                  Operating Hours (Subject to Confirmation)
                </h3>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between py-2 border-b border-stone-100 text-xs">
                  <span className="font-medium text-stone-700">Monday – Sunday</span>
                  <span className="font-mono font-bold text-stone-900">11:00 AM – 11:00 PM</span>
                </div>
              </div>

              <div className="p-3 bg-amber-50/80 rounded-lg border border-amber-200/60 text-[11px] text-amber-900 flex items-start gap-2">
                <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Owner Note:</strong> These hours are sample development placeholders. The owner should verify official opening and closing times before final publishing.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Map & Interactive Map View */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden flex-1 flex flex-col min-h-[420px]">
              {/* Map View Header */}
              <div className="p-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between text-left">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-600" />
                  <span className="text-xs font-bold text-stone-800">
                    G.V Mall, Boring Road Crossing, Patna
                  </span>
                </div>
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-red-600 hover:underline flex items-center gap-1"
                >
                  <span>Full Screen Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Embedded Map iFrame without API key requirement */}
              <div className="relative flex-1 w-full bg-stone-100 min-h-[360px]">
                <iframe
                  title="Hot and Red Cafe Location at G.V Mall Patna"
                  src="https://maps.google.com/maps?q=GV%20Mall%20Boring%20Road%20Crossing%20Patna&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  className="w-full h-full border-0 min-h-[360px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Direct Google Maps Overlay Pill */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md p-3 rounded-xl border border-stone-200 shadow-lg flex items-center justify-between gap-3 text-left">
                  <div>
                    <p className="text-xs font-bold text-stone-900">
                      Hot and Red Cafe &amp; Restaurant
                    </p>
                    <p className="text-[11px] text-stone-500">
                      5th Floor, G.V Mall · Boring Road
                    </p>
                  </div>
                  <a
                    href={RESTAURANT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-md text-xs font-semibold shrink-0 shadow-xs transition-colors"
                  >
                    Open
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
