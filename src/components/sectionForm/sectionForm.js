import React, { useEffect, useState } from "react"
import { bitrix24ContactFormSection } from "../../helpers/bitrix24Scripts"
import style from "./sectionForm.module.sass"

const SectionForm = ({ title, color, children }) => {
  const [contactForm, setContactForm] = useState()

  useEffect(() => {
    bitrix24ContactFormSection(setContactForm)
  }, [])

  return (
    <section
      className={style.section}
      style={color ? { backgroundColor: color } : null}
    >
      <div className={style.content}>
        <h4>{title}</h4>
        {children}
        <div className={style.section_form}>{contactForm}</div>
      </div>
    </section>
  )
}

export default SectionForm
