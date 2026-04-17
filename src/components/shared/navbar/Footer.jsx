import React from 'react';
import Logoxl from "../../../assets/logo-xl.png"; 
import InstagramIcon from "../../../assets/instagram.png";
import FacebookIcon from "../../../assets/facebook.png";
import TwitterIcon from "../../../assets/twitter.png"; 

const Footer = () => {
    const socialLinkStyles = "bg-white p-1 rounded-full flex items-center justify-center hover:bg-green-100 transition-colors";
    const iconStyles = "h-14 w-14 object-contain"; 

    return (
        <footer className="bg-green-900 text-gray-300 py-12 px-4"> 
            <div className="container mx-auto flex flex-col items-center text-center">
                
                <div className="mb-6">
                    <img src={Logoxl} alt="KeenKeeper" className="h-12 mb-4 mx-auto" />
                    <p className="text-lg leading-relaxed">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                </div>

                <div className="mb-10">
                    <h3 className="text-white font-semibold mb-5 text-xl">Social Links</h3>
                    <div className="flex gap-4">
                        <a href="#" className={socialLinkStyles} aria-label="Instagram">
                            <img src={InstagramIcon} alt="Instagram" className={iconStyles} />
                        </a>
                        <a href="#" className={socialLinkStyles} aria-label="Facebook">
                            <img src={FacebookIcon} alt="Facebook" className={iconStyles} />
                        </a>
                        <a href="#" className={socialLinkStyles} aria-label="Twitter">
                            <img src={TwitterIcon} alt="Twitter" className={iconStyles} />
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="w-full border-t border-green-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-70">
                    <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>
                    
                    <nav className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;