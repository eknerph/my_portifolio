import { Header } from './components/header'

import "./styles/home.scss"

export default function Home() {
  return (
     <main className="container">
        <Header/>
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
            <button>contact me</button>
          </div>
       
      </main>      
  )
}
