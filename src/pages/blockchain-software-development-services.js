import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import classNames from "../helpers/classNames"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import style from "./blockchain-software-development-services.module.sass"
import buttons from "../assets/styles/buttons.module.sass"
import { bitrix24ContactFormIntegrable } from "../helpers/bitrix24Scripts"

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
  const [hiddenColumns, setHiddenColumns] = useState(true)
  const [contactForm, setContactForm] = useState()

  useEffect(() => {
    bitrix24ContactFormIntegrable(setContactForm)
  }, [])

  const changeHiddenColumns = () => {
    setHiddenColumns(!hiddenColumns)
  }

  const images = useStaticQuery(graphql`
    query {
      header_bg: file(relativePath: { eq: "bsds/bsds_bg.jpg" }) {
        ...sharpImage
      }
      agile: file(relativePath: { eq: "bsds/png_icon_agile.png" }) {
        ...sharpImage
      }
      partnership: file(relativePath: { eq: "bsds/png_icon_partnership.png" }) {
        ...sharpImage
      }
      guaranteed_efficiency: file(
        relativePath: { eq: "bsds/png_icon_guaranteed_efficiency.png" }
      ) {
        ...sharpImage
      }
      focus: file(relativePath: { eq: "bsds/png_icon_focus.png" }) {
        ...sharpImage
      }
      unfolding_blockchain: file(
        relativePath: { eq: "bsds/png_icon_unfolding_blockchain.png" }
      ) {
        ...sharpImage
      }
      modernizing_business: file(
        relativePath: { eq: "bsds/png_icon_modernizing_business.png" }
      ) {
        ...sharpImage
      }
      decisive_groundwork: file(
        relativePath: { eq: "bsds/png_icon_decisive_groundwork.png" }
      ) {
        ...sharpImage
      }
      blockchain_devconsulting: file(
        relativePath: { eq: "bsds/png_icon_blockchain_dev_consulting.png" }
      ) {
        ...sharpImage
      }
      blockchain_appsdev: file(
        relativePath: { eq: "bsds/png_icon_blockchain_apps_dev.png" }
      ) {
        ...sharpImage
      }
      smart_contractsdev: file(
        relativePath: { eq: "bsds/png_icon_smart_contracts_dev.png" }
      ) {
        ...sharpImage
      }
      bitcoinwallet_appdev: file(
        relativePath: { eq: "bsds/png_icon_bitcoin_wallet_app_dev.png" }
      ) {
        ...sharpImage
      }
      bitcoincrypto_exchangesoftware: file(
        relativePath: {
          eq: "bsds/png_icon_bitcoin&crypto_exchange_software.png"
        }
      ) {
        ...sharpImage
      }
      business_security: file(
        relativePath: { eq: "bsds/png_icon_business_security.png" }
      ) {
        ...sharpImage
      }
      blockchain_softwaredev: file(
        relativePath: { eq: "bsds/png_icon_blockchain_software_dev.png" }
      ) {
        ...sharpImage
      }
      blockchain_consulting: file(
        relativePath: { eq: "bsds/png_icon_blockchain_consulting.png" }
      ) {
        ...sharpImage
      }
      optimization_existingsoftware: file(
        relativePath: { eq: "bsds/png_icon_optimization_existing_software.png" }
      ) {
        ...sharpImage
      }
      blockchain_dev: file(
        relativePath: { eq: "bsds/png_icon_blockchain_dev.png" }
      ) {
        ...sharpImage
      }
      smartcontracts_dev2: file(
        relativePath: { eq: "bsds/png_icon_smart_contracts_dev2.png" }
      ) {
        ...sharpImage
      }
      smartcontracts_audit: file(
        relativePath: { eq: "bsds/png_icon_smart_contracts_audit.png" }
      ) {
        ...sharpImage
      }
      blockchain_dev2: file(
        relativePath: { eq: "bsds/png_icon_blockchain_dev2.png" }
      ) {
        ...sharpImage
      }
      private_blockchaindev: file(
        relativePath: { eq: "bsds/png_icon_private_blockchain_dev.png" }
      ) {
        ...sharpImage
      }
      loan_datasharing: file(
        relativePath: { eq: "bsds/png_icon_loan_data_sharing.png" }
      ) {
        ...sharpImage
      }
      training: file(relativePath: { eq: "bsds/png_icon_training.png" }) {
        ...sharpImage
      }
      crowdsale: file(relativePath: { eq: "bsds/png_icon_crowdsale.png" }) {
        ...sharpImage
      }
      supplychain_blockchain: file(
        relativePath: { eq: "bsds/png_icon_supply_chain_blockchain.png" }
      ) {
        ...sharpImage
      }
      poe: file(relativePath: { eq: "bsds/png_icon_poe.png" }) {
        ...sharpImage
      }
      eos: file(relativePath: { eq: "bsds/png_icon_eos.png" }) {
        ...sharpImage
      }
      ethereum: file(relativePath: { eq: "bsds/png_icon_ethereum.png" }) {
        ...sharpImage
      }
      hyperledger: file(relativePath: { eq: "bsds/png_icon_hyperledger.png" }) {
        ...sharpImage
      }
      tron: file(relativePath: { eq: "bsds/png_icon_tron.png" }) {
        ...sharpImage
      }
      form_bg: file(relativePath: { eq: "common/form_bg.jpg" }) {
        ...sharpImage
      }
    }
  `)

  return (
    <Layout>
      <Helmet
        title="Blockchain Software Development Services"
        charSet="utf-8"
        defer={false}
      />
      <BackgroundImage
        Tag="section"
        className={classNames(
          style.section,
          style.justify_center,
          style.page_header
        )}
        fluid={images.header_bg.childImageSharp.fluid}
      >
        <div className={classNames(style.content)}>
          <h1 className={style.title_1}>
            Blockchain Software <br /> Development Services
          </h1>
        </div>
      </BackgroundImage>
      <section
        className={classNames(
          style.section,
          style.justify_center,
          style.first_section
        )}
      >
        <div className={classNames(style.content)}>
          <p className={style.body_1}>
            Looking for an outstanding Blockchain Software Development Services
            firm to kickstart your Blockchain Project? You’ve come to the right
            place! Begin your blockchain journey with us. This technology has
            created quite a stir in the worldwide market, and with new
            businesses opening up to it, it’s paving ways for new applications
            and use cases every other day. All major industries including
            Finance, Retail, Manufacturing, and Real Estate have been influenced
            by the Blockchain technology in one way or another.
            <br /> <br />
            It was once easy to be mistaken for just another in-shore software
            development company, but our creativity has made us remarkable.
          </p>
        </div>
      </section>
      <section
        className={classNames(
          style.section,
          style.justify_center,
          style.second_section
        )}
      >
        <div className={classNames(style.content)}>
          <h2 className={classNames(style.title_1, style.second_section_h2)}>
            About us
          </h2>
          <p className={style.body_1}>
            As a custom software development company Omertex ltd provides
            services for startups and enterprises. We have combined perennial
            experience in the development of on-line services with deep
            immersion in the new technology of blockchain. Having intricate
            knowledge of the advantages and limitations of the technology, we
            analyze and recommend the most effective solution for your project.
            We collaborate with our clients on a regular basis to provide them
            with confidence in creating the most advanced business decisions, by
            developing cutting-edge Blockchain solutions. We’re pioneers in the
            development and application of blockchain technologies, combining
            extensive business expertise with top-notch technical experience in
            applying blockchain solutions to your toughest problems. From
            technical development for Initial Coin Offerings (ICOs), to
            full-fledged decentralized applications (dApps)-we stay on the
            cutting edge of each service we offer. Being a part of that change
            is what fuels us each day. The vast domain experience of Omertex
            outsourced developers and innovative technologies allow us to
            generate secure and stable P2P solutions with maximum scalability
            for the potential growth of any projects. Start blockchain
            development with our blockchain development team to obtain the
            high-quality code and the safest verification systems needed for
            your crypto-focused websites.
          </p>
        </div>
      </section>
      <section
        className={classNames(
          style.section,
          style.justify_center,
          style.third_section
        )}
      >
        <div className={classNames(style.content)}>
          <div className={style.three_steps_box}>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_2, style.three_step_title)}
              >
                Top software Developers
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                Our blockchain development team consists of XX talented
                developers, XX% of whom are senior level specialists. All of
                them combine solid business expertise and powerful technical
                knowledge with a passion to work on challenging projects.
              </div>
            </div>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_2, style.three_step_title)}
              >
                Fintech Experience
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                Since on market, as an inshore blockchain software services
                provider, we have successfully furnished solutions for financial
                technology companies, including online cryptocurrency stock
                exchange and trading platforms.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={classNames(
          style.section,
          style.justify_center,
          style.fourth_section
        )}
      >
        <div className={classNames(style.content)}>
          <h2 className={classNames(style.title_1, style.fourth_section_h2)}>
            What We Do?
          </h2>
          <div className={style.p_line_box}>
            <div className={style.p_line} />
            <p className={style.body_1}>
              Omertex ltd is an experienced and passionate team of Blockchain
              specialists and enthusiasts who want to contribute to the shaping
              of a decentralized world. We don't compromise on quality, which is
              why we make sure to stay up to date with recent trends in the
              fields of technology, interface design, and business. At the same
              time, enabling you to get the most out of your specification and
              budget, working in concert to deliver the most comprehensive,
              efficient, and cost-effective solution to your business’ software
              requirements.
            </p>
          </div>
          <div className={style.p_line_box}>
            <div className={style.p_line} />
            <p className={style.body_1}>
              Our blockchain consulting services provide the awareness necessary
              to establish and explore even the unmapped areas of the Fintech
              world. Sharing insight is merely a fragment of our services. We
              have a tendency to develop products with the utmost precision in
              the quest to satisfy our clients.
            </p>
          </div>
          <div className={style.p_line_box}>
            <div className={style.p_line} />
            <p className={style.body_1}>
              With sheer insight, Omertex delivers distinctively tailored
              solutions for businesses and traders to reinforce their success.
              We empower brands to connect with their clients effectively to
              boost their business prospects.
            </p>
          </div>
          <div className={style.p_line_box}>
            <div className={style.p_line} />
            <p className={style.body_1}>
              Profound domain knowledge in core Finance, Tax, and Banking allows
              us to provide cutting-edge blockchain software development
              services within the FinTech space. We provide outsourcing
              blockchain software development services, technical guidance and
              prepare companies to build, manage and adopt cloud, add
              intelligent algorithms and get the data insights you need to make
              better business decisions using AI.
            </p>
          </div>
        </div>
      </section>
      <section
        className={classNames(
          style.section,
          style.justify_center,
          style.fifth_section
        )}
      >
        <div className={classNames(style.content)}>
          <h2 className={classNames(style.title_1, style.fifth_section_h2)}>
            Why Us
          </h2>
          <p className={style.body_1}>
            Our customers choose Omertex as a result of our deep domain
            knowledge in the area of Fintech and our capacity to produce truly
            unique and impactful services. Firstly, we understand your needs and
            so we make sure to adapt our processes accordingly. Our team is
            qualified to provide effective leading-edge information technology
            solutions and blockchain software development services for SMEs
            globally, which enables us to proffer Fintech services at a
            reasonable price. By utilizing our blockchain software development
            services, you can bring about solutions that simplify the purchase
            process or store virtual currency. <br /> <br />
            We have a customer-oriented approach and constantly engage in taking
            feedback throughout the process. The eagerness to serve our clients
            and procure solutions that fulfill their desires, at the stipulated
            time, molds our daily practice.
            <br /> <br />
            The Omertex ltd team includes the finest brains in the world, and we
            are thought to be among the best consulting companies in XXX.
            <br /> <br />
            Blockchain software development services permit your business to
            provide increased efficiency and better information to customers, by
            simplifying, automating, and bringing visibility to things such as:
            Consumer goods, provenance information, contract approvals,
            transaction verifications, identity and asset management etc. - all
            instantaneously, thus saving customers time and delivering a better
            Omni channel experience.
          </p>
        </div>
      </section>
      <section
        className={classNames(
          style.section,
          style.justify_center,
          style.sixth_section
        )}
      >
        <div className={classNames(style.content)}>
          <h2 className={style.title_1}>Our Approach</h2>
          <p className={classNames(style.body_1, style.sixth_section_p)}>
            Assisting you in each step with perfect business solutions for a
            limitless transcendence of your enterprise.
          </p>
          <div className={style.image_columns_box}>
            <div className={style.image_column}>
              <Img
                fluid={images.agile.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Agile
              </h3>
              <p className={style.body_1}>
                Your organization has its own approach to digital
                transformation-we adapt and add value to that. Operating in
                small compact teams enables us to produce results rapidly during
                our missions.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.partnership.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Partner Approach
              </h3>
              <p className={style.body_1}>
                Source of complementary domain expertise, on call and at the
                ready. You are a stakeholder of the best deliverable solution.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.guaranteed_efficiency.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Guaranteed Efficiency
              </h3>
              <p className={style.body_1}>
                Your time is precious to us, no loss of hours with endless
                meetings. The average time for our proofs-of-concept is six to
                eight weeks.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.focus.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Focus on innovation
              </h3>
              <p className={style.body_1}>
                Our main goal is to provide an innovative approach to blockchain
                software development when working with startups and enterprises
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.unfolding_blockchain.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Unfolding the Blockchain
              </h3>
              <p className={style.body_1}>
                Blockchain technology is the potential game changer altering the
                trajectories of whole industries. The developing team at Omertex
                is perpetually researching and experimenting to keep up with the
                advancements of the blockchain. We build and deliver first-rate
                blockchain software solutions to assist your business endeavors
                and maneuvers. Our blockchain based products are incomparably
                ideal in suiting our clients’ needs and our consulting services
                offer the necessary perceptivity required for your digital
                venture.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.modernizing_business.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Modernizing Business Solutions
              </h3>
              <p className={style.body_1}>
                For us, solutions are not mere fixes, they become the baseline
                of your upcoming or existing projects. Architectural solutions
                can lead you in the right direction and we have done that many
                times. The constantly ever-changing answers offered by different
                providers lack the dynamic characteristics of success. We offer
                final trading and exchange solutions the way you need that could
                put your business on the path to success in dramatic fashion.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.decisive_groundwork.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Decisive Groundwork
              </h3>
              <p className={style.body_1}>
                We stand ready, watch, assist and remodel your enterprise into a
                sustainable profit driving giant, by breaking down the walls and
                boundaries around client-customer interactions, and therefore
                the point is to grow more and quicker. Always giving our best to
                create ease and simplicity of use, and keeping the focus on your
                development by providing guided assistance. We deliver, and we
                keep up together with your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className={classNames(
          style.section,
          style.justify_center,
          style.seventh_section
        )}
      >
        <div className={classNames(style.content)}>
          <h2 className={style.title_1}>Our services include</h2>
          <p className={classNames(style.body_1, style.seventh_section_p)}>
            Building decentralized systems and decentralized applications;
            decentralized applications that accommodate data safely, is our
            expertise. Blockchain technology will add value to your products and
            services, while enhancing performance, functionality, and security.
            Hire developers from our blockchain development team to enjoy a
            plethora of benefits from Omertex ltd.
          </p>
          <div className={style.image_columns_box}>
            <div className={style.image_column}>
              <Img
                fluid={images.blockchain_devconsulting.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Blockchain development consulting
              </h3>
              <p className={style.body_1}>
                We assess the potential business gains, and implement private
                and public blockchain solutions in such business fields as
                Trading, Logistics, Finance, etc.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.blockchain_appsdev.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Blockchain apps development
              </h3>
              <p className={style.body_1}>
                Top-notch Blockchain apps were developed by us, that are
                appropriate for your business.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.smart_contractsdev.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Smart contracts development
              </h3>
              <p className={style.body_1}>
                We develop highly secure and reliable smart contracts to cover
                your custom needs using a Python and latter-day Ethereum-based
                technology stack. Adapt your existing systems to use blockchain
                and smart contacts by implementing distributed applications, or
                let us build a blockchain-based application and smart contacts
                from scratch.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.bitcoinwallet_appdev.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Bitcoin wallet application development
              </h3>
              <p className={style.body_1}>
                At Omertex Itd, we make sure that all the work performed by our
                skilled experts complies with industry anti-money laundering
                regulations including SOX, PCI DSS, Dodd-Frank, Check-21 and the
                Securities Act of 1933. Protect traditional and multi-signature
                wallets to guarantee security.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={
                  images.bitcoincrypto_exchangesoftware.childImageSharp.fluid
                }
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Bitcoin and cryptocurrency exchange software services
              </h3>
              <p className={style.body_1}>
                Use of cryptocurrency is the first financial application wherein
                receiving and sending payments is of prime importance. It is a
                wonderful way to construct groundbreaking apps to resolve
                various problems. Through this service, we do considerable
                research to make creative ideas for development and application
                design.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.business_security.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Business security
              </h3>
              <p className={style.body_1}>
                Attain superlative business security by employing
                blockchain-based ledgers and identity solutions, and making your
                own virtual cryptocurrency or trading platform. Determine which
                of your processes are most imperiled to eliminate risks and
                avoid potential breaches, while implementing cryptography-based
                technologies to store and process data safely.
              </p>
            </div>
          </div>
          <div
            className={classNames(
              style.image_columns_box,
              hiddenColumns ? style.hiddenColumns : ""
            )}
          >
            <div className={style.image_column}>
              <Img
                fluid={images.blockchain_softwaredev.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Blockchain software development services
              </h3>
              <p className={style.body_1}>
                We are experts in building custom, blockchain-based systems that
                support numerous industries like healthcare, FinTech, Energy
                Management, Retail and more.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.blockchain_consulting.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Blockchain consulting
              </h3>
              <p className={style.body_1}>
                As an inshore software development company, we help you assess
                and implement blockchain technology. If you are new to
                cryptography and FinTech, our blockchain development team will
                teach you the essentials, revealing the ins and outs of how
                Blockchain actually works.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={
                  images.optimization_existingsoftware.childImageSharp.fluid
                }
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Optimization of existing software
              </h3>
              <p className={style.body_1}>
                Configure the ready-made functionality offered by present
                solutions to resolve issues specific to your business. We are
                ready to offer you new opportunities with a bunch of helpful
                features and options.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.blockchain_dev.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Blockchain Development
              </h3>
              <p className={style.body_1}>
                We assist you in preparing to ICO starting from the analysis,
                writing white papers, and making working prototype to the final
                product release. Whenever you need custom blockchain software we
                are here to help you.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.smartcontracts_dev2.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Smart Contracts Development
              </h3>
              <p className={style.body_1}>
                Implement smart contracts to automate enforcement in Ethereum.
                Our blockchain development team can write your smart contract's
                code securely. Using blockchain software development services in
                application development of shopping services, it is possible to
                connect the data from the contract of purchase and sale with
                GPS. As a result, the smart contract can transfer the payment to
                the supplier and to the carrier once the “package” arrives at
                the final destination automatically.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.smartcontracts_audit.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Smart Contracts Audit
              </h3>
              <p className={style.body_1}>
                Security flaws, misbehavior, and inefficiency are very expensive
                once you’ve deployed a smart contract to the Blockchain. We help
                corporations to create the best smart Contract code.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.blockchain_dev2.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Blockchain Development
              </h3>
              <p className={style.body_1}>
                Implement cryptography-based technologies to store changeless
                data. Let us assist you in selecting which of your processes are
                suitable for this technology.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={
                  images.bitcoincrypto_exchangesoftware.childImageSharp.fluid
                }
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Exchanges
              </h3>
              <p className={style.body_1}>
                Develop safe and reliable cryptocurrency stock exchange.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.private_blockchaindev.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Private Blockchain Development
              </h3>
              <p className={style.body_1}>
                Implement a private and public blockchain in your institution or
                corporation.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.loan_datasharing.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Loan Data Sharing
              </h3>
              <p className={style.body_1}>
                Use the blockchain software development services to share credit
                information between different banks, in order to avoid multiple
                loan requests using the same documentation.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.training.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Training
              </h3>
              <p className={style.body_1}>
                Teach your team to understand the concept of blockchain
                technologies and be prepared for the next move.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.crowdsale.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Crowdsale
              </h3>
              <p className={style.body_1}>
                Fund your product ideas with Initial Coin Offerings (ICO) on
                Ethereum as we develop your Smart Contracts securely.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.supplychain_blockchain.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Supply Chain Blockchain
              </h3>
              <p className={style.body_1}>
                Implement a complete supply chain on a blockchain to track the
                whole process in a single place. C-commerce enables trade
                partners to interact in a friction-free manner, gaining deep
                visibility into their supply chain so they can make smart
                forecasting decisions.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.poe.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Proof of Existence (PoE)
              </h3>
              <p className={style.body_1}>
                Create your own notary registry. We will license our document
                registry system, engineered on top of Ethereum for private or
                public blockchains. It permits users to manage and sign
                documents.
              </p>
            </div>
          </div>
          <div className={classNames(style.justify_center)}>
            <button
              className={classNames(
                buttons.btn_dark,
                !hiddenColumns ? style.hiddenColumns : ""
              )}
              onClick={changeHiddenColumns}
            >
              Read more...
            </button>
          </div>
        </div>
      </section>
      <section
        className={classNames(
          style.section,
          style.justify_center,
          style.eighth_section
        )}
      >
        <div className={classNames(style.content)}>
          <h2 className={style.title_1}>Blockchains we work with</h2>
          <div className={style.justify_center}>
            <div className={style.blockchains_box}>
              <div className={style.color_card}>
                <Img
                  fluid={images.eos.childImageSharp.fluid}
                  className={style.color_card_icon}
                  alt="EOS"
                />
                <h3 className={classNames(style.color_card_h3, style.body_1)}>
                  EOS
                </h3>
              </div>
              <div className={style.color_card}>
                <Img
                  fluid={images.ethereum.childImageSharp.fluid}
                  className={style.color_card_icon}
                  alt="Ethereum"
                />
                <h3 className={classNames(style.color_card_h3, style.body_1)}>
                  Ethereum
                </h3>
              </div>
              <div className={style.color_card}>
                <Img
                  fluid={images.tron.childImageSharp.fluid}
                  className={style.color_card_icon}
                  alt="TRON"
                />
                <h3 className={classNames(style.color_card_h3, style.body_1)}>
                  TRON
                </h3>
              </div>
              <div className={style.color_card}>
                <Img
                  fluid={images.hyperledger.childImageSharp.fluid}
                  className={style.color_card_icon}
                  alt="Hyperledger"
                />
                <h3 className={classNames(style.color_card_h3, style.body_1)}>
                  Hyperledger
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BackgroundImage
        Tag="section"
        className={classNames(
          style.section,
          style.justify_center,
          style.ninth_section
        )}
        fluid={images.form_bg.childImageSharp.fluid}
      >
        <div className={style.content}>
          <h2 className={style.title_1}>
            Mobile & Web apps development <br /> fintech solutions
          </h2>
          <div className={style.ninth_form_box}>
            <div className={style.ninth_form_column}>
              <h3 className={classNames(style.ninth_section_h2, style.title_3)}>
                Reach out to us. <br /> Our specialists will respond shortly.
              </h3>
              <p className={classNames(style.ninth_section_p, style.body_1)}>
                Find out how Omertex can drive actionable insights and
                streamline workflows, so you can deliver results.
              </p>
              <p className={classNames(style.ninth_section_p, style.body_1)}>
                Ask an Omertex expert how we can help.
              </p>
              <p className={classNames(style.ninth_section_p, style.body_1)}>
                Explore life at Omertex, learn about available careers, or get
                in touch with an Omertex representative.
              </p>
            </div>
            <div className={style.ninth_form_column}>{contactForm}</div>
          </div>
        </div>
      </BackgroundImage>
    </Layout>
  )
}
