import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-red-800 text-white border-t-4 border-gray-200 mt-10 print:hidden">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          {/* Logo */}
          <img
            src="/image/logo.jpeg"
            alt="logo"
            className="h-20 mx-auto bg-white p-1 rounded"
          />

          {/* Links */}
          <div className="text-center space-y-2">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                to="/terms"
                className="px-6 py-3 rounded-xl font-semibold bg-white/20 backdrop-blur-md border border-white/40 text-white hover:bg-white hover:text-red-600 transition duration-300 shadow-md"
              >
                Terms & Condition
              </Link>

              <Link
                to="/privacy-policy"
                className="px-6 py-3 rounded-xl font-semibold bg-white/20 backdrop-blur-md border border-white/40 text-white hover:bg-white hover:text-red-600 transition duration-300 shadow-md"
              >
                Privacy Policy
              </Link>

              <Link
                to="/disclaimer"
                className="px-6 py-3 rounded-xl font-semibold bg-white/20 backdrop-blur-md border border-white/40 text-white hover:bg-white hover:text-red-600 transition duration-300 shadow-md"
              >
                Disclaimer
              </Link>

              <Link
                to="/refund-policy"
                className="px-6 py-3 rounded-xl font-semibold bg-white/20 backdrop-blur-md border border-white/40 text-white hover:bg-white hover:text-red-600 transition duration-300 shadow-md"
              >
                Refund Policy
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl font-semibold bg-white/20 backdrop-blur-md border border-white/40 text-white hover:bg-white hover:text-red-600 transition duration-300 shadow-md"
              >
                Contact Us
              </Link>
            </div>

            <p className="text-sm">
              © 2025 All rights reserved <b>Manorama Charitable Trust</b>
            </p>

            <p className="text-sm text-red-100">
              A Under Section 8 Act 2013 Non-Profit Organization (NGO)
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right text-sm space-y-1">
            <p>Corporate Office - Basti, India</p>
            <p>www.mrctrust.info</p>
            <p className="font-semibold">Help Line: +91 9654009214</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
