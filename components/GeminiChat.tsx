
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    {role: 'bot', text: 'Selam! Ben ByteAkademi asistanıyım. Sana hangi kursun daha uygun olduğunu seçmende yardımcı olabilirim. Nelerden hoşlanırsın?'}
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, {role: 'user', text: userMsg}]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `
            Sen 14 yaşındaki başarılı bir yazılımcının kurduğu ByteAkademi'nin akıllı asistanısın. 
            Kullanıcılara ByteAkademi kurslarını (HTML/CSS, Roblox, Discord Bot) tavsiye etmelisin.
            Dilin çok samimi, genç, enerjik ve "sen" odaklı olmalı. Teknik terimleri basitçe açıkla.
            İstanbul El Ele projesinden gururla bahset.
            Eğer kullanıcı hangi kursu seçeceğini bilmiyorsa, ona ilgi alanlarını sor ve yönlendir.
          `,
          temperature: 0.7,
        },
      });

      const botResponse = response.text || 'Üzgünüm, şu an bağlantıda bir sorun var.';
      setMessages(prev => [...prev, {role: 'bot', text: botResponse}]);
    } catch (error) {
      setMessages(prev => [...prev, {role: 'bot', text: 'Bir hata oluştu, lütfen daha sonra tekrar dene.'}]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="w-[350px] h-[500px] bg-[#121212] border border-purple-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          <div className="p-4 bg-purple-600 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">🤖</div>
              <span className="font-bold text-white">ByteAsistan</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">✕</button>
          </div>
          
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                  ? 'bg-purple-600 text-white rounded-tr-none' 
                  : 'bg-white/10 text-gray-200 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && <div className="text-xs text-purple-400 animate-pulse">ByteAsistan düşünüyor...</div>}
          </div>

          <div className="p-4 border-t border-white/5 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Bir şeyler sor..."
              className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-purple-500 transition-colors"
            />
            <button 
              onClick={handleSend}
              className="bg-purple-600 p-2 rounded-xl text-white hover:bg-purple-500 transition-colors disabled:opacity-50"
              disabled={isLoading}
            >
              ➔
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center shadow-xl shadow-purple-600/30 hover:scale-110 transition-all active:scale-95 group"
        >
          <span className="text-2xl group-hover:rotate-12 transition-transform">💬</span>
        </button>
      )}
    </div>
  );
};

export default GeminiChat;
