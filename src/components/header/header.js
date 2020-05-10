import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import classNames from "../../helpers/classNames"
import containers from "../../assets/styles/containers.module.sass"
import style from "./header.module.sass"

const Header = () => {
  const [changed, setChanged] = useState(false)

  const listenScrollEvent = () => {
    window.scrollY > 50 ? setChanged(true) : setChanged(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
    return () => window.removeEventListener("scroll", listenScrollEvent)
  }, [])

  return (
    <header
      className={classNames(
        containers.section,
        style.header,
        containers.justify_center,
        containers.align_center,
        changed ? style.header_white : ""
      )}
    >
      <div
        className={classNames(
          containers.content_1600,
          style.header_mobile,
          containers.justify_center
        )}
      >
        <button className={style.header_mobile_menu} />
        <Link to="/" className={style.company_logo_mini} />
      </div>
      <div
        className={classNames(
          containers.content_1600,
          style.header_desktop,
          containers.between
        )}
      >
        <Link to="/" className={style.company_logo} />
        <div className={classNames(style.header_menu, containers.align_center)}>
          <Link className={style.header_menu_link} to="/">
            Services
          </Link>
          <Link className={style.header_menu_link} to="/">
            Insights
          </Link>
          <Link className={style.header_menu_link} to="/">
            About us
          </Link>
          <Link className={style.header_menu_link} to="/">
            Take a Quiz
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
