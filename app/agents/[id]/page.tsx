"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { agents } from "@/data/agents";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MessageSquare,
  ArrowLeft,
} from "lucide-react";

export default function AgentPage() {
  const params = useParams();
  const agentId = Number(params.id);
  const agent = agents.find((a) => a.id === agentId);

  if (!agent) return <p className="p-6 text-center">Agent not found.</p>;

  return (
    <main className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen relative">
      {/* Hero */}
      <section className="bg-gray-100 dark:bg-gray-900 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">{agent.name}</h1>
        <p className="mt-2 text-lg md:text-xl text-gray-700 dark:text-gray-300">
          {agent.role}
        </p>
      </section>

      {/* Agent Details */}
      <section className="max-w-4xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-8 items-start">
        <div className="relative w-full md:w-1/2 h-80 md:h-[400px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={agent.photo}
            alt={agent.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="md:w-1/2 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{agent.name}</h2>
          <p className="text-gray-700 dark:text-gray-300">{agent.role}</p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            {agent.description}
          </p>

          {/* Professional Details */}
          <div className="mt-4 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
            <p>
              <strong>Experience:</strong> {agent.experience}
            </p>
            <p>
              <strong>Specialties:</strong> {agent.specialties.join(", ")}
            </p>
            {agent.certifications && (
              <p>
                <strong>Certifications:</strong>{" "}
                {agent.certifications.join(", ")}
              </p>
            )}
            {agent.achievements && (
              <p>
                <strong>Achievements:</strong> {agent.achievements.join(", ")}
              </p>
            )}
            {agent.languages && (
              <p>
                <strong>Languages:</strong> {agent.languages.join(", ")}
              </p>
            )}
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 text-gray-600 dark:text-gray-400">
            {agent.facebook && (
              <Link href={agent.facebook}>
                <Facebook size={20} />
              </Link>
            )}
            {agent.twitter && (
              <Link href={agent.twitter}>
                <Twitter size={20} />
              </Link>
            )}
            {agent.instagram && (
              <Link href={agent.instagram}>
                <Instagram size={20} />
              </Link>
            )}
            {agent.linkedin && (
              <Link href={agent.linkedin}>
                <Linkedin size={20} />
              </Link>
            )}
          </div>

          {/* Back Button */}
          <Link
            href="/agents"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black dark:text-white hover:underline"
          >
            <ArrowLeft size={16} /> Back to Agents
          </Link>
        </div>
      </section>

      {/* Sticky Contact Buttons (mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 p-4 border-t border-gray-200 dark:border-gray-800 flex justify-center gap-4 md:hidden z-50">
        <a
          href={`mailto:${agent.email}`}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          <Mail size={16} /> Email
        </a>
        <a
          href={`tel:${agent.phone}`}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
        >
          <Phone size={16} /> Call
        </a>
        {agent.whatsapp && (
          <a
            href={`https://wa.me/${agent.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
          >
            <MessageSquare size={16} /> WhatsApp
          </a>
        )}
      </div>
    </main>
  );
}
