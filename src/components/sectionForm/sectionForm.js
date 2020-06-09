import React from "react"
import style from "./sectionForm.module.sass"

const SectionForm = ({ title, color, children }) => (
  <section
    className={style.section}
    style={color ? { backgroundColor: color } : null}
  >
    <div className={style.content}>
      <h4>{title}</h4>
      {children}
      <div className={style.section_form}>
        <input
          className={style.section_input}
          placeholder="Your email address"
        />
        <button className={style.section_btn}>submit</button>
      </div>
    </div>
  </section>
)

export default SectionForm
