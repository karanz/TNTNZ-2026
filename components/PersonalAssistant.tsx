
import React, { useState, useRef, useEffect } from 'react';
import { getTravelAdvice } from '../services/geminiService';
import { ChatMessage, GroundingSource } from '../types';

const PersonalAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sources, setSources] = useState<GroundingSource[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = input.trim();
    if (!query || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: query };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const result = await getTravelAdvice(query);
      const botMessage: ChatMessage = { 
        role: 'model', 
        text: typeof result.text === 'string' ? result.text : 'Sorry, I had trouble processing that.'
      };
      setMessages(prev => [...prev, botMessage]);
      setSources(result.sources || []);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: 'Connection lost. Please check your network.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4" id="ai-assistant-container">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[600px]">
        {/* Chat Header */}
        <div className="bg-emerald-600 p-6 flex items-center space-x-4">
          <div className="bg-white p-2 rounded-full shadow-lg">
            <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">Travel & Tours Specialist</h3>
            <p className="text-emerald-100 text-sm">Online • Auckland Local</p>
          </div>
        </div>

        {/* Chat Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
          {messages.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md border border-slate-100">
                <span className="text-4xl">🏝️</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">How can I help you today?</h4>
              <p className="text-slate-500 max-w-sm mx-auto">
                Ask about flights from Auckland, India visas, or Fiji resorts.
              </p>
            </div>
          )}

          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl ${
                msg.role === 'user' 
                  ? 'bg-emerald-600 text-white rounded-tr-none shadow-lg' 
                  : 'bg-white text-slate-800 rounded-tl-none border border-slate-100 shadow-md'
              }`}>
                <p className="leading-relaxed text-sm whitespace-pre-wrap">
                  {String(msg.text)}
                </p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-md flex space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          )}
          
          <div ref={chatEndRef} />
        </div>

        {/* Sources Section */}
        {sources.length > 0 && !isLoading && (
          <div className="px-6 py-3 bg-white border-t border-slate-100">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Travel Sources</p>
            <div className="flex flex-wrap gap-2">
              {sources.map((source, idx) => (
                <a 
                  key={idx} 
                  href={source.uri} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[11px] text-emerald-600 hover:text-emerald-700 font-medium bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100 truncate max-w-[150px]"
                >
                  {String(source.title)}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Chat Input */}
        <div className="p-6 bg-white border-t border-slate-100">
          <form onSubmit={handleSend} className="flex space-x-3">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about your next trip..." 
              className="flex-1 px-5 py-3 bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm"
              disabled={isLoading}
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white p-3 rounded-full transition-all shadow-lg active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalAssistant;
