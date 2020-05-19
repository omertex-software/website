import React from "react"
import Layout from "../components/layout"
import classNames from "../helpers/classNames"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
// import { bitrix24ContactForm } from "../helpers/bitrix24Scripts"
import { Link } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import buttons from "../assets/styles/buttons.module.sass"
import style from "./index.module.sass"
import MainCases from "../components/mainCases/mainCases"

import arrows from "../assets/images/main/svg_icon_two_arrows_down.svg"
import pdf from "../assets/images/main/svg_icon_pdf.svg"
import daryou_icon from "../assets/images/main/svg_icon_daryou.svg"
import dragonoption_icon from "../assets/images/main/svg_icon_dragonoption.svg"
import loanstream_icon from "../assets/images/main/png_icon_loanstream.png"
import question from "../assets/images/main/svg_icon_question.svg"

export const sharpImage = graphql`
  fragment sharpImage on File {
    childImageSharp {
      fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`

export default () => {
  // const [contactForm, setContactForm] = useState()

  // useEffect(() => {
  //   bitrix24ContactForm(setContactForm)
  // }, [])

  const showList = target => {
    if (target.tagName === "LI") {
      target.className === style.show_questions
        ? (target.className = "")
        : (target.className = style.show_questions)
    }
  }

  const images = useStaticQuery(graphql`
    query {
      become: file(relativePath: { eq: "main/become_bg.png" }) {
        ...sharpImage
      }
      tangible: file(relativePath: { eq: "main/tangible_outcomes_bg.jpg" }) {
        ...sharpImage
      }
      bitcoin: file(relativePath: { eq: "main/png_img_bitcoin.png" }) {
        ...sharpImage
      }
      loanstream_app: file(
        relativePath: { eq: "main/png_img_loanstream.png" }
      ) {
        ...sharpImage
      }
      gift: file(relativePath: { eq: "main/png_img_gift.png" }) {
        ...sharpImage
      }
      dragonoption_app: file(
        relativePath: { eq: "main/png_img_dragonoption.png" }
      ) {
        ...sharpImage
      }
      idea: file(relativePath: { eq: "main/png_icon_idea.png" }) {
        ...sharpImage
      }
      daryou_app: file(relativePath: { eq: "main/png_img_daryou.png" }) {
        ...sharpImage
      }
      post: file(relativePath: { eq: "main/png_img_insight.png" }) {
        ...sharpImage
      }
    }
  `)

  return (
    <Layout>
      <Helmet
        title="Software Product Development Company - Omertex"
        charSet="utf-8"
        defer={false}
      />
      <BackgroundImage
        Tag="section"
        className={classNames(
          style.section,
          style.justify_center,
          style.outcomes
        )}
        fluid={images.tangible.childImageSharp.fluid}
      >
        <div className={classNames(style.content_1600, style.flow_column)}>
          <div className={style.outcomes_info}>
            <h1 className={style.outcomes_h1}>Tangible outcomes that matter</h1>
            <p className={style.outcomes_p}>
              Omertex is a five star technology consultancy that helps
              businesses to turn ideas into reality by creating software
              products and accelerating growth.
            </p>
          </div>
          <div
            className={classNames(
              style.section,
              style.justify_center,
              style.outcomes_arrows
            )}
          >
            <img height="26" src={arrows} alt="Arrows icon" />
          </div>
        </div>
      </BackgroundImage>
      <section
        className={classNames(
          style.section,
          style.justify_center,
          style.align_center,
          style.ceo_guide
        )}
      >
        <div
          className={classNames(style.content_1060, style.ceo_guide_container)}
        >
          <div className={style.align_center}>
            <img src={pdf} alt="PDF icon" />
            <h2 className={style.ceo_h2}>
              The CEO guide to Building an Outstanding Software Product
            </h2>
          </div>
          <button className={buttons.btn_dark}>Download the insight</button>
        </div>
      </section>
      <section
        className={classNames(style.section, style.justify_center, style.steps)}
      >
        <div className={style.content_1060}>
          <div className={style.steps_step}>
            <p className={style.steps_p}>from</p>
            <h2 className={style.steps_h2}>Designing</h2>
          </div>
          <div className={style.steps_step}>
            <p className={style.steps_p}>through</p>
            <h2 className={style.steps_h2}>Launch</h2>
          </div>
          <div className={style.steps_step}>
            <p className={style.steps_p}>to futher</p>
            <h2 className={style.steps_h2}>Grouwth</h2>
          </div>
          <p className={classNames(style.steps_p, style.steps_final_step)}>
            Together with you the every step of the way
          </p>
        </div>
      </section>
      <MainCases />
      <section
        className={classNames(
          style.section,
          style.justify_center,
          style.daryou
        )}
      >
        <div className={style.app_hover_content}>
          <Link
            className={classNames(
              style.app_hover_btn_right,
              style.justify_center,
              style.align_center
            )}
            to="/"
          >
            request the case study
          </Link>
        </div>
        <div className={classNames(style.content_1060, style.app_container)}>
          <div className={style.daryou_info}>
            <h2 className={style.daryou_info_h2}>
              Does it make sense to invest into a new business in a highly
              competative market?
            </h2>
            <div className={style.between}>
              <ul className={style.app_list}>
                <li>Competitors research</li>
                <li>Customer research</li>
                <li>User journey research</li>
                <li>
                  Customer value proposition <br />
                  analysis
                </li>
                <li>Idea validation</li>
                <li>Proof of concept</li>
              </ul>
              <Img
                fluid={images.gift.childImageSharp.fluid}
                className={style.daryou_gift}
                alt="Gift"
              />
            </div>
          </div>
          <div className={style.daryou_app}>
            <div className={style.flex}>
              <img
                className={style.daryou_icon}
                src={daryou_icon}
                alt="Daryou logo"
              />
              <div
                className={classNames(
                  style.flow_column,
                  style.justify_center,
                  style.daryou_app_header
                )}
              >
                <h2 className={style.daryou_app_h2}>DarYou</h2>
                <p className={style.daryou_app_p}>Wish list mobile app</p>
              </div>
            </div>
            <div className={style.justify_center}>
              <Img
                fluid={images.daryou_app.childImageSharp.fluid}
                className={style.daryou_app_img}
                alt="Daryou app"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className={classNames(
          style.section,
          style.justify_center,
          style.dragonoption
        )}
      >
        <div className={style.app_hover_content}>
          <Link
            className={classNames(
              style.app_hover_btn_left,
              style.justify_center,
              style.align_center
            )}
            to="/"
          >
            request the case study
          </Link>
        </div>
        <div className={classNames(style.content_1060, style.app_container)}>
          <div className={style.dragonoption_app}>
            <div className={style.flex}>
              <img
                className={style.dragonoption_icon}
                src={dragonoption_icon}
                alt="Dragonoption logo"
              />
              <div
                className={classNames(
                  style.flow_column,
                  style.justify_center,
                  style.dragonoption_app_header
                )}
              >
                <h2 className={style.dragonoption_app_h2}>Dragon Option</h2>
                <p className={style.dragonoption_app_p}>
                  Blockchain gaming web app
                </p>
              </div>
            </div>
            <div className={style.justify_center}>
              <Img
                fluid={images.dragonoption_app.childImageSharp.fluid}
                className={style.dragonoption_app_img}
                alt="Dragonoption app"
              />
            </div>
          </div>
          <div className={style.dragonoption_info}>
            <h2 className={style.dragonoption_info_h2}>
              When success is determined by mixture of well-considered user
              experience and emerging technology
            </h2>
            <div className={style.between}>
              <ul className={style.black_app_list}>
                <li>User Experience design</li>
                <li>User interface design</li>
                <li>Product prototyping</li>
                <li>Information architecture</li>
              </ul>
              <Img
                fluid={images.bitcoin.childImageSharp.fluid}
                className={style.dragonoption_bitcoin}
                alt="Bitcoin"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className={classNames(
          style.section,
          style.justify_center,
          style.loanstream
        )}
      >
        <div className={style.app_hover_content}>
          <Link
            className={classNames(
              style.app_hover_btn_right,
              style.justify_center,
              style.align_center
            )}
            to="/"
          >
            request the case study
          </Link>
        </div>
        <div className={classNames(style.content_1060, style.app_container)}>
          <div className={style.loanstream_info}>
            <h2 className={style.loanstream_info_h2}>
              When the product is so complex and expensive that the only way to
              launch it is to split it into MVP and futher deliverables.
            </h2>
            <div className={style.loanstream_info_lists}>
              <ul className={style.app_list}>
                <li>
                  Mininum viable product <br /> (MVP) development
                </li>
                <li>Website development</li>
                <li>Mobile app development</li>
                <li>App store publishing</li>
                <li>
                  Front-end <br />
                  development
                </li>
              </ul>
              <ul className={style.app_list}>
                <li>
                  Back-end <br />
                  development
                </li>
                <li>
                  API Integration <br />
                  (payments, analytics, <br />
                  VoIP, etc.)
                </li>
                <li>Proof of concept</li>
              </ul>
            </div>
          </div>
          <div className={style.loanstream_app}>
            <div className={style.flex}>
              <img
                className={style.loanstream_icon}
                src={loanstream_icon}
                alt="Loanstream logo"
              />
              <div
                className={classNames(
                  style.flow_column,
                  style.justify_center,
                  style.loanstream_app_header
                )}
              >
                <h2 className={style.loanstream_app_h2}>Loanstream</h2>
                <p className={style.loanstream_app_p}>
                  MVP of a complex FinTech business
                </p>
              </div>
            </div>
            <Img
              fluid={images.loanstream_app.childImageSharp.fluid}
              className={style.loanstream_app_img}
              alt={"Loanstream app"}
            />
          </div>
        </div>
      </section>
      <section className={style.section}>
        <button className={buttons.btn_full}>more...</button>
      </section>
      <section
        className={classNames(
          style.section,
          style.justify_center,
          style.insights
        )}
      >
        <div className={style.content_1060}>
          <h2 className={style.insights_h2}>Insights</h2>
          <div className={classNames(style.insights_container, style.around)}>
            <div className={classNames(style.flow_column, style.insights_full)}>
              <div className={classNames(style.full_insight, style.flex)}>
                <Img
                  fluid={images.post.childImageSharp.fluid}
                  className={style.full_insight_img}
                  alt="Post"
                />
                <div>
                  <div>
                    <p className={style.full_insight_h5}>Launch</p>
                  </div>
                  <p className={style.full_insight_h3}>
                    HOW TO PROMOTE A MOBILE APP?
                  </p>
                  <p className={style.full_insight_p}>
                    Professional recommendations for app promotion in 2020
                  </p>
                </div>
              </div>
              <div className={classNames(style.full_insight, style.flex)}>
                <Img
                  fluid={images.post.childImageSharp.fluid}
                  className={style.full_insight_img}
                  alt="Post"
                />
                <div>
                  <div>
                    <p className={style.full_insight_h5}>Launch</p>
                  </div>
                  <p className={style.full_insight_h3}>
                    HOW TO PROMOTE A MOBILE APP?
                  </p>
                  <p className={style.full_insight_p}>
                    Professional recommendations for app promotion in 2020
                  </p>
                </div>
              </div>
              <div className={classNames(style.full_insight, style.flex)}>
                <Img
                  fluid={images.post.childImageSharp.fluid}
                  className={style.full_insight_img}
                  alt="Post"
                />
                <div>
                  <div>
                    <p className={style.full_insight_h5}>Launch</p>
                  </div>
                  <p className={style.full_insight_h3}>
                    HOW TO PROMOTE A MOBILE APP?
                  </p>
                  <p className={style.full_insight_p}>
                    Professional recommendations for app promotion in 2020
                  </p>
                </div>
              </div>
            </div>
            <div className={style.insights_separator} />
            <div className={classNames(style.flex, style.insights_min)}>
              <div className={style.flow_column}>
                <div
                  className={classNames(style.min_insight, style.flow_column)}
                >
                  <div>
                    <p className={style.min_insight_h6}>Launch</p>
                  </div>
                  <p className={style.min_insight_h4}>
                    HOW TO PROMOTE A MOBILE APP?
                  </p>
                </div>
                <div
                  className={classNames(style.min_insight, style.flow_column)}
                >
                  <div>
                    <p className={style.min_insight_h6}>Launch</p>
                  </div>
                  <p className={style.min_insight_h4}>
                    WHAT IS MOBILE APP DEVELOPMENT?
                  </p>
                </div>
                <div
                  className={classNames(style.min_insight, style.flow_column)}
                >
                  <div>
                    <p className={style.min_insight_h6}>Launch</p>
                  </div>
                  <p className={style.min_insight_h4}>WHAT IS A MOBILE APP?</p>
                </div>
                <div
                  className={classNames(style.min_insight, style.flow_column)}
                >
                  <div>
                    <p className={style.min_insight_h6}>Launch</p>
                  </div>
                  <p className={style.min_insight_h4}>
                    WHAT IS A PROGRESSIVE WEB APP (PWA)?
                  </p>
                </div>
                <div
                  className={classNames(style.min_insight, style.flow_column)}
                >
                  <div>
                    <p className={style.min_insight_h6}>Launch</p>
                  </div>
                  <p className={style.min_insight_h4}>WHAT IS A MOBILE APP?</p>
                </div>
                <div className={style.min_insight_btn}>
                  <button className={buttons.btn_white}>View more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={classNames(
          style.section,
          style.justify_center,
          style.questions
        )}
      >
        <div className={style.content_1060}>
          <h2 className={style.questions_h2}>
            The questions we’re most commonly asked
          </h2>
          <div className={style.between}>
            <ul
              className={style.questions_list}
              onClick={e => showList(e.target)}
            >
              <li>
                How big is your agency?
                <p className={style.question_text}>
                  Tempor est est consequat ipsum velit commodo elit est nulla
                  amet dolore velit. Est ullamco eiusmod deserunt deserunt ad
                  consectetur tempor nulla id amet labore occaecat deserunt
                  voluptate. Enim aute proident nostrud amet culpa irure esse
                  aliqua pariatur consectetur. Id fugiat tempor minim qui in
                  fugiat dolor do labore cillum dolor. Consequat ipsum irure sit
                  magna sunt commodo aliqua velit consequat dolor in enim nulla.
                  Et cupidatat veniam ullamco irure amet aliquip fugiat pariatur
                  eu minim exercitation. Aliquip ullamco duis aute pariatur sunt
                  non qui ex. Quis ipsum exercitation eiusmod deserunt. Nisi
                  amet enim ullamco ipsum reprehenderit cupidatat officia
                  excepteur enim. Exercitation nostrud Lorem consequat mollit
                  tempor ullamco irure fugiat ad ipsum laboris ut. Tempor ad
                  duis amet exercitation qui dolor ullamco elit ex sunt aliquip
                  non enim sunt. Duis consectetur laboris Lorem qui fugiat
                  cupidatat. Dolor culpa qui excepteur commodo proident. Laborum
                  veniam incididunt consectetur duis eiusmod. In et eu ullamco
                  in culpa dolor. Id nostrud dolore enim nulla pariatur veniam
                  ut commodo proident non non ut. Irure dolor deserunt dolore
                  laboris ad excepteur eu. Ad voluptate ad sunt in Lorem Lorem
                  ut commodo.
                </p>
              </li>
              <li>
                Where is your office?
                <p className={style.question_text}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </li>
              <li>
                Will you keep keep secret my idea ?
                <p className={style.question_text}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
              </li>
              <li>How much does it cost?</li>
              <li>Why sould I chose you?</li>
              <li>What will be then? After you accomplish my project?</li>
              <li>Can you take over an exesting project?</li>
              <li>Can you build an MVP only?</li>
              <li>Do you work for equity or %?</li>
              <li>When can we meet up?</li>
              <li>What do I need to provide so that we start working?</li>
            </ul>
            <div>
              <img
                className={style.question_img}
                src={question}
                alt="Question"
              />
            </div>
          </div>
          <div className={style.justify_center}>
            <h3 className={style.questions_h3}>Have another question? </h3>
          </div>
          <div className={style.justify_center}>
            <button className={buttons.btn_dark}>let`s chat</button>
          </div>
        </div>
      </section>
      <BackgroundImage
        Tag="section"
        className={classNames(
          style.section,
          style.justify_center,
          style.become
        )}
        fluid={images.become.childImageSharp.fluid}
      >
        <div
          className={classNames(
            style.become_content,
            style.flow_column,
            style.justify_center
          )}
        >
          <h2 className={style.become_h2}>
            Omertex is a trusted partner for businesses in Europe, Africa and
            North America.
          </h2>
          <p className={style.become_b3}>
            Learn more about how we can help you achieve your mission-critical
            priorities.
          </p>
          <div className={style.justify_center}>
            <button className={buttons.btn_dark}>become a client</button>
          </div>
        </div>
      </BackgroundImage>
      {/*{contactForm}*/}
    </Layout>
  )
}
