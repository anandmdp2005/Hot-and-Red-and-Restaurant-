import React, { useState } from 'react';
import {
  Star,
  ExternalLink,
  CheckCircle,
  ThumbsUp,
  MapPin,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import {
  VERIFIED_CUSTOMER_REVIEWS,
  RESTAURANT_INFO,
} from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const tags = ['All', 'Food & Taste', 'Ambience', 'Service'];

  const filteredReviews =
    selectedTag === 'All'
      ? VERIFIED_CUSTOMER_REVIEWS
      : VERIFIED_CUSTOMER_REVIEWS.filter((r) => r.tag === selectedTag);

  return (
    <section id="reviews" className="py-20 bg-[#FAF8F5] text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-red-600">
            Diner Experiences
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 font-serif">
            What Our Customers Say
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed text-balance">
            Discover customer experiences and feedback about Hot and Red Cafe and Restaurant.
          </p>
        </div>

        {/* Rating Scoreboard / Hero Trust Bar */}
        <div className="mt-10 max-w-4xl mx-auto bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Score & Stars */}
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="w-20 h-20 rounded-2xl bg-amber-50 border border-amber-200/80 flex flex-col items-center justify-center shrink-0">
                <span className="text-3xl font-extrabold text-stone-900 font-mono tracking-tight tabular-nums">
                  {RESTAURANT_INFO.ownerRating}
                </span>
                <span className="text-[10px] font-semibold text-amber-700 uppercase">
                  Out of 5
                </span>
              </div>

              <div>
                <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <h3 className="text-base font-bold text-stone-900 mt-1">
                  Based on {RESTAURANT_INFO.ownerTotalReviews} Google Reviews
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Owner-provided Google Maps business rating for Boring Road, Patna
                </p>
              </div>
            </div>

            {/* Direct Google Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full md:w-auto">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors flex items-center justify-center gap-2 shrink-0"
              >
                <span>Read All Google Reviews</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2 shrink-0 border border-stone-200"
              >
                <MessageSquare className="w-3.5 h-3.5 text-stone-600" />
                <span>Write a Google Review</span>
              </a>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  selectedTag === tag
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between text-left"
            >
              <div>
                {/* Header: Author + Verified Google Badge */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs uppercase">
                      {rev.authorName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900 leading-tight">
                        {rev.authorName}
                      </h4>
                      <span className="text-[10px] text-stone-400">
                        {rev.date}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-semibold text-stone-500 bg-stone-50 border border-stone-200 px-1.5 py-0.5 rounded flex items-center gap-1 shrink-0">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    Google
                  </span>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-0.5 mt-3 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < rev.rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-stone-200 text-stone-200'
                      }`}
                    />
                  ))}
                  <span className="text-[11px] font-mono font-bold text-stone-700 ml-1">
                    {rev.rating}.0
                  </span>
                </div>

                {/* Review Body */}
                <p className="text-xs text-stone-600 mt-3 leading-relaxed">
                  &ldquo;{rev.reviewText}&rdquo;
                </p>
              </div>

              {/* Card Footer: Tag & Helpful marker */}
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span className="font-medium text-stone-500">
                  {rev.tag}
                </span>
                {rev.helpfulCount && (
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="w-3 h-3 text-stone-400" />
                    {rev.helpfulCount} found helpful
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quality Control & Attribution Note */}
        <div className="mt-8 text-center text-xs text-stone-500 max-w-2xl mx-auto space-y-1">
          <p>
            Rating ({RESTAURANT_INFO.ownerRating}/5) and total review count ({RESTAURANT_INFO.ownerTotalReviews}) are based on the owner-provided Google Maps business profile.
          </p>
          <p>
            To browse all live reviews directly on Google, click{' '}
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 font-semibold hover:underline inline-flex items-center gap-0.5"
            >
              Open in Google Maps <ExternalLink className="w-3 h-3 inline" />
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};
