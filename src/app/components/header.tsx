import Image from 'next/image'
export function Header(){
  return
    <div className="header">
      <<div className="header">
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
    </div>
}