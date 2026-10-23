import React, { useState } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Camera,
  Info,
} from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';

export const GallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Food' | 'Beverages' | 'Ambiance'>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    selectedFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-red-600">
            Visual Highlights
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 font-serif">
            A Glimpse of the Experience
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed text-balance">
            Authentic culinary creations and cafe atmosphere. Tap any photograph for high-resolution viewing.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg">
            {(['All', 'Food', 'Beverages', 'Ambiance'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  selectedFilter === filter
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.altText}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
                <span className="text-[10px] font-semibold tracking-wider uppercase text-red-400">
                  {item.category}
                </span>
                <h4 className="text-sm font-bold text-white mt-0.5 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-300 line-clamp-1 mt-0.5">
                  {item.caption}
                </p>
                <div className="mt-2 flex items-center gap-1 text-[11px] text-stone-300 font-medium">
                  <Maximize2 className="w-3 h-3" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Replacement Note */}
        <div className="mt-6 text-center text-xs text-stone-400 flex items-center justify-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-stone-400" />
          <span>
            Curated representative food and cafe styling photography. Easily replaceable with restaurant-taken photos in{' '}
            <code className="text-stone-600 font-mono text-[11px]">src/data/restaurantData.ts</code>.
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white hover:text-red-400 rounded-full bg-stone-900/80 transition-colors z-20"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={showPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white hover:text-red-400 rounded-full bg-stone-900/80 transition-colors z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={showNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white hover:text-red-400 rounded-full bg-stone-900/80 transition-colors z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="max-w-4xl max-h-[85vh] w-full flex flex-col rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 text-left shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 bg-black overflow-hidden flex items-center justify-center min-h-[300px] sm:min-h-[480px]">
              <img
                src={filteredItems[activeLightboxIndex].imageUrl}
                alt={filteredItems[activeLightboxIndex].altText}
                className="max-h-[70vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-4 sm:p-5 bg-stone-900 border-t border-stone-800 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-semibold text-red-400 uppercase tracking-wider">
                  {filteredItems[activeLightboxIndex].category}
                </span>
                <h3 className="text-base font-bold text-white mt-0.5">
                  {filteredItems[activeLightboxIndex].title}
                </h3>
                <p className="text-xs text-stone-300 mt-1">
                  {filteredItems[activeLightboxIndex].caption}
                </p>
              </div>

              <div className="text-right shrink-0 text-xs text-stone-400 font-mono">
                {activeLightboxIndex + 1} / {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
