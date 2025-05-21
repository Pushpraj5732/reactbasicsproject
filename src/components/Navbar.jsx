import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onCategorySelect, selectedCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://fakestoreapi.com/products/categories');
      const data = await res.json();
      setCategories(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setCategories([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex flex-col md:flex-row md:justify-between md:items-center">
      <div className="text-2xl font-extrabold text-blue-600 mb-4 md:mb-0">🛒 ShopEase</div>

      <ul className="flex flex-wrap gap-4 text-gray-700 font-medium mb-4 md:mb-0">
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
      <div className="text-right">
        <button
          onClick={() => navigate('/login')}
          className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
