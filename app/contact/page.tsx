"use client";

export default function ContactPage() {
  return (
    <section className="max-w-xl mt-10 mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Contact Us
      </h1>

      <form className="space-y-6">
        {/* Name */}
        <div className="flex flex-col">
          <label className="mb-2 text-gray-700 dark:text-gray-300 font-medium">
            Your Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-3 text-gray-900 dark:text-white bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-opacity-50 transition"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-2 text-gray-700 dark:text-gray-300 font-medium">
            Your Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-3 text-gray-900 dark:text-white bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-opacity-50 transition"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label className="mb-2 text-gray-700 dark:text-gray-300 font-medium">
            Message
          </label>
          <textarea
            placeholder="Write your message here..."
            rows={5}
            className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-3 text-gray-900 dark:text-white bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-opacity-50 transition resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full md:w-auto bg-black dark:bg-white text-white dark:text-black font-semibold px-6 py-3 rounded-md hover:opacity-90 transition shadow-md hover:shadow-lg"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
