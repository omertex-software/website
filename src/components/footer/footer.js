import React from "react"
import { Link } from "gatsby"
import style from "./footer.module.css"

import clutch from "../../images/footer/svg_icon_clutch.svg"
import goodfirms from "../../images/footer/svg_icon_goodfirms.svg"
import guru from "../../images/footer/png_icon_guru.png"
import appfutura from "../../images/footer/png_icon_appfutura.png"
import mail from "../../images/footer/svg_icon_mail.svg"
import phone from "../../images/footer/svg_icon_phone.svg"
import twitter from "../../images/footer/svg_icon_twitter.svg"
import facebook from "../../images/footer/svg_icon_facebook.svg"
import linkedin from "../../images/footer/svg_icon_linkedin.svg"

const Footer = () => (
  <footer className={`section justify_center ${style.footer}`}>
    <div className="content_1600 between">
      <div className={`${style.footer_column} flow_column`}>
        <h2 className={style.footer_column_t4}>
          Lets build something great together
        </h2>
        <p className={style.footer_column_b2}>
          We strive to be a guide for entrepreneurs in the world of information
          technology and seek perfection in everything we do, transferring that
          vision to technologies.
        </p>
        <div className={`${style.footer_column_tech} align_center between`}>
          <img width="57" height="62" src={clutch} alt="Clutch" />
          <img width="72" height="58" src={goodfirms} alt="GoodFirms" />
          <img width="57" height="56" src={guru} alt="Guru" />
          <img width="72" height="58" src={appfutura} alt="AppFutura" />
        </div>
      </div>

      <div className={`${style.footer_column} flow_column`}>
        <h2 className={style.footer_column_t4}>Competense</h2>
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
        <h2 className={style.footer_column_t4}>Numbers</h2>
        <div className={`${style.footer_column_b2} flex`}>
          <p className={style.footer_column_span}>70 +</p>
          <p>projects implemented</p>
        </div>
        <div className={`${style.footer_column_b2} flex`}>
          <p className={style.footer_column_span}>40</p>
          <p>pros in the team</p>
        </div>
        <div className={`${style.footer_column_b2} flex`}>
          <p className={style.footer_column_span}>97%</p>
          <p>satisfaction rate</p>
        </div>
      </div>

      <div className={style.footer_column}>
        <h2 className={style.footer_column_t4}>
          22701 E Avenida del Valle, Queen Creek, AZ, USA
        </h2>
        <div className={`${style.footer_column_b2} flex`}>
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
        <div className={`${style.footer_column_b2} flex`}>
          <div className={style.footer_column_span}>
            <img width="20" src={phone} alt="Phone icon" />
          </div>
          <a className={style.footer_column_b2} href="tel:+3754802104771">
            (480)-210-4771
          </a>
        </div>
        <div className={`${style.footer_column_social} between`}>
          <a className="justify_center" href="/">
            <img src={twitter} alt="Twitter icon" />
          </a>
          <a className="justify_center" href="/">
            <img src={facebook} alt="Facebook icon" />
          </a>
          <a className="justify_center" href="/">
            <img src={linkedin} alt="LinkedIn icon" />
          </a>
        </div>
        <div>
          <button className="btn_dark">contact us</button>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
