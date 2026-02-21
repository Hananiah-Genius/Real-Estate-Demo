"use client";

import Image from "next/image";
import Link from "next/link";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import PrimeEstate from "@/components/PrimeEstate";

export default function HomePage() {
  // Use isfeatured flag instead of slicing
  const featuredProperties = properties.filter(
    (property) => property.isfeatured,
  );

  return (
    <main>
      {/* HERO */}
      <section className="relative mt-18 bg-gray-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=1600"
            alt="Modern house"
            fill
            priority
            className="object-cover opacity-40"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-32 text-center flex flex-col gap-6 md:gap-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug">
            Find Your Perfect Property in Kenya
          </h1>

          <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed">
            Buy, rent, and discover premium homes in Nairobi, Mombasa, and
            beyond.
          </p>

          {/* SEARCH */}
          <div className="mt-6 flex flex-col gap-3 sm:gap-4 rounded-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-4 sm:p-5 shadow-lg md:flex-row md:items-center border border-gray-200 dark:border-gray-800">
            {/* Location Input */}
            <input
              type="text"
              placeholder="Enter location (e.g., Karen, Nyali, Nakuru)"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 sm:px-4 sm:py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-opacity-50 transition text-sm sm:text-base"
            />

            {/* Listing Type */}
            <select className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 sm:px-4 sm:py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-opacity-50 transition text-sm sm:text-base">
              <option value="">Select Listing Type</option>
              <option value="buy">For Sale</option>
              <option value="rent">For Rent</option>
            </select>

            {/* Search Button */}
            <button className="w-full md:w-auto rounded-lg bg-black dark:bg-white px-4 sm:px-6 py-2 sm:py-3 font-semibold text-white dark:text-black hover:opacity-95 transition shadow-md hover:shadow-lg text-sm sm:text-base">
              Search
            </button>
          </div>

          {/* CTA */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/properties"
              className="rounded-md bg-white px-4 sm:px-6 py-2 sm:py-3 font-semibold text-black transition hover:bg-gray-200 text-sm sm:text-base"
            >
              Browse Properties
            </Link>

            <Link
              href="/contact"
              className="rounded-md border border-white px-4 sm:px-6 py-2 sm:py-3 font-semibold text-white transition hover:bg-white hover:text-black text-sm sm:text-base"
            >
              Speak to an Agent
            </Link>
          </div>
        </div>
      </section>

      {/* Prime Estate Details */}
      <PrimeEstate />
      {/* FEATURED PROPERTIES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Featured Properties</h2>
          <Link href="/properties" className="text-sm font-semibold underline">
            View All
          </Link>
        </div>

        {featuredProperties.length === 0 ? (
          <p className="mt-10 text-gray-500">
            No featured properties available at the moment.
          </p>
        ) : (
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </section>

      {/* FINAL CTA */}
      <section className="bg-gray-100 dark:bg-gray-900 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold">Ready to Find Your Dream Home?</h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Our team of professional agents is here to help you every step of
            the way.
          </p>

          <Link
            href="/agents"
            className="mt-8 inline-block rounded-md bg-black dark:bg-white px-8 py-4 font-semibold text-white dark:text-black transition hover:opacity-90"
          >
            Speak to an Agent
          </Link>
        </div>
      </section>
    </main>
  );
}
