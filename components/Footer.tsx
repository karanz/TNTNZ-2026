
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <span className="text-2xl font-serif font-bold tracking-tight text-white mb-6 block">
              Travel&Tours<span className="text-emerald-500">.nz</span>
            </span>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Auckland's trusted specialist for Fiji, India, and South-East Asia. Making global dreams a local reality.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/travelntoursnz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {['instagram', 'twitter', 'linkedin'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-white/20 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Our Destinations</h4>
            <ul className="space-y-4">
              {['Fiji Islands', 'Rajasthan, India', 'Thailand Beaches', 'Vietnam Culture', 'Bali Retreats'].map((region) => (
                <li key={region}>
                  <a href="#" className="hover:text-emerald-400 transition-colors">{region}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Support</h4>
            <ul className="space-y-4">
              {['Visa Assistance', 'Auckland Office', 'Contact Us', 'Travel Insurance', 'Terms & Conditions'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-emerald-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Deal Alerts</h4>
            <p className="text-sm mb-4">Get the latest ex-AKL flight deals and holiday packages.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-slate-800 border-none rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500"
              />
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition-colors">
                Sign Up
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Travel & Tours NZ. Auckland's Boutique International Agency. <br className="md:hidden" />
            <a href="https://www.facebook.com/travelntoursnz" className="text-emerald-500 hover:underline">Follow us on Facebook</a>
          </p>
          <div className="flex items-center space-x-6">
             <span className="text-xs text-slate-600">IATA Accredited</span>
             <img src="https://picsum.photos/id/237/100/40" alt="Payment Methods" className="opacity-50 grayscale hover:grayscale-0 transition-all h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
