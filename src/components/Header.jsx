function Header({ page, onNavigate }) {
  return (
    <header className="flex min-h-[78px] items-center justify-between bg-[#bfe9ad] px-[5.5%] py-[16px] max-[700px]:gap-4">
      <button
        className="min-w-max bg-transparent p-0 font-['Outfit'] text-[2.25rem] font-bold leading-none text-[#17231d]"
        style={{ fontSize: '1.5rem' }}
        onClick={() => onNavigate('home')}
        type="button"
      >🍃
        Wellness<span className="text-[#4a9b50]">Hub</span>
      </button>
      <nav aria-label="Navegación principal" className="flex gap-20 font-[600]">
        <button
          className={`bg-transparent px-0 py-2 text-[.88rem] font-extrabold uppercase tracking-[.04em] ${
            page === 'habits' ? 'text-[#4a9b50]' : 'text-black'
          }`}
          onClick={() => onNavigate('habits')}
          type="button"
        >
          Buenos hábitos
        </button>
        <button
          className={`bg-transparent px-0 py-2 text-[.88rem] font-extrabold uppercase tracking-[.04em] ${
            page === 'bmi' ? 'text-[#4a9b50]' : 'text-[#17231d]'
          }`}
          onClick={() => onNavigate('bmi')}
          type="button"
        >
          Calculadora IMC
        </button>
      </nav>
    </header>
  )
}

export default Header
