import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductCartSection({ cart, setCart }) {
  const [activeTab, setActiveTab] = useState("products");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  //  Fetch Products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/Product.json");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        toast.error("Failed to load products ");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  //  Add to Cart (one time only)
  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      toast.error("Already added to cart");
      return;
    }

    setCart((prev) => [...prev, product]);
    toast.success("Added to cart");
  };

  // Remove from cart
  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
    toast.info("Removed from cart");
  };

  // Total Price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-10">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Premium Digital Tools</h1>

      {/* Toggle */}
      <div className="flex gap-3 bg-white p-2 rounded-full shadow mb-10">
        <button
          onClick={() => setActiveTab("products")}
          className={`px-5 py-2 rounded-full ${
            activeTab === "products"
              ? "bg-purple-600 text-white"
              : "text-gray-600"
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setActiveTab("cart")}
          className={`px-5 py-2 rounded-full ${
            activeTab === "cart"
              ? "bg-purple-600 text-white"
              : "text-gray-600"
          }`}
        >
          Cart ({cart.length})
        </button>
      </div>

      {/* PRODUCTS */}
      {activeTab === "products" && (
        <>
          {loading ? (
            <p className="text-gray-500">Loading...</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl px-6">
              {products.map((item) => {
                const isAdded = cart.some((p) => p.id === item.id);

                return (
                  <div
                    key={item.id}
                    className="bg-white p-6 rounded-2xl shadow"
                  >
                    <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
                      {item.name}
                    </span>

                    <h2 className="text-xl font-semibold mt-3">
                      {item.tag}
                    </h2>

                    <p className="text-gray-500 text-sm mt-2">
                      {item.description}
                    </p>

                    <div className="mt-3 font-bold">
                      ${item.price} / {item.period}
                    </div>

                    <ul className="mt-3 text-sm text-gray-600 space-y-1">
                      {item.features?.map((f, i) => (
                        <li key={i}>✔ {f}</li>
                      ))}
                    </ul>

                    <button
                      onClick={() => addToCart(item)}
                      disabled={isAdded}
                      className={`mt-5 w-full py-2 rounded-xl ${
                        isAdded
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-purple-600 text-white hover:bg-purple-700"
                      }`}
                    >
                      {isAdded ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}

      {/* CART */}
      {activeTab === "cart" && (
        <div className="w-full max-w-4xl px-6">
          {cart.length === 0 ? (
            <div className="bg-white p-10 rounded-2xl shadow text-gray-500 text-center">
               Your cart is empty
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-xl shadow flex justify-between items-center"
                  >
                    <div>
                      <h2 className="font-semibold">{item.tag}</h2>
                      <p className="text-sm text-gray-500">
                        ${item.price} / {item.period}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(index)}
                      className="bg-red-500 text-white px-4 py-1 rounded-lg"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              {/*  Total */}
              <div className="mt-6 bg-white p-5 rounded-xl shadow text-right font-bold">
                Total: ${totalPrice}
              </div>
            </>
          )}
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer
      
      />
    </div>
  );
}