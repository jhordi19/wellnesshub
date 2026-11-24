import { useState } from 'react'

function BmiCalculator() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [age, setAge] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  function calculateBmi(event) {
    event.preventDefault()
    const weightNumber = Number(weight)
    const heightNumber = Number(height)
    if (!weightNumber || !heightNumber || weightNumber <= 0 || heightNumber <= 0) {
      setError('Introduce un peso y una altura válidos para calcular tu IMC.')
      setResult(null)
      return
    }
    const bmi = weightNumber / (heightNumber * heightNumber)
    const category = bmi < 18.5 ? 'Bajo peso' : bmi < 25 ? 'Peso saludable' : bmi < 30 ? 'Sobrepeso' : 'Obesidad'
    const advice = bmi < 18.5
      ? {
          title: 'Bajo peso',
          img: '/bajo.jpg',
          diet: [
            'Calórica y nutritiva: incluye frutas secas, semillas, aguacates, aceites saludables y batidos de proteínas.',
            'Consume suficiente proteína para ayudar a la construcción de masa muscular.',
            'Come con más frecuencia e incorpora snacks saludables entre las comidas.',
          ],
          exercise: [
            'Realiza levantamiento de pesas y ejercicios de resistencia para ganar masa muscular.',
            'Mantén una rutina cardiovascular moderada sin quemar demasiadas calorías.',
          ],
        }
      : bmi < 25
        ? {
            title: 'Peso saludable',
            img: '/normal.jpg',
            diet: [
              'Balanceada: incluye frutas, verduras, granos enteros, proteínas magras y grasas saludables.',
              'Controla las porciones para evitar el aumento de peso.',
              'Bebe suficiente agua durante el día.',
            ],
            exercise: [
              'Realiza al menos 150 minutos de actividad moderada o 75 minutos de actividad vigorosa cada semana.',
              'Incluye ejercicios de resistencia al menos dos veces por semana.',
            ],
          }
        : bmi < 30
          ? {
              title: 'Sobrepeso',
              img: '/sobrepeso.jpg',
              diet: [
                'Prioriza frutas, verduras, cereales integrales y proteínas magras.',
                'Controla las porciones y limita los alimentos procesados.',
                'Reduce azúcares añadidos y grasas saturadas.',
              ],
              exercise: [
                'Realiza al menos 150 minutos de actividad cardiovascular moderada cada semana.',
                'Aumenta poco a poco el tiempo y la intensidad.',
              ],
            }
          : {
              title: 'Obesidad',
              img: '/obesidad.jpg',
              diet: [
                'Sigue un plan de alimentación estructurado y supervisado por un nutricionista.',
                'Mantén un déficit calórico saludable y suficiente aporte de nutrientes.',
                'Consume alimentos integrales y evita procesados, azúcares añadidos y grasas trans.',
              ],
              exercise: [
                'Incrementa hasta 300 minutos de ejercicio moderado o 150 minutos de ejercicio vigoroso por semana.',
                'Incluye ejercicios de resistencia para mejorar la masa muscular y el metabolismo.',
                'Aumenta tu actividad física diaria.',
              ],
            }
    setError('')
    setResult({ value: bmi.toFixed(1), category, advice })
  }

  return (
    <main className="flex min-h-[570px] flex-1 flex-col bg-white px-[10%] pb-[85px] pt-[55px] max-[700px]:px-[6%]">
      <div className="grid grid-cols-2 gap-[10%] max-[700px]:grid-cols-1 max-[700px]:gap-0">
        <section className="relative pt-10">
        <p className="mb-[14px] text-[.75rem] font-bold uppercase tracking-[.14em] text-[#4a9b50]">Conoce tu punto de partida</p>
        <h1 className="mb-[22px] max-w-[460px] font-['Outfit'] text-[clamp(2.4rem,4vw,3.8rem)] font-bold leading-none">Calculadora de IMC</h1>
        <p className="max-w-[470px] leading-[1.65] text-[#64736a]">Ingresa tus datos para obtener una referencia y empezar a cuidar mejor tu estilo de vida.</p>
        </section>
        <form className="mt-6 flex flex-col self-start rounded-[14px] border border-[#dfebe0] bg-[#f7fbf5] p-[30px] shadow-[0_16px_40px_#47784b12]" onSubmit={calculateBmi}>
        <label className="mb-2 text-[.86rem] font-bold" htmlFor="weight">Peso <span className="font-normal text-[#64736a]">(kg)</span></label>
        <input className="mb-5 rounded-[6px] border border-[#c8d7ca] bg-white p-3 focus:border-[#4a9b50] focus:outline-2 focus:outline-[#bfe9ad]" id="weight" min="1" onChange={(event) => setWeight(event.target.value)} placeholder="Ej. 68" type="number" value={weight} />
        <label className="mb-2 text-[.86rem] font-bold" htmlFor="height">Altura <span className="font-normal text-[#64736a]">(m)</span></label>
        <input className="mb-5 rounded-[6px] border border-[#c8d7ca] bg-white p-3 focus:border-[#4a9b50] focus:outline-2 focus:outline-[#bfe9ad]" id="height" min="0.5" step="0.01" onChange={(event) => setHeight(event.target.value)} placeholder="Ej. 1.70" type="number" value={height} />
        <label className="mb-2 text-[.86rem] font-bold" htmlFor="age">Edad <span className="font-normal text-[#64736a]">(opcional)</span></label>
        <input className="mb-5 rounded-[6px] border border-[#c8d7ca] bg-white p-3 focus:border-[#4a9b50] focus:outline-2 focus:outline-[#bfe9ad]" id="age" min="1" onChange={(event) => setAge(event.target.value)} placeholder="Ej. 30" type="number" value={age} />
        <button className="mt-[5px] rounded-[7px] bg-[#4a9b50] px-[22px] py-[13px] font-bold text-white transition hover:bg-[#397f40]" type="submit">Calcular mi IMC</button>
        {error && <p className="mt-[14px] text-[.86rem] text-[#b44747]" role="alert">{error}</p>}
        {result && (
          <div className="mt-5 flex items-center justify-between rounded-[9px] border-2 border-[#4a9b50] bg-[#e2f5da] px-5 py-3" aria-live="polite">
            <span className="font-['Outfit'] text-[1.05rem] font-bold text-[#17231d]">Tu IMC</span>
            <strong className="font-['Outfit'] text-[2.4rem] leading-none text-[#397f40]">{result.value}</strong>
          </div>
        )}
        </form>
      </div>
      {result && (
        <section className="mt-10 flex items-start gap-5 rounded-[9px] border border-[#d5ddd6] bg-white p-[10px] shadow-[0_8px_24px_#47784b0d]" aria-live="polite">
          {result.advice.img && (
            <img className="h-[190px] w-[130px] shrink-0 rounded- border-4 border-white object-cover shadow-[0_4px_12px_#47784b22] max-[700px]:h-[90px] max-[700px]:w-[90px]" src={result.advice.img} alt="" />
          )}
          <div className="py-1 text-[.95rem] leading-[1.5] text-[#17231d]">
            <h2 className="mb-1 font-['Outfit'] text-[1.15rem] font-bold">{result.advice.title}</h2>
            <div className="mb-2">
              <b>Dieta:</b>
              <ul className="ml-5 list-disc">
                {result.advice.diet.map((recommendation) => (
                  <li key={recommendation}>{recommendation}</li>
                ))}
              </ul>
            </div>
            <div>
              <b>Ejercicios:</b>
              <ul className="ml-5 list-disc">
                {result.advice.exercise.map((recommendation) => (
                  <li key={recommendation}>{recommendation}</li>
                ))}
              </ul>
            </div>
            <p className="mt-2 text-[.78rem] text-[#64736a]">Es una referencia general y no sustituye una valoración médica.</p>
          </div>
        </section>
      )}
    </main>
  )
}

export default BmiCalculator
