import React from "react"
import { Link } from "gatsby"
import classNames from "../../helpers/classNames"
import containers from "../../assets/styles/containers.module.sass"
import style from "./header.module.sass"

import logo_o from "../../assets/images/common/svg_icon_logo_o.svg"
import logo_mertex from "../../assets/images/common/svg_icon_logo_mertex.svg"

const Header = () => (
  <header
    className={classNames(
      containers.section,
      style.header,
      containers.justify_center,
      containers.align_center
    )}
  >
    <div className={classNames(containers.content_1600, containers.between)}>
      <Link className={style.company_logo} to="/">
        <img src={logo_o} alt="Omertex logo" />
        <img src={logo_mertex} alt="Omertex logo" />
      </Link>
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

export default Header
