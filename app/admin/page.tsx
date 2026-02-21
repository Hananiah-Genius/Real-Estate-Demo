import Link from "next/link";

export default function AdminDashboard() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <Link
        href="/admin/add-property"
        className="bg-black text-white px-6 py-3 rounded-md"
      >
        Add Property
      </Link>
    </section>
  );
}
