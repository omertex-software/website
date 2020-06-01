import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import classNames from "../helpers/classNames"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import style from "./mobile-app-development-services.module.sass"
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
      header_bg: file(relativePath: { eq: "mads/mads_bg.jpg" }) {
        ...sharpImage
      }
      ios_apps: file(relativePath: { eq: "mads/png_icon_ios_apps.png" }) {
        ...sharpImage
      }
      android_apps: file(
        relativePath: { eq: "mads/png_icon_android_apps.png" }
      ) {
        ...sharpImage
      }
      cp_apps: file(relativePath: { eq: "mads/png_icon_cp_apps.png" }) {
        ...sharpImage
      }
      wb_apps: file(relativePath: { eq: "mads/png_icon_wb_apps.png" }) {
        ...sharpImage
      }
      interoperability: file(
        relativePath: { eq: "mads/png_icon_interoperability.png" }
      ) {
        ...sharpImage
      }
      scalability: file(relativePath: { eq: "mads/png_icon_scalability.png" }) {
        ...sharpImage
      }
      security: file(relativePath: { eq: "mads/png_icon_security.png" }) {
        ...sharpImage
      }
      rapid: file(relativePath: { eq: "mads/png_icon_rapid.png" }) {
        ...sharpImage
      }
      mobile_commerce: file(
        relativePath: { eq: "mads/png_icon_mobile_commerce.png" }
      ) {
        ...sharpImage
      }
      accounting_systems: file(
        relativePath: { eq: "mads/png_icon_accounting_systems.png" }
      ) {
        ...sharpImage
      }
      mobile_banking: file(
        relativePath: { eq: "mads/png_icon_mobile_banking.png" }
      ) {
        ...sharpImage
      }
      workflow_management: file(
        relativePath: { eq: "mads/png_icon_workflow_management.png" }
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
        title="Mobile app development services"
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
          <h1 className={style.title_1}>Mobile app development services</h1>
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
            Omertex has been providing mobile app development services globally
            to customers for the last 10 years. Our mobile team has a great deal
            of experience in creating and delivering a significant number of
            mobile applications, so we can suggest the most cost effective
            solutions to make every new mobile app rapid, user friendly, secure,
            and (of course) attractive in design. Omertex specializes in
            providing mobile app development services for small and medium
            enterprises and startups who need up-to-date Fin-Tech solutions to
            be implemented in their mobile apps. With such rich experience in
            developing native mobile applications for the most popular and major
            iOS and Android mobile platforms, we can deliver cross-platform
            mobile applications when such apps better fit our customers’
            business needs.
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
          <h2 className={style.title_1}>Mobile apps we develop</h2>
          <p className={classNames(style.body_1, style.second_section_p)}>
            Omertex has been developing iOS, Android, Hybrid / Cross-platform
            and Web-based mobile applications since 2010, two years after both
            iTunes and Playmarket (previously Android Market) were launched in
            2008.
          </p>
          <div className={style.image_columns_box}>
            <div className={style.image_column}>
              <Img
                fluid={images.ios_apps.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                iOS apps
              </h3>
              <p className={style.body_1}>
                iOS applications are those apps that are installed and running
                on iPhones, iPads and iPods.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.android_apps.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Android apps
              </h3>
              <p className={style.body_1}>
                Android applications are those apps that are installed and
                running on mobile phones and tablets with Android operating
                system.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.cp_apps.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Cross-platform apps
              </h3>
              <p className={style.body_1}>
                Cross-platform applications are those apps that can be installed
                and running on mobile phones and tablets with both Android and
                iOS (iPhones and iPads) operating systems. Cross-platform are
                installed like regular (native) apps but they’re running and
                look slightly different compared with native apps.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.wb_apps.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Web-based apps
              </h3>
              <p className={style.body_1}>
                Web-based applications are those apps that can be installed and
                running on mobile phones and tablets with both Android and iOS
                (iPhones and iPads) operating systems. Web-based apps look like
                regular (native) apps but they are hosted on a mobile device web
                browser and require access to the internet.
              </p>
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
          <h2 className={style.title_1}>
            Why does it make sense to consider a Mobile app development?
          </h2>
          <div className={style.orange_card_box}>
            <div className={style.orange_card}>
              <h3 className={style.orange_card_title}>>50%</h3>
              <p className={classNames(style.body_1, style.orange_card_p)}>
                of global web searches are mobile ones
              </p>
            </div>
            <div className={style.orange_card}>
              <h3 className={style.orange_card_title}>65%</h3>
              <p className={classNames(style.body_1, style.orange_card_p)}>
                of mobile phone time is spent on apps
              </p>
            </div>
            <div className={style.orange_card}>
              <h3 className={style.orange_card_title}>9/10</h3>
              <p className={classNames(style.body_1, style.orange_card_p)}>
                mobile searches lead to action
              </p>
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
            Approaches to Mobile app development in Omertex
          </h2>
          <p className={classNames(style.body_1, style.fourth_section_p)}>
            Here at Omertex we don’t just focus on a single platform or
            technology, we strive to provide our customers with a perfect fusion
            of technological expertise and industry-specific experience. Our
            clients come to us with a business challenge and we develop the most
            cost-efficient and refined solution to it.
          </p>
          <h3 className={classNames(style.title_3, style.fourth_section_h3)}>
            Native mobile app development
          </h3>
          <p className={style.body_1}>
            Choosing native mobile app development services makes sense if your
            customers care a lot about user experience and design or when the
            highest level of productivity and performance possible is the key
            factor for market success.
          </p>
          <h3 className={classNames(style.title_3, style.fourth_section_h3)}>
            Cross-platform mobile app development
          </h3>
          <p className={style.body_1}>
            The cross-platform mobile app development approach has benefits in
            many business cases. Opting for cross-platform development gives you
            market advantages as well as lower development costs compared to a
            native one.
          </p>
          <h3 className={classNames(style.title_3, style.fourth_section_h3)}>
            Hybrid / web mobile app development
          </h3>
          <p className={style.body_1}>
            Hybrid/web mobile app development is a unification of native and
            cross-platform approaches. If a hybrid app is well written for the
            appropriate cases, its UI and behavior is difficult to distinguish
            from a native or cross-platform one. However, the hybrid development
            approach is not very popular since web mobile apps need Internet
            connection.
          </p>
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
          <h2 className={style.title_1}>
            Why consider a custom <br /> software solution
          </h2>
          <p className={classNames(style.body_1, style.fifth_section_p)}>
            With an app from Omertex, you receive the finest mobile solution
            that is easy to use and efficient for external and internal users.
            Our primary focus is superb quality.
          </p>
          <div className={style.image_columns_box}>
            <div className={style.image_column}>
              <Img
                fluid={images.interoperability.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Interoperability
              </h3>
              <p className={style.body_1}>
                By utilizing a variety of APIs, industry’s top data connectors,
                and communication protocols, Omertex delivers mobility solutions
                that are fully capable of connecting to your pre-existing IT
                environment.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.scalability.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Scalability
              </h3>
              <p className={style.body_1}>
                We introduce vast scaling capabilities to our products in the
                early stages of development, allowing your business to quickly
                and easily expand and augment application for maximum value in
                the future.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.security.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Security & Compliance
              </h3>
              <p className={style.body_1}>
                Regardless of the project type, it always requires a set of
                security and compliance considerations. At Omertex, we
                incorporate only the highest security standards in our
                development process and follow the best guidelines known to the
                industry.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.rapid.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Rapid Development
              </h3>
              <p className={style.body_1}>
                Shortening life cycles and reducing the time it takes to get on
                the market is imperative in today’s environment. That is why we
                strive to quickly accommodate any alterations in the user demand
                and provide accelerated product launch while maintaining
                first-class quality of the application.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className={classNames(
          style.section,
          style.justify_center,
          style.sixth_section
        )}
      >
        <div className={style.content}>
          <h2 className={style.title_1}>Expertise in action</h2>
          <p className={classNames(style.body_1, style.sixth_section_p)}>
            What kind of application do you have in mind?
          </p>
          <div className={style.gray_cards}>
            <div className={style.gray_card}>
              <Img
                fluid={images.mobile_commerce.childImageSharp.fluid}
                className={style.gray_card_icon}
                alt="icon"
              />
              <h3 className={style.title_3}>Mobile Commerce</h3>
            </div>
            <div className={style.gray_card}>
              <Img
                fluid={images.accounting_systems.childImageSharp.fluid}
                className={style.gray_card_icon}
                alt="icon"
              />
              <h3 className={style.title_3}>Accounting Systems</h3>
            </div>
            <div className={style.gray_card}>
              <Img
                fluid={images.mobile_banking.childImageSharp.fluid}
                className={style.gray_card_icon}
                alt="icon"
              />
              <h3 className={style.title_3}>Mobile Banking</h3>
            </div>
            <div className={style.gray_card}>
              <Img
                fluid={images.workflow_management.childImageSharp.fluid}
                className={style.gray_card_icon}
                alt="icon"
              />
              <h3 className={style.title_3}>Workflow and Asset Management</h3>
            </div>
          </div>
        </div>
      </section>
      <section
        className={classNames(
          style.section,
          style.justify_center,
          style.seventh_section
        )}
      >
        <div className={style.content}>
          <h4 className={classNames(style.title_2, style.seventh_section_h4)}>
            Ready to start a project?
          </h4>
          <p className={classNames(style.seventh_section_p, style.body_1)}>
            Contact us
          </p>
          <div className={style.seventh_section_form}>
            <input
              className={style.seventh_section_input}
              placeholder="Your email address"
            />
            <button className={style.seventh_section_btn}>submit</button>
          </div>
        </div>
      </section>
      <section
        className={classNames(
          style.section,
          style.justify_center,
          style.eighth_section
        )}
      >
        <div className={style.content}>
          <h2 className={style.title_1}>Our mobility services</h2>
          <p className={classNames(style.body_1, style.eighth_section_p)}>
            With a broad array of technical assets available to us and your
            groundbreaking idea, we can deliver a stellar one-of-a-kind
            application that will put your business on the mobile forefront or
            revive a pre-existing product.
          </p>
          <div className={style.three_steps_box}>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                Technology Consulting
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                Our engineers are veterans in the field of mobile development,
                and their expertise enables us to offer various consulting
                services to our clients. From the proof of concept to
                prototyping and code review, Omertex can guide your business
                toward the ultimate mobile solution.
              </div>
            </div>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                UI/UX Design
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                When it comes to user-centered design processes, we at Omertex
                take an absolutely transparent approach. Our goal is to deliver
                functional and aesthetically pleasing interface with engaging
                user experience.
              </div>
            </div>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                Custom Development
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                Whether you require an enterprise-grade productivity-enhancement
                system or an engaging consumer app, Omertex can deliver a
                custom-tailored mobile solution that perfectly satisfies your
                particular business requirements.
              </div>
            </div>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                Third-Party Software Integration
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                From planning the most effective integration approach to tier 2
                and 3 technical support, our company will lead you throughout
                the entire integration process and help you achieve a completely
                interconnected environment maximizing the value of your existing
                software assets.
              </div>
            </div>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                Legacy Upgrade
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                We help our clients bring new life into their existing IT
                infrastructure through redesigning and upgrading outdated
                applications. Omertex will optimize your legacy mobile systems
                and convert them into a next-gen application.
              </div>
            </div>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                Delivery to market
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                Here at Omertex we assist our clients in full-cycle mobile
                development, including market deployment. Whether you want your
                application to succeed on Apple Store or Google Play, our team
                of business consultants will provide you with all the help
                necessary.
              </div>
            </div>
          </div>
        </div>
      </section>
      <BackgroundImage
        Tag="section"
        className={classNames(
          style.section,
          style.justify_center,
          style.ninth_section
        )}
        fluid={images.form_bg.childImageSharp.fluid}
      >
        <div className={style.content}>
          <h2 className={classNames(style.title_1, style.ninth_section_h2)}>
            Need something more?
          </h2>
          <div className={style.ninth_form_box}>
            <div className={style.ninth_form_column}>
              <h3 className={classNames(style.ninth_section_h3, style.title_3)}>
                Write to us straight away and <br /> find out what our experts
                can do for your project.
              </h3>
            </div>
            <div className={style.ninth_form_column}>{contactForm}</div>
          </div>
        </div>
      </BackgroundImage>
    </Layout>
  )
}
