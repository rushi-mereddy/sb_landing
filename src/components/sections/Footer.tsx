import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function SmartBridgeFooter() {
  return (
    <footer className="bg-slate-800 text-white py-16 ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="/lovable-uploads/sm2.png"
                alt="SmartBridge logo — Let's Bridge the Gap"
                width={240}
                height={60}
                className="h-12 md:h-14 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Let's Bridge the Gap between Academics and Industries.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-6">
              <a
                href="https://www.linkedin.com/company/smartbridge-educational-services-pvt-ltd/"
                target="_blank"
                className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded flex items-center justify-center transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.facebook.com/TheSmartBridgeIoT/"
                target="_blank"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/thesmartbridge/"
                target="_blank"
                className="w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://x.com/thesmartbridge"
                target="_blank"
                className="w-10 h-10 bg-teal-500 hover:bg-teal-600 rounded flex items-center justify-center transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Privacy & TOS */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">
              PRIVACY & TOS
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/privacy"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Navigate */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">NAVIGATE</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Credit Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Virtual Internship Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">
              CONTACT US
            </h3>

            {/* India Office */}
            <div className="mb-6">
              <h4 className="text-white font-medium mb-2">India office</h4>
              <address className="text-gray-300 text-sm leading-relaxed not-italic">
                6th Floor, Sundarayya Vignana
                <br />
                Kendram, Technical Block,
                <br />
                Madhava Reddy Colony,
                <br />
                Gachibowli, Hyderabad, Telangana -<br />
                500032
              </address>
            </div>

            {/* Singapore Office */}
            <div className="mb-6">
              <h4 className="text-white font-medium mb-2">Singapore office</h4>
              <address className="text-gray-300 text-sm leading-relaxed not-italic">
                78 Bayshore Rd, #18-24, Singapore
                <br />
                469991
              </address>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">
                <a
                  href="mailto:info@thesmartbridge.com"
                  className="hover:text-white transition-colors"
                >
                  info@thesmartbridge.com
                </a>
              </p>
              <p className="text-gray-300 text-sm">
                Office -{" "}
                <a
                  href="tel:+916304320044"
                  className="hover:text-white transition-colors"
                >
                  +91 6304320044
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
