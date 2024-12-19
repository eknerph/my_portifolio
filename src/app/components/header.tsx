import Image from 'next/image'
export function Header(){
  return
    <div className="header">
      <div className="header">
          <div>
            <h1>Hi, I'm Ekner Almeida</h1>
            <h2>Software Enginner</h2>
          </div>
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={24}
            priority
          />        
        </div>
    </div>
}