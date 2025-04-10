import { useState, useEffect } from 'react';

export default function CalculadoraV3() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;

      if (/[0-9+\-*\/().]/.test(key)) {
        setInput((prev) => prev + key);
      } else if (key === 'Enter' || key === '=') {
        e.preventDefault();
        calcularResultado();
      } else if (key === 'Backspace') {
        setInput((prev) => prev.slice(0, -1));
      } else if (key === 'Escape') {
        setInput('');
      } else if (key === 'ArrowUp') {
        navigateHistory(-1);
      } else if (key === 'ArrowDown') {
        navigateHistory(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [input, history, historyIndex]);

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
      const resultado = eval(expresion).toString();
      setHistory((prev) => {
        const newHistory = [`${expresion} = ${resultado}`, ...prev].slice(0, 10);
        return newHistory;
      });
      setInput(resultado);
      setHistoryIndex(-1);
    } catch (error) {
      setInput('Error');
    }
  };

  const navigateHistory = (direction) => {
    const newIndex = historyIndex + direction;
    if (newIndex >= -1 && newIndex < history.length) {
      setHistoryIndex(newIndex);
      setInput(newIndex === -1 ? '' : history[newIndex].split(' = ')[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-mono text-yellow-300 bg-gray-800 p-3 rounded-t-xl w-full max-w-xl text-center shadow-md">
        Calculadora - Versión 3
      </h1>
      <div className="w-full max-w-xl bg-gray-600 rounded-b-xl shadow-lg border-4 border-gray-800">
        <div className="p-4 bg-green-900 text-yellow-200 flex items-center">
          <div className="flex flex-col mr-3">
            <button
              onClick={() => navigateHistory(-1)}
              className="text-xl text-yellow-200 hover:text-yellow-400 mb-1"
            >
              ▲
            </button>
            <button
              onClick={() => navigateHistory(1)}
              className="text-xl text-yellow-200 hover:text-yellow-400"
            >
              ▼
            </button>
          </div>
          <div className="text-right text-2xl font-mono flex-1 bg-gray-800 p-2 rounded border-2 border-gray-700">
            {input || '0'}
          </div>
        </div>

        <div className="grid grid-cols-5 gap-2 p-4 bg-gray-600">
          <button onClick={() => handleButtonClick('7')} className="p-4 text-xl font-mono rounded bg-gray-500 hover:bg-gray-400 text-white border-2 border-gray-700">7</button>
          <button onClick={() => handleButtonClick('8')} className="p-4 text-xl font-mono rounded bg-gray-500 hover:bg-gray-400 text-white border-2 border-gray-700">8</button>
          <button onClick={() => handleButtonClick('9')} className="p-4 text-xl font-mono rounded bg-gray-500 hover:bg-gray-400 text-white border-2 border-gray-700">9</button>
          <button onClick={() => handleButtonClick('⌫')} className="p-4 text-xl font-mono rounded bg-orange-600 hover:bg-orange-500 text-white border-2 border-gray-700">⌫</button>
          <button onClick={() => handleButtonClick('+')} className="p-4 text-xl font-mono rounded bg-green-700 hover:bg-green-600 text-white border-2 border-gray-700">+</button>

          <button onClick={() => handleButtonClick('4')} className="p-4 text-xl font-mono rounded bg-gray-500 hover:bg-gray-400 text-white border-2 border-gray-700">4</button>
          <button onClick={() => handleButtonClick('5')} className="p-4 text-xl font-mono rounded bg-gray-500 hover:bg-gray-400 text-white border-2 border-gray-700">5</button>
          <button onClick={() => handleButtonClick('6')} className="p-4 text-xl font-mono rounded bg-gray-500 hover:bg-gray-400 text-white border-2 border-gray-700">6</button>
          <button onClick={() => handleButtonClick('C')} className="p-4 text-xl font-mono rounded bg-red-600 hover:bg-red-500 text-white border-2 border-gray-700">C</button>
          <button onClick={() => handleButtonClick('-')} className="p-4 text-xl font-mono rounded bg-green-700 hover:bg-green-600 text-white border-2 border-gray-700">-</button>

          <button onClick={() => handleButtonClick('1')} className="p-4 text-xl font-mono rounded bg-gray-500 hover:bg-gray-400 text-white border-2 border-gray-700">1</button>
          <button onClick={() => handleButtonClick('2')} className="p-4 text-xl font-mono rounded bg-gray-500 hover:bg-gray-400 text-white border-2 border-gray-700">2</button>
          <button onClick={() => handleButtonClick('3')} className="p-4 text-xl font-mono rounded bg-gray-500 hover:bg-gray-400 text-white border-2 border-gray-700">3</button>
          <button onClick={() => handleButtonClick('(')} className="p-4 text-xl font-mono rounded bg-green-700 hover:bg-green-600 text-white border-2 border-gray-700">(</button>
          <button onClick={() => handleButtonClick('×')} className="p-4 text-xl font-mono rounded bg-green-700 hover:bg-green-600 text-white border-2 border-gray-700">×</button>

          <button onClick={() => handleButtonClick('0')} className="p-4 text-xl font-mono rounded bg-gray-500 hover:bg-gray-400 text-white border-2 border-gray-700">0</button>
          <button onClick={() => handleButtonClick('.')} className="p-4 text-xl font-mono rounded bg-gray-500 hover:bg-gray-400 text-white border-2 border-gray-700">.</button>
          <div></div>
          <button onClick={() => handleButtonClick(')')} className="p-4 text-xl font-mono rounded bg-green-700 hover:bg-green-600 text-white border-2 border-gray-700">)</button>
          <button onClick={() => handleButtonClick('÷')} className="p-4 text-xl font-mono rounded bg-green-700 hover:bg-green-600 text-white border-2 border-gray-700">÷</button>

          <button onClick={() => handleButtonClick('=')} className="p-4 text-xl font-mono rounded col-span-5 bg-blue-600 hover:bg-blue-500 text-white border-2 border-gray-700">=</button>
        </div>
      </div>

      <div className="mt-4 text-yellow-200 text-sm font-mono">
        <p>Puedes usar el teclado físico o el virtual</p>
        <p>Presiona Enter o = para calcular, flechas para historial</p>
      </div>
    </div>
  );
}