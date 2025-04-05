import { useState, useEffect } from 'react';

export default function Calculadora() {
  const [input, setInput] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;

      if (/[0-9+\-*\/.]/.test(key)) {
        setInput((prev) => prev + key);
      } else if (key === 'Enter' || key === '=') {
        calcularResultado();
      } else if (key === 'Backspace') {
        setInput((prev) => prev.slice(0, -1));
      } else if (key === 'Escape') {
        setInput('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleButtonClick = (value) => {
    if (value === '=') {
      calcularResultado();
    } else if (value === 'C') {
      setInput('');
    } else if (value === '⌫') {
      setInput((prev) => prev.slice(0, -1));
    } else {
      setInput((prev) => prev + value);
    }
  };

  const calcularResultado = () => {
    try {
      const expresion = input.replace(/×/g, '*').replace(/÷/g, '/');
      const calculo = eval(expresion);
      setInput(calculo.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-teal-900 to-blue-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(0,255,255,0.2),_transparent_70%)]"></div>
      </div>

      <h1 className="text-4xl font-extrabold text-cyan-300 bg-gray-900 bg-opacity-80 p-4 rounded-t-xl w-full max-w-3xl text-center shadow-lg shadow-cyan-500/50 z-10">
        Calculadora - Versión 2
      </h1>
      <div className="w-full max-w-3xl bg-gray-800 bg-opacity-90 rounded-b-xl shadow-2xl shadow-blue-500/50 overflow-hidden z-10 border border-cyan-500">
        <div className="p-6 bg-black text-cyan-300 border-b border-cyan-500">
          <div className="text-right text-3xl font-mono h-10 tracking-wider glow-text">
            {input || '0'}
          </div>
        </div>

        <div className="grid grid-cols-5 gap-2 p-4 bg-gray-900 bg-opacity-80">
          <button onClick={() => handleButtonClick('7')} className="p-6 text-2xl font-medium rounded bg-gray-700 hover:bg-gray-600 text-white shadow-md hover:shadow-cyan-500/50 transition-all">7</button>
          <button onClick={() => handleButtonClick('8')} className="p-6 text-2xl font-medium rounded bg-gray-700 hover:bg-gray-600 text-white shadow-md hover:shadow-cyan-500/50 transition-all">8</button>
          <button onClick={() => handleButtonClick('9')} className="p-6 text-2xl font-medium rounded bg-gray-700 hover:bg-gray-600 text-white shadow-md hover:shadow-cyan-500/50 transition-all">9</button>
          <button onClick={() => handleButtonClick('⌫')} className="p-6 text-2xl font-medium rounded bg-yellow-600 hover:bg-yellow-700 text-white shadow-md hover:shadow-yellow-500/50 transition-all">⌫</button>
          <button onClick={() => handleButtonClick('+')} className="p-6 text-2xl font-medium rounded bg-cyan-600 hover:bg-cyan-700 text-white shadow-md hover:shadow-cyan-500/50 transition-all">+</button>

          <button onClick={() => handleButtonClick('4')} className="p-6 text-2xl font-medium rounded bg-gray-700 hover:bg-gray-600 text-white shadow-md hover:shadow-cyan-500/50 transition-all">4</button>
          <button onClick={() => handleButtonClick('5')} className="p-6 text-2xl font-medium rounded bg-gray-700 hover:bg-gray-600 text-white shadow-md hover:shadow-cyan-500/50 transition-all">5</button>
          <button onClick={() => handleButtonClick('6')} className="p-6 text-2xl font-medium rounded bg-gray-700 hover:bg-gray-600 text-white shadow-md hover:shadow-cyan-500/50 transition-all">6</button>
          <button onClick={() => handleButtonClick('C')} className="p-6 text-2xl font-medium rounded bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-red-500/50 transition-all">C</button>
          <button onClick={() => handleButtonClick('-')} className="p-6 text-2xl font-medium rounded bg-cyan-600 hover:bg-cyan-700 text-white shadow-md hover:shadow-cyan-500/50 transition-all">-</button>

          <button onClick={() => handleButtonClick('1')} className="p-6 text-2xl font-medium rounded bg-gray-700 hover:bg-gray-600 text-white shadow-md hover:shadow-cyan-500/50 transition-all">1</button>
          <button onClick={() => handleButtonClick('2')} className="p-6 text-2xl font-medium rounded bg-gray-700 hover:bg-gray-600 text-white shadow-md hover:shadow-cyan-500/50 transition-all">2</button>
          <button onClick={() => handleButtonClick('3')} className="p-6 text-2xl font-medium rounded bg-gray-700 hover:bg-gray-600 text-white shadow-md hover:shadow-cyan-500/50 transition-all">3</button>
          <div></div> {/* Espacio vacío */}
          <button onClick={() => handleButtonClick('×')} className="p-6 text-2xl font-medium rounded bg-cyan-600 hover:bg-cyan-700 text-white shadow-md hover:shadow-cyan-500/50 transition-all">×</button>

          <button onClick={() => handleButtonClick('0')} className="p-6 text-2xl font-medium rounded bg-gray-700 hover:bg-gray-600 text-white shadow-md hover:shadow-cyan-500/50 transition-all">0</button>
          <button onClick={() => handleButtonClick('.')} className="p-6 text-2xl font-medium rounded bg-gray-700 hover:bg-gray-600 text-white shadow-md hover:shadow-cyan-500/50 transition-all">.</button>
          <div></div>
          <div></div>
          <button onClick={() => handleButtonClick('÷')} className="p-6 text-2xl font-medium rounded bg-cyan-600 hover:bg-cyan-700 text-white shadow-md hover:shadow-cyan-500/50 transition-all">÷</button>

          <button onClick={() => handleButtonClick('=')} className="p-6 text-2xl font-medium rounded col-span-5 bg-teal-600 hover:bg-teal-700 text-white shadow-md hover:shadow-teal-500/50 transition-all">=</button>
        </div>
      </div>

      <div className="mt-8 text-cyan-200 text-sm z-10">
        <p>Puedes usar el teclado físico o el virtual</p>
        <p>Presiona Enter o = para calcular</p>
      </div>

      <style jsx>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.6);
        }
      `}</style>
    </div>
  );
}