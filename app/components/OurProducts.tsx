"use client"; // Ensures it's a Client Component

const ProductsPage = () => {
  return (
    <div className="max-w-[1321px] mx-auto px-4 py-8">
      <h2 className="text-center text-2xl font-semibold mb-8">Our Products</h2>

      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        {/* Product Card 1 */}
        <div className="flex flex-col p-4 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform">
          <div className="w-full h-40 bg-yellow-200 rounded-lg mb-4"></div> {/* Placeholder for image */}
          <div className="flex justify-between items-center mb-2">
            <div>
              <h3 className="text-lg font-medium">Library Stool Chair</h3>
              <p className="text-xl font-bold">$20</p>
              <p className="line-through text-sm text-gray-500">$39</p>
            </div>
            <div className="w-10 h-10 bg-gray-400 rounded-full"></div> {/* Placeholder for cart logo */}
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="flex flex-col p-4 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform">
          <div className="w-full h-40 bg-blue-200 rounded-lg mb-4"></div> {/* Placeholder for image */}
          <div className="flex justify-between items-center mb-2">
            <div>
              <h3 className="text-lg font-medium">Library Stool Chair</h3>
              <p className="text-xl font-bold">$20</p>
              <p className="line-through text-sm text-gray-500">$39</p>
            </div>
            <div className="w-10 h-10 bg-gray-400 rounded-full"></div> {/* Placeholder for cart logo */}
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="flex flex-col p-4 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform">
          <div className="w-full h-40 bg-green-200 rounded-lg mb-4"></div> {/* Placeholder for image */}
          <div className="flex justify-between items-center mb-2">
            <div>
              <h3 className="text-lg font-medium">Library Stool Chair</h3>
              <p className="text-xl font-bold">$20</p>
            </div>
            <div className="w-10 h-10 bg-gray-400 rounded-full"></div> {/* Placeholder for cart logo */}
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="flex flex-col p-4 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform">
          <div className="w-full h-40 bg-red-200 rounded-lg mb-4"></div> {/* Placeholder for image */}
          <div className="flex justify-between items-center mb-2">
            <div>
              <h3 className="text-lg font-medium">Library Stool Chair</h3>
              <p className="text-xl font-bold">$20</p>
            </div>
            <div className="w-10 h-10 bg-gray-400 rounded-full"></div> {/* Placeholder for cart logo */}
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Product Card 1 */}
        <div className="flex flex-col p-4 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform">
          <div className="w-full h-40 bg-yellow-200 rounded-lg mb-4"></div> {/* Placeholder for image */}
          <div className="flex justify-between items-center mb-2">
            <div>
              <h3 className="text-lg font-medium">Library Stool Chair</h3>
              <p className="text-xl font-bold">$20</p>
              <p className="line-through text-sm text-gray-500">$39</p>
            </div>
            <div className="w-10 h-10 bg-gray-400 rounded-full"></div> {/* Placeholder for cart logo */}
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="flex flex-col p-4 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform">
          <div className="w-full h-40 bg-blue-200 rounded-lg mb-4"></div> {/* Placeholder for image */}
          <div className="flex justify-between items-center mb-2">
            <div>
              <h3 className="text-lg font-medium">Library Stool Chair</h3>
              <p className="text-xl font-bold">$20</p>
              <p className="line-through text-sm text-gray-500">$39</p>
            </div>
            <div className="w-10 h-10 bg-gray-400 rounded-full"></div> {/* Placeholder for cart logo */}
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="flex flex-col p-4 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform">
          <div className="w-full h-40 bg-green-200 rounded-lg mb-4"></div> {/* Placeholder for image */}
          <div className="flex justify-between items-center mb-2">
            <div>
              <h3 className="text-lg font-medium">Library Stool Chair</h3>
              <p className="text-xl font-bold">$20</p>
            </div>
            <div className="w-10 h-10 bg-gray-400 rounded-full"></div> {/* Placeholder for cart logo */}
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="flex flex-col p-4 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform">
          <div className="w-full h-40 bg-red-200 rounded-lg mb-4"></div> {/* Placeholder for image */}
          <div className="flex justify-between items-center mb-2">
            <div>
              <h3 className="text-lg font-medium">Library Stool Chair</h3>
              <p className="text-xl font-bold">$20</p>
            </div>
            <div className="w-10 h-10 bg-gray-400 rounded-full"></div> {/* Placeholder for cart logo */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
