import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Habits from './pages/Habits'
import BmiCalculator from './pages/BmiCalculator'

function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="flex min-h-screen flex-col bg-[#f7fbf5] text-[#17231d]">
      <Header onNavigate={setPage} page={page} />
      {page === 'home' && <Home onNavigate={setPage} />}
      {page === 'habits' && <Habits />}
      {page === 'bmi' && <BmiCalculator />}
      <Footer />
    </div>
  )
}

export default App
