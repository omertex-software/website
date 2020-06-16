import React, { useRef } from "react"
import style from "./twoColumnsSlider.module.sass"
import Img from "gatsby-image"
import Slider from "react-slick"

import next from "../../assets/images/twoColumnsSlider/png_icon_next.png"
import prev from "../../assets/images/twoColumnsSlider/png_icon_prev.png"

const TwoColumnsSlider = ({ data }) => {
  const ref = useRef({})

  const SampleNextArrow = () => {
    return (
      <div
        className={style.slide_next_btn}
        style={{
          backgroundImage: `url(${next})`,
        }}
        onClick={() => ref.current.slickNext()}
      />
    )
  }

  const SamplePrevArrow = () => {
    return (
      <div
        className={style.slide_prev_btn}
        style={{
          backgroundImage: `url(${prev})`,
        }}
        onClick={() => ref.current.slickPrev()}
      />
    )
  }

  const settings = {
    slidesToShow: 2,
    arrows: false,
    dots: true,
    dotsClass: "orange_slick_dots",
    responsive: [
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className={style.cases_content}>
      <SamplePrevArrow />
      <Slider ref={ref} className={style.cases_box} {...settings}>
        {data.map(item => (
          <div key={item.title}>
            <div className={style.slide}>
              <Img
                fluid={item.image}
                className={style.slide_img}
                alt={item.title}
              />
              <h3 className={style.slide_title}>{item.title}</h3>
              <p className={style.slide_description}>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      <SampleNextArrow />
    </div>
  )
}

export default TwoColumnsSlider
