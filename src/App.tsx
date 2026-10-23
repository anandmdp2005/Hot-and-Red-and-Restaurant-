import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { FindUsSection } from './components/FindUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { OrderDrawer, OrderEntry } from './components/OrderDrawer';
import { MenuItem } from './data/restaurantData';

export default function App() {
  const [orderEntries, setOrderEntries] = useState<OrderEntry[]>([]);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddItemToOrder = (item: MenuItem) => {
    setOrderEntries((prev) => {
      const existing = prev.find((entry) => entry.item.id === item.id);
      if (existing) {
        return prev.map((entry) =>
          entry.item.id === item.id
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry
        );
      }
      return [...prev, { item, quantity: 1 }];
    });

    showToast(`Added "${item.name}" to WhatsApp order list`);
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setOrderEntries((prev) =>
      prev
        .map((entry) => {
          if (entry.item.id === itemId) {
            const newQty = entry.quantity + delta;
            return newQty > 0 ? { ...entry, quantity: newQty } : null;
          }
          return entry;
        })
        .filter(Boolean) as OrderEntry[]
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setOrderEntries((prev) => prev.filter((entry) => entry.item.id !== itemId));
  };

  const handleClearOrder = () => {
    setOrderEntries([]);
  };

  const orderItemIds = new Set(orderEntries.map((e) => e.item.id));
  const totalItemCount = orderEntries.reduce((sum, e) => sum + e.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        orderCount={totalItemCount}
        onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <MenuSection
          onAddItemToOrder={handleAddItemToOrder}
          orderItemIds={orderItemIds}
        />
        <ReviewsSection />
        <GallerySection />
        <FindUsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button for WhatsApp */}
      <FloatingWhatsApp />

      {/* WhatsApp Multi-item Order Drawer */}
      <OrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        orderEntries={orderEntries}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearOrder={handleClearOrder}
      />

      {/* Temporary Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-stone-900 text-white text-xs font-semibold py-2.5 px-4 rounded-xl shadow-xl flex items-center gap-2 border border-stone-700 animate-in fade-in slide-in-from-bottom-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setIsOrderDrawerOpen(true)}
            className="ml-2 text-red-400 hover:text-red-300 underline font-medium"
          >
            View Order
          </button>
        </div>
      )}
    </div>
  );
}
