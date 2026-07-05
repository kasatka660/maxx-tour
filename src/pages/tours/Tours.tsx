export default function Tours() {
  return (
    <section className="container">
      <div className="container mx-auto px-4 py-12 h-full">
        <h1 className="text-4xl font-bold mb-8">Our Tours</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Tour Card 1</h2>
            <p className="text-gray-600">Tour description goes here</p>
          </div>
        </div>
      </div>
    </section>
  );
}
