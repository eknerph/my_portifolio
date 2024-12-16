import Image from "next/image";

export default function Home() {
  return (
     <main>
        <div className="header">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />        
          <div>
            <h1>Hi, I'm Ekner Almeida</h1>
            <h2>Software Enginner</h2>
          </div>

        </div>
        <div className="expirence">
          <h3>Expirence</h3>
          <p>texto</p>
          <div className="expirence-time">

          </div>
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
        </div>
      </main>      
  )
}
