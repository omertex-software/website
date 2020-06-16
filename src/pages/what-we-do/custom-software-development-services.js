import React, { Suspense } from "react"
import Layout from "../../components/layout"
import classNames from "../../helpers/classNames"
import PageHeader from "../../components/pageHeader/pageHeader"
// import BottomForm from "../../components/bottomForm/bottomForm"
import LifecycleCoverage from "../../components/lifecycleCoverage/lifecycleCoverage"
import Steps from "../../components/steps/steps"
import TwoColumns from "../../components/twoColumns/twoColumns"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import page from "../../assets/styles/page.module.sass"
import style from "./custom-software-development-services.module.sass"

const BottomForm = React.lazy(() =>
  import("../../components/bottomForm/bottomForm")
)

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
    }
  `)

  const stepsData = [
    {
      title: "Custom development",
      description:
        "Whether it is a startup idea or a unique enterprise-grade application, you can count on Omertex to deliver " +
        "outstanding results. With our strong domain knowledge, deep technology expertise and absolute customer " +
        "focus, we develop software solutions that drive business success.",
    },
    {
      title: "Legacy application enhancement",
      description:
        "We will help your business bring your current IT environment up to date by re-designing, enhancing and " +
        "upgrading systems that are no longer efficient or outdated. We provide migration services, technical " +
        "architecture review as well as complete application refinement.",
    },
    {
      title: "Third-party software integration",
      description:
        "Through our in-depth expertise of modern platforms, proprietary and open source products, we provide our " +
        "clients with third-party software customization and integration. With Omertex at your side, you will " +
        "receive a completely unified IT ecosystem with flawless performance.",
    },
    {
      title: "UI/UX Design & Prototyping",
      description:
        "Having years of experience in the field of custom software development, Omertex has a comprehensive " +
        "understanding of aligning business goals with end-user expectations. Our team utilizes best industry " +
        "practices in order to combine advanced functionality with usability.",
    },
  ]

  const chooseData = [
    {
      image: images.transparency.childImageSharp.fluid,
      title: "Transparency",
      description:
        "Our core values are trust and partnership. Transparency enables both sides to see our progress and " +
        "allows for effective communication.",
    },
    {
      image: images.flexible_approach.childImageSharp.fluid,
      title: "Flexible approach",
      description:
        "We follow an agile methodology that allows us to quickly adapt to any arising challenges, " +
        "maintain work balance and avoid common traps.",
    },
    {
      image: images.teamwork.childImageSharp.fluid,
      title: "Teamwork",
      description:
        "It’s not just a buzzword to us. Through understanding of each individual team member skill set " +
        "we are able to deliver maximum value to our clients.",
    },
    {
      image: images.experience.childImageSharp.fluid,
      title: "Experience",
      description:
        "Over our entire life as a company, we’ve been building up a knowledge base and have absorbed the " +
        "best approaches to achieve maximum performance.",
    },
    {
      image: images.exceptional_quality.childImageSharp.fluid,
      title: "Exceptional quality",
      description:
        "At Omertex, we have a dedicated QA team to ensure that our solutions meet project requirements on " +
        "every stage of the life cycle.",
    },
    {
      image: images.protection_security.childImageSharp.fluid,
      title: "IP protection & security",
      description:
        "Security and intellectual property protection are crucial to us and we are fully committed to " +
        "securing business processes from end to end.",
    },
  ]

  return (
    <Layout>
      <Helmet
        title="Custom software development services"
        charSet="utf-8"
        defer={false}
      />
      <PageHeader
        image={images.header_bg.childImageSharp.fluid}
        title="Custom software development services"
        description="At Omertex we deliver one-of-a-kind applications, tailored to serve
            your business needs. Covering a full spectrum of services, from
            project assessment to maintenance and support, we ensure exceptional
            quality throughout the entire development process"
      />
      <section
        className={classNames(
          page.section,
          page.justify_center,
          style.first_section
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
          style.second_section
        )}
      >
        <div className={page.content}>
          <h2 className={page.title_1}>Complete lifecycle coverage</h2>
          <p className={classNames(page.body_1, style.second_section_p)}>
            At Omertex we take your vision and build a state-of-the-art
            application from the ground up. Our team of business analysts and
            software engineers will devise a complete product strategy and
            deliver a product that meets your unique requirements.
          </p>
          <LifecycleCoverage />
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
          <h2 className={classNames(page.title_1, style.third_section_h2)}>
            Why consider a custom software solution
          </h2>
          <h3 className={classNames(page.title_3, style.third_section_h3)}>
            Complex business requirements
          </h3>
          <p className={classNames(page.body_1, style.third_section_p)}>
            You’ve done a full market research and no Commercial Off-The-Shelf
            (COTS) software that meets your particular requirements is available
            on the market. But you have a clear picture of how the system should
            look and function. Then custom software development is your option.
          </p>
          <h3 className={classNames(page.title_3, style.third_section_h3)}>
            Full control & flexibility
          </h3>
          <p className={classNames(page.body_1, style.third_section_p)}>
            Custom software development gives you full control over your
            software’s back-end. Besides that, you can quickly react to any
            changes in the market and adjust the system’s functionality
            accordingly in both the development and post-release stages.
          </p>
          <h3 className={classNames(page.title_3, style.third_section_h3)}>
            Cost benefits
          </h3>
          <p className={classNames(page.body_1, style.third_section_p)}>
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
          page.section,
          page.justify_center,
          style.fourth_section
        )}
      >
        <div className={page.content}>
          <h2 className={classNames(page.title_1, style.fourth_section_h2)}>
            Why choose Omertex?
          </h2>
          <TwoColumns data={chooseData} />
        </div>
      </section>
      <Suspense fallback={<div>Загрузка...</div>}>
        <BottomForm title="Ready to get your idea rolling?​">
          <h3>Contact us with your project to get a free quote.</h3>
        </BottomForm>
      </Suspense>
    </Layout>
  )
}
