import React, { useState, useMemo } from 'react';
import {
  Search,
  Flame,
  Plus,
  Check,
  Info,
  Filter,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import {
  MenuItem,
  MenuCategory,
  MENU_CATEGORIES,
  SAMPLE_MENU_ITEMS,
  getMenuItemWhatsAppLink,
  getSwiggyLink,
  RESTAURANT_INFO,
} from '../data/restaurantData';
import { SwiggyIcon } from './SwiggyIcon';

interface MenuSectionProps {
  onAddItemToOrder: (item: MenuItem) => void;
  orderItemIds: Set<string>;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddItemToOrder,
  orderItemIds,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('All Items');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [showSampleNote, setShowSampleNote] = useState(true);

  // Filtered list
  const filteredItems = useMemo(() => {
    return SAMPLE_MENU_ITEMS.filter((item) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'All Items' || item.category === selectedCategory;

      // Dietary filter
      const matchesDietary =
        dietaryFilter === 'all' ||
        (dietaryFilter === 'veg' && item.isVeg) ||
        (dietaryFilter === 'non-veg' && !item.isVeg);

      // Search query
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesDietary && matchesSearch;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  return (
    <section id="menu" className="py-20 bg-white text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-red-600">
            Crafted with Passion
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 font-serif">
            Explore Our Menu
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed text-balance">
            Handcrafted pizzas, gourmet burgers, comforting pastas, and refreshing specialty beverages. Select an item to order directly on WhatsApp.
          </p>
        </div>

        {/* Clear Editable Sample Notice Banner */}
        {showSampleNote && (
          <div className="mt-6 mb-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3 text-xs sm:text-sm">
            <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="flex-1 text-left">
              <span className="font-semibold text-amber-950">Notice for Restaurant Owner &amp; Visitors: </span>
              The dishes, descriptions, and prices below are editable sample items representing our typical cafe offerings. The restaurant owner can easily update, add, or customize verified prices in{' '}
              <code className="bg-amber-100/70 px-1 py-0.5 rounded text-amber-800 font-mono text-[11px]">
                src/data/restaurantData.ts
              </code>{' '}
              prior to production publication.
            </div>
            <button
              onClick={() => setShowSampleNote(false)}
              className="text-amber-700 hover:text-amber-900 text-xs font-semibold px-2 py-1 rounded hover:bg-amber-100/80 transition-colors shrink-0"
              aria-label="Dismiss notice"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Search & Dietary Filter Controls */}
        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes, coffee, mocktails..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Veg / Non-Veg Segmented Filter */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg shrink-0">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                dietaryFilter === 'all'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Types
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                dietaryFilter === 'veg'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-emerald-700 hover:bg-emerald-50'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-300 inline-block" />
              Veg Only
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                dietaryFilter === 'non-veg'
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'text-red-700 hover:bg-red-50'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-300 inline-block" />
              Non-Veg
            </button>
          </div>
        </div>

        {/* Swiggy Online Delivery Banner */}
        <div className="mt-6 p-3.5 sm:p-4 rounded-xl bg-orange-50/80 border border-orange-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#FC8019] text-white flex items-center justify-center shrink-0 shadow-xs">
              <SwiggyIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-stone-900 leading-tight">
                Also available on Swiggy for home delivery!
              </p>
              <p className="text-[11px] sm:text-xs text-stone-600 mt-0.5">
                Enjoy hot pizzas, burgers &amp; cold beverages delivered straight to your doorstep across Patna.
              </p>
            </div>
          </div>

          <a
            href={getSwiggyLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-4 py-2 bg-[#FC8019] hover:bg-[#e26f12] text-white text-xs font-bold rounded-lg shadow-xs transition-colors flex items-center justify-center gap-1.5 shrink-0"
          >
            <SwiggyIcon className="w-3.5 h-3.5 text-white" />
            <span>Order on Swiggy</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>
        </div>

        {/* Category Tabs (Scrollable on mobile) */}
        <div className="mt-6 border-b border-stone-200 overflow-x-auto scrollbar-none py-2">
          <div className="flex items-center gap-2 min-w-max pb-1">
            {MENU_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200/80 hover:text-stone-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Active Filter Summary */}
        <div className="mt-4 flex items-center justify-between text-xs text-stone-500">
          <span>
            Showing <strong className="text-stone-800">{filteredItems.length}</strong> items in{' '}
            <strong className="text-stone-800">{selectedCategory}</strong>
          </span>
          {(searchQuery || dietaryFilter !== 'all' || selectedCategory !== 'All Items') && (
            <button
              onClick={() => {
                setSelectedCategory('All Items');
                setDietaryFilter('all');
                setSearchQuery('');
              }}
              className="text-red-600 hover:underline font-medium"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => {
              const isAddedToOrder = orderItemIds.has(item.id);

              return (
                <div
                  key={item.id}
                  className="rounded-xl border border-stone-200 bg-white shadow-xs hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden group"
                >
                  {/* Food Image with subtle hover zoom & fallback */}
                  <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        // Fallback container styling if external image fails
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.classList.add(
                          'flex',
                          'items-center',
                          'justify-center',
                          'bg-stone-200'
                        );
                      }}
                    />

                    {/* Veg / Non-Veg Indicator */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs p-1 rounded-sm shadow-xs border border-stone-200">
                      <div
                        className={`w-3.5 h-3.5 border-2 flex items-center justify-center ${
                          item.isVeg ? 'border-emerald-600' : 'border-red-600'
                        }`}
                        title={item.isVeg ? 'Pure Vegetarian' : 'Non-Vegetarian'}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            item.isVeg ? 'bg-emerald-600' : 'bg-red-600'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Badges: Popular / Spicy */}
                    <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                      {item.isPopular && (
                        <span className="bg-amber-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs backdrop-blur-xs">
                          Popular
                        </span>
                      )}
                      {item.isSpicy && (
                        <span className="bg-red-600/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-xs flex items-center gap-0.5 backdrop-blur-xs">
                          <Flame className="w-2.5 h-2.5" />
                          Spicy
                        </span>
                      )}
                    </div>

                    {/* Fallback placeholder text if image fails to load */}
                    <div className="hidden text-stone-500 text-xs font-medium text-center p-4">
                      {item.name}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between text-left">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-bold text-stone-900 text-base group-hover:text-red-600 transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      <p className="text-xs text-stone-500 mt-1.5 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                      <div className="flex flex-col">
                        <span className="text-[11px] text-stone-400 font-medium">Price</span>
                        <span className="text-lg font-bold text-stone-900 font-mono tabular-nums">
                          ₹{item.price}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {/* Add to WhatsApp Multi-item Basket */}
                        <button
                          onClick={() => onAddItemToOrder(item)}
                          className={`p-2 rounded-lg border text-xs font-medium transition-colors ${
                            isAddedToOrder
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                              : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                          }`}
                          title={isAddedToOrder ? 'Added to order list' : 'Add to order list'}
                          aria-label={`Add ${item.name} to WhatsApp order list`}
                        >
                          {isAddedToOrder ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Plus className="w-4 h-4" />
                          )}
                        </button>

                        {/* Direct Order on WhatsApp */}
                        <a
                          href={getMenuItemWhatsAppLink(item)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors flex items-center gap-1.5"
                          title="Order this item directly on WhatsApp"
                        >
                          <svg
                            className="w-3.5 h-3.5 fill-current shrink-0"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.085-2.227-.55-1.957-.812-3.21-2.822-3.308-2.952-.097-.13-.787-1.047-.787-1.996 0-.95.498-1.417.674-1.611.176-.194.385-.243.513-.243.129 0 .257.002.37.008.119.006.278-.045.435.334.162.39.553 1.348.601 1.446.048.098.081.213.016.342-.065.13-.098.211-.194.324-.097.113-.205.253-.293.34-.098.098-.2.205-.086.401.114.195.507.836 1.088 1.354.747.666 1.378.873 1.573.971.195.097.309.081.423-.05.114-.13.487-.568.617-.763.13-.195.26-.162.438-.097.179.065 1.135.536 1.33.633.195.098.325.146.373.227.049.081.049.471-.095.876z" />
                          </svg>
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-12 py-16 text-center bg-stone-50 rounded-2xl border border-stone-200">
            <p className="text-base font-semibold text-stone-700">No dishes match your filter criteria.</p>
            <p className="text-xs text-stone-500 mt-1">Try adjusting your search query or category selection.</p>
            <button
              onClick={() => {
                setSelectedCategory('All Items');
                setDietaryFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-medium hover:bg-stone-800 transition-colors"
            >
              Show All Menu Items
            </button>
          </div>
        )}

        {/* Ordering Methods Callout: WhatsApp & Swiggy */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-50 border border-stone-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Two Convenient Ways to Order Hot &amp; Red
            </h4>
            <p className="text-xs text-stone-600 max-w-2xl leading-relaxed">
              Order directly through <strong>WhatsApp (+91 7004059179)</strong> for tailored takeaways and dining bookings, or order through <strong>Swiggy</strong> for doorstep home delivery across Patna.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full md:w-auto shrink-0">
            <a
              href={getSwiggyLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2.5 bg-[#FC8019] hover:bg-[#e26f12] text-white text-xs font-bold rounded-lg shadow-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <SwiggyIcon className="w-4 h-4 text-white" />
              <span>Order on Swiggy</span>
            </a>

            <a
              href={getMenuItemWhatsAppLink(SAMPLE_MENU_ITEMS[0])}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs"
            >
              <span>WhatsApp Chat</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
