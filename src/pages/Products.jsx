// Replace the content of your Products.jsx with this:
import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [filter, setFilter] = useState("All");

  // 1. Dynamically get all unique categories from your data
  // This ensures you never miss a category (like 'Roofing' or '600x1200mm')
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // 2. Filter Logic
  const filteredProducts =
    filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <section id="products" className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our range of premium Porcelain, Glazed, and Matt finish
            tiles.
          </p>
        </div>

        {/* Filter Tabs - Generated automatically */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-sm ${
                filter === cat
                  ? "bg-orange-600 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-gray-500">
              <p className="text-xl">No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
