import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
export function Experience() {
  return (
    <div className="experience">
      <h3>Experience</h3>
      <p>06 Meses de experiência adiquido em treinamento para desenvolvimento pessoal e terceiros.</p>
      <div className="experience-time">
        <div>
          <Image
            src="/react.png"
            alt="React logo"
            width={50}
            height={50}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure">
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/ts.png"
            alt="TypeScript logo"
            width={50}
            height={50}
            priority
          />
        </div>
        <div>
          <Image
            src="/js.png"
            alt="JavaScript logo"
            width={50}
            height={50}
            priority
          />
        </div>
        <div>
          <Image
            src="/java.png"
            alt="Java logo"
            width={50}
            height={50}
            priority
          />
        </div>
      </div>
    </div>
  )
}
