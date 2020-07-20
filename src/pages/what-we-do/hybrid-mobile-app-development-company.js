import React from "react"
import Layout from "../../components/layout"
import classNames from "../../helpers/classNames"
import PageHeader from "../../components/pageHeader/pageHeader"
import BottomForm from "../../components/bottomForm/bottomForm"
import TwoColumnsList from "../../components/twoColumnsList/twoColumnsList"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"
import page from "../../assets/styles/page.module.sass"
import buttons from "../../assets/styles/buttons.module.sass"
import style from "./hybrid-mobile-app-development-company.module.sass"
import SectionForm from "../../components/sectionForm/sectionForm"

export const sharpImage = graphql`
  fragment sharpImage on File {
    childImageSharp {
      fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`

const listData = [
  "Blockchain",
  "Banking",
  "Payments",
  "Insurance",
  "Asset management",
  "Lending",
]

export default () => {
  const images = useStaticQuery(graphql`
    query {
      header_bg: file(relativePath: { eq: "hmadc/hmadc_bg.jpg" }) {
        ...sharpImage
      }
      react: file(relativePath: { eq: "hmadc/react.png" }) {
        ...sharpImage
      }
      xamarin: file(relativePath: { eq: "hmadc/xamarin.png" }) {
        ...sharpImage
      }
      flutter: file(relativePath: { eq: "hmadc/flutter.png" }) {
        ...sharpImage
      }
      analysis: file(relativePath: { eq: "hmadc/analysis.png" }) {
        ...sharpImage
      }
      design: file(relativePath: { eq: "hmadc/design.png" }) {
        ...sharpImage
      }
      testing: file(relativePath: { eq: "hmadc/testing.png" }) {
        ...sharpImage
      }
    }
  `)

  return (
    <Layout>
      <Helmet
        title="Hybrid mobile app development company"
        charSet="utf-8"
        defer={false}
      />
      <PageHeader
        image={images.header_bg.childImageSharp.fluid}
        title="Hybrid mobile app development services"
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
            Looking for a hybrid mobile app development company to create a
            hybrid mobile app based on your idea? At Omertex, we offer hybrid
            mobile app development services worldwide for mature businesses and
            individuals.
            <br /> <br />
            It’s crucial for us to build a cross-platform mobile app that will
            perform efficiently with no extra efforts.
            <br /> <br />
            You can expect a high-quality and up-to-date final product due to
            the deep expertise that our developers obtained while solving
            complex tasks in different industries. You’re welcome to contact us
            to share your requirements and get a free consultation at any stage
            of your mobile app development.
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
          <h2 className={classNames(page.title_1, style.second_section_h2)}>
            Why should you choose us?
          </h2>
          <p className={classNames(page.body_1, style.second_section_p)}>
            · You have an idea of a mobile app and want to refine it
            <br />
            · You want the app to capture the complete attention of your target
            audience real estate and asset management
            <br />
            · You’re interested in multi-platform support and high-speed
            performance
            <br />· You’re looking for a full-service development company
          </p>
          <p className={classNames(page.body_1, style.second_section_p)}>
            Leave all doubt behind! We have all the skills and tools to kick
            your app off the right way. Send us a message describing your idea
            and our specialists will contact you shortly.
          </p>
          <div className={style.second_section_btn}>
            <button className={buttons.btn_dark}>describe my idea</button>
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
          <h2 className={page.title_1}>
            Hybrid mobile app frameworks we work with
          </h2>
          <p className={classNames(page.body_1, style.third_section_p)}>
            Choosing a reliable framework to build a hybrid mobile app is one of
            the most essential steps of the whole development process. <br />
            At our company, we propose the following cross-platform development
            services:
          </p>
          <div className={style.frameworks_box}>
            <div className={style.framework}>
              <Img
                fluid={images.react.childImageSharp.fluid}
                className={style.framework_icon}
                alt="React"
              />
              <h3 className={style.framework_title}>
                React native <br /> app development
              </h3>
            </div>
            <div className={style.framework}>
              <Img
                fluid={images.xamarin.childImageSharp.fluid}
                className={style.framework_icon}
                alt="Xamarin"
              />
              <h3 className={style.framework_title}>
                Xamarin <br /> app development
              </h3>
            </div>
            <div className={style.framework}>
              <Img
                fluid={images.flutter.childImageSharp.fluid}
                className={style.framework_icon}
                alt="Flutter"
              />
              <h3 className={style.framework_title}>
                Flutter <br /> app development
              </h3>
            </div>
          </div>
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
            Industries we cater to with mobile app development services
          </h2>
          <p className={classNames(page.body_1, style.fourth_section_p)}>
            Our tech-savvy, highly-skilled teams have expertise in the
            development of top-class and innovative solutions for hybrid mobile
            apps for companies from the following industries
          </p>
          <TwoColumnsList data={listData} minBottom={true} />
        </div>
      </section>
      <SectionForm title="Looking for professional hybrid mobile app development services?">
        <p>
          Leave us your contact information and we will get in touch as soon as
          possible!
        </p>
      </SectionForm>
      <section
        className={classNames(
          page.section,
          page.justify_center,
          style.fifth_section
        )}
      >
        <div className={page.content}>
          <h2 className={classNames(page.title_1, style.fifth_section_h2)}>
            How do we construct our hybrid mobile app development process?
          </h2>
          <div className={style.process_list}>
            <div className={style.process}>
              <Img
                fluid={images.analysis.childImageSharp.fluid}
                className={style.process_icon}
                alt="Icon"
              />
              <div className={style.process_info}>
                <h3 className={page.title_3}>
                  Analysis of customer's requirements.
                </h3>
                <p className={page.body_1}>
                  We start our hybrid app development process with an analysis
                  of all the customer's proposals, wishes, and requirements. For
                  us, coming to an understanding with our clients is the most
                  important part of the mobile development process.
                </p>
              </div>
            </div>
            <div className={style.process}>
              <Img
                fluid={images.design.childImageSharp.fluid}
                className={style.process_icon}
                alt="Icon"
              />
              <div className={style.process_info}>
                <h3 className={page.title_3}>
                  UI/UX design, app architecture, and coding stages.
                </h3>
                <p className={page.body_1}>
                  With our knowledge and experience, we create a highly-quality
                  product that reaches your target audience through its
                  delightful design and user-friendly interface. At each of the
                  development stages, we maintain communication with you so that
                  you know every step that is being performed along the way.
                </p>
              </div>
            </div>
            <div className={style.process}>
              <Img
                fluid={images.testing.childImageSharp.fluid}
                className={style.process_icon}
                alt="Icon"
              />
              <div className={style.process_info}>
                <h3 className={page.title_3}>
                  Testing and further maintenance.
                </h3>
                <p className={page.body_1}>
                  This is a crucial process that helps us guarantee you the
                  quality of your future mobile app and provide its future
                  updates. We are there to build a reliable hybrid mobile app
                  and make it available on both the App Store and Google Play.
                </p>
              </div>
            </div>
          </div>
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
          <h2 className={classNames(page.title_1, style.sixth_section_h2)}>
            Why Omertex is for you?
          </h2>
          <p className={page.body_1}>
            · The interests of our clients are high-priority to us, and we
            devote them to all stages of the project.
            <br />
            · Our hybrid mobile app developers have deep knowledge of mobile
            development technologies, so they can find top-level technical
            solutions as well as solve any issues if you have an existing app.
            <br />
            · We provide hybrid mobile app development services worldwide,
            working with customers wherever they are.
            <br />
            · For every hybrid mobile app, our company provides quality
            assurance and further maintenance support, and for every client, we
            provide professional consulting services.
            <br />· We propose a wide service spectrum connected with native and
            cross-platform mobile application development.
          </p>
        </div>
      </section>
      <BottomForm title="Have questions or want to get started on your hybrid mobile app development?">
        <h3>
          Reach out to us. <br />
          Our specialists will respond shortly.
        </h3>
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
