import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Calendar,
  Users,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';
import {
  RESTAURANT_INFO,
  getReservationWhatsAppLink,
  getWhatsAppLink,
  getSwiggyLink,
} from '../data/restaurantData';
import { SwiggyIcon } from './SwiggyIcon';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2 Guests',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name';
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit phone number';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    // Generate seamless WhatsApp reservation link
    const waUrl = getReservationWhatsAppLink({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      guests: formData.guests,
      date: formData.date || 'Today / Next available',
      time: formData.time || 'Upcoming slot',
      notes: formData.notes.trim() || undefined,
    });

    setSubmittedWhatsAppUrl(waUrl);

    // Open WhatsApp automatically
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 bg-white text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-red-600">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 font-serif">
            Contact &amp; Reservations
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed text-balance">
            Call us directly, message on WhatsApp, or reserve your table ahead of time for a seamless experience.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Quick Contact Cards */}
            <div className="bg-[#FAF8F5] rounded-2xl border border-stone-200 p-6 space-y-5 shadow-xs">
              <h3 className="font-bold text-base text-stone-900 border-b border-stone-200/80 pb-3">
                Direct Contact Channels
              </h3>

              {/* Phone Dial */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-red-100 text-red-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                    Phone Inquiries &amp; Takeaway
                  </p>
                  <a
                    href={RESTAURANT_INFO.phoneDial}
                    className="text-base font-bold text-stone-900 hover:text-red-600 transition-colors block mt-0.5"
                  >
                    {RESTAURANT_INFO.contactNumber}
                  </a>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    Click to call our manager directly
                  </p>
                </div>
              </div>

              {/* WhatsApp Chat */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                    WhatsApp Chat Support
                  </p>
                  <a
                    href={getWhatsAppLink(RESTAURANT_INFO.generalWhatsAppMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-stone-900 hover:text-emerald-700 transition-colors block mt-0.5"
                  >
                    +91 7004059179 (WhatsApp)
                  </a>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    Menu inquiries, party bookings &amp; pre-orders
                  </p>
                </div>
              </div>

              {/* Location Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-stone-200 text-stone-700 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                    Restaurant Address
                  </p>
                  <p className="text-xs font-medium text-stone-800 leading-relaxed mt-0.5">
                    {RESTAURANT_INFO.fullAddress}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout Button */}
            <a
              href={getWhatsAppLink(RESTAURANT_INFO.generalWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 group"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.085-2.227-.55-1.957-.812-3.21-2.822-3.308-2.952-.097-.13-.787-1.047-.787-1.996 0-.95.498-1.417.674-1.611.176-.194.385-.243.513-.243.129 0 .257.002.37.008.119.006.278-.045.435.334.162.39.553 1.348.601 1.446.048.098.081.213.016.342-.065.13-.098.211-.194.324-.097.113-.205.253-.293.34-.098.098-.2.205-.086.401.114.195.507.836 1.088 1.354.747.666 1.378.873 1.573.971.195.097.309.081.423-.05.114-.13.487-.568.617-.763.13-.195.26-.162.438-.097.179.065 1.135.536 1.33.633.195.098.325.146.373.227.049.081.049.471-.095.876z" />
              </svg>
              <span>Instant Chat on WhatsApp</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100" />
            </a>

            {/* Direct Swiggy Order Button */}
            <a
              href={getSwiggyLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 bg-[#FC8019] hover:bg-[#e26f12] text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 group"
            >
              <SwiggyIcon className="w-5 h-5 text-white" />
              <span>Order Online on Swiggy</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100" />
            </a>

            {/* Google Directions Button */}
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 bg-stone-900 hover:bg-stone-800 text-white font-semibold rounded-xl text-sm shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-red-500" />
              <span>Get Directions to G.V Mall (Google Maps)</span>
            </a>
          </div>

          {/* Right Column: Table Reservation & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF8F5] rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs text-left">
              <div className="border-b border-stone-200 pb-4 mb-6">
                <h3 className="text-xl font-bold text-stone-900 font-serif">
                  Reserve a Table or Send an Inquiry
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Fill in your details below. Your reservation request will open directly in WhatsApp for instant staff confirmation.
                </p>
              </div>

              {submittedWhatsAppUrl && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3 text-xs sm:text-sm animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-bold text-emerald-950">
                      Reservation details prepared!
                    </p>
                    <p className="mt-0.5 text-xs text-emerald-800">
                      If WhatsApp did not open automatically in your browser, tap below to send your details to our team:
                    </p>
                    <a
                      href={submittedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-md shadow-xs transition-colors"
                    >
                      <span>Open WhatsApp Now</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Anand Kumar"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-500/20'
                          : 'border-stone-300 focus:border-red-600 focus:ring-red-600/10'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-red-600 mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 transition-all ${
                        errors.phone
                          ? 'border-red-500 focus:ring-red-500/20'
                          : 'border-stone-300 focus:border-red-600 focus:ring-red-600/10'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-600 mt-1 block">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-600/10 focus:border-red-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-600/10 focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) =>
                        setFormData({ ...formData, guests: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-600/10 focus:border-red-600"
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests">2 Guests (Couple)</option>
                      <option value="3-4 Guests">3–4 Guests (Friends/Family)</option>
                      <option value="5-8 Guests">5–8 Guests (Group Gathering)</option>
                      <option value="8+ Guests">8+ Guests (Celebration/Party)</option>
                    </select>
                  </div>
                </div>

                {/* Message / Special Requests */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Special Requests / Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Window booth preference, birthday celebration, dietary request..."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-600/10 focus:border-red-600"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Reservation Request via WhatsApp</span>
                </button>

                <p className="text-[11px] text-stone-500 text-center leading-relaxed">
                  🛡️ We respect your privacy. Submitting opens a direct WhatsApp conversation with Hot &amp; Red Cafe and Restaurant at +91 7004059179. No login or app registration required.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
