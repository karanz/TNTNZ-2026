
import React from 'react';
import { Tour } from '../types';

const POPULAR_TOURS: Tour[] = [
  {
    id: '1',
    title: 'Bula Island Escape',
    location: 'Viti Levu & Mamanuca Islands, Fiji',
    price: 1850,
    duration: '7 Days',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop',
    category: 'relaxation'
  },
  {
    id: '2',
    title: 'Incredible India Heritage',
    location: 'Delhi, Agra & Jaipur, India',
    price: 2400,
    duration: '10 Days',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1524492707947-503c51147a7b?q=80&w=800&auto=format&fit=crop',
    category: 'cultural'
  },
  {
    id: '3',
    title: 'Vietnam Discovery',
    location: 'Hanoi, Halong Bay & Hoi An',
    price: 1650,
    duration: '8 Days',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop',
    category: 'nature'
  }
];

const Tours: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-3">Your Next Adventure</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
              International Packages <br /> Ex-Auckland
            </h3>
          </div>
          <button className="text-emerald-600 font-bold flex items-center space-x-2 group">
            <span>View All Destinations</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POPULAR_TOURS.map((tour) => (
            <div key={tour.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full flex items-center space-x-1 shadow-md text-xs font-bold uppercase">
                  Best Seller
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-slate-500 text-sm mb-2">
                  <svg className="w-4 h-4 mr-1 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {tour.location}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                  {tour.title}
                </h4>
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="text-sm font-medium text-slate-500">
                    <span className="text-slate-900 font-bold text-2xl">${tour.price}</span> <span className="text-[10px] uppercase">NZD</span>
                  </div>
                  <div className="text-slate-500 font-medium flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {tour.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tours;
