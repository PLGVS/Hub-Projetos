import { useState } from 'react'

export function Calculo() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')

  const [mensagem, setMensagem] = useState('')

  function calcularIMC() {
    const alt = parseInt(altura) / 100
    const imc = parseInt(peso) / (alt * alt)

    if (imc < 18.6) {
      setMensagem("Você está abaixo do peso! Seu IMC: " + imc.toFixed(2))
    }
    else if (imc >= 18.6 && imc < 24.9) {
      setMensagem("Você está no peso ideal! Seu IMC: " + imc.toFixed(2))
    }
    else if (imc >= 24.9 && imc < 34.9) {
      setMensagem("Você está levemente acima do peso! Seu IMC: " + imc.toFixed(2))
    }
    else if (imc >= 34.9) {
      setMensagem("Cuidado, você está obeso! Seu IMC: " + imc.toFixed(2))
    }
  }

  return (
    <>
      <h1>
        Calculadora IMC
      </h1>
      <span>
        Vamos calcular seu imc
      </span>

      <input
        type="text"
        placeholder="Peso em (kg) Ex: 90"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />

      <input
        type="text"
        placeholder="Altura em (cm) Ex: 180"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
      <button onClick={calcularIMC}>Calcular</button>

      <h2>{mensagem}</h2>
    </>
  )
}