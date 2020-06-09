import React from "react"
import style from "./twoColumnsIconsGray.module.sass"
import Img from "gatsby-image"

const TwoColumnsIconsGray = ({ data }) => (
  <div className={style.gray_cards}>
    {data.map(item => (
      <div className={style.gray_card} key={item.title}>
        <Img fluid={item.image} className={style.gray_card_icon} alt="icon" />
        <h3 className={style.title}>{item.title}</h3>
      </div>
    ))}
  </div>
)
export default TwoColumnsIconsGray
