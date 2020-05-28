import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import classNames from "../helpers/classNames"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import style from "./web-application-development-services.module.sass"
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
      header_bg: file(relativePath: { eq: "wads/wads_bg.jpg" }) {
        ...sharpImage
      }
      cloud_native: file(
        relativePath: { eq: "wads/png_icon_cloud_native.png" }
      ) {
        ...sharpImage
      }
      custom_web: file(relativePath: { eq: "wads/png_icon_custom_web.png" }) {
        ...sharpImage
      }
      integration: file(relativePath: { eq: "wads/png_icon_integration.png" }) {
        ...sharpImage
      }
      partnership: file(relativePath: { eq: "wads/png_icon_partnership.png" }) {
        ...sharpImage
      }
      nodejs: file(relativePath: { eq: "wads/png_icon_nodejs.png" }) {
        ...sharpImage
      }
      net_core: file(relativePath: { eq: "wads/png_icon_net_core.png" }) {
        ...sharpImage
      }
      django_python: file(
        relativePath: { eq: "wads/png_icon_django_python.png" }
      ) {
        ...sharpImage
      }
      amazon: file(relativePath: { eq: "wads/png_icon_amazon.png" }) {
        ...sharpImage
      }
      azure: file(relativePath: { eq: "wads/png_icon_azure.png" }) {
        ...sharpImage
      }
      docker: file(relativePath: { eq: "wads/png_icon_docker.png" }) {
        ...sharpImage
      }
      mysql: file(relativePath: { eq: "wads/png_icon_mysql.png" }) {
        ...sharpImage
      }
      sql_server: file(relativePath: { eq: "wads/png_icon_sql_server.png" }) {
        ...sharpImage
      }
      mongodb: file(relativePath: { eq: "wads/png_icon_mongodb.png" }) {
        ...sharpImage
      }
      postgresql: file(relativePath: { eq: "wads/png_icon_postgresql.png" }) {
        ...sharpImage
      }
      angular: file(relativePath: { eq: "wads/png_icon_angular.png" }) {
        ...sharpImage
      }
      bootstrap: file(relativePath: { eq: "wads/png_icon_bootstrap.png" }) {
        ...sharpImage
      }
      react: file(relativePath: { eq: "wads/png_icon_react.png" }) {
        ...sharpImage
      }
      jquery: file(relativePath: { eq: "wads/png_icon_jquery.png" }) {
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
        title="Web application development services"
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
        <div className={classNames(style.content)}>
          <h1 className={style.title_1}>
            Web application development <br /> services
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
        <div className={classNames(style.content)}>
          <p className={style.body_1}>
            At Omertex we provide custom web application development services
            for small and medium enterprises and startups. Approaching custom
            web development probably is the only way out in case you can’t find
            an existing solution available on the market that meets your
            business needs. Our end-to-end development process encompasses all
            stages of software development life cycle including requirements
            gathering, analysis, design, front-end development, back-end
            development, testing and deployment.
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
        <div className={classNames(style.content)}>
          <h2 className={style.title_1}>
            User-Friendly Experience on <br /> Desktop and Mobile
          </h2>
          <p className={classNames(style.body_1, style.second_section_p)}>
            With its in-depth expertise in UI/UX design and front-end
            development, Omertex is capable of delivering the best web
            experience that will be an absolute hit with your users.
          </p>
          <div className={style.text_cards_dox}>
            <div className={style.text_card}>
              <p className={style.body_1}>
                Feature-rich and visually elegant apps that look and work
                seamlessly on every device.
              </p>
            </div>
            <div className={style.text_card}>
              <p className={style.body_1}>
                Flawless performance with maximum uptime for greater customer
                acquisition and retention.
              </p>
            </div>
            <div className={style.text_card}>
              <p className={style.body_1}>
                Highly intuitive and easily navigable applications through
                developing consistent and friendly UI.
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
        <div className={classNames(style.content)}>
          <h2 className={style.title_1}>Our expertise</h2>
          <p className={classNames(style.body_1, style.third_section_p)}>
            Our team delivers a perfect fusion of technological competency,
            domain knowledge and client-centric approach. Our clients present us
            with a business challenge and Omertex delivers a most versatile and
            cost-effective software solution.
          </p>
          <div className={style.image_columns_box}>
            <div className={style.image_column}>
              <Img
                fluid={images.cloud_native.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Cloud-Native
              </h3>
              <p className={style.body_1}>
                Our team delivers a perfect fusion of technological competency,
                domain knowledge and client-centric approach. Our clients
                present us with a business challenge and Omertex delivers a most
                versatile and cost-effective software solution.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.partnership.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Big Data Processing
              </h3>
              <p className={style.body_1}>
                Omertex utilizes software frameworks such as Hadoop, which
                allows us to deliver <br /> state-of-the-art solutions in the
                field of real-time Big Data processing. We will help your
                business navigate and refine its data analysis strategy, from
                initial evaluation up to Machine Learning projects
                implementation and deployment.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.custom_web.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Custom Web
              </h3>
              <p className={style.body_1}>
                One-of-a-kind software that is specifically tailored to your
                business.Whether you seek rapid development of a single app or
                maintenance of your existing corporate systems, Omertex will
                assist you in creating the most optimized solution that
                perfectly meets your company’s requirements.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.integration.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Integration
              </h3>
              <p className={style.body_1}>
                Here at Omertex, we provide a range of integration services,
                from Back-End and Data integration to RESTful and real-time API
                Integration. By connecting all of your software, data, and
                processes, we maximize the value of your current IT
                infrastructure.
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
        <div className={classNames(style.content)}>
          <h2 className={style.title_1}>
            End-to-end <br /> Web development & Design
          </h2>
          <p className={classNames(style.body_1, style.fourth_section_p)}>
            With its in-depth expertise in UI/UX design and front-end
            development, Omertex is capable of delivering the best web
            experience that will be an absolute hit with your users.
          </p>
          <div className={style.three_steps_box}>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_2, style.three_step_title)}
              >
                Front-end development
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                One-of-a-kind software that is specifically tailored to your
                business.Whether you seek rapid development of a single app or
                maintenance of your existing corporate systems, Omertex will
                assist you in creating the most optimized solution that
                perfectly meets your company’s requirements.
              </div>
            </div>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_2, style.three_step_title)}
              >
                Back-end (server side) development
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                The back end is more focused on making sure all the right data
                gets sent out to the browser. It’s the portion of iceberg below
                the surface… lots of stuff needs to go correctly to hand off
                data to the front end so it can be displayed.
              </div>
            </div>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_2, style.three_step_title)}
              >
                Maintenance & Support
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                At Omertex, we provide continuous maintenance and support
                services to our clients that include: new features development,
                bug fixing, performance enhancement, scalability, security audit
                and updates. With us by your side, your web application will
                always remain at its finest and relevant to users.
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
        <div className={classNames(style.content)}>
          <h2 className={classNames(style.title_1, style.fifth_section_h2)}>
            Multifaceted application security
          </h2>
          <p className={style.body_1}>
            Here at Omertex we don’t just focus on a single platform or
            technology, but rather we strive to provide our customers with a
            perfect fusion of technological expertise and industry-specific
            experience. Our clients come to us with a business challenge and we
            develop the most cost-efficient and refined solution to it.
          </p>
          <h3 className={classNames(style.title_3, style.fifth_section_h3)}>
            Secure
          </h3>
          <p className={style.body_1}>
            Our team approaches the question of security as an indispensable
            element at every stage of the software development lifecycle. From
            vulnerability scan, source code analysis and architecture review to
            the standards compliances, customer security and IP protection, we
            take comprehensive measures to provide your app with the highest
            levels of security possible.
          </p>
        </div>
      </section>
      <section
        className={classNames(
          style.section,
          style.justify_center,
          style.sixth_section
        )}
      >
        <div className={classNames(style.content)}>
          <h2 className={style.title_1}>
            Technologies used for Web <br /> application development in <br />{" "}
            Omertex
          </h2>
          <p className={classNames(style.body_1, style.sixth_section_p)}>
            Our extensive technology competencies allow us to deliver you a
            top-notch software product, tailored to your specific business needs
            on every development stage
          </p>
          <div className={style.technologies_box}>
            <div className={style.technology}>
              <div className={style.technology_header}>
                <div className={style.title_3}>PROGRAMMING LANGUAGES</div>
                <div
                  className={classNames(
                    style.technology_description,
                    style.body_1
                  )}
                >
                  Node.js, .Net Core, Python + Django
                </div>
              </div>
              <div className={style.technology_icons_box}>
                <Img
                  fluid={images.nodejs.childImageSharp.fluid}
                  className={style.technology_icons}
                  alt="Nodejs"
                />
                <Img
                  fluid={images.net_core.childImageSharp.fluid}
                  className={style.technology_icons}
                  alt=".Net core"
                />
                <Img
                  fluid={images.django_python.childImageSharp.fluid}
                  className={style.technology_icons}
                  alt="Django Python"
                />
              </div>
            </div>
            <div className={style.technology}>
              <div className={style.technology_header}>
                <div className={style.title_3}>
                  CLOUD TECHNOLOGIES FOR WEB APPLICATIONS
                </div>
                <div
                  className={classNames(
                    style.technology_description,
                    style.body_1
                  )}
                >
                  Amazon Web Services, Microsoft Azure, Docker
                </div>
              </div>
              <div className={style.technology_icons_box}>
                <Img
                  fluid={images.amazon.childImageSharp.fluid}
                  className={style.technology_icons}
                  alt="Amazon"
                />
                <Img
                  fluid={images.azure.childImageSharp.fluid}
                  className={style.technology_icons}
                  alt="Microsoft Azure"
                />
                <Img
                  fluid={images.docker.childImageSharp.fluid}
                  className={style.technology_icons}
                  alt="Docker"
                />
              </div>
            </div>
            <div className={style.technology}>
              <div className={style.technology_header}>
                <div className={style.title_3}>DATABASE DEVELOPMENT</div>
                <div
                  className={classNames(
                    style.technology_description,
                    style.body_1
                  )}
                >
                  MySQL, SQL Server, Mongo DB, PostgreSQL
                </div>
              </div>
              <div className={style.technology_icons_box}>
                <Img
                  fluid={images.mysql.childImageSharp.fluid}
                  className={style.technology_icons}
                  alt="MySQL"
                />
                <Img
                  fluid={images.sql_server.childImageSharp.fluid}
                  className={style.technology_icons}
                  alt="Microsoft SQL Server"
                />
                <Img
                  fluid={images.mongodb.childImageSharp.fluid}
                  className={style.technology_icons}
                  alt="MongoDB"
                />
                <Img
                  fluid={images.postgresql.childImageSharp.fluid}
                  className={style.technology_icons}
                  alt="PostgreSQL"
                />
              </div>
            </div>
            <div className={style.technology}>
              <div className={style.technology_header}>
                <div className={style.title_3}>FRONT-END DEVELOPMENT</div>
                <div
                  className={classNames(
                    style.technology_description,
                    style.body_1
                  )}
                >
                  Angular, Bootstrap, React, jQuery
                </div>
              </div>
              <div className={style.technology_icons_box}>
                <Img
                  fluid={images.angular.childImageSharp.fluid}
                  className={style.technology_icons}
                  alt="Angular"
                />
                <Img
                  fluid={images.bootstrap.childImageSharp.fluid}
                  className={style.technology_icons}
                  alt="Bootstrap"
                />
                <Img
                  fluid={images.react.childImageSharp.fluid}
                  className={style.technology_icons}
                  alt="React"
                />
                <Img
                  fluid={images.jquery.childImageSharp.fluid}
                  className={style.technology_icons}
                  alt="JQuery"
                />
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
          style.seventh_section
        )}
        fluid={images.form_bg.childImageSharp.fluid}
      >
        <div className={style.content}>
          <h2 className={style.title_1}>
            Mobile & Web apps development <br /> fintech solutions
          </h2>
          <div className={style.seventh_form_box}>
            <div className={style.seventh_form_column}>
              <h3
                className={classNames(style.seventh_section_h2, style.title_3)}
              >
                Reach out to us. <br /> Our specialists will respond shortly.
              </h3>
              <p className={classNames(style.seventh_section_p, style.body_1)}>
                Find out how Omertex can drive actionable insights and
                streamline workflows, so you can deliver results.
              </p>
              <p className={classNames(style.seventh_section_p, style.body_1)}>
                Ask an Omertex expert how we can help.
              </p>
              <p className={classNames(style.seventh_section_p, style.body_1)}>
                Explore life at Omertex, learn about available careers, or get
                in touch with an Omertex representative.
              </p>
            </div>
            <div className={style.seventh_form_column}>{contactForm}</div>
          </div>
        </div>
      </BackgroundImage>
    </Layout>
  )
}
