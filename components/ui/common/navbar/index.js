import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <section>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between">
            <div>
              <Link
                href="/"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href="/marketplace"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Marketplace
              </Link>
              <Link
                href="/blogs"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Blogs
              </Link>
            </div>
            <div className="">
              <Link
                href="/wishlist"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Wishlist
              </Link>
              <a
                href="#"
                className="px-8 py-3 rounded-md shadow font-medium text-base text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Connect
              </a>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};
export default Navbar;
