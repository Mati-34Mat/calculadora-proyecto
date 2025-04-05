import { useState } from 'react';
import Boton from './boton';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(0);

  return (
    <div className="bg-black text-white h-screen w-screen overflow-hidden flex flex-col">
      {/* Banner superior */}
      <div className="w-full h-20 flex items-center justify-center text-4xl font-bold text-green-400 bg-gray-900 border-b-4 border-green-500 shadow-lg tracking-wide">
        Calculadora: Versión 1
      </div>

      {/* Contenido principal */}
      <div className="flex flex-row flex-grow">
        {/* Sección izquierda: Botones */}
        <div className="flex flex-col justify-center items-center w-1/4 gap-10 ml-10">
          <div className="flex flex-row gap-11">
            <Boton num1={num1} num2={num2} setResultado={setResultado} cartel="+" className="p-12 text-6xl bg-gray-900 text-white border-4 border-green-500 rounded-lg" />
            <Boton num1={num1} num2={num2} setResultado={setResultado} cartel="–" className="p-12 text-6xl bg-gray-900 text-white border-4 border-green-500 rounded-lg" />
          </div>
          <div className="flex flex-row gap-10">
            <Boton num1={num1} num2={num2} setResultado={setResultado} cartel="×" className="p-12 text-6xl bg-gray-900 text-white border-4 border-green-500 rounded-lg" />
            <Boton num1={num1} num2={num2} setResultado={setResultado} cartel="÷" className="p-12 text-6xl bg-gray-900 text-white border-4 border-green-500 rounded-lg" />
          </div>
        </div>

        {/* Sección derecha/centro: Inputs y resultado */}
        <div className="flex flex-col justify-center items-center w-3/4">
          <input
            type="text"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="bg-black text-green-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-4 mb-10 w-full max-w-md border-4 border-green-500 rounded-lg outline-none text-center"
            placeholder="Primer número"
          />
          <input
            type="text"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="bg-black text-green-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-4 mb-20 w-full max-w-md border-4 border-green-500 rounded-lg outline-none text-center"
            placeholder="Segundo número"
          />
          <div className="bg-black text-green-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl p-4 w-full max-w-md border-4 border-green-500 rounded-lg text-center overflow-hidden text-ellipsis whitespace-nowrap">
            {resultado}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
