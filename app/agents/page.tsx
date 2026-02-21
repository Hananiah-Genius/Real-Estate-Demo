"use client";

import Image from "next/image";
import Link from "next/link";
import { agents } from "@/data/agents";

export default function AgentsPage() {
  return (
    <main className="bg-white mt-18 dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen">
      {/* Hero */}
      <section className="bg-gray-100 dark:bg-gray-900 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Meet Our Agents</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300">
          Our experienced team is here to guide you in finding your dream
          property.
        </p>
      </section>

      {/* Agents Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent) => (
          <Link
            key={agent.id}
            href={`/agents/${agent.id}`}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col"
          >
            <div className="relative w-full h-64">
              <Image
                src={agent.photo}
                alt={agent.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center flex flex-col gap-2">
              <h2 className="text-xl font-bold">{agent.name}</h2>
              <p className="text-gray-600 dark:text-gray-400">{agent.role}</p>

              {/* Experience Badge */}
              <span className="inline-block mt-1 text-sm bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full px-3 py-1 font-medium">
                {agent.experience}
              </span>

              {/* Short Bio */}
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 line-clamp-3">
                {agent.description.length > 100
                  ? agent.description.slice(0, 100) + "..."
                  : agent.description}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
