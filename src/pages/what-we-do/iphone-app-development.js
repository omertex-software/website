import React from "react"
import Layout from "../../components/layout"
import classNames from "../../helpers/classNames"
import SectionForm from "../../components/sectionForm/sectionForm"
import TwoColumnsSlider from "../../components/twoColumnsSlider/twoColumnsSlider"
import TwoColumnsList from "../../components/twoColumnsList/twoColumnsList"
import ProvideIndustries from "../../components/provideIndustries/provideIndustries"
import BottomForm from "../../components/bottomForm/bottomForm"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"
import page from "../../assets/styles/page.module.sass"
import style from "./iphone-app-development.module.sass"

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
      header_bg: file(relativePath: { eq: "iosad/iosad_bg.jpg" }) {
        ...sharpImage
      }
      slide: file(relativePath: { eq: "iosad/slide.jpg" }) {
        ...sharpImage
      }
      swift: file(relativePath: { eq: "iosad/png_icon_swift.png" }) {
        ...sharpImage
      }
      c_sharp: file(relativePath: { eq: "iosad/png_icon_c.png" }) {
        ...sharpImage
      }
    }
  `)

  const slideData = [
    {
      image: images.slide.childImageSharp.fluid,
      title: "NuMo Send - P2P Transactions",
      description:
        "NuMo Send is the next step in revolutionizing peer-to-peer (P2P)" +
        "transactions. It has been designed to focus on your life. The" +
        "beautiful, official-guides-driven UX and UI is perfect for any" +
        "modern Android and iOS device...",
    },
    {
      image: images.slide.childImageSharp.fluid,
      title: "NuMo Send - P2P Transactions",
      description:
        "NuMo Send is the next step in revolutionizing peer-to-peer (P2P)" +
        "transactions. It has been designed to focus on your life. The" +
        "beautiful, official-guides-driven UX and UI is perfect for any" +
        "modern Android and iOS device...",
    },
    {
      image: images.slide.childImageSharp.fluid,
      title: "NuMo Send - P2P Transactions",
      description:
        "NuMo Send is the next step in revolutionizing peer-to-peer (P2P)" +
        "transactions. It has been designed to focus on your life. The" +
        "beautiful, official-guides-driven UX and UI is perfect for any" +
        "modern Android and iOS device...",
    },
  ]

  const listData = [
    "Custom iPhone App Development",
    "iPhone App Testing/Portability",
    "iPhone App UI/UX Designing",
    "iPhone App Upgrade",
    "Native iPhone App Development",
    "Hybrid iPhone App Development",
  ]

  return (
    <Layout>
      <Helmet
        title="iOS application development "
        charSet="utf-8"
        defer={false}
      />
      <BackgroundImage
        Tag="section"
        className={classNames(
          page.section,
          page.justify_center,
          style.page_header
        )}
        fluid={images.header_bg.childImageSharp.fluid}
      >
        <div className={classNames(page.content, style.page_header_content)}>
          <h1 className={classNames(page.title_1, style.page_header_title)}>
            iOS application development
          </h1>
          <ul className={style.page_header_list}>
            <li className={page.body_1}>
              Advanced iPhone app development services
            </li>
            <li className={page.body_1}>Worldwide delivery</li>
            <li className={page.body_1}>
              Reliable solutions for all iOS devices
            </li>
            <li className={page.body_1}>Best in class UX, UI, security</li>
          </ul>
        </div>
      </BackgroundImage>
      <section
        className={classNames(
          page.section,
          page.justify_center,
          style.first_section
        )}
      >
        <div className={page.content}>
          <h2 className={classNames(page.title_1, style.first_section_h2)}>
            What you will get ordering your iOS application development from us
          </h2>
          <p className={page.body_1}>
            If you choose us as your iPhone app development company, we
            guarantee that you will get the app you envision in your mind
            refined and polished by our expertise.
            <br />
            <br />
            · Would you like to get a prototype as soon as possible, or would
            you prefer to dive into all the designing stages of UX and UI?
            <br />· Do you have a detailed requirements specification or just a
            concept of your iOS application (or maybe you’re somewhere in
            between)?
            <br />· Would you like to manage your iOS mobile app development
            with yourself taking the roles of Project manager, Business analyst,
            and even Product owner simultaneously, or would you prefer to
            delegate these roles to us?
            <br />
            <br />
            There are many questions to consider if this is going to be your
            first mobile app. We will help you answer all of them and guide you
            through the entire process of building your awesome iOS mobile app.
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
            Get closer to your customers via your amazing iOS application
          </h2>
          <p className={classNames(page.body_1, style.second_section_p)}>
            At Omertex, we fully realize the constantly growing demand for
            high-quality iOS applications
          </p>
          <p className={page.body_1}>
            Given this fact, we offer a wide range of iOS app development
            services to customers working in a variety of different spheres,
            although we mostly work with clients from the FinTech industry.
            <br />
            <br />
            We are extremely attentive to details, we are fully concentrated on
            the outcomes of our customers' projects, and we are able to deliver
            efficient development solutions globally.
            <br />
            <br />
            We do our best to provide comprehensive, top-notch iOS application
            development services. The result of our work? High-quality iOS
            applications that boost your sales, expand your business, enhance
            your clients’ loyalty, and reap countless other benefits for your
            company.
          </p>
        </div>
      </section>
      <SectionForm title="To get more information about our iPhone application development services, send us an inquiry.">
        <p>Our top specialists will contact you as soon as possible.</p>
      </SectionForm>
      <section
        className={classNames(
          page.section,
          page.justify_center,
          style.third_section
        )}
      >
        <div className={page.content}>
          <h2 className={classNames(page.title_1, style.third_section_h2)}>
            Learn more about our expertise in iPhone app development
          </h2>
          {/*<TwoColumnsSlider data={slideData} />*/}
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
            Technologies for iPhone app development we work with
          </h2>
          <div className={style.fourth_section_tech_box}>
            <div>
              <Img
                fluid={images.swift.childImageSharp.fluid}
                className={style.fourth_section_tech_icon}
                alt="Swift icon"
              />
              <h3
                className={classNames(
                  page.title_3,
                  style.fourth_section_tech_title
                )}
              >
                Swift
              </h3>
            </div>
            <div>
              <Img
                fluid={images.c_sharp.childImageSharp.fluid}
                className={style.fourth_section_tech_icon}
                alt="C# icon"
              />
              <h3
                className={classNames(
                  page.title_3,
                  style.fourth_section_tech_title
                )}
              >
                C#
              </h3>
            </div>
          </div>
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
          <h2 className={page.title_1}>
            iPhone application development services we offer
          </h2>
          <p className={classNames(page.body_1, style.fifth_section_p)}>
            Enjoying the reputation of a reliable iPhone app development
            company, we offer the following services:
          </p>
          <TwoColumnsList data={listData} />
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
            Industries we provide with iOS mobile app development services
          </h2>
          <p className={classNames(page.body_1, style.sixth_section_p)}>
            Our iOS application development specialists successfully provide
            services to the following industries:
          </p>
          <ProvideIndustries />
        </div>
      </section>
      <section
        className={classNames(
          page.section,
          page.justify_center,
          style.seventh_section
        )}
      >
        <div className={page.content}>
          <h2 className={classNames(page.title_1, style.seventh_section_h2)}>
            How our iPhone app development process is built
          </h2>
          <p className={page.body_1}>
            As we offer the full range of services traditionally provided by an
            iPhone app development company, our services go far beyond
            development itself.
          </p>
          <h3 className={classNames(page.title_3, style.seventh_section_h3)}>
            Analysis of requirements
          </h3>
          <p className={page.body_1}>
            Our iOS mobile app development process will begin with a deep
            analysis of your requirements and the specificity of the industry
            and product we need to work with.
          </p>
          <h3 className={classNames(page.title_3, style.seventh_section_h3)}>
            App architecture design, UX/UI design, and coding
          </h3>
          <p className={page.body_1}>
            Throughout our work on app development, during stages such as app
            architecture design, UX/UI design, and coding, we will stay in
            contact with you. It’s important to check in so we know that we are
            heading in the right direction and that the result of our work will
            fully meet your expectations.
          </p>
          <h3 className={classNames(page.title_3, style.seventh_section_h3)}>
            Testing procedure and comprehensive assistance
          </h3>
          <p className={page.body_1}>
            After a full testing procedure, it’s time for the world to get
            familiarized with your app! We are ready to provide you with our
            comprehensive assistance throughout all of the stages of making your
            iOS application available on the App Store.
          </p>
        </div>
      </section>
      <section
        className={classNames(
          page.section,
          page.justify_center,
          style.eighth_section
        )}
      >
        <div className={page.content}>
          <h2 className={classNames(page.title_1, style.eighth_section_h2)}>
            Why You Should Opt for Omertex
          </h2>
          <p className={page.body_1}>
            · Our developers have rich practical experience in providing iPhone
            application development services, as well as deep theoretical
            knowledge which allows us to build solutions of any complexity.
            <br />
            <br />
            · In our work, we always keep the user’s perspective in mind. That
            means that if you order iPhone development services from us, you can
            rest assured that you will get a completely user-friendly solution.
            <br />
            <br />
            · We offer a full complex of services related to iOS application
            development.
            <br />
            <br />
            · We provide time-efficient iOS app development services at
            competitive rates.
            <br />
            <br />
            · Our top specialists work with the most advanced technologies for
            iPhone app development.
            <br />
            <br />· We are ready to provide all of the necessary support and
            assistance you need, even after your iOS application is uploaded to
            the App Store and goes live.
          </p>
        </div>
      </section>
      <BottomForm title="Contact us">
        <h3>
          We realize that choosing an iPhone app development company is a
          serious decision.
        </h3>
        <p>
          If you want to learn more about us and our iPhone development
          services, please leave your contact details so that we can reach you.
        </p>
        <p>
          We are looking forward to getting to know you and your ideas so we can
          help bring them to life.
        </p>
      </BottomForm>
    </Layout>
  )
}
