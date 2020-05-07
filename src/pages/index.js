import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import classNames from "../helpers/classNames"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { bitrix24ContactForm } from "../helpers/bitrix24Scripts"
import { Link } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import containers from "../assets/styles/containers.module.sass"
import buttons from "../assets/styles/buttons.module.sass"
import style from "./index.module.sass"

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
  const [shownCases, setShownCases] = useState({})
  const [contactForm, setContactForm] = useState()

  useEffect(() => {
    bitrix24ContactForm(setContactForm)
  }, [])

  const showCase = name => {
    setShownCases(prevState => ({
      ...prevState,
      [name]: !prevState[name],
    }))
  }

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
      steps: file(relativePath: { eq: "main/png_icon_steps.png" }) {
        ...sharpImage
      }
      ways: file(relativePath: { eq: "main/png_icon_ways.png" }) {
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
      <Helmet title="Software Product Development Company - Omertex" charSet="utf-8" defer={false}/>
      <BackgroundImage
        Tag="section"
        className={classNames(
          containers.section,
          containers.justify_center,
          style.outcomes
        )}
        fluid={images.tangible.childImageSharp.fluid}
      >
        <div
          className={classNames(
            containers.content_1600,
            containers.flow_column
          )}
        >
          <h1 className={classNames(style.headline_1, style.outcomes_h1)}>
            Tangible outcomes that matter
          </h1>
          <p className={classNames(style.body_1, style.outcomes_b1)}>
            Omertex is a five star technology consultancy that helps businesses
            to turn ideas into reality by creating software products and
            accelerating growth.
          </p>
          <div
            className={classNames(
              containers.section,
              containers.justify_center,
              style.outcomes_arrows
            )}
          >
            <img height="26" src={arrows} alt="Arrows icon" />
          </div>
        </div>
      </BackgroundImage>
      <section
        className={classNames(
          containers.section,
          containers.justify_center,
          containers.align_center,
          style.ceo_guide
        )}
      >
        <div
          className={classNames(
            containers.content_1600,
            containers.between,
            containers.align_center
          )}
        >
          <div className={containers.align_center}>
            <img className={style.ceo_guide_pdf} src={pdf} alt="PDF icon" />
            <h2 className={classNames(style.title_2, style.ceo_guide_t2)}>
              The CEO guide to Building an Outstanding Software Product
            </h2>
          </div>
          <button className={buttons.btn_dark}>Download the insight</button>
        </div>
      </section>
      <section
        className={classNames(
          containers.section,
          containers.justify_center,
          style.steps
        )}
      >
        <div className={containers.content_1270}>
          <div className={style.steps_step}>
            <p className={style.body_3}>from</p>
            <h2 className={style.title_1}>Designing</h2>
          </div>
          <div className={style.steps_step}>
            <p className={style.body_3}>through</p>
            <h2 className={style.title_1}>Launch</h2>
          </div>
          <div className={style.steps_step}>
            <p className={style.body_3}>to futher</p>
            <h2 className={style.title_1}>Grouwth</h2>
          </div>
          <p className={classNames(style.body_3, style.steps_final_step)}>
            Together with you the every step of the way
          </p>
        </div>
      </section>
      <section
        className={classNames(
          containers.section,
          containers.justify_center,
          style.cases
        )}
      >
        <div className={containers.content_1270}>
          <h2 className={classNames(style.title_1, style.cases_t1)}>
            Three cases when you need a software product.
          </h2>
          <p className={style.subtitle_1}>Choose your one.</p>
          <div
            className={classNames(
              containers.section,
              style.cases_box,
              containers.between
            )}
          >
            <div
              className={classNames(
                style.case,
                style.case_ways,
                shownCases.ways ? style.show_case : ""
              )}
              onClick={() => showCase("ways")}
            >
              <div className={style.case_view}>
                <Img
                  fluid={images.ways.childImageSharp.fluid}
                  className={style.case_ways_icon}
                  alt="Ways con"
                />
                <h6 className={style.body_4}>You owe an ongoing business</h6>
              </div>
              <div
                className={classNames(
                  style.case_description,
                  containers.flow_column
                )}
              >
                <p className={style.body_5}>
                  Sooner or later the necessity to reduce fixed and operational
                  costs becomes vital for every growing business.
                  <br />
                  <br /> Sooner or later the necessity to increase revenue
                  becomes vital for every growing business.
                  <br />
                  <br />
                  In era of digitl transformation both cases are often solved
                  thriug the development of software products
                </p>
                <div
                  className={classNames(
                    style.case_description_btn,
                    containers.justify_center
                  )}
                >
                  <Link className={buttons.btn_dark} to="/">
                    Read the insight
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={classNames(
                style.case,
                style.case_steps,
                shownCases.steps ? style.show_case : ""
              )}
              onClick={() => showCase("steps")}
            >
              <div className={style.case_view}>
                <Img
                  fluid={images.steps.childImageSharp.fluid}
                  className={style.case_steps_icon}
                  alt="Steps icon"
                />
                <h6 className={style.body_4}>
                  You’re looking to launch a new business
                </h6>
              </div>
              <div
                className={classNames(
                  style.case_description,
                  containers.flow_column
                )}
              >
                <p className={style.body_5}>
                  There are other companies/services out of there.
                  <br />
                  And the service they provide to their customers is in some way
                  similar to what you’re going to offer to your customers.
                  <br />
                  <br />
                  So the main question is: How to build a good product to
                  increase the chances for succes?
                  <br />
                  <br />
                  We can study their products and business models to find out in
                  which way to make your product
                </p>
                <div
                  className={classNames(
                    style.case_description_btn,
                    containers.justify_center
                  )}
                >
                  <Link className={buttons.btn_dark} to="/">
                    Read the insight
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={classNames(
                style.case,
                style.case_idea,
                shownCases.idea ? style.show_case : ""
              )}
              onClick={() => showCase("idea")}
            >
              <div className={style.case_view}>
                <Img
                  fluid={images.idea.childImageSharp.fluid}
                  className={style.case_idea_icon}
                  alt="Idea icon"
                />
                <h6 className={style.body_4}>
                  You have <br /> a startup idea
                </h6>
              </div>
              <div
                className={classNames(
                  style.case_description,
                  containers.flow_column
                )}
              >
                <p className={style.body_5}>
                  It’s not clear does it worth to invest into it.
                  <br />
                  <br />
                  The development of a new software product is rather expensive
                  but the uncertantiy it will succes is so high.
                </p>
                <div
                  className={classNames(
                    style.case_description_btn,
                    containers.justify_center
                  )}
                >
                  <Link className={buttons.btn_dark} to="/gg">
                    Read the insight
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={classNames(
          containers.section,
          containers.justify_center,
          style.daryou
        )}
      >
        <div className={style.app_hover_content}>
          <Link
            className={classNames(
              style.app_hover_btn_right,
              containers.justify_center,
              containers.align_center
            )}
            to="/"
          >
            request the case study
          </Link>
        </div>
        <div className={classNames(containers.content_1600, containers.flex)}>
          <div className={style.daryou_info}>
            <h2 className={classNames(style.title_2, style.daryou_info_t2)}>
              Does it make sense to invest into a new business in a highly
              competative market?
            </h2>
            <div className={containers.between}>
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
            <div className={containers.flex}>
              <img width="85" src={daryou_icon} alt="Daryou logo" />
              <div
                className={classNames(
                  containers.flow_column,
                  style.daryou_app_header
                )}
              >
                <h2 className={style.title_2}>DarYou</h2>
                <p className={style.body_2}>Wish list mobile app</p>
              </div>
            </div>
            <div className={containers.justify_center}>
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
          containers.section,
          containers.justify_center,
          style.dragonoption
        )}
      >
        <div className={style.app_hover_content}>
          <Link
            className={classNames(
              style.app_hover_btn_left,
              containers.justify_center,
              containers.align_center
            )}
            to="/"
          >
            request the case study
          </Link>
        </div>
        <div
          className={classNames(containers.content_1600, containers.between)}
        >
          <div className={style.dragonoption_app}>
            <div className={containers.flex}>
              <img width="85" src={dragonoption_icon} alt="Dragonoption logo" />
              <div
                className={classNames(
                  containers.flow_column,
                  style.dragonoption_app_header
                )}
              >
                <h2 className={style.title_2}>Dragon Option</h2>
                <p className={style.body_2}>Blockchain gaming web app</p>
              </div>
            </div>
            <div className={containers.justify_center}>
              <Img
                fluid={images.dragonoption_app.childImageSharp.fluid}
                className={style.dragonoption_app_img}
                alt="Dragonoption app"
              />
            </div>
          </div>
          <div className={style.dragonoption_info}>
            <h2
              className={classNames(style.title_2, style.dragonoption_info_t2)}
            >
              When success is determined by mixture of well-considered user
              experience and emerging technology
            </h2>
            <div className={containers.between}>
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
          containers.section,
          containers.justify_center,
          style.loanstream
        )}
      >
        <div className={style.app_hover_content}>
          <Link
            className={classNames(
              style.app_hover_btn_right,
              containers.justify_center,
              containers.align_center
            )}
            to="/"
          >
            request the case study
          </Link>
        </div>
        <div className={classNames(containers.content_1600, containers.flex)}>
          <div className={style.loanstream_info}>
            <h2 className={classNames(style.title_2, style.loanstream_info_t2)}>
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
            <div className={containers.flex}>
              <img width="99" src={loanstream_icon} alt="Loanstream logo" />
              <div
                className={classNames(
                  containers.flow_column,
                  style.loanstream_app_header
                )}
              >
                <h2 className={style.title_2}>Loanstream</h2>
                <p className={style.body_2}>
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
      <section className={containers.section}>
        <button className={buttons.btn_full}>more...</button>
      </section>
      <section
        className={classNames(
          containers.section,
          containers.justify_center,
          style.insights
        )}
      >
        <div className={containers.content_1270}>
          <h1 className={classNames(style.title_1, style.insights_t1)}>
            Insights
          </h1>
          <div className={containers.between}>
            <div
              className={classNames(
                containers.flow_column,
                style.insights_full
              )}
            >
              <div className={classNames(style.full_insight, containers.flex)}>
                <Img
                  fluid={images.post.childImageSharp.fluid}
                  className={style.full_insight_img}
                  alt="Post"
                />
                <div className={containers.flow_column}>
                  <div>
                    <p
                      className={classNames(
                        style.title_3,
                        style.full_insight_t3
                      )}
                    >
                      Launch
                    </p>
                  </div>
                  <h3
                    className={classNames(style.title_4, style.full_insight_t4)}
                  >
                    HOW TO PROMOTE A MOBILE APP?
                  </h3>
                  <p className={style.body_2}>
                    Professional recommendations for app promotion in 2020
                  </p>
                  <p
                    className={classNames(style.body_5, style.full_insight_b5)}
                  >
                    April 14, 2020
                  </p>
                </div>
              </div>
              <div className={classNames(style.full_insight, containers.flex)}>
                <Img
                  fluid={images.post.childImageSharp.fluid}
                  className={style.full_insight_img}
                  alt="Post"
                />
                <div className={containers.flow_column}>
                  <div>
                    <p
                      className={classNames(
                        style.title_3,
                        style.full_insight_t3
                      )}
                    >
                      Design
                    </p>
                  </div>
                  <h3
                    className={classNames(style.title_4, style.full_insight_t4)}
                  >
                    HOW TO PROMOTE A MOBILE APP?
                  </h3>
                  <p className={style.body_2}>
                    Professional recommendations for app promotion in 2020
                  </p>
                  <p
                    className={classNames(style.body_5, style.full_insight_b5)}
                  >
                    April 14, 2020
                  </p>
                </div>
              </div>
              <div className={classNames(style.full_insight, containers.flex)}>
                <Img
                  fluid={images.post.childImageSharp.fluid}
                  className={style.full_insight_img}
                  alt="Post"
                />
                <div className={containers.flow_column}>
                  <div>
                    <p
                      className={classNames(
                        style.title_3,
                        style.full_insight_t3
                      )}
                    >
                      Growth
                    </p>
                  </div>
                  <h3
                    className={classNames(style.title_4, style.full_insight_t4)}
                  >
                    HOW TO PROMOTE A MOBILE APP?
                  </h3>
                  <p className={style.body_2}>
                    Professional recommendations for app promotion in 2020
                  </p>
                  <p
                    className={classNames(style.body_5, style.full_insight_b5)}
                  >
                    April 14, 2020
                  </p>
                </div>
              </div>
            </div>
            <div className={classNames(containers.flex, style.insights_min)}>
              <div className={style.insights_separator} />
              <div className={containers.flow_column}>
                <div
                  className={classNames(
                    style.min_insight,
                    containers.flow_column
                  )}
                >
                  <div>
                    <p
                      className={classNames(
                        style.title_5,
                        style.min_insight_t5
                      )}
                    >
                      Launch
                    </p>
                  </div>
                  <h3
                    className={classNames(style.title_6, style.min_insight_t6)}
                  >
                    HOW TO PROMOTE A MOBILE APP?
                  </h3>
                </div>
                <div
                  className={classNames(
                    style.min_insight,
                    containers.flow_column
                  )}
                >
                  <div>
                    <p
                      className={classNames(
                        style.title_5,
                        style.min_insight_t5
                      )}
                    >
                      Launch
                    </p>
                  </div>
                  <h3
                    className={classNames(style.title_6, style.min_insight_t6)}
                  >
                    WHAT IS MOBILE APP DEVELOPMENT?
                  </h3>
                </div>
                <div
                  className={classNames(
                    style.min_insight,
                    containers.flow_column
                  )}
                >
                  <div>
                    <p
                      className={classNames(
                        style.title_5,
                        style.min_insight_t5
                      )}
                    >
                      Launch
                    </p>
                  </div>
                  <h3
                    className={classNames(style.title_6, style.min_insight_t6)}
                  >
                    WHAT IS A MOBILE APP?
                  </h3>
                </div>
                <div
                  className={classNames(
                    style.min_insight,
                    containers.flow_column
                  )}
                >
                  <div>
                    <p
                      className={classNames(
                        style.title_5,
                        style.min_insight_t5
                      )}
                    >
                      Launch
                    </p>
                  </div>
                  <h3
                    className={classNames(style.title_6, style.min_insight_t6)}
                  >
                    WHAT IS A PROGRESSIVE WEB APP (PWA)?
                  </h3>
                </div>
                <div
                  className={classNames(
                    style.min_insight,
                    containers.flow_column
                  )}
                >
                  <div>
                    <p
                      className={classNames(
                        style.title_5,
                        style.min_insight_t5
                      )}
                    >
                      Launch
                    </p>
                  </div>
                  <h3
                    className={classNames(style.title_6, style.min_insight_t6)}
                  >
                    WHAT IS A MOBILE APP?
                  </h3>
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
          containers.section,
          containers.justify_center,
          style.questions
        )}
      >
        <div className={containers.content_1270}>
          <h1 className={classNames(style.title_1, style.questions_t1)}>
            The questions we’re most commonly asked
          </h1>
          <div className={containers.between}>
            <ul
              className={style.questions_list}
              onClick={e => showList(e.target)}
            >
              <li>
                How big is your agency?
                <p className={classNames(style.body_5, style.question_text)}>
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
              <li>Where is your office?</li>
              <li>Will you keep keep secret my idea ?</li>
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
              <img width="233" src={question} alt="Question" />
            </div>
          </div>
          <div className={containers.justify_center}>
            <h2 className={classNames(style.title_2, style.questions_t2)}>
              Have another question?{" "}
            </h2>
          </div>
          <div className={containers.justify_center}>
            <button className={buttons.btn_dark}>let`s chat</button>
          </div>
        </div>
      </section>
      <BackgroundImage
        Tag="section"
        className={classNames(
          containers.section,
          containers.justify_center,
          style.become
        )}
        fluid={images.become.childImageSharp.fluid}
      >
        <div
          className={classNames(
            style.become_content,
            containers.flow_column,
            containers.justify_center
          )}
        >
          <h2 className={classNames(style.title_2, style.become_t2)}>
            Omertex is a trusted partner for businesses in Europe, Africa and
            North America.
          </h2>
          <p className={classNames(style.body_3, style.become_b3)}>
            Learn more about how we can help you achieve your mission-critical
            priorities.
          </p>
          <div className={containers.justify_center}>
            <button className={buttons.btn_dark}>become a client</button>
          </div>
        </div>
      </BackgroundImage>
      {contactForm}
    </Layout>
  )
}
