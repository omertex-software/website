import React from "react"
import { Bitrix24ContactForm } from "../../helpers/bitrix24Scripts"
import style from "./fullScreenForm.module.sass"

const FullScreenForm = ({ visible, callback }) => {
  Bitrix24ContactForm(
    'window.b24form({"id":"16","lang":"en","sec":"iz4nko","type":"inline", "node": document.getElementById("fullScreenForm")})'
  )

  return (
    <section
      className={style.section}
      style={visible ? { display: "flex" } : null}
    >
      <button className={style.close_btn} onClick={callback} />
      <div className={style.form_box}>
        <h1 className={style.form_title}>Let`s chat</h1>
        <div className={style.form} id="fullScreenForm" />
      </div>
    </section>
  )
}

export default FullScreenForm
