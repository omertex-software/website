import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import classNames from "../../helpers/classNames"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import style from "./revamping-legacy-software-applications.module.sass"
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
      header_bg: file(relativePath: { eq: "am/am_bg.jpg" }) {
        ...sharpImage
      }
      nodejs: file(relativePath: { eq: "am/png_icon_nodejs.png" }) {
        ...sharpImage
      }
      net_core: file(relativePath: { eq: "am/png_icon_net_core.png" }) {
        ...sharpImage
      }
      django_python: file(
        relativePath: { eq: "am/png_icon_django_python.png" }
      ) {
        ...sharpImage
      }
      amazon: file(relativePath: { eq: "am/png_icon_amazon.png" }) {
        ...sharpImage
      }
      azure: file(relativePath: { eq: "am/png_icon_azure.png" }) {
        ...sharpImage
      }
      docker: file(relativePath: { eq: "am/png_icon_docker.png" }) {
        ...sharpImage
      }
      mysql: file(relativePath: { eq: "am/png_icon_mysql.png" }) {
        ...sharpImage
      }
      sql_server: file(relativePath: { eq: "am/png_icon_sql_server.png" }) {
        ...sharpImage
      }
      mongodb: file(relativePath: { eq: "am/png_icon_mongodb.png" }) {
        ...sharpImage
      }
      postgresql: file(relativePath: { eq: "am/png_icon_postgresql.png" }) {
        ...sharpImage
      }
      angular: file(relativePath: { eq: "am/png_icon_angular.png" }) {
        ...sharpImage
      }
      bootstrap: file(relativePath: { eq: "am/png_icon_bootstrap.png" }) {
        ...sharpImage
      }
      react: file(relativePath: { eq: "am/png_icon_react.png" }) {
        ...sharpImage
      }
      jquery: file(relativePath: { eq: "am/png_icon_jquery.png" }) {
        ...sharpImage
      }
      form_bg: file(relativePath: { eq: "common/form_bg.jpg" }) {
        ...sharpImage
      }
    }
  `)

  return (
    <Layout>
      <Helmet title="Application modernization" charSet="utf-8" defer={false} />
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
          <h1 className={style.title_1}>Application modernization</h1>
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
            Legacy software modernization allows you to expand your business’
            geographical reach and attract new customers. Omertex offers a wide
            range of application enhancement services that let you solve current
            issues and help you take new market opportunities. Our vast field of
            expertise includes:
          </p>
          <ul className={style.first_section_ul}>
            <li>· adding new features,</li>
            <li>· improving visual design, </li>
            <li>· cloud migration and; </li>
            <li>
              · fixing bugs and source code optimization of your software
              application.
            </li>
          </ul>
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
          <div className={style.three_steps_box}>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                Cloud migration / Migration to cloud
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                Relocation of your legacy data, applications, and workloads to a
                cloud infrastructure. Gain flexibility, scalability, and cost
                efficiencies to innovate faster and increase market
                opportunities by moving to cloud.
              </div>
            </div>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                Adding a new feature
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                Adding a new feature is an easy task when you follow simple
                principles and requirements. If you’re searching for a software
                development company that can review and revamp legacy software
                that is not supported by a vendor anymore, consider Omertex as a
                technical partner for your business.
              </div>
            </div>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                Design improvement / UX/UI Update
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                Using outdated UX/UI designs can easily lead to excessive
                operating expenses or even reduce your market position and
                opportunities. In such cases, you can approach us at Omertex for
                a full UX/UI review of your software and get our consultation
                and expertise on how to improve it.
              </div>
            </div>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                Application Remediation
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                Enhancement of your applications’ functionality, making them
                up-to-date, and providing the support you need to mitigate risks
                and keep your business running at high performance.
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
          <h2 className={style.title_1}>Complete lifecycle coverage</h2>
          <p className={classNames(style.body_1, style.third_section_p)}>
            At Omertex, we take your vision and build a state of the art
            application from the ground up. Our team of business analysts and
            software engineers will devise a complete product strategy and
            deliver a product that meets your unique requirements
          </p>
          <div className={style.third_section_lifecycle} />
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
          <h2 className={style.title_1}>Technologies</h2>
          <p className={classNames(style.body_1, style.fourth_section_p)}>
            Our extensive technology competencies allow us to deliver a
            top-notch software product tailored to your specific business needs
            in every stage of development.
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
          style.fifth_section
        )}
        fluid={images.form_bg.childImageSharp.fluid}
      >
        <div className={style.content}>
          <h2 className={classNames(style.title_1, style.fifth_section_h2)}>
            Contact us
          </h2>
          <div className={style.fifth_form_box}>
            <div className={style.fifth_form_column}>
              <h3 className={classNames(style.fifth_section_h3, style.title_3)}>
                Write to us straight away and find out what our experts can do
                for your project
              </h3>
            </div>
            <div className={style.fifth_form_column}>{contactForm}</div>
          </div>
        </div>
      </BackgroundImage>
    </Layout>
  )
}
