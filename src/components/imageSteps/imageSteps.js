import React from "react"
import style from "./imageSteps.module.sass"
import Img from "gatsby-image"

const ImageSteps = ({ data }) => (
  <div className={style.image_steps_box}>
    {data.map(item => (
      <div className={style.image_step} key={item.title}>
        <Img fluid={item.image} className={style.image_step_icon} alt="icon" />
        <div className={style.image_step_info}>
          <h3 className={style.image_step_title}>{item.title}</h3>
          <p className={style.image_step_p}>{item.description}</p>
        </div>
      </div>
    ))}
  </div>
)

export default ImageSteps
