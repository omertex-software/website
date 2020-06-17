import React from "react"
import style from "./bottomForm.module.sass"
import BackgroundImage from "gatsby-background-image"
import classNames from "../../helpers/classNames"
import { Bitrix24ContactForm } from "../../helpers/bitrix24Scripts"
import { graphql, useStaticQuery } from "gatsby"

const BottomForm = ({ image, title, children }) => {
  Bitrix24ContactForm(
    'window.b24form({"id":"12","lang":"ru","sec":"dr375t","type":"inline", "node": document.getElementById("contactFormBottom")})'
  )

  const defaultImage = useStaticQuery(graphql`
    query {
      form_bg: file(relativePath: { eq: "common/form_bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="section"
      className={style.section}
      fluid={image || defaultImage.form_bg.childImageSharp.fluid}
    >
      <div className={style.content}>
        <h2 className={style.title}>{title}</h2>
        <div className={style.form_box}>
          <div className={classNames(style.form_column, style.form_info)}>
            {children}
          </div>
          <div className={style.form_column}>
            <div id="contactFormBottom" />
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default BottomForm
