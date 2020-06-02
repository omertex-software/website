import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import classNames from "../helpers/classNames"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import buttons from "../assets/styles/buttons.module.sass"
import style from "./enterprise-software-development.module.sass"
import { bitrix24ContactFormIntegrable } from "../helpers/bitrix24Scripts"

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
      header_bg: file(relativePath: { eq: "esd/esd_bg.jpg" }) {
        ...sharpImage
      }
      it_expertise: file(
        relativePath: { eq: "esd/png_icon_it_expertise.png" }
      ) {
        ...sharpImage
      }
      domain_knowledge: file(
        relativePath: { eq: "esd/png_icon_domain_knowledge.png" }
      ) {
        ...sharpImage
      }
      cc_approach: file(
        relativePath: { eq: "esd/png_icon_customer_centric_approach.png" }
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
        title="Small and medium enterprises software development"
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
            Small and medium enterprises software development
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
            At Omertex, we cover the full spectrum of software development
            services, from consultation on corporate workflow improvements to
            full-cycle enterprise-grade software development and implementation.
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
          <h2 className={style.title_1}>Custom enterprise solutions</h2>
          <p className={classNames(style.body_1, style.second_section_p)}>
            Our company offers development of an end-to-end technological
            solution that no existing out-of-the-box application can support. At
            Omertex, we offer our clients fully custom enterprise-grade
            solutions specifically tailored to their workflow. Our business
            analysts will translate your needs into technological requirements
            and coordinate the development process with you throughout the
            prototyping and wireframing process.
          </p>
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
          <h2 className={style.title_1}>Our Areas of Expertise</h2>
          <p className={classNames(style.body_1, style.third_section_p)}>
            Combining years of experience with business analysis and
            architecture design skills, Omertex delivers digital transformation
            that empowers businesses.
          </p>
          <div className={style.btn_cards_box}>
            <div className={style.btn_card}>
              <h3 className={style.title_3}>
                Web <br /> Application Development
              </h3>
              <p className={classNames(style.body_1, style.btn_card_p)}>
                We build large-scale web-based apps with ROI and business value
                at the very core of the entire development process, while also
                ensuring seamless integration with the existing IT
                infrastructure.
              </p>
              <button className={buttons.btn_dark}>read more</button>
            </div>
            <div className={style.btn_card}>
              <h3 className={style.title_3}>
                Mobile <br /> Application Development
              </h3>
              <p className={classNames(style.body_1, style.btn_card_p)}>
                At Omertex, we provide your external and internal users with
                slick, user-friendly, and seamless mobile solutions that are
                built to add value to your business.
              </p>
              <button className={buttons.btn_dark}>read more</button>
            </div>
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
          <h2 className={style.title_1}>
            Finding balance between tech expertise and domain knowledge
          </h2>
          <p className={classNames(style.body_1, style.fourth_section_p)}>
            Here at Omertex, we don’t just focus on a single platform or
            technology, we strive to provide our customers with a perfect fusion
            of technological expertise and industry-specific experience. Our
            clients come to us with a business challenge and we develop the most
            cost-efficient and refined solution to it.
          </p>
          <div className={style.three_steps_box}>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                High Scalability
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                Our solutions are built to facilitate your existing IT
                environment and enhance your business workflow. We deliver
                custom software that can be easily connected to multiple data
                sources, applications and integrated with third-party web
                services, data feeds and payment systems.
              </div>
            </div>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                Risk Reduction
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                The real first-class software doesn’t just rely on exceptional
                user experience and high performance. A well-thought-out
                architectural design with technical risk reduction ensures that
                the whole system is easy to maintain and can be efficiently
                enhanced over time.
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
          <h2 className={style.title_1}>Why choose Omertex?</h2>
          <div className={style.image_columns_box}>
            <div className={style.image_column}>
              <Img
                fluid={images.it_expertise.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                In-depth IT expertise
              </h3>
              <p className={style.body_1}>
                Launched in 2008, Omertex has a team of highly qualified IT
                professionals. Every member is an expert in their specific
                field, be it a software engineer, business analyst, or QA
                specialist.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.domain_knowledge.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Versatile domain knowledge
              </h3>
              <p className={style.body_1}>
                Our portfolio includes projects for various domains with prime
                focus on FinTech. We have the necessary competences to take on
                projects for finance, banking, travel, e-commerce, etc.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.cc_approach.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Customer-centric approach
              </h3>
              <p className={style.body_1}>
                Omertex is always on the customer’s side, especially when it
                comes to timeline and budget planning. We stringently stick to
                your every requirement while being flexible when changes arise
                along the way.
              </p>
            </div>
          </div>
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
            Ready to transform your business with Omertex enterprise software?
          </h2>
          <div className={style.sixth_form_box}>
            <div className={style.sixth_form_column}>
              <h3 className={classNames(style.sixth_section_h3, style.title_3)}>
                Contact us
              </h3>
            </div>
            <div className={style.sixth_form_column}>{contactForm}</div>
          </div>
        </div>
      </BackgroundImage>
    </Layout>
  )
}
