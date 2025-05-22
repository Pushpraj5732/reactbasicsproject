import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Optional: for icons

const Navbar = ({ onCategorySelect, selectedCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://fakestoreapi.com/products/categories');
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-blue-600">🛒 ShopEase</div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 text-gray-700 font-medium">
          {loading ? (
            <li className="text-blue-500 animate-pulse">Loading...</li>
          ) : (
            categories.map((cat, i) => (
              <li
                key={i}
                onClick={() => onCategorySelect(cat)}
                className={`capitalize cursor-pointer px-3 py-1 rounded-full transition ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-gray-200'
                }`}
              >
                {cat}
              </li>
            ))
          )}
        </ul>

        {/* Login Button */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Login
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col gap-2 text-gray-700 font-medium">
            {loading ? (
              <li className="text-blue-500 animate-pulse">Loading...</li>
            ) : (
              categories.map((cat, i) => (
                <li
                  key={i}
                  onClick={() => {
                    onCategorySelect(cat);
                    setMenuOpen(false);
                  }}
                  className={`capitalize cursor-pointer px-3 py-2 rounded transition ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </li>
              ))
            )}
          </ul>
          <div className="mt-4">
            <button
              onClick={() => {
                navigate('/login');
                setMenuOpen(false);
              }}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
