import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Team from './components/Team'
import Contact from './components/Contact'
import gambarPcb from './assets/pcb.jpg';

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="pb-5">
      <Navbar setPage={setPage} />
      {page === 'home' && <Home />}
      {page === 'team' && <Team />}
      {page === 'contact' && <Contact />}
    </div>
  )
}