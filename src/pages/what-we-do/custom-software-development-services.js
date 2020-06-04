import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import classNames from "../../helpers/classNames"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import style from "./custom-software-development-services.module.sass"
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
      header_bg: file(relativePath: { eq: "csds/csds_bg.jpg" }) {
        ...sharpImage
      }
      transparency: file(
        relativePath: { eq: "csds/png_icon_transparency.png" }
      ) {
        ...sharpImage
      }
      flexible_approach: file(
        relativePath: { eq: "csds/png_icon_flexible_approach.png" }
      ) {
        ...sharpImage
      }
      teamwork: file(relativePath: { eq: "csds/png_icon_teamwork.png" }) {
        ...sharpImage
      }
      experience: file(relativePath: { eq: "csds/png_icon_experience.png" }) {
        ...sharpImage
      }
      exceptional_quality: file(
        relativePath: { eq: "csds/png_icon_exceptional_quality.png" }
      ) {
        ...sharpImage
      }
      protection_security: file(
        relativePath: { eq: "csds/png_icon_protection_security.png" }
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
        title="Custom software development services"
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
            Custom software development services
          </h1>
          <p className={classNames(style.body_1, style.page_header_p)}>
            At Omertex we deliver one-of-a-kind applications, tailored to serve
            your business needs. Covering a full spectrum of services, from
            project assessment to maintenance and support, we ensure exceptional
            quality throughout the entire development process
          </p>
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
          <div className={style.three_steps_box}>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                Custom development
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                Whether it is a startup idea or a unique enterprise-grade
                application, you can count on Omertex to deliver outstanding
                results. With our strong domain knowledge, deep technology
                expertise and absolute customer focus, we develop software
                solutions that drive business success.
              </div>
            </div>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                Legacy application enhancement
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                We will help your business bring your current IT environment up
                to date by re-designing, enhancing and upgrading systems that
                are no longer efficient or outdated. We provide migration
                services, technical architecture review as well as complete
                application refinement.
              </div>
            </div>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                Third-party software integration
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                Through our in-depth expertise of modern platforms, proprietary
                and open source products, we provide our clients with
                third-party software customization and integration. With Omertex
                at your side, you will receive a completely unified IT ecosystem
                with flawless performance.
              </div>
            </div>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                UI/UX Design & Prototyping
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                Having years of experience in the field of custom software
                development, Omertex has a comprehensive understanding of
                aligning business goals with end-user expectations. Our team
                utilizes best industry practices in order to combine advanced
                functionality with usability.
              </div>
            </div>
          </div>
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
          <h2 className={style.title_1}>Complete lifecycle coverage</h2>
          <p className={classNames(style.body_1, style.second_section_p)}>
            At Omertex we take your vision and build a state-of-the-art
            application from the ground up. Our team of business analysts and
            software engineers will devise a complete product strategy and
            deliver a product that meets your unique requirements.
          </p>
          <div className={style.second_section_lifecycle} />
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
          <h2 className={classNames(style.title_1, style.third_section_h2)}>
            Why consider a custom software solution
          </h2>
          <h3 className={classNames(style.title_3, style.third_section_h3)}>
            Complex business requirements
          </h3>
          <p className={classNames(style.body_1, style.third_section_p)}>
            You’ve done a full market research and no Commercial Off-The-Shelf
            (COTS) software that meets your particular requirements is available
            on the market. But you have a clear picture of how the system should
            look and function. Then custom software development is your option.
          </p>
          <h3 className={classNames(style.title_3, style.third_section_h3)}>
            Full control & flexibility
          </h3>
          <p className={classNames(style.body_1, style.third_section_p)}>
            Custom software development gives you full control over your
            software’s back-end. Besides that, you can quickly react to any
            changes in the market and adjust the system’s functionality
            accordingly in both the development and post-release stages.
          </p>
          <h3 className={classNames(style.title_3, style.third_section_h3)}>
            Cost benefits
          </h3>
          <p className={classNames(style.body_1, style.third_section_p)}>
            Customization of COTS software can become costly. In addition to
            that there are numerous examples of enterprise software that cannot
            be properly integrated with various applications that you might use.
            By getting custom solution you will save time and resources on
            endless customizations and purchase of integrable applications.
          </p>
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
          <h2 className={style.title_1}>Why choose Omertex?</h2>
          <div className={style.image_columns_box}>
            <div className={style.image_column}>
              <Img
                fluid={images.transparency.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Transparency
              </h3>
              <p className={style.body_1}>
                Our core values are trust and partnership. Transparency enables
                both sides to see our progress and allows for effective
                communication.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.flexible_approach.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Flexible approach
              </h3>
              <p className={style.body_1}>
                We follow an agile methodology that allows us to quickly adapt
                to any arising challenges, maintain work balance and avoid
                common traps.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.teamwork.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Teamwork
              </h3>
              <p className={style.body_1}>
                It’s not just a buzzword to us. Through understanding of each
                individual team member skill set we are able to deliver maximum
                value to our clients.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.experience.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Experience
              </h3>
              <p className={style.body_1}>
                Over our entire life as a company, we’ve been building up a
                knowledge base and have absorbed the best approaches to achieve
                maximum performance.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.exceptional_quality.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Exceptional quality
              </h3>
              <p className={style.body_1}>
                At Omertex, we have a dedicated QA team to ensure that our
                solutions meet project requirements on every stage of the life
                cycle.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.protection_security.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                IP protection & security
              </h3>
              <p className={style.body_1}>
                Security and intellectual property protection are crucial to us
                and we are fully committed to securing business processes from
                end to end.
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
          style.fifth_section
        )}
        fluid={images.form_bg.childImageSharp.fluid}
      >
        <div className={style.content}>
          <h2 className={classNames(style.title_1, style.fifth_section_h2)}>
            Ready to get your idea rolling?​
          </h2>
          <div className={style.fifth_form_box}>
            <div className={style.fifth_form_column}>
              <h3 className={classNames(style.fifth_section_h3, style.title_3)}>
                Contact us with your project to get a free quote.
              </h3>
            </div>
            <div className={style.fifth_form_column}>{contactForm}</div>
          </div>
        </div>
      </BackgroundImage>
    </Layout>
  )
}
