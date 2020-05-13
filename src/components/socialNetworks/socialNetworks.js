import React, { useState } from "react"
import style from "./socialNetworks.module.sass"
import classNames from "../../helpers/classNames"

const SocialNetworks = () => {
  const [opened, setOpened] = useState(false)

  const changeOpened = () => {
    setOpened(!opened)
  }

  return (
    <div
      className={classNames(
        style.social_container,
        opened ? style.show_items : ""
      )}
    >
      <button className={style.social_close} onClick={changeOpened} />
      <a
        className={style.social_whatsapp}
        target="_blank"
        href="https://wa.me/375296524258"
      />
      <a
        className={style.social_telegram}
        target="_blank"
        href="https://t.me/promaker1"
      />
      <a
        className={style.social_facebook}
        target="_blank"
        href="http://m.me/dkhanevich"
      />
      <button className={style.social_message} onClick={changeOpened} />
    </div>
  )
}

export default SocialNetworks
