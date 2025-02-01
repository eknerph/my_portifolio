import Image from 'next/image'
import { Header } from './components/header'
import { Info } from './components/information/informatin'

import "./styles/home.scss"

export default function Home() {
  return (
     <main className="container">
        <Header/>
        <Experience/>
        <Info/>
          <div className="infos">
            <h3>Languages</h3>
            <div className="languages-info">
              <span> 🇺🇸 EN - Fluent</span>
              <span> 🇧🇷 PT-BR - Native Speaker</span>
            </div>
            <h3>Education</h3>
            <div className="educational-info">
            <span>🎓</span>
            <span>Technologist in Systems Analysis and Development - Unifran Graduação EAD</span>

            </div>
          </div>
          <div className="buttons">
            <div className="social">

            </div>
            <button className="btn-primary">
              contact me
              <EmailIcon/>
            </button>
          </div>
       
      </main>      
  )
}
