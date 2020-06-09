import React from "react"
import Layout from "../../components/layout"
import classNames from "../../helpers/classNames"
import PageHeader from "../../components/pageHeader/pageHeader"
import BottomForm from "../../components/bottomForm/bottomForm"
import SectionForm from "../../components/sectionForm/sectionForm"
import Steps from "../../components/steps/steps"
import ImageSteps from "../../components/imageSteps/imageSteps"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import page from "../../assets/styles/page.module.sass"
import style from "./software-development-services-for-startups.module.sass"

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
      header_bg: file(relativePath: { eq: "sdsfs/sdsfs_bg.jpg" }) {
        ...sharpImage
      }
      proof_concept: file(
        relativePath: { eq: "sdsfs/png_icon_proof_concept.png" }
      ) {
        ...sharpImage
      }
      prototyping: file(
        relativePath: { eq: "sdsfs/png_icon_prototyping.png" }
      ) {
        ...sharpImage
      }
      mvp: file(relativePath: { eq: "sdsfs/png_icon_mvp.png" }) {
        ...sharpImage
      }
      technical_partner: file(
        relativePath: { eq: "sdsfs/png_icon_technical_partner.png" }
      ) {
        ...sharpImage
      }
      it_consulting: file(
        relativePath: { eq: "sdsfs/png_icon_it_consulting.png" }
      ) {
        ...sharpImage
      }
    }
  `)

  const stepsImageData = [
    {
      image: images.proof_concept.childImageSharp.fluid,
      title: "Proof of concept",
      description:
        "You see a problem your potential customers are faced with and believe that there is a definite market " +
        "demand to be monetized in the future. You have an idea on how to help your customers. Well, this is the " +
        "perfect time to get verification and validation that it could be implemented as a software application. At " +
        "this stage, business analysts (along with the help of software developers) can help answer the question.",
    },
    {
      image: images.prototyping.childImageSharp.fluid,
      title: "Prototyping",
      description:
        "You got through the proof of concept stage, so now your solution should be embodied in a prototype to " +
        "demonstrate to potential customers, business partners, and investors how it will work (user flow) and what " +
        "it will look like (design). A prototype will help you refine the initial idea as well as lead to new ones. " +
        "UX/UI designers and software developers can assist you with this task.",
    },
    {
      image: images.mvp.childImageSharp.fluid,
      title: "Minimum viable product",
      description:
        "MVP is a software application (web or mobile) containing a minimum set of functions that are the most " +
        "important and necessary for your customers and give your product a market value. MVP will help you verify " +
        "the product viability and market demand. Since this stage involves all participants of the project (you, " +
        "business analysts, software developers, designers, quality assurance specialists), it is important to " +
        "organize a seamless workflow to get the most out of your time.",
    },
    {
      image: images.technical_partner.childImageSharp.fluid,
      title: "Find a technical partner for your startup through Omertex",
      description:
        "Maybe you have a brilliant idea or have already tested it on first customers... But you see that its " +
        "further implementation into a minimum viable product will require significant costs that you don’t have at " +
        "the moment. It’s a common practice to introduce a partner into a startup. Learn more if you really need to " +
        "invite an Information technology partner to your startup.",
    },
    {
      image: images.it_consulting.childImageSharp.fluid,
      title: "IT consulting services for startups​",
      description:
        "Launching a startup or already have one and need a consultation? We can assist you in finding the answers " +
        "to your questions or concerns on solving current issues. At Omertex, we know how to choose technologies " +
        "eminently suitable for the business requirements, how to decide what features to choose for MVP, how to " +
        "hire and put a team together and organize the workflow to build MVP fast, and what comes next after the " +
        "first customer reviews. Learn more about IT consulting services for startups here.",
    },
  ]

  const stepsData = [
    {
      title: "Mobile app development",
      description:
        "Omertex specializes in end-to-end mobile development for both consumer and enterprise environments. With " +
        "an app from Omertex, you receive the finest mobile solution that is easy to use and efficient for external " +
        "and internal users. Our primary focus is superb quality.",
    },
    {
      title: "Web application development",
      description:
        "Can’t find an existing solution available on the market that meets your business needs? Here at Omertex, " +
        "we provide fully custom end-to-end web application development services, from design and development to " +
        "optimization and enhancement.",
    },
    {
      title: "Blockchain and distributed ledger development",
      description:
        "You can consider choosing Ethereum blockchain for your ICO, smart contracts, decentralized applications, " +
        "or IBM Hyperledger Fabric for developing applications, or solutions with a modular architecture to " +
        "transform transaction management across Fin-Tech business-networks participants.",
    },
  ]

  return (
    <Layout>
      <Helmet
        title="Software development services for startups"
        charSet="utf-8"
        defer={false}
      />
      <PageHeader
        image={images.header_bg.childImageSharp.fluid}
        title="Software development services for startups"
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
            With Omertex you will find a technical partner that has all the
            necessary expertise in one place, including business analysts and
            designers, software developers, and quality assurance engineers who
            will help you shape, implement, and deploy your project
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
          <ImageSteps data={stepsImageData} />
        </div>
      </section>
      <SectionForm title="Schedule a consultation now.">
        <p>
          Mutual understanding between you and your software development company
          is crucial for the success of a project. Book a consultation to find
          out if Omertex specialists are able to realize your vision and check
          out if the communication process is comfortable for you.
        </p>
        <p>Contact us</p>
      </SectionForm>
      <section
        className={classNames(
          page.section,
          page.justify_center,
          style.fourth_section
        )}
      >
        <div className={page.content}>
          <h2 className={classNames(page.title_1, style.fourth_section_h2)}>
            What we can do for your startup
          </h2>
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
            Communication processes and approaches to the work in Omertex
          </h2>
          <p className={classNames(page.body_1, style.fifth_section_p)}>
            Along with flexible, agile approaches to the development process,
            communication and mutual understanding are key factors in
            determining the success of any project. You can join the team here
            at Omertex and work with the developers in our office during
            development. Alternatively, we can arrange workshops on a regular
            basis or for specific milestones in addition to daily communication.
          </p>
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
