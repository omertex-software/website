import React from "react"
import style from "./threeColumns.module.sass"
import Img from "gatsby-image"
import classNames from "../../helpers/classNames"

const ThreeColumns = ({ data, minTitle, centeredIcon }) => (
  <div className={style.columns_box}>
    {data.map(item => (
      <div
        className={style.column}
        key={item.title || item.description.slice(0, 10)}
      >
        <Img
          fluid={item.image}
          className={classNames(
            style.column_icon,
            centeredIcon && style.column_icon_centered
          )}
          alt="icon"
        />
        <h3 className={minTitle ? style.column_title_min : style.column_title}>
          {item.title || null}
        </h3>
        <p className={style.column_description}>{item.description}</p>
      </div>
    ))}
  </div>
)

export default ThreeColumns
