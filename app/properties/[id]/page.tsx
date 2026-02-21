"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { properties, Property } from "@/data/properties";

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function PropertyPage() {
  const params = useParams();
  const { id } = params;

  const property: Property | undefined = properties.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState(
    property?.gallery[0] || "",
  );

  if (!property) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center text-center px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <h1 className="text-3xl font-bold">Property Not Found</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          The property you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-6 rounded-md bg-black dark:bg-white px-6 py-3 text-white dark:text-black font-semibold hover:opacity-90 transition"
        >
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <main className="mx-auto mt-5 max-w-7xl px-6 py-20">
      {/* Property Title & Price */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        {property.title}
      </h1>
      <p className="mt-2 text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
        {formatCurrency(property.price)}
      </p>
      <p className="mt-1 text-gray-600 dark:text-gray-400">
        {property.location}
      </p>

      {/* Gallery Slider */}
      <div className="mt-8">
        <div className="relative w-full h-80 md:h-[500px] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <Image
            src={selectedImage}
            alt={property.title}
            fill
            className="object-cover transition duration-500"
          />
        </div>

        {/* Thumbnails */}
        <div className="mt-4 flex gap-4 overflow-x-auto py-2">
          {property.gallery.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(img)}
              className={`relative flex-shrink-0 h-20 w-32 md:h-24 md:w-40 rounded-lg overflow-hidden border-2 ${
                selectedImage === img
                  ? "border-black dark:border-white"
                  : "border-gray-200 dark:border-gray-700"
              }`}
            >
              <Image
                src={img}
                alt={`${property.title} image ${idx + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Property Details */}
      <div className="mt-10 flex flex-col gap-6 text-gray-700 dark:text-gray-300">
        <div className="flex flex-wrap gap-6 text-sm md:text-base">
          {property.bedrooms > 0 && <span>{property.bedrooms} Beds</span>}
          {property.bathrooms > 0 && <span>{property.bathrooms} Baths</span>}
          <span>{property.plotSize}</span>
        </div>

        <p className="whitespace-pre-line text-sm md:text-base">
          {property.description}
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-10 text-center">
        <Link
          href="/contact"
          className="inline-block rounded-md bg-black dark:bg-white px-8 py-4 text-white dark:text-black font-semibold hover:opacity-90 transition"
        >
          Speak to an Agent
        </Link>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Location
        </h2>

        <div className="w-full h-80 md:h-[400px] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              property.location,
            )}&output=embed`}
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </main>
  );
}
