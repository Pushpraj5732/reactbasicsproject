import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProductsByCategory = async (category) => {
    try {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      fetchProductsByCategory(selectedCategory);
    }
  }, [selectedCategory]);

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col">
      <Navbar onCategorySelect={setSelectedCategory} selectedCategory={selectedCategory} />

      <main className="flex-grow p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 capitalize text-center">
          {selectedCategory ? selectedCategory : 'Choose a category'}
        </h1>

        {loading ? (
          <div className="text-center text-blue-600 text-lg font-medium animate-pulse">Loading products...</div>
        ) : products.length === 0 && selectedCategory ? (
          <div className="text-center text-red-500 font-semibold">No products found in this category.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300 flex flex-col"
              >
                <div className="bg-gray-100 p-4 flex items-center justify-center h-48">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain h-full"
                  />
                </div>
                <div className="px-4 pt-4">
                  <h2 className="text-lg font-semibold line-clamp-2 text-gray-800">{product.title}</h2>
                </div>
                <div className="px-4 pt-2">
                  <p className="text-gray-700 font-bold">${product.price}</p>
                </div>
                <div className="px-4 pt-4 pb-4 mt-auto">
                  <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
