export default function AddPropertyPage() {
  return (
    <section className="max-w-xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Add New Property</h1>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Property Title"
          className="w-full border rounded-md px-4 py-3"
        />
        <input
          type="number"
          placeholder="Price"
          className="w-full border rounded-md px-4 py-3"
        />
        <textarea
          placeholder="Description"
          rows={4}
          className="w-full border rounded-md px-4 py-3"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-md"
        >
          Save Property
        </button>
      </form>
    </section>
  );
}
