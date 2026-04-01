
import { useState, useEffect } from "react";
import SpCard from "../assets/products/SpCard.png";
import Logo from "../assets/DigiTools.png";

const Navbar = ({ cart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Features");
  const [scrolled, setScrolled] = useState(false);
  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Features", "Pricing", "Products", "Testimonials", "FAQ"];

  return (
    <header className={`fixed w-full z-50 ${scrolled ? "shadow-lg bg-white" : ""}`}>
      <nav>
        <div className="navbar max-w-7xl mx-auto">

          {/* Left */}
          <div className="navbar-start">
            {/* Mobile button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-ghost lg:hidden"
            >
              ☰
            </button>

            {/* Logo */}
            <img src={Logo} alt="logo" className="w-28" />
          </div>

          {/* Center Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-6 font-semibold">
              {menuItems.map((item) => (
                <li
                  key={item}
                  onClick={() => setActive(item)}
                  className={`cursor-pointer transition ${
                    active === item
                      ? "text-purple-600"
                      : "hover:text-purple-500"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="navbar-end flex items-center">
            <div className="flex items-center mr-4 cursor-pointer">
              <img src={SpCard} className="w-6 mr-1" />
              <span>{cart.length}</span>
            </div>

            <h3 className="mr-4 cursor-pointer">Login</h3>

            <button className="btn rounded-full bg-linear-to-r from-indigo-500 to-purple-600 text-white">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-md p-4">
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    setActive(item);
                    setIsOpen(false);
                  }}
                  className="cursor-pointer hover:text-purple-500"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;