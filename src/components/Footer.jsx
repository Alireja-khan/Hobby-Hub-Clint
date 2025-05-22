import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">

                    {/* Logo & Description */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">HobbyHub</h2>
                        <p className="text-sm text-gray-400">
                            Bringing passionate people together through shared interests.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/" className="hover:text-white transition">Home</a></li>
                            <li><a href="/allGroups" className="hover:text-white transition">All Groups</a></li>
                            <li><a href="/createGroup" className="hover:text-white transition">Create Group</a></li>
                            <li><a href="/myGroup" className="hover:text-white transition">My Group</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/" className="hover:text-white transition">Help Center</a></li>
                            <li><a href="/" className="hover:text-white transition">Terms of Service</a></li>
                            <li><a href="/" className="hover:text-white transition">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                        <div className="flex justify-center md:justify-start gap-4 text-xl">
                            <a href="/" className="hover:text-white transition"><FaFacebook /></a>
                            <a href="/" className="hover:text-white transition"><FaTwitter /></a>
                            <a href="/" className="hover:text-white transition"><FaInstagram /></a>
                            <a href="/" className="hover:text-white transition"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} HobbyConnect. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
