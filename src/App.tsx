import { useState } from 'react';
import { Heart, ChevronDown } from 'lucide-react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleEnvelopeClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setShowLetter(true), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 flex items-center justify-center p-4">
      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-pink-400 opacity-50 animate-float-${i % 3}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
            size={16 + Math.random() * 24}
          />
        ))}
      </div>

      <div className="relative">
        {/* Envelope */}
        <div
          className={`cursor-pointer transition-all duration-700 ${
            isOpen ? 'opacity-0 scale-90' : 'hover:scale-105'
          }`}
          onClick={handleEnvelopeClick}
        >
          <div className="w-80 h-48 relative">
            {/* Envelope Shadow */}
            <div className="absolute inset-0 bg-red-600 rounded-lg transform translate-y-1"></div>
            
            {/* Envelope Body */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-500 rounded-lg shadow-lg">
              {/* Envelope Pattern */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-full h-1 bg-white transform -rotate-45"
                    style={{ top: `${i * 20}%`, left: `${-i * 10}%` }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Envelope Flap */}
            <div
              className={`absolute w-0 h-0 
                border-l-[160px] border-r-[160px] border-t-[100px]
                border-l-transparent border-r-transparent
                border-red-400
                top-0 left-0
                transform origin-top
                transition-transform duration-700 ease-in-out
                rounded-t-lg
                ${isOpen ? '-rotate-180' : 'hover:-rotate-[5deg]'}`}
            >
              {/* Flap Pattern */}
              <div className="absolute top-[-100px] left-[-160px] w-[320px] h-[100px] overflow-hidden">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-full h-1 bg-white opacity-10"
                    style={{ top: `${i * 20}%`, transform: 'rotate(-45deg)' }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Heart Seal - Now with higher z-index */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
              <Heart className="w-12 h-12 text-white animate-pulse" fill="white" />
            </div>
          </div>

          {/* Open Indicator */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-red-600 font-medium my-1">Haz clic para abrir</p>
            <ChevronDown className="w-6 h-6 text-red-500 animate-bounce mx-auto" />
          </div>
        </div>

        {/* Letter - Now fixed in the center of the screen */}
        <div
          className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md transition-all duration-700 ${
            showLetter
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className="bg-white p-8 rounded-lg shadow-xl mx-auto">
            <div className="text-center space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <h1 className="text-3xl font-serif text-red-500 mb-4">Querida Antonella</h1>
              <p className="text-gray-700 leading-relaxed">
                Mi hermosa Antonella, cada día que pasa me enamoro más y más de ti. 
                Eres el sol que ilumina mis mañanas, la sonrisa que alegra mis días, 
                y el amor que hace latir mi corazón con más fuerza.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Tu dulzura, tu forma de ser, y esa manera especial que tienes de 
                mirarme hacen que me sienta el hombre más afortunado del mundo. 
                Cada momento a tu lado es un regalo que atesoro profundamente.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Contigo he descubierto el verdadero significado del amor. No es 
                solo un sentimiento, es una forma de vida que compartimos juntos. 
                Eres mi presente, mi futuro, y el amor de mi vida.
              </p>
              <div className="flex justify-center space-x-2 py-4">
                <Heart className="text-red-500 animate-pulse" />
                <Heart className="text-red-500 animate-pulse delay-75" />
                <Heart className="text-red-500 animate-pulse delay-150" />
              </div>
              <p className="text-gray-700 italic">Con todo mi amor,</p>
              <p className="text-xl text-red-500 font-serif">Santiago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;