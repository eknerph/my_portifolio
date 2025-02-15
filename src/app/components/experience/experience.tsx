import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
export function Experience(){
  return(
    <div className="experience">
          <h3>Experience</h3>
          <p>06 Meses de experiência adiquido em treinamento para desenvolvimento pessoal e terceiros.</p>
          <div className="experience-time">
            <div>
              <Image
                src="/react.svg"
                alt="Next.js logo"
                width={325}
                height={317}
                priority 
              />        
            </div>
          </div>
        </div>
  )
}
