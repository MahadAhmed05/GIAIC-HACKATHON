import React from "react";

function page() {
  return (
    <div>
      <div className="flex flex-col items-center px-4 md:px-8 lg:px-16 bg-gray-50 py-16">
        {/* Main Container */}
        <div className="max-w-[1321px] w-full text-center">
          {/* Subscribe Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Or Subscribe To The Newsletter
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <input
                type="email"
                placeholder="Email Address..."
                className="w-full md:w-[400px] px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Submit
              </button>
            </div>
          </section>

          {/* Instagram Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Follow Products And Discounts On Instagram
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {/* Placeholder Boxes */}
              <div className="bg-gray-300 rounded-md w-full h-[150px] md:h-[200px]"></div>
              <div className="bg-gray-300 rounded-md w-full h-[150px] md:h-[200px]"></div>
              <div className="bg-gray-300 rounded-md w-full h-[150px] md:h-[200px]"></div>
              <div className="bg-gray-300 rounded-md w-full h-[150px] md:h-[200px]"></div>
              <div className="bg-gray-300 rounded-md w-full h-[150px] md:h-[200px]"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default page;
