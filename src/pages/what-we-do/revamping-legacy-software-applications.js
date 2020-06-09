import React from "react"
import Layout from "../../components/layout"
import classNames from "../../helpers/classNames"
import PageHeader from "../../components/pageHeader/pageHeader"
import BottomForm from "../../components/bottomForm/bottomForm"
import Technologies from "../../components/technologies/technologies"
import Steps from "../../components/steps/steps"
import LifecycleCoverage from "../../components/lifecycleCoverage/lifecycleCoverage"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import page from "../../assets/styles/page.module.sass"
import style from "./revamping-legacy-software-applications.module.sass"

export default () => {
  const images = useStaticQuery(graphql`
    query {
      header_bg: file(relativePath: { eq: "am/am_bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  const stepsData = [
    {
      title: "Cloud migration / Migration to cloud",
      description:
        "Relocation of your legacy data, applications, and workloads to a cloud infrastructure. Gain flexibility, " +
        "scalability, and cost efficiencies to innovate faster and increase market opportunities by moving to cloud.",
    },
    {
      title: "Adding a new feature",
      description:
        "Adding a new feature is an easy task when you follow simple principles and requirements. If you’re " +
        "searching for a software development company that can review and revamp legacy software that is not " +
        "supported by a vendor anymore, consider Omertex as a technical partner for your business.",
    },
    {
      title: "Design improvement / UX/UI Update",
      description:
        "Using outdated UX/UI designs can easily lead to excessive operating expenses or even reduce your market " +
        "position and opportunities. In such cases, you can approach us at Omertex for a full UX/UI review of your " +
        "software and get our consultation and expertise on how to improve it.",
    },
    {
      title: "Application Remediation",
      description:
        "Enhancement of your applications’ functionality, making them up-to-date, and providing the support you " +
        "need to mitigate risks and keep your business running at high performance.",
    },
  ]

  return (
    <Layout>
      <Helmet title="Application modernization" charSet="utf-8" defer={false} />
      <PageHeader
        image={images.header_bg.childImageSharp.fluid}
        title="Application modernization"
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
            Legacy software modernization allows you to expand your business’
            geographical reach and attract new customers. Omertex offers a wide
            range of application enhancement services that let you solve current
            issues and help you take new market opportunities. Our vast field of
            expertise includes:
          </p>
          <ul className={classNames(page.body_1, style.first_section_ul)}>
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
          page.section,
          page.justify_center,
          style.second_section
        )}
      >
        <div className={page.content}>
          <Steps data={stepsData} />
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
          <h2 className={page.title_1}>Complete lifecycle coverage</h2>
          <p className={classNames(page.body_1, style.third_section_p)}>
            At Omertex, we take your vision and build a state of the art
            application from the ground up. Our team of business analysts and
            software engineers will devise a complete product strategy and
            deliver a product that meets your unique requirements
          </p>
          <LifecycleCoverage />
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
          <h2 className={page.title_1}>Technologies</h2>
          <p className={classNames(page.body_1, style.fourth_section_p)}>
            Our extensive technology competencies allow us to deliver a
            top-notch software product tailored to your specific business needs
            in every stage of development.
          </p>
          <Technologies />
        </div>
      </section>
      <BottomForm title="Contact us">
        <h3>
          Write to us straight away and find out what our experts can do for
          your project
        </h3>
      </BottomForm>
    </Layout>
  )
}
