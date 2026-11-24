import { habits } from '../data/habits'

function Home({ onNavigate }) {
  return (
    <main className="flex-1">
      <section
        className="relative flex min-h-[480px] items-center justify-center overflow-hidden bg-cover bg-center px-[11%] py-[65px] text-center max-[700px]:min-h-[470px] max-[700px]:px-[8%]"
        style={{ backgroundImage: "url('/fondo.jpeg')" }}
      >
        <div className="relative z-10 max-w-[760px] px-10 py-7 max-[700px]:px-5">
          <h1 className="mx-auto mb-[18px] max-w-[700px] font-['Outfit'] text-[clamp(2.2rem,4vw,3.35rem)] font-bold leading-[1.05]">
            Una buena salud empieza por una buena alimentación
          </h1>
          <p className="mx-auto mb-[25px] max-w-[560px] leading-[1.6] text-[#17231d]">
            Descubre tu Índice de Masa Corporal y recibe recomendaciones sencillas para mejorar tu salud.
          </p>
          <button
            className="rounded-[7px] bg-[#3970c4] px-[22px] py-[13px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#285ca4]"
            onClick={() => onNavigate('bmi')}
            type="button"
          >
            Calcular IMC
          </button>
        </div>
      </section>

      <section className="bg-white px-[8%] py-[66px] text-center">
        <div>
          <p className="mb-[14px] text-[.75rem] font-bold uppercase tracking-[.14em] text-[#4a9b50]">
            Pequeños pasos, grandes cambios
          </p>
          <h2 className="mb-[10px] font-['Outfit'] text-[2rem] font-bold">Los 3 mejores hábitos para tu salud</h2>
          <p className="mb-0 leading-[1.6] text-[#64736a]">Incorpora estas prácticas a tu día a día y empieza a sentir la diferencia.</p>
        </div>
        <div className="mx-auto my-[45px] grid max-w-[980px] grid-cols-3 gap-[30px] max-[700px]:grid-cols-1">
          {habits.slice(0, 3).map((habit) => (
            <article className="p-[14px]" key={habit.title}>
              <img className="mx-auto mb-[15px] h-[140px] w-[140px] rounded-full bg-[#eff8eb] object-cover" src={habit.img} alt="" />
              <h3 className="mb-2 font-['Outfit'] font-bold">{habit.title}</h3>
              <p className="m-0 text-[.9rem] leading-[1.55] text-[#64736a]">{habit.text}</p>
            </article>
          ))}
        </div>
        <button
          className="bg-transparent font-bold text-[#4a9b50]"
          onClick={() => onNavigate('habits')}
          type="button"
        >
          Ver todos los hábitos →
        </button>
      </section>
    </main>
  )
}

export default Home
