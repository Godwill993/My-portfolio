import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NAvbar from './navbar.jsx'
import HeroSec from './HERO.jsx'
import Skills from './skills.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NAvbar />
    <HeroSec />
    <Skills />
   

  </StrictMode>,
)
