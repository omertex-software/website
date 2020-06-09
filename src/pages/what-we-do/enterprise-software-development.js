import React from "react"
import Layout from "../../components/layout"
import classNames from "../../helpers/classNames"
import PageHeader from "../../components/pageHeader/pageHeader"
import BottomForm from "../../components/bottomForm/bottomForm"
import Steps from "../../components/steps/steps"
import ThreeColumns from "../../components/threeColumns/threeColumns"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import buttons from "../../assets/styles/buttons.module.sass"
import page from "../../assets/styles/page.module.sass"
import style from "./enterprise-software-development.module.sass"

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
    }
  `)

  const stepsData = [
    {
      title: "High Scalability",
      description:
        "Our solutions are built to facilitate your existing IT environment and enhance your business workflow. We " +
        "deliver custom software that can be easily connected to multiple data sources, applications and integrated " +
        "with third-party web services, data feeds and payment systems.",
    },
    {
      title: "Risk Reduction",
      description:
        "The real first-class software doesn’t just rely on exceptional user experience and high performance. A " +
        "well-thought-out architectural design with technical risk reduction ensures that the whole system is easy " +
        "to maintain and can be efficiently enhanced over time.",
    },
  ]

  const columnData = [
    {
      image: images.it_expertise.childImageSharp.fluid,
      title: "In-depth IT expertise",
      description:
        "Launched in 2008, Omertex has a team of highly qualified IT professionals. Every member is an expert in " +
        "their specific field, be it a software engineer, business analyst, or QA specialist.",
    },
    {
      image: images.domain_knowledge.childImageSharp.fluid,
      title: "Versatile domain knowledge",
      description:
        "Our portfolio includes projects for various domains with prime focus on FinTech. We have the necessary " +
        "competences to take on projects for finance, banking, travel, e-commerce, etc.",
    },
    {
      image: images.cc_approach.childImageSharp.fluid,
      title: "Customer-centric approach",
      description:
        "Omertex is always on the customer’s side, especially when it comes to timeline and budget planning. We " +
        "stringently stick to your every requirement while being flexible when changes arise along the way.",
    },
  ]

  return (
    <Layout>
      <Helmet
        title="Small and medium enterprises software development"
        charSet="utf-8"
        defer={false}
      />
      <PageHeader
        image={images.header_bg.childImageSharp.fluid}
        title="Small and medium enterprises software development"
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
            At Omertex, we cover the full spectrum of software development
            services, from consultation on corporate workflow improvements to
            full-cycle enterprise-grade software development and implementation.
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
          <h2 className={page.title_1}>Custom enterprise solutions</h2>
          <p className={classNames(page.body_1, style.second_section_p)}>
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
          page.section,
          page.justify_center,
          style.third_section
        )}
      >
        <div className={page.content}>
          <h2 className={page.title_1}>Our Areas of Expertise</h2>
          <p className={classNames(page.body_1, style.third_section_p)}>
            Combining years of experience with business analysis and
            architecture design skills, Omertex delivers digital transformation
            that empowers businesses.
          </p>
          <div className={style.btn_cards_box}>
            <div className={style.btn_card}>
              <h3 className={page.title_3}>
                Web <br /> Application Development
              </h3>
              <p className={classNames(page.body_1, style.btn_card_p)}>
                We build large-scale web-based apps with ROI and business value
                at the very core of the entire development process, while also
                ensuring seamless integration with the existing IT
                infrastructure.
              </p>
              <button className={buttons.btn_dark}>read more</button>
            </div>
            <div className={style.btn_card}>
              <h3 className={page.title_3}>
                Mobile <br /> Application Development
              </h3>
              <p className={classNames(page.body_1, style.btn_card_p)}>
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
          page.section,
          page.justify_center,
          style.fourth_section
        )}
      >
        <div className={page.content}>
          <h2 className={page.title_1}>
            Finding balance between tech expertise and domain knowledge
          </h2>
          <p className={classNames(page.body_1, style.fourth_section_p)}>
            Here at Omertex, we don’t just focus on a single platform or
            technology, we strive to provide our customers with a perfect fusion
            of technological expertise and industry-specific experience. Our
            clients come to us with a business challenge and we develop the most
            cost-efficient and refined solution to it.
          </p>
          <Steps data={stepsData} />
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
            Why choose Omertex?
          </h2>
          <ThreeColumns data={columnData} />
        </div>
      </section>
      <BottomForm title=" Ready to transform your business with Omertex enterprise software?">
        <h3>Contact us</h3>
      </BottomForm>
    </Layout>
  )
}
