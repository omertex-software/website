import React from "react"
import style from "./twoColumnsSlider.module.sass"
import Img from "gatsby-image"
import Slider from "react-slick"

import next from "../../assets/images/twoColumnsSlider/png_icon_next.png"
import prev from "../../assets/images/twoColumnsSlider/png_icon_prev.png"

const TwoColumnsSlider = ({ data }) => {
  const SampleNextArrow = ({ onClick }) => {
    return (
      <div
        className={style.slide_next_btn}
        style={{
          backgroundImage: `url(${next})`,
        }}
        onClick={onClick}
      />
    )
  }

  const SamplePrevArrow = ({ onClick }) => {
    return (
      <div
        className={style.slide_prev_btn}
        style={{
          backgroundImage: `url(${prev})`,
        }}
        onClick={onClick}
      />
    )
  }

  const settings = {
    slidesToShow: 2,
    arrows: true,
    dots: true,
    dotsClass: "orange_slick_dots",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  }

  return (
    <Slider className={style.cases_box} {...settings}>
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
  )
}

export default TwoColumnsSlider
