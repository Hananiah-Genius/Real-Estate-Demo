import Image from "next/image";
import Link from "next/link";
import { Property } from "@/data/properties";

interface Props {
  property: Property;
}

export default function PropertyCard({ property }: Props) {
  return (
    <Link
      href={`/properties/${property.id}`}
      className="group overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm transition hover:shadow-xl"
    >
      <div className="relative h-60 w-full">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          Featured
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {property.location}
        </p>
        <p className="mt-4 text-xl font-bold">
          {new Intl.NumberFormat("en-KE", {
            style: "currency",
            currency: "KES",
            maximumFractionDigits: 0,
          }).format(property.price)}
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
          {property.shortDescription}
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
          {property.bedrooms > 0 && <span>{property.bedrooms} Beds</span>}
          {property.bathrooms > 0 && <span>{property.bathrooms} Baths</span>}
          <span>{property.plotSize}</span>
        </div>
      </div>
    </Link>
  );
}
