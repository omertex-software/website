import React from "react"
import Layout from "../components/layout"
import style from "./index.module.css"

import arrows from "../images/main/svg_icon_two_arrows_down.svg"
import pdf from "../images/main/svg_icon_pdf.svg"
import ways from "../images/main/svg_icon_ways.svg"
import steps from "../images/main/svg_icon_steps.svg"
import idea from "../images/main/svg_icon_idea.svg"
import gift from "../images/main/png_img_gift.png"
import daryou_icon from "../images/main/svg_icon_daryou.svg"
import daryou_app from "../images/main/png_img_daryou.png"
import dragonoption_icon from "../images/main/svg_icon_dragonoption.svg"
import dragonoption_app from "../images/main/png_img_dragonoption.png"
import bitcoin from "../images/main/png_img_bitcoin.png"
import loanstream_icon from "../images/main/png_icon_loanstream.png"
import loanstream_app from "../images/main/png_img_loanstream.png"
import post from "../images/main/png_img_insight.png"
import question from "../images/main/svg_icon_question.svg"

export default () => (
  <Layout>
    <section className={`section justify_center ${style.outcomes}`}>
      <div className="content_1600 flow_column">
        <h1 className={`${style.headline_1} ${style.outcomes_h1}`}>
          Tangible outcomes that matter
        </h1>
        <p className={`${style.body_1} ${style.outcomes_b1}`}>
          Omertex is a five star technology consultancy that helps businesses to
          turn ideas into reality by creating software products and accelerating
          growth.
        </p>
        <div className={`section justify_center ${style.outcomes_arrows}`}>
          <img height="26" src={arrows} alt="Arrows icon" />
        </div>
      </div>
    </section>
    <section
      className={`section justify_center align_center ${style.ceo_guide}`}
    >
      <div className="content_1600 between align_center">
        <div className="align_center">
          <img className={style.ceo_guide_pdf} src={pdf} alt="PDF icon" />
          <h2 className={`${style.title_2} ${style.ceo_guide_t2}`}>
            The CEO guide to Building an Outstanding Software Product
          </h2>
        </div>
        <button className="btn_dark">Download the insight</button>
      </div>
    </section>
    <section className={`section justify_center ${style.steps}`}>
      <div className="content_1270">
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
        <p className={`${style.body_3} ${style.steps_final_step}`}>
          Together with you the every step of the way
        </p>
      </div>
    </section>
    <section className={`section justify_center ${style.cases}`}>
      <div className="content_1270">
        <h2 className={`${style.title_1} ${style.cases_t1}`}>
          Three cases when you need a software product.
        </h2>
        <p className={style.subtitle_1}>Choose your one.</p>
        <div className={`section ${style.cases_box} between`}>
          <div className={`${style.case} ${style.case_ways}`}>
            <div className={style.case_view}>
              <img width="226" src={ways} alt="Ways con" />
              <h6 className={style.body_4}>You owe an ongoing business</h6>
            </div>
            <div className={`${style.case_description} flow_column`}>
              <p className={style.body_2}>
                Sooner or later the necessity to reduce fixed and operational
                costs becomes vital for every growing business.
                <br />
                <br /> Sooner or later the necessity to increase revenue becomes
                vital for every growing business.
                <br />
                <br />
                In era of digitl transformation both cases are often solved
                thriug the development of software products
              </p>
              <div className={`${style.case_description_btn} justify_center`}>
                <button className="btn_dark">Read the insight</button>
              </div>
            </div>
          </div>
          <div className={`${style.case} ${style.case_steps}`}>
            <div className={style.case_view}>
              <img width="180" src={steps} alt="Steps icon" />
              <h6 className={style.body_4}>
                You’re looking to launch a new business
              </h6>
            </div>
            <div className={`${style.case_description} flow_column`}>
              <p className={style.body_2}>
                There are other companies/services out of there.
                <br />
                And the service they provide to their customers is in some way
                similar to what you’re going to offer to your customers.
                <br />
                <br />
                So the main question is: How to build a good product to increase
                the chances for succes?
                <br />
                <br />
                We can study their products and business models to find out in
                which way to make your product
              </p>
              <div className="case_description_btn justify_center">
                <button className="btn_dark">Read the insight</button>
              </div>
            </div>
          </div>
          <div className={`${style.case} ${style.case_idea}`}>
            <div className={style.case_view}>
              <img width="236" src={idea} alt="Idea icon" />
              <h6 className={style.body_4}>
                You have <br /> a startup idea
              </h6>
            </div>
            <div className={`${style.case_description} flow_column`}>
              <p className={style.body_2}>
                It’s not clear does it worth to invest into it.
                <br />
                <br />
                The development of a new software product is rather expensive
                but the uncertantiy it will succes is so high.
              </p>
              <div className={`${style.case_description_btn} justify_center`}>
                <button className="btn_dark">Read the insight</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className={`section justify_center ${style.daryou}`}>
      <div className="content_1600 flex">
        <div className={style.daryou_info}>
          <h2 className={`${style.title_2} ${style.daryou_info_t2}`}>
            Does it make sense to invest into a new business in a highly
            competative market?
          </h2>
          <div className="between">
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
            <img className={style.daryou_gift} src={gift} alt="Gift" />
          </div>
        </div>
        <div className={style.daryou_app}>
          <div className="flex">
            <img width="85" src={daryou_icon} alt="Daryou logo" />
            <div className={`flow_column ${style.daryou_app_header}`}>
              <h2 className={style.title_2}>DarYou</h2>
              <p className={style.body_}>Wish list mobile app</p>
            </div>
          </div>
          <div className="justify_center">
            <img
              className={style.daryou_app_img}
              src={daryou_app}
              alt="Daryou app"
            />
          </div>
        </div>
      </div>
    </section>
    <section className={`section justify_center ${style.dragonoption}`}>
      <div className="content_1600 between">
        <div className={style.dragonoption_app}>
          <div className="flex">
            <img width="85" src={dragonoption_icon} alt="Dragonoption logo" />
            <div className={`flow_column ${style.dragonoption_app_header}`}>
              <h2 className={style.title_2}>Dragon Option</h2>
              <p className={style.body_2}>Blockchain gaming web app</p>
            </div>
          </div>
          <div className="justify_center">
            <img
              className={style.dragonoption_app_img}
              src={dragonoption_app}
              alt="Dragonoption app"
            />
          </div>
        </div>
        <div className={style.dragonoption_info}>
          <h2 className={`title_2 ${style.dragonoption_info_t2}`}>
            When success is determined by mixture of well_considered user
            experience and emerging technology
          </h2>
          <div className="between">
            <ul className={style.black_app_list}>
              <li>User Experience design</li>
              <li>User interface design</li>
              <li>Product prototyping</li>
              <li>Information architecture</li>
            </ul>
            <img
              className={style.dragonoption_bitcoin}
              src={bitcoin}
              alt="Bitcoin"
            />
          </div>
        </div>
      </div>
    </section>
    <section className={`section justify_center ${style.loanstream}`}>
      <div className="content_1600 flex">
        <div className={style.loanstream_info}>
          <h2 className={`${style.title_2} ${style.loanstream_info_t2}`}>
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
          <div className="flex">
            <img width="99" src={loanstream_icon} alt="Loanstream logo" />
            <div className={`flow_column ${style.loanstream_app_header}`}>
              <h2 className={style.title_2}>Loanstream</h2>
              <p className={style.body_2}>MVP of a complex FinTech business</p>
            </div>
          </div>
          <img
            className={style.loanstream_app_img}
            src={loanstream_app}
            alt={"Loanstream app"}
          />
        </div>
      </div>
    </section>
    <section className="section">
      <button className="btn_full">more...</button>
    </section>
    <section className={`section justify_center ${style.insights}`}>
      <div className="content_1270">
        <h1 className={`${style.title_1} ${style.insights_t1}`}>Insights</h1>
        <div className="between">
          <div className={`flow_column ${style.insights_full}`}>
            <div className={`${style.full_insight} flex`}>
              <img className={style.full_insight_img} src={post} alt="Post" />
              <div className="flow_column">
                <div>
                  <p className={`${style.title_3} ${style.full_insight_t3}`}>
                    Launch
                  </p>
                </div>
                <h3 className={`${style.title_4} ${style.full_insight_t4}`}>
                  HOW TO PROMOTE A MOBILE APP?
                </h3>
                <p className={`${style.body_2} ${style.full_insight_b2}`}>
                  Professional recommendations for app promotion in 2020
                </p>
                <p className={`${style.body_5} ${style.full_insight_b5}`}>
                  April 14, 2020
                </p>
              </div>
            </div>
            <div className={`${style.full_insight} flex`}>
              <img className={style.full_insight_img} src={post} alt="Post" />
              <div className="flow_column">
                <div>
                  <p className={`${style.title_3} ${style.full_insight_t3}`}>
                    Design
                  </p>
                </div>
                <h3 className={`${style.title_4} ${style.full_insight_t4}`}>
                  HOW TO PROMOTE A MOBILE APP?
                </h3>
                <p className={`${style.body_2} ${style.full_insight_b2}`}>
                  Professional recommendations for app promotion in 2020
                </p>
                <p className={`${style.body_5} ${style.full_insight_b5}`}>
                  April 14, 2020
                </p>
              </div>
            </div>
            <div className={`${style.full_insight} flex`}>
              <img className={style.full_insight_img} src={post} alt="Post" />
              <div className="flow_column">
                <div>
                  <p className={`${style.title_3} ${style.full_insight_t3}`}>
                    Growth
                  </p>
                </div>
                <h3 className={`${style.title_4} ${style.full_insight_t4}`}>
                  HOW TO PROMOTE A MOBILE APP?
                </h3>
                <p className={`${style.body_2} ${style.full_insight_b2}`}>
                  Professional recommendations for app promotion in 2020
                </p>
                <p className={`${style.body_5} ${style.full_insight_b5}`}>
                  April 14, 2020
                </p>
              </div>
            </div>
          </div>
          <div className={`flex ${style.insights_min}`}>
            <div className={style.insights_separator} />
            <div className="flow_column">
              <div className={`${style.min_insight} flow_column`}>
                <div>
                  <p className={`${style.title_5} ${style.min_insight_t5}`}>
                    Launch
                  </p>
                </div>
                <h3 className={`${style.title_6} ${style.min_insight_t6}`}>
                  HOW TO PROMOTE A MOBILE APP?
                </h3>
              </div>
              <div className={`${style.min_insight} flow_column`}>
                <div>
                  <p className={`${style.title_5} ${style.min_insight_t5}`}>
                    Launch
                  </p>
                </div>
                <h3 className={`${style.title_6} ${style.min_insight_t6}`}>
                  WHAT IS MOBILE APP DEVELOPMENT?
                </h3>
              </div>
              <div className={`${style.min_insight} flow_column`}>
                <div>
                  <p className={`${style.title_5} ${style.min_insight_t5}`}>
                    Launch
                  </p>
                </div>
                <h3 className={`${style.title_6} ${style.min_insight_t6}`}>
                  WHAT IS A MOBILE APP?
                </h3>
              </div>
              <div className={`${style.min_insight} flow_column`}>
                <div>
                  <p className={`${style.title_5} ${style.min_insight_t5}`}>
                    Launch
                  </p>
                </div>
                <h3 className={`${style.title_6} ${style.min_insight_t6}`}>
                  WHAT IS A PROGRESSIVE WEB APP (PWA)?
                </h3>
              </div>
              <div className={`${style.min_insight} flow_column`}>
                <div>
                  <p className={`${style.title_5} ${style.min_insight_t5}`}>
                    Launch
                  </p>
                </div>
                <h3 className={`${style.title_6} ${style.min_insight_t6}`}>
                  WHAT IS A MOBILE APP?
                </h3>
              </div>
              <div className={style.min_insight_btn}>
                <button className="btn_white">View more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className={`section justify_center ${style.questions}`}>
      <div className="content_1270">
        <h1 className={`${style.title_1} ${style.questions_t1}`}>
          The questions we’re most commonly asked
        </h1>
        <div className="between">
          <ul className={style.questions_list}>
            <li>How big is your agency?</li>
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
          <img width="233" src={question} alt="Question" />
        </div>
        <div className="justify_center">
          <h2 className={`${style.title_2} ${style.questions_t2}`}>
            Have another question?{" "}
          </h2>
        </div>
        <div className="justify_center">
          <button className="btn_dark">let`s chat</button>
        </div>
      </div>
    </section>
    <section className={`section justify_center ${style.become}`}>
      <div className={`${style.become_content} flow_column justify_center`}>
        <h2 className={`${style.title_2} ${style.become_t2}`}>
          Omertex is a trusted partner for businesses in Europe, Africa and
          North America.
        </h2>
        <p className={`${style.body_3} ${style.become_b3}`}>
          Learn more about how we can help you achieve your mission-critical
          priorities.
        </p>
        <div className="justify_center">
          <button className="btn_dark">become a client</button>
        </div>
      </div>
    </section>
  </Layout>
)
