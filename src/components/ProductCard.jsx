import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FaFileAlt,
  FaCrown,
  FaRocket,
  FaBriefcase,
  FaComments,
  FaTasks,
  FaUserTie,
  FaPalette,
  FaStar,
} from "react-icons/fa";

// Icon map
const iconMap = {
  FaFileAlt: <FaFileAlt />,
  FaCrown: <FaCrown />,
  FaRocket: <FaRocket />,
  FaBriefcase: <FaBriefcase />,
  FaComments: <FaComments />,
  FaTasks: <FaTasks />,
  FaUserTie: <FaUserTie />,
  FaPalette: <FaPalette />,
  FaStar: <FaStar />,
};

// Tag colors for icon
const tagColors = {
  new: "text-green-500",
  popular: "text-blue-500",
  "best seller": "text-yellow-500",
};

export default function ProductCartSection({ cart, setCart }) {
  const [activeTab, setActiveTab] = useState("products");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Replace with your JSON path or import JSON
        const res = await fetch("/Product.json");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        toast.error("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Add to Cart
  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      toast.error("Already added to cart");
      return;
    }
    setCart((prev) => [...prev, product]);
    toast.success("Added to cart");
  };

  // Remove from Cart
  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
    toast.info("Removed from cart");
  };
  // Clear entire cart (checkout)
  const clearCart = () => {
    setCart([]);
    toast.info("Cart cleared");
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">Premium Digital Tools</h1>
      <p className="text-[16px] lg:max-w-lg text-gray-700 text-center pb-3 ">
        Choose from our curated collection of premium digital products
        designedto boost your productivity and creativity.
      </p>

      {/* Toggle */}
      <div className="flex gap-3 bg-white p-1 rounded-full shadow mb-10">
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
            activeTab === "cart" ? "bg-purple-600 text-white" : "text-gray-600"
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
            <div className="grid lg:grid-cols-3 grid-cols-1 justify-items-center items-center gap-6 w-full max-w-6xl px-6 mx-auto">
              {products.map((item) => {
                const isAdded = cart.some((p) => p.id === item.id);

                return (
                  <div
                    key={item.id}
                    className="bg-white w-80 p-6 rounded-2xl shadow-md relative hover:shadow-xl transition"
                  >
                    {/* Tag */}
                    <span
                      className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full ${
                        item.tag === "new"
                          ? "bg-green-100 text-green-600"
                          : item.tag === "popular"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {item.tag}
                    </span>

                    {/* Icon */}
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 text-3xl ${
                        tagColors[item.tag] || "text-gray-500"
                      }`}
                    >
                      {iconMap[item.icon]}
                    </div>

                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.description}
                    </p>

                    <p className="text-2xl font-bold mt-2">
                      ${item.price}{" "}
                      <span className="text-sm text-gray-500 font-normal">
                        /{item.period}
                      </span>
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      {item.features.map((f, i) => (
                        <li key={i}>✔ {f}</li>
                      ))}
                    </ul>

                    <button
                      disabled={isAdded}
                      onClick={() => addToCart(item)}
                      className={`mt-6 w-full py-2 rounded-full text-white ${
                        isAdded
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-linear-to-r from-purple-500 to-indigo-600 hover:opacity-90 transition"
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
        <div className="w-full max-w-7xl px-6">
          {cart.length === 0 ? (
            <div className="bg-white p-10 rounded-2xl shadow text-gray-500 text-center">
              <h3 className="font-bold text-4xl text-gray-500 opacity-90">Your cart is empty</h3>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-xl shadow flex justify-between items-center"
                  >
                    <div className="flex ">
                      <div
                        className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 text-3xl ${
                          tagColors[item.tag] || "text-gray-500"
                        }`}
                      >
                        {iconMap[item.icon]}
                      </div>
                      <div>
                        <h2 className="font-semibold">{item.name}</h2>
                        <p className="text-sm text-gray-500">
                          ${item.price} / {item.period}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(index)}
                      className=" text-red-500 border px-4 py-1 rounded-lg"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-white p-5 rounded-xl shadow text-right font-bold">
                Total: ${totalPrice}
              </div>
              <button
                onClick={clearCart}
                className="bg-purple-600 text-white py-3 w-full rounded-3xl mt-4 hover:opacity-90 transition"
              >
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      )}

      <ToastContainer />
    </div>
  );
}
