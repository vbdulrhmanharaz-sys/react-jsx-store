import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import imge from "../assets/imaged/logo-alt-2x.webp"
const Footer = () => {
  return (
    <footer className="bg-[#17293d] text-gray-300 mt-100 ">
      <div className="max-w-10xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center border-b border-gray-700 pt-3 pb-5">
          <h1 className="text-5xl font-extrabold text-white"><img src={imge} alt="" /></h1>

          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaXTwitter, FaTiktok, FaYoutube].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#f4b860] hover:text-black duration-300 cursor-pointer"
                >
                  <Icon />
                </div>
              )
            )}
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-14">
          {/* About */}
          <div>
            <h3 className="text-white text-2xl font-semibold mb-6">
              About Us
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="hover:underline  hover:text-[#f4b860] cursor-pointer ">About Us</li>
              <li className="hover:text-[#f4b860] cursor-pointer">Blog</li>
              <li className="hover:text-[#f4b860] cursor-pointer">FAQ</li>
              <li className="hover:text-[#f4b860] cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-[#f4b860] cursor-pointer">
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-white text-2xl font-semibold mb-6">
              My Account
            </h3>

            <ul className="space-y-4 text-sm">
              <li>Login</li>
              <li>Order History</li>
              <li>Affiliates</li>
              <li>Newsletter</li>
              <li>Gift Certificate</li>
              <li>Returns</li>
            </ul>
          </div>

          {/* Customer */}
          <div>
            <h3 className="text-white text-2xl font-semibold mb-6">
              Customer Service
            </h3>

            <ul className="space-y-4 text-sm">
              <li>Contact Us</li>
              <li>Store Locations</li>
              <li>Our Brands</li>
              <li>Site Map</li>
              <li>Delivery Information</li>
              <li>Unlimited Links</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-2xl font-semibold mb-6">
              Newsletter
            </h3>

            <p className="text-sm mb-5">
              Stay up to date with news and promotions by signing up for our
              newsletter
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 bg-[#22364e] px-4 py-3 outline-none border border-gray-700"
              />

              <button className="bg-[#f4b860] px-5 text-black">
                ✉
              </button>
            </div>

            <div className="flex items-center gap-2 mt-5 text-sm">
              <input type="checkbox" />
              <span>
                I have read and agree to the
                <span className="text-[#f4b860] ml-1 cursor-pointer">
                  Privacy Policy
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-[#22364e] py-6 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            Copyright © 2024, Your Store, All Rights Reserved
          </p>

          <div className="flex gap-2 mt-4 md:mt-0">
            <img
              src="https://img.icons8.com/color/48/visa.png"
              alt="visa"
              className="w-12"
            />
            <img
              src="https://img.icons8.com/color/48/mastercard.png"
              alt="master"
              className="w-12"
            />
            <img
              src="https://img.icons8.com/color/48/amex.png"
              alt="amex"
              className="w-12"
            />
            <img
              src="https://img.icons8.com/color/48/paypal.png"
              alt="paypal"
              className="w-12"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;