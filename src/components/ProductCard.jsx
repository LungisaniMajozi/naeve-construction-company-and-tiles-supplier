// Replace the content of your ProductCard.jsx with this:
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useCart } from "../context/CartContext";
import { Plus } from "lucide-react";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
        {/* Image Area */}
        <div
          className="relative overflow-hidden bg-gray-50 aspect-square cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
            {product.category}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">
            {product.name}
          </h3>

          <div className="flex flex-wrap gap-2 mb-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-600">
              Code: {product.code}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-orange-50 text-orange-700">
              {product.finish}
            </span>
          </div>

          {/* PRICE DISPLAY - Added this section */}
          <div className="mb-4 mt-auto pt-2 border-t border-gray-100">
            <p className="text-xl font-bold text-orange-600">{product.price}</p>
          </div>

          {/* Button */}
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-slate-900 text-white font-semibold py-3 rounded-xl hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 active:scale-95"
          >
            <Plus className="w-5 h-5" />
            Add to Quote
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={[{ src: product.image, alt: product.name }]}
        />
      )}
    </>
  );
}
