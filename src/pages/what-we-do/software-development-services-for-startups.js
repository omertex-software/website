import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import classNames from "../../helpers/classNames"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import style from "./software-development-services-for-startups.module.sass"
import { bitrix24ContactFormIntegrable } from "../../helpers/bitrix24Scripts"

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
  const [contactForm, setContactForm] = useState()

  useEffect(() => {
    bitrix24ContactFormIntegrable(setContactForm)
  }, [])

  const images = useStaticQuery(graphql`
    query {
      header_bg: file(relativePath: { eq: "sdsfs/sdsfs_bg.jpg" }) {
        ...sharpImage
      }
      proof_concept: file(
        relativePath: { eq: "sdsfs/png_icon_proof_concept.png" }
      ) {
        ...sharpImage
      }
      prototyping: file(
        relativePath: { eq: "sdsfs/png_icon_prototyping.png" }
      ) {
        ...sharpImage
      }
      mvp: file(relativePath: { eq: "sdsfs/png_icon_mvp.png" }) {
        ...sharpImage
      }
      technical_partner: file(
        relativePath: { eq: "sdsfs/png_icon_technical_partner.png" }
      ) {
        ...sharpImage
      }
      it_consulting: file(
        relativePath: { eq: "sdsfs/png_icon_it_consulting.png" }
      ) {
        ...sharpImage
      }
      form_bg: file(relativePath: { eq: "common/form_bg.jpg" }) {
        ...sharpImage
      }
    }
  `)

  return (
    <Layout>
      <Helmet
        title="Software development services for startups"
        charSet="utf-8"
        defer={false}
      />
      <BackgroundImage
        Tag="section"
        className={classNames(
          style.section,
          style.justify_center,
          style.page_header
        )}
        fluid={images.header_bg.childImageSharp.fluid}
      >
        <div className={style.content}>
          <h1 className={style.title_1}>
            Software development services for startups
          </h1>
        </div>
      </BackgroundImage>
      <section
        className={classNames(
          style.section,
          style.justify_center,
          style.first_section
        )}
      >
        <div className={style.content}>
          <p className={style.body_1}>
            With Omertex you will find a technical partner that has all the
            necessary expertise in one place, including business analysts and
            designers, software developers, and quality assurance engineers who
            will help you shape, implement, and deploy your project
          </p>
        </div>
      </section>
      <section
        className={classNames(
          style.section,
          style.justify_center,
          style.second_section
        )}
      >
        <div className={style.content}>
          <div className={style.image_steps_box}>
            <div className={style.image_step}>
              <Img
                fluid={images.proof_concept.childImageSharp.fluid}
                className={style.image_step_icon}
                alt="icon"
              />
              <div className={style.image_step_info}>
                <h3 className={style.title_3}>Proof of concept</h3>
                <p className={classNames(style.body_1, style.image_step_p)}>
                  You see a problem your potential customers are faced with and
                  believe that there is a definite market demand to be monetized
                  in the future. You have an idea on how to help your customers.
                  Well, this is the perfect time to get verification and
                  validation that it could be implemented as a software
                  application. At this stage, business analysts (along with the
                  help of software developers) can help answer the question.
                </p>
              </div>
            </div>
            <div className={style.image_step}>
              <Img
                fluid={images.prototyping.childImageSharp.fluid}
                className={style.image_step_icon}
                alt="icon"
              />
              <div className={style.image_step_info}>
                <h3 className={style.title_3}>Prototyping</h3>
                <p className={classNames(style.body_1, style.image_step_p)}>
                  You got through the proof of concept stage, so now your
                  solution should be embodied in a prototype to demonstrate to
                  potential customers, business partners, and investors how it
                  will work (user flow) and what it will look like (design). A
                  prototype will help you refine the initial idea as well as
                  lead to new ones. UX/UI designers and software developers can
                  assist you with this task.
                </p>
              </div>
            </div>
            <div className={style.image_step}>
              <Img
                fluid={images.mvp.childImageSharp.fluid}
                className={style.image_step_icon}
                alt="icon"
              />
              <div className={style.image_step_info}>
                <h3 className={style.title_3}>Minimum viable product</h3>
                <p className={classNames(style.body_1, style.image_step_p)}>
                  MVP is a software application (web or mobile) containing a
                  minimum set of functions that are the most important and
                  necessary for your customers and give your product a market
                  value. MVP will help you verify the product viability and
                  market demand. Since this stage involves all participants of
                  the project (you, business analysts, software developers,
                  designers, quality assurance specialists), it is important to
                  organize a seamless workflow to get the most out of your time.
                </p>
              </div>
            </div>
            <div className={style.image_step}>
              <Img
                fluid={images.technical_partner.childImageSharp.fluid}
                className={style.image_step_icon}
                alt="icon"
              />
              <div className={style.image_step_info}>
                <h3 className={style.title_3}>
                  Find a technical partner for your startup through Omertex
                </h3>
                <p className={classNames(style.body_1, style.image_step_p)}>
                  Maybe you have a brilliant idea or have already tested it on
                  first customers... But you see that its further implementation
                  into a minimum viable product will require significant costs
                  that you don’t have at the moment. It’s a common practice to
                  introduce a partner into a startup. Learn more if you really
                  need to invite an Information technology partner to your
                  startup.
                </p>
              </div>
            </div>
            <div className={style.image_step}>
              <Img
                fluid={images.it_consulting.childImageSharp.fluid}
                className={style.image_step_icon}
                alt="icon"
              />
              <div className={style.image_step_info}>
                <h3 className={style.title_3}>
                  IT consulting services for startups​
                </h3>
                <p className={classNames(style.body_1, style.image_step_p)}>
                  Launching a startup or already have one and need a
                  consultation? We can assist you in finding the answers to your
                  questions or concerns on solving current issues. At Omertex,
                  we know how to choose technologies eminently suitable for the
                  business requirements, how to decide what features to choose
                  for MVP, how to hire and put a team together and organize the
                  workflow to build MVP fast, and what comes next after the
                  first customer reviews. Learn more about IT consulting
                  services for startups here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={classNames(
          style.section,
          style.justify_center,
          style.third_section
        )}
      >
        <div className={style.content}>
          <h4 className={classNames(style.title_3, style.third_section_h4)}>
            Schedule a consultation now.
          </h4>
          <p className={classNames(style.third_section_p, style.body_1)}>
            Mutual understanding between you and your software development
            company is crucial for the success of a project. Book a consultation
            to find out if Omertex specialists are able to realize your vision
            and check out if the communication process is comfortable for you.
            <br /> <br />
            Contact us
          </p>
          <div className={style.third_section_form}>
            <input
              className={style.third_section_input}
              placeholder="Your email address"
            />
            <button className={style.third_section_btn}>submit</button>
          </div>
        </div>
      </section>
      <section
        className={classNames(
          style.section,
          style.justify_center,
          style.fourth_section
        )}
      >
        <div className={style.content}>
          <h2 className={style.title_1}>What we can do for your startup</h2>
          <div className={style.three_steps_box}>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                Mobile app development
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                Omertex specializes in end-to-end mobile development for both
                consumer and enterprise environments. With an app from Omertex,
                you receive the finest mobile solution that is easy to use and
                efficient for external and internal users. Our primary focus is
                superb quality.
              </div>
            </div>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                Web application development
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                Can’t find an existing solution available on the market that
                meets your business needs? Here at Omertex, we provide fully
                custom end-to-end web application development services, from
                design and development to optimization and enhancement.
              </div>
            </div>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                Blockchain and distributed ledger development
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                You can consider choosing Ethereum blockchain for your ICO,
                smart contracts, decentralized applications, or IBM Hyperledger
                Fabric for developing applications, or solutions with a modular
                architecture to transform transaction management across Fin-Tech
                business-networks participants.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={classNames(
          style.section,
          style.justify_center,
          style.fifth_section
        )}
      >
        <div className={style.content}>
          <h2 className={classNames(style.title_1, style.fifth_section_h2)}>
            Communication processes and approaches to the work in Omertex
          </h2>
          <p className={classNames(style.body_1, style.fifth_section_p)}>
            Along with flexible, agile approaches to the development process,
            communication and mutual understanding are key factors in
            determining the success of any project. You can join the team here
            at Omertex and work with the developers in our office during
            development. Alternatively, we can arrange workshops on a regular
            basis or for specific milestones in addition to daily communication.
          </p>
        </div>
      </section>
      <BackgroundImage
        Tag="section"
        className={classNames(
          style.section,
          style.justify_center,
          style.sixth_section
        )}
        fluid={images.form_bg.childImageSharp.fluid}
      >
        <div className={style.content}>
          <h2 className={classNames(style.title_1, style.sixth_section_h2)}>
            Contact us
          </h2>
          <div className={style.sixth_form_box}>
            <div className={style.sixth_form_column}>
              <h3 className={classNames(style.sixth_section_h3, style.title_3)}>
                Write to us straight away and find out what our experts can do
                for your project
              </h3>
            </div>
            <div className={style.sixth_form_column}>{contactForm}</div>
          </div>
        </div>
      </BackgroundImage>
    </Layout>
  )
}
