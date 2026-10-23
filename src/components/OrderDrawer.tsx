import React from 'react';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  Info,
} from 'lucide-react';
import {
  MenuItem,
  getOrderListWhatsAppLink,
  RESTAURANT_INFO,
} from '../data/restaurantData';

export interface OrderEntry {
  item: MenuItem;
  quantity: number;
}

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  orderEntries: OrderEntry[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearOrder: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  orderEntries,
  onUpdateQuantity,
  onRemoveItem,
  onClearOrder,
}) => {
  if (!isOpen) return null;

  const totalAmount = orderEntries.reduce(
    (sum, entry) => sum + entry.item.price * entry.quantity,
    0
  );

  const totalItemsCount = orderEntries.reduce(
    (sum, entry) => sum + entry.quantity,
    0
  );

  const handleWhatsAppSend = () => {
    const url = getOrderListWhatsAppLink(orderEntries, totalAmount);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col text-stone-900 animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-stone-900 leading-tight">
                  Your WhatsApp Order List
                </h3>
                <p className="text-xs text-stone-500">
                  {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg transition-colors"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {orderEntries.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-500">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mb-3">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-stone-800 text-sm">Your order list is empty</h4>
                <p className="text-xs text-stone-500 mt-1 max-w-xs">
                  Tap the &ldquo;+&rdquo; button on any menu item to build your customized WhatsApp order.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors"
                >
                  Browse Menu Items
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                    Selected Dishes
                  </span>
                  <button
                    onClick={onClearOrder}
                    className="text-xs text-stone-400 hover:text-red-600 transition-colors"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-3">
                  {orderEntries.map(({ item, quantity }) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl border border-stone-200 bg-stone-50/50 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="min-w-0 text-left">
                          <h4 className="text-xs font-bold text-stone-900 truncate">
                            {item.name}
                          </h4>
                          <p className="text-xs font-mono text-stone-600 mt-0.5 tabular-nums">
                            ₹{item.price} each · <span className="font-semibold text-stone-900">₹{item.price * quantity}</span>
                          </p>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 shrink-0">
                        <div className="flex items-center border border-stone-200 rounded-lg bg-white overflow-hidden shadow-2xs">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1.5 hover:bg-stone-100 text-stone-600 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold font-mono min-w-6 text-center tabular-nums">
                            {quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1.5 hover:bg-stone-100 text-stone-600 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-1.5 text-stone-400 hover:text-red-600 transition-colors"
                          aria-label={`Remove ${item.name}`}
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Helpful Note */}
                <div className="p-3 bg-stone-100 rounded-lg text-xs text-stone-600 flex items-start gap-2">
                  <Info className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                  <p className="text-left text-[11px] leading-relaxed">
                    This order list compiles your requested dishes into an organized WhatsApp message. Clicking the button below opens WhatsApp to finalize details and confirm with restaurant staff.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Footer Action */}
          {orderEntries.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-stone-600 font-medium">Estimated Total</span>
                <span className="text-xl font-extrabold text-stone-900 font-mono tabular-nums">
                  ₹{totalAmount}
                </span>
              </div>

              <button
                onClick={handleWhatsAppSend}
                className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 group"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.085-2.227-.55-1.957-.812-3.21-2.822-3.308-2.952-.097-.13-.787-1.047-.787-1.996 0-.95.498-1.417.674-1.611.176-.194.385-.243.513-.243.129 0 .257.002.37.008.119.006.278-.045.435.334.162.39.553 1.348.601 1.446.048.098.081.213.016.342-.065.13-.098.211-.194.324-.097.113-.205.253-.293.34-.098.098-.2.205-.086.401.114.195.507.836 1.088 1.354.747.666 1.378.873 1.573.971.195.097.309.081.423-.05.114-.13.487-.568.617-.763.13-.195.26-.162.438-.097.179.065 1.135.536 1.33.633.195.098.325.146.373.227.049.081.049.471-.095.876z" />
                </svg>
                <span>Send WhatsApp Order (₹{totalAmount})</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[11px] text-stone-500 text-center">
                Sends prefilled message to Hot &amp; Red Cafe at +91 7004059179
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
