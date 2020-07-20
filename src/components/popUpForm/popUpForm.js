import React from "react"
import { Bitrix24ContactForm } from "../../helpers/bitrix24Scripts"
import style from "./popUpForm.module.sass"

const PopUpForm = ({ visible, callback }) => {
  Bitrix24ContactForm(
    'window.b24form({"id":"10","lang":"en","sec":"qf6dob","type":"inline", "node": document.getElementById("popUpForm")})'
  )

  return (
    <section
      className={style.section}
      style={visible ? { display: "flex" } : null}
    >
      <div className={style.form_box}>
        <div className={style.close_box}>
          <button className={style.close_btn} onClick={callback} />
        </div>
        <h1 className={style.form_title}>Become a client</h1>
        <div className={style.form} id="popUpForm" />
      </div>
    </section>
  )
}

export default PopUpForm
