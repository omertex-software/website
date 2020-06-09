import React from "react"
import style from "./pageHeader.module.sass"
import BackgroundImage from "gatsby-background-image"

const PageHeader = ({ image, title, description }) => (
  <BackgroundImage
    Tag="section"
    className={description ? style.big_section : style.section}
    fluid={image}
  >
    <div className={style.content}>
      <h1 className={style.title}>{title}</h1>
      {description && <p className={style.description}>{description}</p>}
    </div>
  </BackgroundImage>
)

export default PageHeader
