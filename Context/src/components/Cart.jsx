import React from "react";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";

const Cart = ({ cartItems = [], onUpdateQuantity, onRemoveItem }) => {
  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0,
  );
  const shipping = subtotal > 0 ? 15.0 : 0;
  const total = subtotal + shipping;

  // Render empty state if cart is empty
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
        <div className="p-6 rounded-full bg-zinc-900 border border-zinc-800 mb-4 text-zinc-500">
          <ShoppingBag size={48} />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Your cart is empty
        </h2>
        <p className="text-zinc-400 max-w-sm mb-6">
          Looks like you haven't added anything to your cart yet.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-8 text-zinc-100">
      <header className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
          Shopping <span className="text-orange-500">Cart</span>
        </h1>
        <p className="text-sm text-zinc-400 mt-1">
          Review your selected items before checking out.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items List */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => {
            const quantity = item.quantity || 1;
            return (
              <div
                key={item.id}
                className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-4 md:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition hover:border-zinc-700"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-20 h-20 bg-white rounded-lg p-2 flex items-center justify-center shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-medium text-orange-500 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-semibold text-white line-clamp-1 pr-4">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-400 font-medium">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Controls & Subtotal */}
                <div className="flex items-center justify-between w-full sm:w-auto sm:justify-end gap-6 border-t sm:border-t-0 border-zinc-800 pt-3 sm:pt-0">
                  {/* Quantity Counter */}
                  <div className="flex items-center border border-zinc-800 bg-zinc-950 rounded-lg overflow-hidden">
                    <button
                      onClick={() =>
                        onUpdateQuantity &&
                        onUpdateQuantity(item.id, Math.max(1, quantity - 1))
                      }
                      className="p-2 hover:bg-zinc-800 text-zinc-400 hover:text-white transition"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-3 text-sm font-medium w-8 text-center text-white">
                      {quantity}
                    </span>
                    <button
                      onClick={() =>
                        onUpdateQuantity &&
                        onUpdateQuantity(item.id, quantity + 1)
                      }
                      className="p-2 hover:bg-zinc-800 text-zinc-400 hover:text-white transition"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  {/* Total & Remove */}
                  <div className="flex items-center gap-4">
                    <span className="text-base font-bold text-white min-w-[70px] text-right">
                      ${(item.price * quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => onRemoveItem && onRemoveItem(item.id)}
                      className="p-2 text-zinc-500 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg transition"
                      title="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 sticky top-8 space-y-6">
            <h2 className="text-lg font-bold text-white border-b border-zinc-800 pb-4">
              Order Summary
            </h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal ({cartItems.length} items)</span>
                <span className="text-zinc-200 font-medium">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Estimated Shipping</span>
                <span className="text-zinc-200 font-medium">
                  ${shipping.toFixed(2)}
                </span>
              </div>
              <div className="border-t border-zinc-800 pt-3 flex justify-between text-base font-bold text-white">
                <span>Total</span>
                <span className="text-orange-500">${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-zinc-950 font-bold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2 group">
              Proceed to Checkout
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
