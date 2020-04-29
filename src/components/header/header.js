import React from "react"
import { Link } from "gatsby"
import style from "./header.module.css"

import logo_o from "../../images/common/svg_icon_logo_o.svg"
import logo_mertex from "../../images/common/svg_icon_logo_mertex.svg"

const Header = () => (
  <header className={`section ${style.header} justify_center align_center`}>
    <div className={`content_1600 between`}>
      <Link className={style.company_logo} to="/">
        <img src={logo_o} alt="Omertex logo" />
        <img src={logo_mertex} alt="Omertex logo" />
      </Link>
      <div className={`${style.header_menu} align_center`}>
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

export default Header
