
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tours from './components/Tours';
import PersonalAssistant from './components/PersonalAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        {/* Trust Bar */}
        <div className="bg-slate-50 border-y border-slate-100 py-8">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-slate-400">TAANZ</span>
              <span className="text-xs uppercase tracking-tighter">Accredited</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-slate-400">IATA</span>
              <span className="text-xs uppercase tracking-tighter">Registered</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-slate-400">100% KIWI</span>
              <span className="text-xs uppercase tracking-tighter">Owned</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-slate-400">24/7</span>
              <span className="text-xs uppercase tracking-tighter">Support</span>
            </div>
          </div>
        </div>

        <section id="tours">
          <Tours />
        </section>

        {/* Custom Inquiry Section */}
        <section id="inquire" className="bg-emerald-900 py-24 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                  Can't find exactly what <br/> you're looking for?
                </h2>
                <p className="text-xl text-emerald-100/80 mb-8">
                  Our Auckland-based travel experts are ready to curate a bespoke journey to Fiji, India, or anywhere in Asia. Tell us your dreams, and we'll handle the rest.
                </p>
                <ul className="space-y-4 mb-8">
                  {['Personalized 1-on-1 Consultation', 'Best Price Guarantee on ex-AKL Flights', 'Custom Multi-City Itineraries'].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-2xl text-slate-900">
                <h3 className="text-2xl font-bold mb-6">Get a Free Quote</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
                    <input type="text" placeholder="Last Name" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
                  </div>
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
                  <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none">
                    <option>Preferred Destination</option>
                    <option>Fiji</option>
                    <option>India</option>
                    <option>Vietnam / Thailand</option>
                    <option>Other</option>
                  </select>
                  <textarea placeholder="Tell us about your trip plans..." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none h-24"></textarea>
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-95">
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Facebook Social Proof Section */}
        <section className="bg-white py-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Join the Community</h2>
            <div className="flex flex-col items-center">
              <a 
                href="https://www.facebook.com/travelntoursnz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-4 bg-[#1877F2] text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <div className="text-left">
                  <div className="text-xs font-bold uppercase tracking-widest opacity-80">Follow us on Facebook</div>
                  <div className="text-xl font-bold">@travelntoursnz</div>
                </div>
              </a>
              <p className="mt-4 text-slate-500 font-medium italic">"Over 5,000 Kiwis trust us for their global adventures"</p>
            </div>
          </div>
        </section>

        <section id="ai-planner" className="bg-slate-50 py-24 border-t border-slate-200">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">
              AI Destination Expert
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Ready to explore? Ask our AI about visa requirements for India, best beach resorts in Fiji, or food tours in Vietnam.
            </p>
          </div>
          <PersonalAssistant />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
