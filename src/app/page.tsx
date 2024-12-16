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
        </div>
      </main>      
  )
}
