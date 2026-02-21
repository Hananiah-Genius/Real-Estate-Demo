"use client";

import Image from "next/image";
import Link from "next/link";
import { properties, Property } from "@/data/properties";

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function PropertiesPage() {
  return (
    <main className="mx-auto mt-18 max-w-7xl px-6 py-10">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        All Properties
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Browse through our full range of properties available across Kenya.
      </p>

      {/* Property Grid */}
      {properties.length === 0 ? (
        <p className="mt-10 text-gray-500 dark:text-gray-400">
          No properties available at the moment.
        </p>
      ) : (
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property: Property) => (
            <Link
              key={property.id}
              href={`/properties/${property.id}`}
              className="group overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm transition hover:shadow-xl"
            >
              {/* Property Image */}
              <div className="relative h-60 w-full">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Featured Badge */}
                {property.isfeatured && (
                  <span className="absolute top-4 left-4 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    Featured
                  </span>
                )}
              </div>

              {/* Property Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {property.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {property.location}
                </p>

                <p className="mt-4 text-xl font-bold text-gray-800 dark:text-gray-200">
                  {formatCurrency(property.price)}
                </p>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                  {property.shortDescription}
                </p>

                {/* Property Details */}
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                  {property.bedrooms > 0 && (
                    <span>{property.bedrooms} Beds</span>
                  )}
                  {property.bathrooms > 0 && (
                    <span>{property.bathrooms} Baths</span>
                  )}
                  <span>{property.plotSize}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
