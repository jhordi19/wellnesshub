import { useState } from 'react'
import { habits } from '../data/habits'

function Habits() {
  const [openHabit, setOpenHabit] = useState(null)

  return (
    <main className="flex-1 bg-white px-[5.5%] pb-[70px] pt-[32px] max-[700px]:px-[6%]">
      <header className="mb-[28px] text-center">
        <h1 className="font-['Outfit'] text-[2.25rem] font-bold leading-none text-[#17231d]">Buenos hábitos</h1>
      </header>
      <div className="mx-auto max-w-[1180px] space-y-[12px]">
        {habits.map((habit, index) => {
          const isOpen = openHabit === index
          return (
            <article className={`overflow-hidden border ${isOpen ? 'border-[#d8dfd8]' : 'border-[#dfe7df]'} bg-white`} key={habit.title}>
              <h2>
                <button
                  className="flex w-full items-center justify-between gap-4 px-[18px] py-[14px] text-left font-['Outfit'] text-[1.05rem] font-bold text-[#17231d]"
                  onClick={() => setOpenHabit(isOpen ? null : index)}
                  type="button"
                  aria-expanded={isOpen}
                >
                  <span>{habit.title}</span>
                  <span className="text-[1.35rem] font-normal text-[#17231d]" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
              </h2>
              {isOpen && (
                <div className="grid min-h-[150px] grid-cols-[1fr_230px] items-center gap-[28px] border-t border-[#edf2ed] px-[18px] py-[12px] max-[700px]:grid-cols-1">
                  {habit.details ? (
                    <ul className="m-0 list-disc pl-[18px] text-[.95rem] leading-[1.55] text-[#17231d]">
                      {habit.details.map((detail) => (
                        <li className="mb-1" key={detail}>{detail}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="m-0 text-[.95rem] leading-[1.55] text-[#17231d]">{habit.text}</p>
                  )}
                  {habit.img && (
                    <img className="mx-auto h-[140px] w-[230px] rounded-[10px] border border-[#dfe7df] object-cover" src={habit.img} alt="" />
                  )}
                </div>
              )}
            </article>
          )
        })}
      </div>
    </main>
  )
}

export default Habits
