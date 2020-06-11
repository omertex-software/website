import React from "react"
import Layout from "../../components/layout"
import classNames from "../../helpers/classNames"
import PageHeader from "../../components/pageHeader/pageHeader"
import BottomForm from "../../components/bottomForm/bottomForm"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import page from "../../assets/styles/page.module.sass"
import style from "./lending-software-development.module.sass"
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
      header_bg: file(relativePath: { eq: "lsd/lsd_bg.jpg" }) {
        ...sharpImage
      }
      commercial_banks: file(
        relativePath: { eq: "lsd/png_icon_commercial_banks.png" }
      ) {
        ...sharpImage
      }
      mortgage_banks: file(
        relativePath: { eq: "lsd/png_icon_mortgage_banks.png" }
      ) {
        ...sharpImage
      }
      mortgage_brokers: file(
        relativePath: { eq: "lsd/png_icon_mortgage_brokers.png" }
      ) {
        ...sharpImage
      }
      finance_companies: file(
        relativePath: { eq: "lsd/png_icon_finance_companies.png" }
      ) {
        ...sharpImage
      }
      credit_unions: file(
        relativePath: { eq: "lsd/png_icon_credit_unions.png" }
      ) {
        ...sharpImage
      }
      online_lending: file(
        relativePath: { eq: "lsd/png_icon_online_lending.png" }
      ) {
        ...sharpImage
      }
    }
  `)

  return (
    <Layout>
      <Helmet
        title="Lending software development. Lending solutions"
        charSet="utf-8"
        defer={false}
      />
      <PageHeader
        image={images.header_bg.childImageSharp.fluid}
        title="Lending software development. Lending solutions"
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
            If you are looking for lending software solutions to assist your
            financial organization in managing complex risk calculations and
            regulative compliance requirements, you’ve come to the right place.
            At Omertex, we develop and implement financial technology solutions
            for digital banking, retail lending providers, payment industry, and
            supply chain financing companies.
            <br />
            <br />
            The retail lending software solutions we offer allow enterprises
            and/or startups to keep up to speed with market demands, changing
            financial and security regulations, and disruptive new technologies.
            If needed, our development teams are able to empower financial
            software applications with innovative technologies such as
            distributed ledger (IBM hyperledger, Blockchain, or Ethereum), big
            data, machine learning, and artificial intelligence.
            <br />
            <br />
            For financial companies who find out of the box solutions limit
            their needs, custom software development services are the only way
            to go. Customized solutions allow you to overcome those limits while
            giving you the ability to utilize commercial loan software to
            advance operational efficiency, reduce costs, automate compliance,
            and provide full visibility to even the foremost complicated
            corporate loans across all business units and back-end systems.
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
            Commercial Banks
          </h2>
          <Img
            fluid={images.commercial_banks.childImageSharp.fluid}
            className={style.second_section_image}
            alt="Commercial Banks"
          />
          <p className={page.body_1}>
            The availability of new technologies and the desire of banks to
            access more data (among other factors) has led to clients demanding
            a more customized, immediate, and frictionless banking practice. Our
            lending software enables commercial banks to serve their corporate,
            retail, and investment clients using smart software solutions by
            offering a better, more personalized, and secure banking experience
            via the web or mobile applications.
            <br />
            <br />
            Finding wholesale and commercial banking systems that are best
            suited to your needs is easy with custom design lending software. We
            are always up-to-date with information on commercial banking systems
            in the financial sector, even credit administration solutions and
            trade finance systems, so we can offer you software that is best
            suited for your bank.
            <br />
            <br />
            Omertex software solutions are created to meet banks’ needs for
            business intelligence, portfolio management, commercial lending
            origination, underwriting and workflow, loan accounting, loan sales
            and loan trade order management, research management, and data
            warehouse reporting. The lending software can be configured to model
            any business process, store any data, integrate with any system, and
            provide transparency for all of the above in any format.
          </p>
          <h2 className={classNames(page.title_1, style.second_section_h2)}>
            Mortgage Banks
          </h2>
          <Img
            fluid={images.mortgage_banks.childImageSharp.fluid}
            className={style.second_section_image}
            alt="Mortgage Banks"
          />
          <p className={page.body_1}>
            With loan boarding through payoff, the lending software streamlines
            the entire servicing process so you can support borrower or investor
            needs with confidence. With mortgage loan lending software, all
            divisions work together to enhance the focus on the client and
            improve operational effectiveness while decreasing the overall cost
            of service.
            <br />
            <br />
            You can build the system you need to improve every aspect of your
            servicing procedure. The lending software that we offer for mortgage
            banks is a complete servicing system that handles all types of loans
            and offers escrow account servicing, as well as annual analysis and
            reporting.
            <br />
            <br />
            A current challenge for you may be the volume and complexity of
            paperwork needed to originate, close, and service the loan. You
            can’t rely on old-school systems to keep up with providers who use
            modern banking software for a faster and simpler experience.
            <br />
            <br />
            With Omertex, you get a cutting-edge software with an account
            management system that gives the level of automation and credit
            scoring that is required to reduce processing time, precisely quote
            rates based on risk parameters dictated by the secondary market, and
            provide the highest level of cyber security for your customers'
            private data.
            <br />
            <br />
            The software allows mortgage banks to maintain the bare minimum
            support staff without affecting the volume of loans that it is
            likely to generate. It is tailor-made to keep up with the challenges
            of a mortgage industry such as the global outreach (creating a
            customer-base on foreign lands), processing an enormous amount of
            data day in and day out, and always being in sync with the
            constantly evolving regulations.
          </p>
          <h2 className={classNames(page.title_1, style.second_section_h2)}>
            Mortgage Brokers
          </h2>
          <Img
            fluid={images.mortgage_brokers.childImageSharp.fluid}
            className={style.second_section_image}
            alt="Mortgage Brokers"
          />
          <p className={page.body_1}>
            These days the job of the mortgage broker working in different
            financial organizations is almost impossible without the use of
            advanced computer software. We can offer various software solutions
            to assist and guide you through all of your everyday tasks,
            including searching for loans, dealing with customers, and
            communicating with banks and other financial institutions.
            <br />
            <br />
            The lending software makes mortgage brokers’ tasks much more
            flexible. At Omertex, we develop and suggest software that spare you
            the trouble of going through difficult procedures, which is only
            possible thanks to our customized solutions.
            <br />
            <br />
            The software solutions were designed specifically with an eye on the
            ever-burgeoning mortgage industry and enables mortgage brokers to
            operate in an organized manner. It is also immensely helpful in
            keeping track of the latest business status. The software has also
            proved its utility by easing the process of reaching to perspective
            and past customers by doing so automatically.
            <br />
            <br />
            Automated strategies are a novel feature of the lending software
            that helps mortgage brokers in managing customer relationships in an
            efficient manner. Promoting customer service is another unique
            aspect of the software. These strategies go a long way in
            facilitating mortgage brokers to generate repeat and referral
            business with ease and, over the course of time, attracting
            customers with their efficient dealings.
          </p>
          <h2 className={classNames(page.title_1, style.second_section_h2)}>
            Finance Companies
          </h2>
          <Img
            fluid={images.finance_companies.childImageSharp.fluid}
            className={style.second_section_image}
            alt="Finance Companies"
          />
          <p className={page.body_1}>
            Operating an efficient and profitable finance company is easier when
            you have our software solutions at your fingertips. In addition to
            boarding loans, understanding risks, making calculations, taking
            payments, and all the other essentials of finance company services,
            we also provide you with a system that can assist you in effectively
            managing your receivables and lessen delinquencies. Indeed, at the
            heart of every prosperous finance company is an amazing collections
            team and methods that yield results. This is where Omertex landing
            software really shines.
            <br />
            <br />
            Our software not only assists in facilitating your underwriting
            actions and processing approved loans, but it also provides you
            access to tools that help you manage and secure your receivables.
            Our software solutions give you more power, queueing delinquent
            accounts based on any criteria you set. Then you can automatically
            assign them to your collections team where they can enter
            appropriate data and schedule promises to pay.
            <br />
            <br />
            Furthermore, we grant you access to custom reporting, accounting,
            repo-processing, and extra functionality, giving you a complete
            technology solution for all of your finance company services.
            <br />
            <br />
            Our portfolio of solutions can be tailored to your finance company’s
            specific needs, giving you the abilities and information that you
            need to do business your way. All of our solutions are fully
            integrated, including our reporting and accounting solutions, giving
            you an easy way to streamline and manage each of your business
            operations.
          </p>
          <h2 className={classNames(page.title_1, style.second_section_h2)}>
            Credit Unions
          </h2>
          <Img
            fluid={images.credit_unions.childImageSharp.fluid}
            className={style.second_section_image}
            alt="Credit Unions"
          />
          <p className={page.body_1}>
            Credit unions pride themselves on the personal relationships they
            have with their community. Our software solutions include features
            that can help you keep track of customer conversations, send
            tailored emails and letters, link scanned documents, and schedule
            appointments.
            <br />
            <br />
            You provide tailored financial services to individuals and small
            organizations. Therefore, we have built in a wide range of product
            definition parameters that can be combined in many different ways to
            enable you to tailor a product that responds to your customers’
            needs – and we made it simple and straightforward so that you can
            design new products yourself.
            <br />
            <br />
            Producing regulatory and association reports can be complex and
            time-consuming. The lending software can have reports already
            inbuilt, and the monitoring systems can be quick and easy using our
            flexible report writing tool that can export to various applications
            like Microsoft Excel.
            <br />
            <br />
            With increasing competition from banks and payday lenders, many
            credit unions are either opening new branches or joining forces to
            serve a wider group. Our lending software solutions allow you to add
            new branches or join credit unions together with the ability for any
            client to walk into any office and be served.
          </p>
          <h2 className={classNames(page.title_1, style.second_section_h2)}>
            Online Lending Companies
          </h2>
          <Img
            fluid={images.online_lending.childImageSharp.fluid}
            className={style.second_section_image}
            alt="Online Lending Companies"
          />
          <p className={page.body_1}>
            The lending software for startups and enterprises provides a unique
            decision engine which fuels your online lending business with the
            ability to quickly originate loans, service existing accounts,
            provide access to the tools you need to manage your whole portfolio,
            and a user-friendly website.
            <br />
            <br />
            If you need a computer system that is custom built for your company,
            our lending software solution gives you the features you need, when
            you need them.
            <br />
            <br />
            You don't need a lending software that was developed for a single
            loan type, you need a lending software that can be perfectly
            configured for your company. Whether you give auto loans, consumer
            loans, real estate loans, mortgage loans, boat loans, title loans,
            medical loans, or almost any other type of loans, our software
            solutions can really ease your work.
            <br />
            <br />
            The lending software can offer an online application that you can
            customize to your needs. This is the simplest way to get a loan and
            customer data into the system. Just pick the information you want to
            collect and what will be required.
            <br />
            <br />
            Your application can be viewed from the customer-facing website we
            provide or quickly embed on your own website. The software we offer
            helps you service your loans by automating your routine
            communications tasks. You can choose to create template messages and
            have the system send them out automatically based on loan events
            like when payments are made, when the loan becomes delinquent, or
            when a credit card expires, just to name a few. It can also provide
            a customer-facing website where your customers can log in and view
            their loan data.
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
