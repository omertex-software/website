import React from "react"
import style from "./threeColumns.module.sass"
import Img from "gatsby-image"

const ThreeColumns = ({ data }) => (
  <div className={style.columns_box}>
    {data.map(item => (
      <div className={style.column} key={item.title}>
        <Img fluid={item.image} className={style.column_icon} alt="icon" />
        <h3 className={style.column_title}>{item.title}</h3>
        <p className={style.column_description}>{item.description}</p>
      </div>
    ))}
  </div>
)

export default ThreeColumns
