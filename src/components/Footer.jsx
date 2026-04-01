import Fbicon from "../assets/fb.png";
import Instra from "../assets/instra.png";
import Xicon from "../assets/x.png";

const Footer = () => {
  return (
    <footer className="bg-[#0B1324] text-gray-300 px-10 py-12">
      <div className="max-w-7xl mx-auto">
        <div className=" lg:flex lg:justify-between text-center lg:text-start">
          <div>
            <h2 className="text-white text-2xl font-semibold mb-3">
              DigiTools
            </h2>
            <p className="text-[16px]  lg:max-w-xs opacity-80">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div className="detail-area flex justify-between lg:space-x-20">
            <div>
              <h3 className="text-white font-medium mb-3">Product</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-hover">Features</li>
                <li className="text-hover">Pricing</li>
                <li className="text-hover">Templates</li>
                <li className="text-hover">Integrations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-3">Company</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-hover">About</li>
                <li className="text-hover">Blog</li>
                <li className="text-hover">Careers</li>
                <li className="text-hover">Press</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-3">Resources</h3>
              <ul className="space-y-2 text-sm mb-4">
                <li className="text-hover">Documentation</li>
                <li className="text-hover">Help Center</li>
                <li className="text-hover">Community</li>
                <li className="text-hover">Contact</li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-white font-medium pb-3">Social Links</h3>
            <div className=" flex justify-center items-center gap-2">
              <a href="#" className="Social-link ">
                <img src={Fbicon} alt="" />
              </a>
              <a href="#" className="Social-link ">
                <img src={Instra} alt="" />
              </a>
              <a href="#" className=" Social-link ">
                <img src={Xicon} alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 my-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
