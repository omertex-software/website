import React from "react"
import Layout from "../../../components/layout"
import classNames from "../../../helpers/classNames"
import PageHeader from "../../../components/pageHeader/pageHeader"
import ThreeColumns from "../../../components/threeColumns/threeColumns"
import BottomForm from "../../../components/bottomForm/bottomForm"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import page from "../../../assets/styles/page.module.sass"
import style from "./it-technical-partner-for-your-startup.module.sass"
import Img from "gatsby-image"

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
      header_bg: file(relativePath: { eq: "itpfs/itpfs_bg.jpg" }) {
        ...sharpImage
      }
      message: file(relativePath: { eq: "itpfs/png_icon_message.png" }) {
        ...sharpImage
      }
      people: file(relativePath: { eq: "itpfs/png_icon_people.png" }) {
        ...sharpImage
      }
      settings: file(relativePath: { eq: "itpfs/png_icon_settings.png" }) {
        ...sharpImage
      }
      agile: file(relativePath: { eq: "itpfs/png_icon_agile.png" }) {
        ...sharpImage
      }
      scrum: file(relativePath: { eq: "itpfs/png_icon_scrum.png" }) {
        ...sharpImage
      }
      waterfall: file(relativePath: { eq: "itpfs/png_icon_waterfall.png" }) {
        ...sharpImage
      }
    }
  `)

  const columnData = [
    {
      image: images.agile.childImageSharp.fluid,
      title: "Agile",
      description:
        "The agile methodology allows the team of technical professionals to bypass traditional processes in " +
        "developing more projects while consuming lesser time.",
    },
    {
      image: images.scrum.childImageSharp.fluid,
      title: "Scrum",
      description:
        "Scrum methodology, on the other hand, offers flexible methods where the processes are carefully planned, " +
        "and progress is assessed. The projects being done rely on real analysis and not on predictions.",
    },
    {
      image: images.waterfall.childImageSharp.fluid,
      title: "Waterfall",
      description:
        "Finally, the waterfall methodology is a traditional approach wherein the methods being followed include " +
        "sequences that should be done first before another stage begins. It may also happen that the customer will " +
        "review the specifications of software before the developer can start the design phase.",
    },
  ]

  return (
    <Layout>
      <Helmet
        title="Information technology partner for Startups"
        charSet="utf-8"
        defer={false}
      />
      <PageHeader
        image={images.header_bg.childImageSharp.fluid}
        title="Information technology partner for Startups"
      />
      <section
        className={classNames(
          page.section,
          page.justify_center,
          style.first_section
        )}
      >
        <div className={page.content}>
          <h2 className={page.title_1}>Running a startup in changing times?</h2>
          <p className={classNames(page.body_1, style.first_section_p)}>
            As you strive to help your new company adapt to fast-paced
            developments, it’s essential to have a technology partner with the
            right expertise on board. Whether you come with or without a
            technical background, an IT technology partner aims to help employ
            software solutions, including Fintech ones, in your startup web or
            mobile applications.
            <br />
            Our company has deep expertise in building software applications and
            outsourcing startup development. Reach out to us to discuss how we
            can get you into long-lasting relationships with your prospects,
            while maintaining consistent communication.
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
            A technology partner may be just what you need.
          </h2>
          <p className={classNames(page.body_1, style.second_section_p)}>
            Tech support for startups-can be of utmost utility, most especially
            when you are a non-technical business owner aiming to create a
            technical product for the sake of your customers. Getting up to
            speed on tech related concepts via your tech partner can help you
            translate such products’ potential market performance into
            discussions with investors and business partners.
            <br />
            <br />
            Having a seamless and easy-to-use application in your business
            contributes to the creation of an excellent user experience.
            Allowing you to positively reinforce and maintain ease of
            interaction and thus indirectly bolster rapport with customers. It
            forms an extra pillar that further undergirds the integrity of your
            brand and what it has to offer.
            <br />
            <br />
            Engaging a qualified fintech startup IT technical consultant can be
            advantageous for your team, enabling them to focus more on the
            actual details and operations of your business. If increasing
            productivity and efficiently maximizing your attention are a
            priority for your startup going forward, we may be able to assist in
            creating that space.
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
          <h2 className={classNames(page.title_1, style.third_section_h2)}>
            What can be expected from a technology partner
          </h2>
          <div className={style.expect_list}>
            <div className={style.expect}>
              <Img
                fluid={images.message.childImageSharp.fluid}
                className={style.expect_icon}
                alt="Icon"
              />
              <p className={classNames(page.body_1, style.expect_description)}>
                When employing a startup IT technical consultant service, it is
                essential to inquire about the moves you can expect to be
                employed whenever your business grows in the future. In this
                way, you can see and feel how passionate we are about our work
                <br />A tech consultancy worth its salt should have the
                initiative to do more than only follow instructions. Indeed it
                should proactively contribute some ideas and effectively
                determine your technological needs
              </p>
            </div>
            <div className={style.expect}>
              <Img
                fluid={images.people.childImageSharp.fluid}
                className={style.expect_icon}
                alt="Icon"
              />
              <p className={classNames(page.body_1, style.expect_description)}>
                To sustain your business FinTech needs, it is no longer
                sufficient to have committed, hardworking digital technology
                partners. They should have the skills and expertise that prove
                their efficiency at work. Regardless of the tech standards, they
                should be able to keep themselves in the know regarding emerging
                trends.
              </p>
            </div>
            <div className={style.expect}>
              <Img
                fluid={images.settings.childImageSharp.fluid}
                className={style.expect_icon}
                alt="Icon"
              />
              <p className={classNames(page.body_1, style.expect_description)}>
                The IT technology partners at Omertex are innovative and open to
                changes. We aim to be creative problem solvers in finding the
                right options to get the resources that your startup needs. We
                get things done efficiently while making sure to adhere to all
                required deadlines.
              </p>
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
          <h2 className={classNames(page.title_1, style.fourth_section_h2)}>
            How a tech partner can contribute in the future when your startup
            starts to expand
          </h2>
          <p className={classNames(page.body_1, style.fourth_section_p)}>
            Information technology partner should consistently understand your
            expectations and communicate with you, especially if there are
            further developments that need handling for your business to stay up
            to date and keep up with high standards. We make sure that we meet
            your time-frames and goals without sacrificing the quality of work
            done.
            <br />
            <br />
            Outsourcing development for startups is an important approach in
            properly maintaining your applications and ensure they are working
            well. Customers are expecting them to consistently meet their needs
            and make your products and services accessible anytime, anywhere.
            While your business is expanding, your tech partner can make sure
            that the software is meeting the demands of the users.
          </p>
          <h2 className={classNames(page.title_1, style.fourth_section_h2)}>
            Where to look for a technology partner and why you might need one
          </h2>
          <p className={classNames(page.body_1, style.fourth_section_p)}>
            A software outsourcing company is a cost-effective way of finding a
            technology partner for your startup, so your business stays
            competitive in the emerging trends while being productive as you
            focus on formulating strategies to make it grow. Outsourcing allows
            you to run different applications on a limited budget.
            <br />
            Omertex can help you leverage your functions, although certain
            situations may require you to downsize or expand some elements of
            your business. This may save time training new staff whenever
            innovation alters the terrain, because we already have software
            developers who are adaptable to the any changes in technology. They
            can meet tight deadlines if you want to launch an app quickly
            without compromising its quality and functionality
          </p>
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
          <div className={page.two_columns}>
            <p
              className={classNames(
                page.body_1,
                page.orange_line,
                page.two_columns_column,
                style.fifth_section_column
              )}
            >
              Omertex is a team of professional experts specializing in mobile
              app development, web application development, and custom software
              development - considered to be the basic needs of a business. If
              you want your startup to grow and meet the industry’s demands, the
              startup IT technical consultants of Omertex Technologies can offer
              valuable tools and strategy that will leverage your services.
            </p>
            <p
              className={classNames(
                page.body_1,
                page.orange_line,
                page.two_columns_column
              )}
            >
              The firm offers custom software developments specially tailored to
              your business needs. Omertex provides FinTech solutions with
              expertise related to this field. We have a solid understanding of
              the technology, processes resulting in a viable outcome, and real
              knowledge about the priorities in need of addressing.
            </p>
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
          <h2 className={page.title_1}>Development methodologies</h2>
          <p className={classNames(page.body_1, style.sixth_section_p)}>
            Obviously, businesses should use development methodologies that will
            allow them to move fast enough to cope up with changes in the state
            of technology. But how can you identify which method is right for
            your startup? Let’s take a look at the difference between the
            respective approaches of agile, scrum, and waterfall to keep you on
            the right track before you finalize your decision. As your
            technology partner, we can offer suggestions on how each of these
            methods is effective depending on your business demands. We will
            make sure that the one you choose can sustain a growing startup
            whenever innovations exist.
          </p>
          <ThreeColumns data={columnData} minTitle={true} />
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
            The Omertex Team
          </h2>
          <p className={page.body_1}>
            As your professional information technology partner, the Omertex
            Team consists of highly-qualified individuals, from software
            developers to FinTech startup IT technology consultants and reliable
            digital technology partners. They are responsible for making it easy
            for users to navigate the software or applications they develop.
            They are not just focused on the features of the product they
            created, but they also make sure it is beneficial for both the
            business and their prospective clients.
            <br />
            <br />
            As IT partners for startups, we initiate constant communication to
            your startup ensuring the business reaches its goals. We are not
            only focused on the given instructions, but also using our knowledge
            and experience to ensure that the software aids in convenient
            communication between customers and business.
            <br />
            <br />
            At Omertex we only employ highly-qualified individuals possessing
            in-depth knowledge surrounding the latest innovations in development
            technologies. The aim is always to provide solutions based on real
            analysis gathered from each stage of development. This level of
            performance not only advantages the startup, but the majority of
            improvements made carry over to benefit your loyal customers.
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
