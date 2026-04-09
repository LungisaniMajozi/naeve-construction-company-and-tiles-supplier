import { useCart } from "../context/CartContext";
import { X, Plus, Minus, Trash2, Send } from "lucide-react";

export default function CartDrawer() {
  const {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    isCartOpen,
    setIsCartOpen,
    totalItems,
  } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) return;

    // Professional WhatsApp Message Template
    let message = `*🏗️ NAEVE CONSTRUCTION COMPANY & TILES SUPPLIER*\n`;
    message += `*QUOTE REQUEST*\n\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n\n`;

    message += `*📋 ORDER DETAILS:*\n\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   🔖 Code: ${item.code}\n`;
      message += `   📏 Size: ${item.category}\n`;
      message += `   🎨 Finish: ${item.finish}\n`;
      message += `   📦 Quantity: *${item.qty}*\n`;
      message += `\n`;
    });

    message += `━━━━━━━━━━━━━━━━━━━━\n\n`;
    message += `*💬 Please review and send pricing/availability.*`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/27670458628?text=${encodedMessage}`, "_blank");
  };

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 transition-opacity"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-[400px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-xl font-bold text-slate-900">
              Your Quote List ({totalItems})
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p>Your cart is empty.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-orange-600 font-semibold mt-2 underline"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg bg-gray-50"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800 line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">{item.code}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 bg-gray-100 rounded hover:bg-gray-200 transition"
                      >
                        <Minus className="w-4 h-4" />
                      </button>

                      <span className="font-bold text-sm min-w-[1rem] text-center">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => addToCart(item)}
                        className="p-1 bg-orange-100 text-orange-600 rounded hover:bg-orange-200 transition"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="p-6 border-t bg-gray-50">
              <button
                onClick={clearCart}
                className="w-full py-3 mb-3 text-red-500 font-semibold hover:bg-red-50 rounded-xl flex items-center justify-center gap-2 transition"
              >
                <Trash2 className="w-4 h-4" /> Clear List
              </button>
              <button
                onClick={handleCheckout}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                <Send className="w-5 h-5" /> Send Quote to WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
