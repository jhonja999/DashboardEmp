import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-accent/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-cinzel text-xl text-accent mb-4">Contact Us</h3>
            <div className="space-y-2 text-light">
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-accent" />
                +1 (555) 123-4567
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-accent" />
                info@ninagold.com
              </p>
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-accent" />
                123 Mining Ave, Gold District
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-cinzel text-xl text-accent mb-4">Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-secondary text-light border border-accent/20 focus:border-accent outline-none transition-colors"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-accent text-light hover:bg-accent/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <h3 className="font-cinzel text-xl text-accent mb-4">Working Hours</h3>
            <div className="space-y-2 text-light">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-accent/20 text-center text-light/60">
          <p>&copy; {new Date().getFullYear()} NinaGold Mining Explorations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;