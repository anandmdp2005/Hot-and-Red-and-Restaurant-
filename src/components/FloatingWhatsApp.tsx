import React, { useState } from 'react';
import { RESTAURANT_INFO, getWhatsAppLink } from '../data/restaurantData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const waUrl = getWhatsAppLink(RESTAURANT_INFO.generalWhatsAppMessage);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      {/* Tooltip on hover / subtle nudge */}
      <div
        className={`bg-stone-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-lg transition-all duration-200 pointer-events-none hidden sm:block ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        Chat &amp; Order on WhatsApp
      </div>

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl hover:scale-108 active:scale-95 transition-all duration-200 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Order and chat on WhatsApp with Hot and Red Cafe and Restaurant"
      >
        {/* Animated pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping -z-10 group-hover:opacity-0" />

        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.085-2.227-.55-1.957-.812-3.21-2.822-3.308-2.952-.097-.13-.787-1.047-.787-1.996 0-.95.498-1.417.674-1.611.176-.194.385-.243.513-.243.129 0 .257.002.37.008.119.006.278-.045.435.334.162.39.553 1.348.601 1.446.048.098.081.213.016.342-.065.13-.098.211-.194.324-.097.113-.205.253-.293.34-.098.098-.2.205-.086.401.114.195.507.836 1.088 1.354.747.666 1.378.873 1.573.971.195.097.309.081.423-.05.114-.13.487-.568.617-.763.13-.195.26-.162.438-.097.179.065 1.135.536 1.33.633.195.098.325.146.373.227.049.081.049.471-.095.876z" />
        </svg>
      </a>
    </div>
  );
};
