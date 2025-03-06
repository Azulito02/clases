import { useState } from "react";

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const calcularIMC = () => {
    if (!peso || !altura) {
      setMensaje("Por favor, ingresa peso y altura válidos.");
      return;
    }

    const alturaMetros = altura / 100; // Convertir cm a metros
    const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2);

    setImc(imcCalculado);
    definirMensaje(imcCalculado);
  };

  const definirMensaje = (imc) => {
    if (imc < 18.5) setMensaje("Bajo peso");
    else if (imc < 24.9) setMensaje("Peso normal");
    else if (imc < 29.9) setMensaje("Sobrepeso");
    else setMensaje("Obesidad");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Calculadora de IMC</h2>
      <div>
        <input
          type="number"
          placeholder="Peso en kg"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Altura en cm"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>

      {imc && (
        <div>
          <h3>Tu IMC es: {imc}</h3>
          <p>{mensaje}</p>
        </div>
      )}
    </div>
  );
}

export default App;
