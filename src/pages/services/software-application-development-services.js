import React from "react"
import Layout from "../../components/layout"
import classNames from "../../helpers/classNames"
import PageHeader from "../../components/pageHeader/pageHeader"
import TwoColumns from "../../components/twoColumns/twoColumns"
import BottomForm from "../../components/bottomForm/bottomForm"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import page from "../../assets/styles/page.module.sass"
import style from "./software-application-development-services.module.sass"

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
      header_bg: file(relativePath: { eq: "sads/sads_bg.jpg" }) {
        ...sharpImage
      }
      payment_billing: file(
        relativePath: { eq: "sads/png_icon_payment_billing.png" }
      ) {
        ...sharpImage
      }
      p2p_landing: file(relativePath: { eq: "sads/png_icon_p2p_landing.png" }) {
        ...sharpImage
      }
      blockchain_solutions: file(
        relativePath: { eq: "sads/png_icon_blockchain_solutions.png" }
      ) {
        ...sharpImage
      }
      transfer_remittance: file(
        relativePath: { eq: "sads/png_icon_transfer_remittance.png" }
      ) {
        ...sharpImage
      }
      crowdfunding: file(
        relativePath: { eq: "sads/png_icon_crowdfunding.png" }
      ) {
        ...sharpImage
      }
      finance_management: file(
        relativePath: { eq: "sads/png_icon_finance_management.png" }
      ) {
        ...sharpImage
      }
      digital_banks: file(
        relativePath: { eq: "sads/png_icon_digital_banks.png" }
      ) {
        ...sharpImage
      }
      investment_platforms: file(
        relativePath: { eq: "sads/png_icon_investment_platforms.png" }
      ) {
        ...sharpImage
      }
      insurtech: file(relativePath: { eq: "sads/png_icon_insurtech.png" }) {
        ...sharpImage
      }
      regtech: file(relativePath: { eq: "sads/png_icon_regtech.png" }) {
        ...sharpImage
      }
    }
  `)

  const columnsData = [
    {
      image: images.payment_billing.childImageSharp.fluid,
      title: "Payment/billing software",
      description: [
        {
          description:
            "For an improved, stress-free customer experience, FinTech payment services firms leverage new tech " +
            "resolutions, mobile payments, improved risk management, and simplified POS processing. The two critical " +
            "digital payment sectors include:",
        },
        {
          title: "Mobile payments",
          description:
            "With the arrival of mobile wallets, Apple Pay, Google Wallet, Samsung Pay, and Android Pay, most people " +
            "have adopted mobile app payments rather than the use of credit cards. Our developers work with both ios " +
            "and android platforms, writing the code in modern programming languages.",
        },
        {
          title: "B2B cross-border payments",
          description:
            "By 2019, the B2B cross-border payment market value rose to over $150 trillion. In fact, it keeps " +
            "growing with time. The main challenges around  B2B payments are security, flexibility, and accuracy. " +
            "In handling these issues, firms leverage private Blockchain programs, payment management programs, " +
            "hiring E-invoicing platforms and more.",
        },
      ],
    },
    {
      image: images.p2p_landing.childImageSharp.fluid,
      title: "P2P Lending Platforms",
      description:
        "An important direction of Fintech application development services is digital lending. The main " +
        "enhancements it targets include safeguarding customer journey and quick approvals, implementation of " +
        "automation in underwriting processes, intelligent algorithms, the involvement of new audiences of borrowers " +
        "and much more. P2P platforms encourage FinTech Application development companies to use digital concepts " +
        "in automating and accelerating the process of loan decisions. As such, these platforms minimize costs in " +
        "the delivery of unique user-friendly solutions. The application development services of machine learning " +
        "concepts in lending streamlines the process with a reduction in the chances of errors. It also reduces the " +
        "duration required for loan approval and for the reception of the cash by the borrower. As such, there is " +
        "an increase in customer experiences and a reduction in the costs.",
    },
    {
      image: images.blockchain_solutions.childImageSharp.fluid,
      title: "Blockchain-based solutions",
      description:
        "Blockchain is a spread out ledger shared among some numbers into which a record of transactions is " +
        "inserted. Blockchain is mostly for cases such as loyalty programs, peer-to-peer sales, anti-money " +
        "laundering, insurance, cross-border payment, capital markets and much more. Blockchain is useful in the " +
        "immutability of records, decentralization, and fault tolerance of the system. For example, Santander is a " +
        "universal bank based in retail and commercial services. This bank founded the Blockchain concept for global " +
        "payments. Most companies opt to adopt private Blockchain to leverage the benefits of the idea without " +
        "compromising security and removing the dangers of espionage.",
    },
    {
      image: images.transfer_remittance.childImageSharp.fluid,
      title: "Money Transfer/Remittance",
      description:
        "Digital concepts change the methods of banking and money transfer. Modern software solutions enable the " +
        "development of prominent remittance software applications allowing sending and receiving money globally. " +
        "If our clients’ remittance application software requires face and voice biometrics, Blockchain and other " +
        "innovative ideas we can assist here as well. ",
    },
    {
      image: images.crowdfunding.childImageSharp.fluid,
      title: "Crowdfunding",
      description:
        "Crowdfunding platforms are rising at an ever higher rate. Mostly, they are widespread in the UK and US. As " +
        "per Statista, the total volume of crowdfunding aggregates to $16.2 billion  globally. The aim of a " +
        "crowdfunding platform is raising funds for a new or existing business through the efforts of the public. " +
        "Normally, it is conducted through the internet. Its main challenges include payment integration, UI, UX, " +
        "and load balancing. The world’s leading crowdfunding platforms include Seedrs, Indiegogo, and Kickstarter.",
    },
    {
      image: images.finance_management.childImageSharp.fluid,
      title: "Personal Finance Management",
      description:
        "Naturally, PFM FinTech Application development companies offer both Web application development and Mobile " +
        "app development services. They aim at helping the user in handling their expenditures, income, and finances. " +
        "In most cases, this Web application development is comprised of spending trends, data visualizations, " +
        "categorization, etc. Selected PFM FinTech agencies may demand access to the bank account of the user’s app, " +
        "open banking API, and other forms of data.",
    },
    {
      image: images.digital_banks.childImageSharp.fluid,
      title: "Digital Banks",
      description:
        "Online banks advance financial services that enable their customers to conduct banking activities online. " +
        "They leverage inventive concepts like AI, and voice biometrics to boost customer experiences. Similarly, " +
        "thanks to the digital model they have provided, low costs and competitive rates are on offer. Such banks " +
        "provide AI tech, chatbots, voice, and face biometrics. In addition, they are famous for highly competitive " +
        "rates and affordable digital model.",
    },
    {
      image: images.investment_platforms.childImageSharp.fluid,
      title: "Investment platforms",
      description:
        "Investment platforms enable clients to hold and control the entirety of their assets in one place. A user " +
        "can operate a laptop or a smartphone to buy or sell their mutual funds, shares, or stocks. Furthermore, " +
        "clients can confirm the asset values at convenient places and time. Hedgeable and Addepar are classic " +
        "examples of investment platforms. Addepar is a quick, safe, and accessible investment management platform. " +
        "It enhances the management of the entire user’s assets and assists them in making more grounded and " +
        "informed investment decisions.",
    },
    {
      image: images.insurtech.childImageSharp.fluid,
      title: "Insurtech",
      description:
        "Insurtech leverages loT, Data science, mobility solutions, and many digital solutions. All the data " +
        "collected from wearables, sensors and attached devices help to convey initial customized pricing schemes, " +
        "recommendations, and offers. In addition, real-time streaming of data provides efficient management of " +
        "risks by the insurers. Some of the most popular Insurtech solutions include Metromile, BrightHealth, and BIMA.",
    },
    {
      image: images.regtech.childImageSharp.fluid,
      title: "Regtech (Regulation/Risk and compliance management)",
      description:
        "Regulation technology is aimed at offering solutions to regulatory problems and challenges. Regtech uses " +
        "innovative concepts such as machine learning, cloud computing, and big data. It targets the improvement of " +
        "new regulations, predictions, modeling, risk data collection, payment monitoring and much more. Such " +
        "scientific tools and innovations help in the improvements of cloud Web application development, API’s, " +
        "Blockchain, biometrics, cryptography, and AI. ",
    },
  ]

  return (
    <Layout>
      <Helmet
        title="Software application development services"
        charSet="utf-8"
        defer={false}
      />
      <PageHeader
        image={images.header_bg.childImageSharp.fluid}
        title="Software application development services"
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
            Digital currencies, robo-advisors, and contactless payments are now
            commonplace. People plan to make their transactions simpler,
            quicker, and secure, and as a result, financial organizations are
            advised to adopt digitization and be part of ‘the FinTechs.’ This
            step should help them immensely in winning and maintaining their
            customers but it can also fail to deliver in reality.
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
            Outsource your FinTech app development
          </h2>
          <p className={page.body_1}>
            Often, financial organizations and FinTech startups are forced to
            create their entire concept in-house. This is wise, but for very
            select cases only, such as the protection of a really innovative and
            disruptive idea, or for better management in case of a successful
            and rapidly developing startup. That’s why we will advise you to
            consider outsourcing your software application development first,
            rather than building it in-house.
            <br />
            <br />
            Tech outsourcing is affordable nowadays but there are some
            requirements to the level of technological and domain expertise of
            software engineers, especially when it comes to financial branches
            as banking, insurance, payments and money transfer. Omertex is a
            responsible software development company for your enterprise or
            startup idea.
            <br />
            <br />
            From our offices in USA, UK and Germany and development center in
            Belarus, we offer extensive knowledge for our customers globally.
            Our primary objective is to customize solutions for your business
            needs with flexible app development approaches.
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
            We offer technical solutions for FInTech companies including
          </h2>
          <div className={style.two_columns}>
            <div className={style.two_columns_column}>
              <p
                className={classNames(
                  page.title_3,
                  page.orange_line_min,
                  style.two_columns_h3
                )}
              >
                Banking
              </p>
              <p
                className={classNames(
                  page.title_3,
                  page.orange_line_min,
                  style.two_columns_h3
                )}
              >
                Insurance
              </p>
              <p
                className={classNames(
                  page.title_3,
                  page.orange_line_min,
                  style.two_columns_h3
                )}
              >
                Payment and money transfer
              </p>
              <p
                className={classNames(
                  page.title_3,
                  page.orange_line_min,
                  style.two_columns_h3
                )}
              >
                Billing
              </p>
            </div>
            <div className={style.two_columns_column}>
              <p
                className={classNames(
                  page.title_3,
                  page.orange_line_min,
                  style.two_columns_h3
                )}
              >
                Investment
              </p>
              <p
                className={classNames(
                  page.title_3,
                  page.orange_line_min,
                  style.two_columns_h3
                )}
              >
                Crowdfunding
              </p>
              <p
                className={classNames(
                  page.title_3,
                  page.orange_line_min,
                  style.two_columns_h3
                )}
              >
                P2P lending
              </p>
              <p
                className={classNames(
                  page.title_3,
                  page.orange_line_min,
                  style.two_columns_h3
                )}
              >
                and other areas.
              </p>
            </div>
          </div>
          <p className={classNames(page.body_1, style.third_section_p)}>
            We also assist our customers leverage cloud-based solutions,
            Blockchain and distributed ledger technology, microservice
            architecture, data science and AI.
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
          <h2 className={page.title_1}>Our software development services</h2>
          <p className={classNames(page.body_1, style.fourth_section_p)}>
            You can approach Omertex for software application development in a
            variety of terrains.
          </p>
          <TwoColumns data={columnsData} />
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
            Our software development services
          </h2>
          <p className={page.body_1}>
            Countless innovative firms are determined to leverage FinTech
            application development services. Naturally, these companies
            generate clear resolution in such areas as personal financial
            management, investment, p2p lending, digital banking, money
            transfer, Mobile app development payments, online payments and more.
            <br /> <br />
            FinTech companies apply automation of customer-related and
            back-office operations, microservice architecture, cloud-based
            solutions, chatbots, AI, Data science and mobility solutions. These
            are useful Services for startups and enterprises in enhancing
            scalability, risk management, and customer experiences. Furthermore,
            they promote the involvement of huge audiences and operational
            processes.
            <br /> <br />
            Always count on Omertex anytime you are in need of Fintech
            implementation work, either for a startup and enterprise. This
            company is the ultimate provider for your mobile and web application
            development services. Omertex is always responsive to the needs of
            diverse customers in growing their IT infrastructure to meet their
            firm’s requirements, and users’ expectations.
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
