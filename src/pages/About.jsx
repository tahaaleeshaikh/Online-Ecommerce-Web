import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-5 text-gray-800">
          Welcome to My E-Shop!
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          At <span className="font-semibold">My E-Shop</span>, we offer the best quality products at the best prices. 
          Our mission is to provide a seamless online shopping experience, ensuring that our customers are satisfied with every purchase.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800">Wide Variety of Products</h2>
            <p className="text-gray-600 mt-4">
              From electronics to fashion, we offer a diverse range of products to meet all your needs.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800">Affordable Prices</h2>
            <p className="text-gray-600 mt-4">
              We ensure that our products are competitively priced, so you always get the best deal.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800">Fast & Secure Shipping</h2>
            <p className="text-gray-600 mt-4">
              We deliver products right to your door, with fast shipping and secure packaging.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-gray-800">Why Shop With Us?</h3>
          <p className="text-gray-600 mt-4">
            At My E-Shop, we prioritize customer satisfaction with top-notch support, easy returns, 
            and a user-friendly platform that makes shopping enjoyable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
