import React from "react"
import Layout from "../../components/layout"
import classNames from "../../helpers/classNames"
import PageHeader from "../../components/pageHeader/pageHeader"
import TwoColumns from "../../components/twoColumns/twoColumns"
import TwoColumnsIconsGray from "../../components/twoColumnsIconsGray/twoColumnsIconsGray"
import BottomForm from "../../components/bottomForm/bottomForm"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import page from "../../assets/styles/page.module.sass"
import style from "./banking-software.module.sass"

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
      header_bg: file(relativePath: { eq: "bss/bss_bg.jpg" }) {
        ...sharpImage
      }
      internet_banking: file(
        relativePath: { eq: "bss/png_icon_internet_banking.png" }
      ) {
        ...sharpImage
      }
      mobile_banking: file(
        relativePath: { eq: "bss/png_icon_mobile_banking.png" }
      ) {
        ...sharpImage
      }
      banking_CRM: file(relativePath: { eq: "bss/png_icon_banking_CRM.png" }) {
        ...sharpImage
      }
      loyalty_tools: file(
        relativePath: { eq: "bss/png_icon_loyalty_tools.png" }
      ) {
        ...sharpImage
      }
      data_analytics: file(
        relativePath: { eq: "bss/png_icon_data_analytics.png" }
      ) {
        ...sharpImage
      }
      payment_software: file(
        relativePath: { eq: "bss/png_icon_payment_software.png" }
      ) {
        ...sharpImage
      }
      knowledge_management: file(
        relativePath: { eq: "bss/png_icon_knowledge_management.png" }
      ) {
        ...sharpImage
      }
      paperless_document: file(
        relativePath: { eq: "bss/png_icon_paperless_document.png" }
      ) {
        ...sharpImage
      }
      high_effectiveness: file(
        relativePath: { eq: "bss/png_icon_high_effectiveness.png" }
      ) {
        ...sharpImage
      }
      excellent_scalability: file(
        relativePath: { eq: "bss/png_icon_excellent_scalability.png" }
      ) {
        ...sharpImage
      }
      rich_functionality: file(
        relativePath: { eq: "bss/png_icon_rich_functionality.png" }
      ) {
        ...sharpImage
      }
      absolute_security: file(
        relativePath: { eq: "bss/png_icon_absolute_security.png" }
      ) {
        ...sharpImage
      }
      individual_approach: file(
        relativePath: { eq: "bss/png_icon_individual_approach.png" }
      ) {
        ...sharpImage
      }
    }
  `)

  const columnData = [
    {
      image: images.internet_banking.childImageSharp.fluid,
      title: "Internet banking",
      description:
        "Internet banking is an effective way of establishing interaction with your clients. With this solution, " +
        "your customers will always have an opportunity to make money transfers and payments, get info about their " +
        "current account balance, request bank documents, get acquainted with your offerings, and do many other " +
        "things online. To get access to all of these services they only need to have an internet-enabled device.",
    },
    {
      image: images.mobile_banking.childImageSharp.fluid,
      title: "Mobile banking",
      description:
        "Mobile app development is another forte of ours. Let your customers enjoy your high-quality banking " +
        "services via a convenient mobile app.",
    },
    {
      image: images.banking_CRM.childImageSharp.fluid,
      title: "Banking CRM systems",
      description:
        "Complex CRM systems will help you effectively manage your up-selling and cross-selling, control and analyze" +
        " your customer base, track customer activities, and monitor customer data. We will show you how you can " +
        "enhance your customer experience!",
    },
    {
      image: images.loyalty_tools.childImageSharp.fluid,
      title:
        "Loyalty tools management systems and online portals for customers",
      description:
        "Make your customers feel valuable; show that you care for them and reward their loyalty. B2B and B2C " +
        "banking platforms will help you establish direct communication with your customers and better understand them.",
    },
    {
      image: images.data_analytics.childImageSharp.fluid,
      title: "Data analytics tools",
      description:
        "Learn more about your customers, their needs, and their activities. Find out how they use your services " +
        "and what they want to improve. Analyze the effectiveness of your marketing campaigns and estimate risks.",
    },
    {
      image: images.payment_software.childImageSharp.fluid,
      title: "Payment and lending software",
      description:
        "These tools will enable you to digitize and streamline all the processes, decrease related risks, and " +
        "widen opportunities for your clients.",
    },
    {
      image: images.knowledge_management.childImageSharp.fluid,
      title: "Intranet and knowledge management for your bank",
      description:
        "A single corporate ecosystem will ensure better communication between all your team members which will " +
        "increase the effectiveness of their conjunctive work. Share information and knowledge with your team and " +
        "support their self-development!",
    },
    {
      image: images.paperless_document.childImageSharp.fluid,
      title: "Paperless document management systems",
      description:
        "You do not need to waste a lot of time on managing your bank documentation. All the document templates will " +
        "be easily accessible through a well-organized library and numerous processes with documents will be " +
        "completed automatically.",
    },
  ]

  const iconsData = [
    {
      image: images.high_effectiveness.childImageSharp.fluid,
      title: "High effectiveness",
    },
    {
      image: images.excellent_scalability.childImageSharp.fluid,
      title: "Excellent scalability",
    },
    {
      image: images.rich_functionality.childImageSharp.fluid,
      title: "Rich functionality",
    },
    {
      image: images.absolute_security.childImageSharp.fluid,
      title: "Absolute security",
    },
    {
      image: images.individual_approach.childImageSharp.fluid,
      title: "Individual and complex approach",
    },
  ]

  return (
    <Layout>
      <Helmet
        title="Banking software solutions"
        charSet="utf-8"
        defer={false}
      />
      <PageHeader
        image={images.header_bg.childImageSharp.fluid}
        title="Banking software solutions"
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
            If you are looking for a reliable partner to get over the modern
            challenges of the banking ecosystem, we are just the right team to
            help you. At Omertex, we have been successfully providing
            high-quality software solutions for banks for more than 10 years,
            and we are always ready to offer you our assistance.
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
            Why banks turn to banking software development services
          </h2>
          <p className={classNames(page.body_1, style.second_section_p)}>
            The banking IT services that we offer are not just a modern trend.
            They are aimed at boosting the development of your business and
            strengthening its positions in retail and corporate banking.
          </p>
          <h3 className={classNames(page.title_3, style.second_section_h3)}>
            Banking software implementation can help you:
          </h3>
          <div className={page.two_columns}>
            <div className={page.two_columns_column}>
              <p className={classNames(page.body_1, page.check)}>
                Improve the level of customer satisfaction and trust
              </p>
              <p className={classNames(page.body_1, page.check)}>
                Retain customers and enhance their loyalty
              </p>
              <p className={classNames(page.body_1, page.check)}>
                Increase the competitiveness of your banking institution
              </p>
              <p className={classNames(page.body_1, page.check)}>
                Strengthen cross-selling
              </p>
            </div>
            <div className={page.two_columns_column}>
              <p className={classNames(page.body_1, page.check)}>
                Render your services in a more feasible and comfortable manner
                for your customers
              </p>
              <p className={classNames(page.body_1, page.check)}>
                Organize effective communication with your customers
              </p>
              <p className={classNames(page.body_1, page.check)}>
                Better understand the necessities of your audience
              </p>
              <p className={classNames(page.body_1, page.check)}>
                Deal with other industries’ challenges
              </p>
            </div>
          </div>
          <p className={classNames(page.body_1, style.second_section_p2)}>
            If you want to solve all these tasks simultaneously, we would be
            happy to lend you our helping hand. We deeply understand the
            specificity of the needs and requirements of retail and corporate
            banking.
            <br />
            This allows us to build the most mutually beneficial and
            long-lasting relations between financial institutions and their
            clients with the help of software solutions for banks that are
            compliant with all internationally recognized regulatory
            requirements.
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
          <h2 className={page.title_1}>
            Banking software solutions we provide
          </h2>
          <p className={classNames(page.body_1, style.third_section_p)}>
            At Omertex, we can offer you a wide range of various opportunities
            for your business.
          </p>
          <TwoColumns data={columnData} hideAfter={4} />
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
            Benefits of omertex software solutions for banks
          </h2>
          <TwoColumnsIconsGray data={iconsData} />
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
            Benefits of omertex software solutions for banks
          </h2>
          <h3
            className={classNames(
              page.title_3,
              page.orange_line_min,
              style.fifth_section_h3
            )}
          >
            Professional consulting
          </h3>
          <p className={classNames(page.body_1, style.fifth_section_p)}>
            Digitalization strategy consulting. We will help you develop your
            digital transformation plan and find ways to make your banking IT
            ecosystem stronger. With us you will know what types of banking
            solutions will increase the potential of your business and what
            platform and technology will be beneficial in your particular case.
          </p>
          <p className={classNames(page.body_1, style.fifth_section_p)}>
            Customer experience management consulting. We can tell you about a
            wide range of solutions that will enhance your customer experience
            and show you how these CXM solutions will work in the framework of
            your business. With us you will easily understand what tools can
            bring you real value.
          </p>
          <h3
            className={classNames(
              page.title_3,
              page.orange_line_min,
              style.fifth_section_h3
            )}
          >
            Development and Implementation of Software Solutions
          </h3>
          <p className={page.body_1}>
            At Omertex, we are not just theorists- We have excellent practical
            skills as well! That’s why we are not afraid of difficult tasks and
            non-standard challenges. We can offer custom software solutions for
            banks of any complexity and scale. Before setting off to work, we
            always carefully analyze the needs and peculiarities of your bank’s
            business model which allows us to create really unique and 100%
            suitable solutions.
          </p>
          <h3
            className={classNames(
              page.title_3,
              page.orange_line_min,
              style.fifth_section_h3
            )}
          >
            Maintenance and Support Services
          </h3>
          <p className={page.body_1}>
            With custom software development, we can start from scratch. But
            that is not the only possible variant. We can also design various
            ways to modernize and fully upgrade the solutions that you already
            have. Moreover, we have great experience in providing technical
            support for various banking systems.
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
          <h2 className={classNames(page.title_1, style.sixth_section_h2)}>
            Why Omertex for banking software development services?
          </h2>
          <p className={page.body_1}>
            We are a strong team of professionals with rich expertise and real
            passion for custom software development. Our main aim is to satisfy
            the needs of all our clients and to provide ready-made products and
            solutions that are developed in full compliance with their
            individual requirements.
            <br /> <br />
            Our banking IT services have already proven their effectiveness and
            brought significant benefits for the institutions that they were
            intended for.
            <br /> <br />
            If you have any questions or you have already decided that you need
            a mobile app, banking analytics tools, a powerful banking CRM
            system, or other banking software implementation or consulting
            services, please feel free to share your contact details with us.
            <br /> <br />
            Our specialists will get back to you as soon as possible and help
            you find the right solution.
          </p>
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
