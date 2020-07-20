import React from "react"
import { Bitrix24ContactForm } from "../../helpers/bitrix24Scripts"
import style from "./sectionForm.module.sass"

const SectionForm = ({ title, color, children }) => {
  Bitrix24ContactForm(
    'window.b24form({"id":"14","lang":"en","sec":"p2tvvt","type":"inline", "node": document.getElementById("contactFormSection")})'
  )

  return (
    <section
      className={style.section}
      style={color ? { backgroundColor: color } : null}
    >
      <div className={style.content}>
        <h4>{title}</h4>
        {children}
        <div className={style.section_form}>
          <div id="contactFormSection" />
        </div>
      </div>
    </section>
  )
}

export default SectionForm
