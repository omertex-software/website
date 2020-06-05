import React from "react"
import classNames from "../../helpers/classNames"
import style from "./mobileMenu.module.sass"
import { Link } from "gatsby"

const MobileMenu = ({ opened, reopenMobileMenu }) => (
  <div className={classNames(style.content, opened ? style.show_mobile : "")}>
    <div className={style.mobile_top}>
      <button className={style.mobile_btn} onClick={reopenMobileMenu} />
      <Link to="/" className={style.mobile_logo} />
    </div>
    <div className={style.flow_column}>
      <Link className={style.mobile_link} to="/" onClick={reopenMobileMenu}>
        Services
      </Link>
      <Link className={style.mobile_link} to="/" onClick={reopenMobileMenu}>
        Insights
      </Link>
      <Link className={style.mobile_link} to="/" onClick={reopenMobileMenu}>
        About us
      </Link>
      <Link className={style.mobile_link} to="/" onClick={reopenMobileMenu}>
        Take a Quiz
      </Link>
    </div>
  </div>
)

export default MobileMenu
