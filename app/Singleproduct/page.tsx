export default function Home() {
  return (
    <div className="max-w-[1321px] mx-auto px-4">
      {/* Product Highlight Section */}
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 mt-10">
        {/* Main Image Placeholder */}
        <div className="w-full lg:w-1/2 bg-pink-300 aspect-square flex items-center justify-center">
          {/* Replace with your image */}
          <span className="text-gray-500">Image Here</span>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl font-bold mb-2">Library Stool Chair</h1>
          <p className="text-lg text-gray-700 mb-4">$20.00 USD</p>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing.
          </p>
          <button className="px-6 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition">
            Add To Cart
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Featured Products</h2>
          <a href="#" className="text-teal-500 hover:underline">
            View all
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Product Box */}
          <div className="bg-gray-300 aspect-square rounded-md flex flex-col justify-between p-4">
            {/* Product Image Placeholder */}
            <div className="h-[60%] bg-gray-400 flex items-center justify-center">
              {/* Replace with your image */}
              <span className="text-gray-500">Image Here</span>
            </div>
            <h3 className="text-lg font-medium mt-4">Library Stool Chair</h3>
            <p className="text-gray-700">$99</p>
          </div>

          {/* Repeat Product Boxes */}
          <div className="bg-gray-300 aspect-square rounded-md flex flex-col justify-between p-4">
            <div className="h-[60%] bg-gray-400 flex items-center justify-center">
              {/* Replace with your image */}
              <span className="text-gray-500">Image Here</span>
            </div>
            <h3 className="text-lg font-medium mt-4">Library Stool Chair</h3>
            <p className="text-gray-700">$99</p>
          </div>

          <div className="bg-gray-300 aspect-square rounded-md flex flex-col justify-between p-4">
            <div className="h-[60%] bg-gray-400 flex items-center justify-center">
              {/* Replace with your image */}
              <span className="text-gray-500">Image Here</span>
            </div>
            <h3 className="text-lg font-medium mt-4">Library Stool Chair</h3>
            <p className="text-gray-700">$99</p>
          </div>

          <div className="bg-gray-300 aspect-square rounded-md flex flex-col justify-between p-4">
            <div className="h-[60%] bg-gray-400 flex items-center justify-center">
              {/* Replace with your image */}
              <span className="text-gray-500">Image Here</span>
            </div>
            <h3 className="text-lg font-medium mt-4">Library Stool Chair</h3>
            <p className="text-gray-700">$99</p>
          </div>

          <div className="bg-gray-300 aspect-square rounded-md flex flex-col justify-between p-4">
            <div className="h-[60%] bg-gray-400 flex items-center justify-center">
              {/* Replace with your image */}
              <span className="text-gray-500">Image Here</span>
            </div>
            <h3 className="text-lg font-medium mt-4">Library Stool Chair</h3>
            <p className="text-gray-700">$99</p>
          </div>
        </div>
      </div>
    </div>
  );
}
