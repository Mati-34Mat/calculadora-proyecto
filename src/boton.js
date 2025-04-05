const Boton = (props) => {
  function handleOperation() {
    const n1 = parseFloat(props.num1) || 0;
    const n2 = parseFloat(props.num2) || 0;

    switch (props.cartel) {
      case '+':
        props.setResultado(n1 + n2);
        break;
      case '–':
        props.setResultado(n1 - n2);
        break;
      case '×':
        props.setResultado(n1 * n2);
        break;
      case '÷':
        props.setResultado(n2 !== 0 ? n1 / n2 : 'Error');
        break;
      default:
        break;
    }
  }

  const coloresPorOperador = {
    '+': 'bg-blue-600',
    '–': 'bg-lime-800',
    '×': 'bg-yellow-600',
    '÷': 'bg-rose-500',
  };

  const colorFondo = coloresPorOperador[props.cartel] || 'border-gray-500';

  return (
    <button
      className={`p-10 text-6xl text-white border-4 border-green-500 rounded-lg ${colorFondo}`}
      onClick={handleOperation}
    >
      {props.cartel}
    </button>
  );
};

export default Boton;
