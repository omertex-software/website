import React from "react"
import { Link } from "gatsby"
import classNames from "../../helpers/classNames"
import buttons from "../../assets/styles/buttons.module.sass"
import style from "./footer.module.sass"

import clutch from "../../assets/images/footer/svg_icon_clutch.svg"
import goodfirms from "../../assets/images/footer/svg_icon_goodfirms.svg"
import guru from "../../assets/images/footer/png_icon_guru.png"
import appfutura from "../../assets/images/footer/png_icon_appfutura.png"
import mail from "../../assets/images/footer/svg_icon_mail.svg"
import phone from "../../assets/images/footer/svg_icon_phone.svg"
import twitter from "../../assets/images/footer/svg_icon_twitter.svg"
import facebook from "../../assets/images/footer/svg_icon_facebook.svg"
import linkedin from "../../assets/images/footer/svg_icon_linkedin.svg"

const Footer = () => (
  <footer
    className={classNames(style.section, style.justify_center, style.footer)}
  >
    <div className={classNames(style.content, style.footer_container)}>
        <div className={style.footer_column}>
          <p className={style.footer_column_t4}>
            Lets build something great together
          </p>
          <p className={style.footer_column_b2}>
            We strive to be a guide for entrepreneurs in the world of
            information technology and seek perfection in everything we do,
            transferring that vision to technologies.
          </p>
          <div
            className={classNames(
              style.footer_column_tech,
              style.align_center,
              style.flex
            )}
          >
            <img src={clutch} alt="Clutch" />
            <img src={goodfirms} alt="GoodFirms" />
            <img src={guru} alt="Guru" />
            <img src={appfutura} alt="AppFutura" />
          </div>
        </div>

        <div className={style.footer_column}>
          <p className={style.footer_column_t4}>Competense</p>
          <ul className={style.footer_column_links}>
            <li>
              <Link className={style.footer_column_b2} to="/">
                User experience (UX) design
              </Link>
            </li>
            <li>
              <Link className={style.footer_column_b2} to="/">
                User Interface (UI) design
              </Link>
            </li>
            <li>
              <Link className={style.footer_column_b2} to="/">
                Website development
              </Link>
            </li>
            <li>
              <Link className={style.footer_column_b2} to="/">
                Mobile application developmen
              </Link>
            </li>
            <li>
              <Link className={style.footer_column_b2} to="/">
                Branding
              </Link>
            </li>
            <li>
              <Link className={style.footer_column_b2} to="/">
                Promotion
              </Link>
            </li>
          </ul>
        </div>

        <div className={style.footer_column}>
          <p className={style.footer_column_t4}>Numbers</p>
          <div className={classNames(style.footer_column_b2, style.flex)}>
            <p className={style.footer_column_span}>70 +</p>
            <p>projects implemented</p>
          </div>
          <div className={classNames(style.footer_column_b2, style.flex)}>
            <p className={style.footer_column_span}>40</p>
            <p>pros in the team</p>
          </div>
          <div className={classNames(style.footer_column_b2, style.flex)}>
            <p className={style.footer_column_span}>97%</p>
            <p>satisfaction rate</p>
          </div>
        </div>

        <div className={style.footer_column}>
          <p className={style.footer_column_t4}>
            22701 E Avenida del Valle, Queen Creek, AZ, USA
          </p>
          <div className={classNames(style.footer_column_b2, style.flex)}>
            <div className={style.footer_column_span}>
              <img width="22" src={mail} alt="Mail icon" />
            </div>
            <a
              className={style.footer_column_b2}
              href="mailto:contact@omertex.com"
            >
              contact@omertex.com
            </a>
          </div>
          <div className={classNames(style.footer_column_b2, style.flex)}>
            <div className={style.footer_column_span}>
              <img width="20" src={phone} alt="Phone icon" />
            </div>
            <a className={style.footer_column_b2} href="tel:+3754802104771">
              (480)-210-4771
            </a>
          </div>
          <div
            className={classNames(style.footer_column_social, style.between)}
          >
            <a className={style.justify_center} href="/">
              <img src={twitter} alt="Twitter icon" />
            </a>
            <a className={style.justify_center} href="/">
              <img src={facebook} alt="Facebook icon" />
            </a>
            <a className={style.justify_center} href="/">
              <img src={linkedin} alt="LinkedIn icon" />
            </a>
          </div>
          <div>
            <button className={classNames(buttons.btn_dark, style.footer_btn)}>
              contact us
            </button>
          </div>
        </div>
    </div>
  </footer>
)

export default Footer
