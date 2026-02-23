"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { properties } from "@/data/properties";

export default function BookingPage() {
  const params = useParams();
  const router = useRouter();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const property = properties.find((p) => p.id === id);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const [showDialog, setShowDialog] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Property not found</p>
      </div>
    );
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Restrict date to weekdays
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    const day = selectedDate.getDay(); // 0 = Sunday, 6 = Saturday
    if (day === 0 || day === 6) {
      alert("Please select a weekday (Monday to Friday).");
      setForm({ ...form, date: "" });
      return;
    }
    setForm({ ...form, date: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", {
      ...form,
      propertyId: property.id,
      propertyTitle: property.title,
    });
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
    // Navigate back to the property page
    router.push(`/properties/${property.id}`);
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold mb-2">Book Viewing</h1>
      <p className="text-gray-600 mb-8">
        {property.title} — {property.location}
      </p>

      <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border p-6">
        {/* Name */}
        <div>
          <label className="block mb-1 font-semibold">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-3"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 font-semibold">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-3"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block mb-1 font-semibold">Preferred Date</label>
          <input
            type="date"
            name="date"
            required
            onChange={handleDateChange}
            className="w-full border rounded-md px-4 py-3"
          />
        </div>

        {/* Time */}
        <div>
          <label className="block mb-1 font-semibold">Preferred Time</label>
          <input
            type="time"
            name="time"
            required
            min="08:00"
            max="16:30"
            step={900} // 900 seconds = 15 minutes
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-3"
          />
          <p className="text-sm text-gray-500 mt-1">
            Available 08:00 – 16:30 (15-minute intervals)
          </p>
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 font-semibold">Additional Message</label>
          <textarea
            name="message"
            placeholder="Optional message"
            rows={4}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-3"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-black text-white py-4 font-semibold hover:opacity-90"
        >
          Submit Booking Request
        </button>
      </form>

      <Link
        href={`/properties/${property.id}`}
        className="block mt-6 text-center text-sm text-gray-500"
      >
        ← Back to property
      </Link>

      {/* Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 max-w-md w-full text-center shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Booking Request Sent!
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Thank you for your request. Our agent will contact you shortly to
              confirm the viewing.
            </p>
            <button
              onClick={closeDialog}
              className="rounded-md bg-black dark:bg-white px-6 py-3 text-white dark:text-black font-semibold hover:opacity-90"
            >
              Back to Property
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
