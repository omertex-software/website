import React, { useEffect, useRef, useState } from "react"
import style from "./mainCases.module.sass"
import classNames from "../../helpers/classNames"
import Img from "gatsby-image"
import { graphql, Link, useStaticQuery } from "gatsby"
import buttons from "../../assets/styles/buttons.module.sass"

export const sharpImage = graphql`
  fragment sharpImage on File {
    childImageSharp {
      fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`

const MainCases = () => {
  const casesBoxRef = useRef()
  // const [windowWidth, setWindowWidth] = useState(0)
  // const [casesScroll, setCasesScroll] = useState(0)

  // useEffect(() => {
  //   const getWidth = () => {
  //     setWindowWidth(window.innerWidth)
  //   }
  //   window.addEventListener("resize", getWidth)
  //   getWidth()
  //   return () => window.removeEventListener("resize", getWidth)
  // }, [])
  //
  // useEffect(() => {
  //   const getScroll = () => {
  //     setCasesScroll(casesBoxRef.current.scrollLeft)
  //   }
  //   casesBoxRef.current.addEventListener("scroll", getScroll)
  //   getScroll()
  //   return () => casesBoxRef.current.removeEventListener("scroll", getScroll)
  // }, [])

  const showCase = e => {
    e.currentTarget.className === classNames(style.case, style.show_case)
      ? (e.currentTarget.className = classNames(style.case))
      : (e.currentTarget.className = classNames(style.case, style.show_case))
  }

  // const casesDots = () => {
  //   let dotsCount = 0
  //   let scroll = (casesScroll / 312) * 100
  //   let wind0 = (5 / 100) * (windowWidth - 312)
  //
  //   let wind1 = (9 / 100) * (windowWidth - 312)
  //   let wind2 = (6 / 100) * (windowWidth - 312)
  //   let wind3 = (8 / 100) * (windowWidth - 312)
  //   if (windowWidth < 600 && windowWidth > 552) {
  //     dotsCount = 2
  //     console.log(scroll < wind0)
  //   }
  //   if (windowWidth < 550) {
  //     dotsCount = 3
  //     console.log("1", scroll < wind2)
  //     console.log("2", scroll > wind2 && scroll < wind3)
  //     console.log("3", scroll > wind3)
  //   }
  //   // console.log(dotsCount)
  // }
  //
  // casesDots()

  const images = useStaticQuery(graphql`
    query {
      idea: file(relativePath: { eq: "main/png_icon_idea.png" }) {
        ...sharpImage
      }
      steps: file(relativePath: { eq: "main/png_icon_steps.png" }) {
        ...sharpImage
      }
      ways: file(relativePath: { eq: "main/png_icon_ways.png" }) {
        ...sharpImage
      }
    }
  `)

  return (
    <section
      className={classNames(style.section, style.justify_center, style.cases)}
    >
      <div className={classNames(style.content_1060, style.cases_container)}>
        <h2 className={style.cases_h2}>
          Three cases when you need a software product.
        </h2>
        <p className={style.cases_p}>Choose your one.</p>
        <div
          ref={casesBoxRef}
          className={classNames(style.section, style.cases_box)}
        >
          <div className={style.case_wrapper} />
          <div className={style.case} onClick={e => showCase(e)}>
            <div className={style.case_view}>
              <Img
                fluid={images.ways.childImageSharp.fluid}
                className={style.case_view_img}
                alt="Ways con"
              />
              <h6 className={style.case_h6}>
                You owe an ongoing <br /> business
              </h6>
            </div>
            <div
              className={classNames(style.case_description, style.flow_column)}
            >
              <h6 className={style.case_h6}>You owe an ongoing business</h6>
              <p className={style.case_p}>
                &ensp; Sooner or later the necessity to reduce fixed and
                operational costs becomes vital for every growing business.
                <br /> &ensp; Sooner or later the necessity to increase revenue
                becomes vital for every growing business.
                <br /> &ensp; In era of digitl transformation both cases are
                often solved thriug the development of software products
              </p>
              <div
                className={classNames(
                  style.case_description_btn,
                  style.justify_center
                )}
              >
                <Link className={buttons.btn_dark} to="/">
                  Read the insight
                </Link>
              </div>
            </div>
          </div>
          <div className={style.case} onClick={e => showCase(e)}>
            <div className={style.case_view}>
              <Img
                fluid={images.steps.childImageSharp.fluid}
                className={style.case_view_img}
                alt="Steps icon"
              />
              <h6 className={style.case_h6}>
                You’re looking to launch a new business
              </h6>
            </div>
            <div
              className={classNames(style.case_description, style.flow_column)}
            >
              <h6 className={style.case_h6}>
                You’re looking to launch <br /> a new business
              </h6>
              <p className={style.case_p}>
                &ensp; There are other companies/services out of there.
                <br /> &ensp; And the service they provide to their customers is
                in some way similar to what you’re going to offer to your
                customers.
                <br /> &ensp; So the main question is: How to build a good
                product to increase the chances for succes?
                <br /> &ensp; We can study their products and business models to
                find out in which way to make your product
              </p>
              <div
                className={classNames(
                  style.case_description_btn,
                  style.justify_center
                )}
              >
                <Link className={buttons.btn_dark} to="/">
                  Read the insight
                </Link>
              </div>
            </div>
          </div>
          <div className={style.case} onClick={e => showCase(e)}>
            <div className={style.case_view}>
              <Img
                fluid={images.idea.childImageSharp.fluid}
                className={style.case_view_img}
                alt="Steps icon"
              />
              <h6 className={style.case_h6}>
                You have <br /> a startup idea
              </h6>
            </div>
            <div
              className={classNames(style.case_description, style.flow_column)}
            >
              <h6 className={style.case_h6}>You have a startup idea</h6>
              <p className={style.case_p}>
                &ensp; It’s not clear does it worth to invest into it.
                <br /> &ensp; The development of a new software product is
                rather expensive but the uncertantiy it will succes is so high.
              </p>
              <div
                className={classNames(
                  style.case_description_btn,
                  style.justify_center
                )}
              >
                <Link className={buttons.btn_dark} to="/">
                  Read the insight
                </Link>
              </div>
            </div>
          </div>
          <div className={style.case_wrapper} />
        </div>
        {/*{casesDots}*/}
      </div>
    </section>
  )
}

export default MainCases
