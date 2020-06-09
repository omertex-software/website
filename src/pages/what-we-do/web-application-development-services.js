import React from "react"
import Layout from "../../components/layout"
import classNames from "../../helpers/classNames"
import PageHeader from "../../components/pageHeader/pageHeader"
import BottomForm from "../../components/bottomForm/bottomForm"
import TwoColumns from "../../components/twoColumns/twoColumns"
import Steps from "../../components/steps/steps"
import Technologies from "../../components/technologies/technologies"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import page from "../../assets/styles/page.module.sass"
import style from "./web-application-development-services.module.sass"

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
    }
  `)

  const expertiseData = [
    {
      image: images.cloud_native.childImageSharp.fluid,
      title: "Cloud-Native",
      description:
        "Our team delivers a perfect fusion of technological competency, domain knowledge and client-centric " +
        "approach. Our clients present us with a business challenge and Omertex delivers a most versatile and " +
        "cost-effective software solution.",
    },
    {
      image: images.partnership.childImageSharp.fluid,
      title: "Big Data Processing",
      description:
        "Omertex utilizes software frameworks such as Hadoop, which allows us to deliver state-of-the-art solutions " +
        "in the field of real-time Big Data processing. We will help your business navigate and refine its data " +
        "analysis strategy, from initial evaluation up to Machine Learning projects implementation and deployment.",
    },
    {
      image: images.custom_web.childImageSharp.fluid,
      title: "Custom Web",
      description:
        "One-of-a-kind software that is specifically tailored to your business.Whether you seek rapid development of " +
        "a single app or maintenance of your existing corporate systems, Omertex will assist you in creating the " +
        "most optimized solution that perfectly meets your company’s requirements.",
    },
    {
      image: images.integration.childImageSharp.fluid,
      title: "Integration",
      description:
        "Here at Omertex, we provide a range of integration services, from Back-End and Data integration to RESTful " +
        "and real-time API Integration. By connecting all of your software, data, and processes, we maximize the " +
        "value of your current IT infrastructure.",
    },
  ]

  const ETEData = [
    {
      title: "Front-end development",
      description:
        "One-of-a-kind software that is specifically tailored to your business.Whether you seek rapid development " +
        "of a single app or maintenance of your existing corporate systems, Omertex will assist you in creating the " +
        "most optimized solution that perfectly meets your company’s requirements.",
    },
    {
      title: "Back-end (server side) development",
      description:
        "The back end is more focused on making sure all the right data gets sent out to the browser. It’s the " +
        "portion of iceberg below the surface… lots of stuff needs to go correctly to hand off data to the front " +
        "end so it can be displayed.",
    },
    {
      title: "Maintenance & Support",
      description:
        "At Omertex, we provide continuous maintenance and support services to our clients that include: new " +
        "features development, bug fixing, performance enhancement, scalability, security audit and updates. With " +
        "us by your side, your web application will always remain at its finest and relevant to users.",
    },
  ]

  return (
    <Layout>
      <Helmet
        title="Web application development services"
        charSet="utf-8"
        defer={false}
      />
      <PageHeader
        image={images.header_bg.childImageSharp.fluid}
        title="Web application development services"
      />
      <section
        className={classNames(
          page.section,
          page.justify_center,
          style.first_section
        )}
      >
        <div className={page.content}>
          <p className={page.body_1}>
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
          page.section,
          page.justify_center,
          style.second_section
        )}
      >
        <div className={page.content}>
          <h2 className={page.title_1}>
            User-Friendly Experience on <br /> Desktop and Mobile
          </h2>
          <p className={classNames(page.body_1, style.second_section_p)}>
            With its in-depth expertise in UI/UX design and front-end
            development, Omertex is capable of delivering the best web
            experience that will be an absolute hit with your users.
          </p>
          <div className={style.text_cards_dox}>
            <div className={style.text_card}>
              <p className={page.body_1}>
                Feature-rich and visually elegant apps that look and work
                seamlessly on every device.
              </p>
            </div>
            <div className={style.text_card}>
              <p className={page.body_1}>
                Flawless performance with maximum uptime for greater customer
                acquisition and retention.
              </p>
            </div>
            <div className={style.text_card}>
              <p className={page.body_1}>
                Highly intuitive and easily navigable applications through
                developing consistent and friendly UI.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className={classNames(
          page.section,
          page.justify_center,
          style.third_section
        )}
      >
        <div className={page.content}>
          <h2 className={page.title_1}>Our expertise</h2>
          <p className={classNames(page.body_1, style.third_section_p)}>
            Our team delivers a perfect fusion of technological competency,
            domain knowledge and client-centric approach. Our clients present us
            with a business challenge and Omertex delivers a most versatile and
            cost-effective software solution.
          </p>
          <TwoColumns data={expertiseData} />
        </div>
      </section>
      <section
        className={classNames(
          page.section,
          page.justify_center,
          style.fourth_section
        )}
      >
        <div className={page.content}>
          <h2 className={page.title_1}>
            End-to-end <br /> Web development & Design
          </h2>
          <p className={classNames(page.body_1, style.fourth_section_p)}>
            With its in-depth expertise in UI/UX design and front-end
            development, Omertex is capable of delivering the best web
            experience that will be an absolute hit with your users.
          </p>
          <Steps data={ETEData} />
        </div>
      </section>
      <section
        className={classNames(
          page.section,
          page.justify_center,
          style.fifth_section
        )}
      >
        <div className={page.content}>
          <h2 className={classNames(page.title_1, style.fifth_section_h2)}>
            Multifaceted application security
          </h2>
          <p className={page.body_1}>
            Here at Omertex we don’t just focus on a single platform or
            technology, but rather we strive to provide our customers with a
            perfect fusion of technological expertise and industry-specific
            experience. Our clients come to us with a business challenge and we
            develop the most cost-efficient and refined solution to it.
          </p>
          <h3 className={classNames(page.title_3, style.fifth_section_h3)}>
            Secure
          </h3>
          <p className={page.body_1}>
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
          page.section,
          page.justify_center,
          style.sixth_section
        )}
      >
        <div className={page.content}>
          <h2 className={page.title_1}>
            Technologies used for Web <br /> application development in <br />{" "}
            Omertex
          </h2>
          <p className={classNames(page.body_1, style.sixth_section_p)}>
            Our extensive technology competencies allow us to deliver you a
            top-notch software product, tailored to your specific business needs
            on every development stage
          </p>
          <Technologies />
        </div>
      </section>
      <BottomForm title="Mobile & Web apps development fintech solutions">
        <h3>Reach out to us.</h3>
        <h3>Our specialists will respond shortly.</h3>
        <p>
          Find out how Omertex can drive actionable insights and streamline
          workflows, so you can deliver results.
        </p>
        <p>Ask an Omertex expert how we can help.</p>
        <p>
          Explore life at Omertex, learn about available careers, or get in
          touch with an Omertex representative.
        </p>
      </BottomForm>
    </Layout>
  )
}
