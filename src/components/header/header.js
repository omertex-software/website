import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import classNames from "../../helpers/classNames"
import style from "./header.module.sass"
import MobileMenu from "../mobileMenu/mobileMenu"

const Header = () => {
  const [changed, setChanged] = useState(false)
  const [menuOpened, setMenuOpened] = useState(false)

  const listenScrollEvent = () => {
    window.pageYOffset > 50 ? setChanged(true) : setChanged(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
    return () => window.removeEventListener("scroll", listenScrollEvent)
  }, [])

  const reopenMobileMenu = () => {
    !menuOpened
      ? (document.body.style = "overflow: hidden")
      : (document.body.style = "overflow: auto")
    setMenuOpened(!menuOpened)
  }

  return (
    <>
      <MobileMenu opened={menuOpened} reopenMobileMenu={reopenMobileMenu} />
      <header
        className={classNames(
          style.section,
          style.header,
          style.justify_center,
          style.align_center,
          changed ? style.header_white : ""
        )}
      >
        <div
          className={classNames(
            style.content,
            style.header_mobile,
            style.justify_center
          )}
        >
          <button
            className={style.header_mobile_menu}
            onClick={reopenMobileMenu}
          />
          <Link to="/" className={style.company_logo_mini} />
        </div>
        <div
          className={classNames(
            style.content,
            style.header_desktop,
            style.between
          )}
        >
          <Link to="/" className={style.company_logo} />
          <div className={classNames(style.header_menu, style.align_center)}>
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
    </>
  )
}

export default Header
