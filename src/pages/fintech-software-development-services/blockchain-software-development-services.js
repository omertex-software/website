import React from "react"
import Layout from "../../components/layout"
import classNames from "../../helpers/classNames"
import PageHeader from "../../components/pageHeader/pageHeader"
import BottomForm from "../../components/bottomForm/bottomForm"
import Steps from "../../components/steps/steps"
import TwoColumns from "../../components/twoColumns/twoColumns"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import page from "../../assets/styles/page.module.sass"
import style from "./blockchain-software-development-services.module.sass"

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
    }
  `)

  const stepsData = [
    {
      title: "Top software Developers",
      description:
        "Our blockchain development team consists of XX talented developers, XX% of whom are senior level " +
        "specialists. All of them combine solid business expertise and powerful technical knowledge with a passion " +
        "to work on challenging projects.",
    },
    {
      title: "Fintech Experience",
      description:
        "Since on market, as an inshore blockchain software services provider, we have successfully furnished " +
        "solutions for financial technology companies, including online cryptocurrency stock exchange and trading " +
        "platforms.",
    },
  ]

  const approachData = [
    {
      image: images.agile.childImageSharp.fluid,
      title: "Agile",
      description:
        "Your organization has its own approach to digital transformation-we adapt and add value to that. " +
        "Operating in small compact teams enables us to produce results rapidly during our missions.",
    },
    {
      image: images.partnership.childImageSharp.fluid,
      title: "Partner Approach",
      description:
        "Source of complementary domain expertise, on call and at the ready. You are a stakeholder of the best " +
        "deliverable solution.",
    },
    {
      image: images.guaranteed_efficiency.childImageSharp.fluid,
      title: "Guaranteed Efficiency",
      description:
        "Your time is precious to us, no loss of hours with endless meetings. The average time for our " +
        "proofs-of-concept is six to eight weeks.",
    },
    {
      image: images.focus.childImageSharp.fluid,
      title: "Focus on innovation",
      description:
        "Our main goal is to provide an innovative approach to blockchain software development when working with " +
        "startups and enterprises.",
    },
    {
      image: images.unfolding_blockchain.childImageSharp.fluid,
      title: "Unfolding the Blockchain",
      description:
        "Blockchain technology is the potential game changer altering the trajectories of whole industries. The " +
        "developing team at Omertex is perpetually researching and experimenting to keep up with the advancements of " +
        "the blockchain. We build and deliver first-rate blockchain software solutions to assist your business " +
        "endeavors and maneuvers. Our blockchain based products are incomparably ideal in suiting our clients’ " +
        "needs and our consulting services offer the necessary perceptivity required for your digital venture.",
    },
    {
      image: images.modernizing_business.childImageSharp.fluid,
      title: "Modernizing Business Solutions",
      description:
        "For us, solutions are not mere fixes, they become the baseline of your upcoming or existing projects. " +
        "Architectural solutions can lead you in the right direction and we have done that many times. The " +
        "constantly ever-changing answers offered by different providers lack the dynamic characteristics of " +
        "success. We offer final trading and exchange solutions the way you need that could put your business " +
        "on the path to success in dramatic fashion.",
    },
    {
      image: images.decisive_groundwork.childImageSharp.fluid,
      title: "Decisive Groundwork",
      description:
        "We stand ready, watch, assist and remodel your enterprise into a sustainable profit driving giant, by " +
        "breaking down the walls and boundaries around client-customer interactions, and therefore the point is to " +
        "grow more and quicker. Always giving our best to create ease and simplicity of use, and keeping the focus " +
        "on your development by providing guided assistance. We deliver, and we keep up together with your expectations.",
    },
  ]

  const servicesData = [
    {
      image: images.blockchain_devconsulting.childImageSharp.fluid,
      title: "Blockchain development consulting",
      description:
        "We assess the potential business gains, and implement private and public blockchain solutions in " +
        "such business fields as Trading, Logistics, Finance, etc.",
    },
    {
      image: images.blockchain_appsdev.childImageSharp.fluid,
      title: "Blockchain apps development",
      description:
        "Top-notch Blockchain apps were developed by us, that are appropriate for your business.",
    },
    {
      image: images.smart_contractsdev.childImageSharp.fluid,
      title: "Smart contracts development",
      description:
        "We develop highly secure and reliable smart contracts to cover your custom needs using a Python and " +
        "latter-day Ethereum-based technology stack. Adapt your existing systems to use blockchain and smart " +
        "contacts by implementing distributed applications, or let us build a blockchain-based application and " +
        "smart contacts from scratch. ",
    },
    {
      image: images.bitcoinwallet_appdev.childImageSharp.fluid,
      title: "Bitcoin wallet application development",
      description:
        "At Omertex, we make sure that all the work performed by our skilled experts complies with industry " +
        "anti-money laundering regulations including SOX, PCI DSS, Dodd-Frank, Check-21 and the Securities Act " +
        "of 1933. Protect traditional and multi-signature wallets to guarantee security.",
    },
    {
      image: images.bitcoincrypto_exchangesoftware.childImageSharp.fluid,
      title: "Bitcoin and cryptocurrency exchange software services",
      description:
        "Use of cryptocurrency is the first financial application wherein receiving and sending payments is of " +
        "prime importance. It is a wonderful way to construct groundbreaking apps to resolve various problems. " +
        "Through this service, we do considerable research to make creative ideas for development and " +
        "application design.",
    },
    {
      image: images.business_security.childImageSharp.fluid,
      title: "Business security",
      description:
        "Attain superlative business security by employing blockchain-based ledgers and identity solutions, and " +
        "making your own virtual cryptocurrency or trading platform. Determine which of your processes are most " +
        "imperiled to eliminate risks and avoid potential breaches, while implementing cryptography-based " +
        "technologies to store and process data safely.",
    },
    {
      image: images.blockchain_softwaredev.childImageSharp.fluid,
      title: "Blockchain software development services",
      description:
        "We are experts in building custom, blockchain-based systems that support numerous industries like " +
        "healthcare, FinTech, Energy Management, Retail and more.",
    },
    {
      image: images.blockchain_consulting.childImageSharp.fluid,
      title: "Blockchain consulting",
      description:
        "As an inshore software development company, we help you assess and implement blockchain technology. If " +
        "you are new to cryptography and FinTech, our blockchain development team will teach you the essentials, " +
        "revealing the ins and outs of how Blockchain actually works.",
    },
    {
      image: images.optimization_existingsoftware.childImageSharp.fluid,
      title: "Optimization of existing software",
      description:
        "Configure the ready-made functionality offered by present solutions to resolve issues specific to your " +
        "business. We are ready to offer you new opportunities with a bunch of helpful features and options.",
    },
    {
      image: images.blockchain_dev.childImageSharp.fluid,
      title: "Blockchain Development",
      description:
        "We assist you in preparing to ICO starting from the analysis, writing white papers, and making working " +
        "prototype to the final product release. Whenever you need custom blockchain software we are here to help you.",
    },
    {
      image: images.smartcontracts_dev2.childImageSharp.fluid,
      title: "Smart Contracts Development",
      description:
        "Implement smart contracts to automate enforcement in Ethereum. Our blockchain development team can write " +
        "your smart contract's code securely. Using blockchain software development services in application " +
        "development of shopping services, it is possible to connect the data from the contract of purchase and " +
        "sale with GPS. As a result, the smart contract can transfer the payment to the supplier and to the carrier " +
        "once the “package” arrives at the final destination automatically.",
    },
    {
      image: images.smartcontracts_audit.childImageSharp.fluid,
      title: "Smart Contracts Audit",
      description:
        "Security flaws, misbehavior, and inefficiency are very expensive once you’ve deployed a smart contract to " +
        "the Blockchain. We help corporations to create the best smart Contract code.",
    },
    {
      image: images.blockchain_dev2.childImageSharp.fluid,
      title: "Blоckchain Development",
      description:
        "Implement cryptography-based technologies to store changeless data. Let us assist you in selecting which " +
        "of your processes are suitable for this technology.",
    },
    {
      image: images.bitcoincrypto_exchangesoftware.childImageSharp.fluid,
      title: "Exchanges",
      description: "Develop safe and reliable cryptocurrency stock exchange.",
    },
    {
      image: images.private_blockchaindev.childImageSharp.fluid,
      title: "Private Blockchain Development",
      description:
        "Implement a private and public blockchain in your institution or corporation.",
    },
    {
      image: images.loan_datasharing.childImageSharp.fluid,
      title: "Loan Data Sharing",
      description:
        "Use the blockchain software development services to share credit information between different banks, in " +
        "order to avoid multiple loan requests using the same documentation.",
    },
    {
      image: images.training.childImageSharp.fluid,
      title: "Training",
      description:
        "Teach your team to understand the concept of blockchain technologies and be prepared for the next move.",
    },
    {
      image: images.crowdsale.childImageSharp.fluid,
      title: "Crowdsale",
      description:
        "Fund your product ideas with Initial Coin Offerings (ICO) on Ethereum as we develop your Smart Contracts " +
        "securely.",
    },
    {
      image: images.supplychain_blockchain.childImageSharp.fluid,
      title: "Supply Chain Blockchain",
      description:
        "Implement a complete supply chain on a blockchain to track the whole process in a single place. C-commerce " +
        "enables tradebpartners to interact in a friction-free manner, gaining deep visibility into their supply " +
        "chain so they can make smart forecasting decisions.",
    },
    {
      image: images.poe.childImageSharp.fluid,
      title: "Proof of Existence (PoE)",
      description:
        "Create your own notary registry. We will license our document registry system, engineered on top of " +
        "Ethereum for private or public blockchains. It permits users to manage and sign documents.",
    },
  ]

  return (
    <Layout>
      <Helmet
        title="Blockchain Software Development Services"
        charSet="utf-8"
        defer={false}
      />
      <PageHeader
        image={images.header_bg.childImageSharp.fluid}
        title="Blockchain software development services"
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
            Looking for an outstanding Blockchain Software Development Services
            firm to kickstart your Blockchain Project? You’ve come to the right
            place! Begin your blockchain journey with us. This technology has
            created quite a stir in the worldwide market, and with new
            businesses opening up to it, it’s paving ways for new applications
            and use cases every other day. All major industries including
            Finance, Retail, Manufacturing, Real Estate and many others have
            been influenced by the Blockchain technology in one way or another.
            <br />
            It was once easy to be mistaken for just another in-shore software
            development company, but our creativity and expertise have made us
            remarkable.
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
            About us
          </h2>
          <p className={page.body_1}>
            As a custom software development company Omertex provides blockchain
            software development services for startups and enterprises. We have
            combined perennial experience in the development of on-line services
            with deep immersion in the new technology of blockchain. Having
            intricate knowledge of the advantages and limitations of the
            technology, we analyze and recommend the most effective blockchain
            solution for your project. We collaborate with our clients on a
            regular basis to provide them with confidence in creating the most
            advanced business decisions, by developing cutting-edge Blockchain
            solutions. We’re pioneers in the development and application of
            blockchain technologies, combining extensive business expertise with
            top-notch technical experience in applying blockchain solutions to
            your toughest problems. From technical development for Initial Coin
            Offerings (ICOs), to full-fledged decentralized applications (dApps)
            - we stay on the cutting edge of each service we offer. Being a part
            of that change is what fuels us each day. The vast domain experience
            of Omertex outsourced developers and innovative technologies allow
            us to generate secure and stable P2P solutions with maximum
            scalability for the potential growth of any projects. Start
            blockchain development with our blockchain development team to
            obtain the high-quality code and the safest verification systems
            needed for your crypto-focused websites.
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
          <Steps data={stepsData} />
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
            What we do?
          </h2>
          <div className={style.p_line_box}>
            <div className={style.p_line} />
            <p className={page.body_1}>
              Omertex is an experienced and passionate team of Blockchain
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
            <p className={page.body_1}>
              Our blockchain consulting services provide the awareness necessary
              to establish and explore even the unmapped areas of the Fintech
              world. Sharing insight is merely a fragment of our services. We
              have a tendency to develop products with the utmost precision in
              the quest to satisfy our clients.
            </p>
          </div>
          <div className={style.p_line_box}>
            <div className={style.p_line} />
            <p className={page.body_1}>
              With sheer insight, Omertex delivers distinctively tailored
              solutions for businesses and traders to reinforce their success.
              We empower brands to connect with their clients effectively to
              boost their business prospects.
            </p>
          </div>
          <div className={style.p_line_box}>
            <div className={style.p_line} />
            <p className={page.body_1}>
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
          page.section,
          page.justify_center,
          style.fifth_section
        )}
      >
        <div className={page.content}>
          <h2 className={classNames(page.title_1, style.fifth_section_h2)}>
            Why us
          </h2>
          <p className={page.body_1}>
            Our customers choose Omertex as a result of our deep domain
            knowledge in the area of Fintech and our capacity to produce truly
            unique and impactful services. Firstly, we understand your needs and
            so we make sure to adapt our processes accordingly. Our team is
            qualified to provide effective leading-edge information technology
            solutions and blockchain software development services for SMEs
            globally, which enables us to proffer Fintech services at a
            reasonable price. By utilizing our blockchain software development
            services, you can bring about solutions that simplify the purchase
            process or store virtual currency.
            <br /> <br />
            We have a customer-oriented approach and constantly engage in taking
            feedback throughout the process. The eagerness to serve our clients
            and procure solutions that fulfill their desires, at the stipulated
            time, molds our daily practice.
            <br /> <br />
            The Omertex team includes the finest brains in the world, and we are
            thought to be among the best consulting companies in FinTech
            industry.
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
          page.section,
          page.justify_center,
          style.sixth_section
        )}
      >
        <div className={page.content}>
          <h2 className={page.title_1}>Our approach</h2>
          <p className={classNames(page.body_1, style.sixth_section_p)}>
            Assisting you in each step with perfect business solutions for a
            limitless transcendence of your enterprise.
          </p>
          <TwoColumns data={approachData} />
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
          <h2 className={page.title_1}>Our services include</h2>
          <p className={classNames(page.body_1, style.seventh_section_p)}>
            Building decentralized systems and decentralized applications;
            decentralized applications that accommodate data safely, is our
            expertise. Blockchain technology will add value to your products and
            services, while enhancing performance, functionality, and security.
            Hire developers from our blockchain development team to enjoy a
            plethora of benefits from Omertex.
          </p>
          <TwoColumns data={servicesData} hideAfter={6} />
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
          <h2 className={page.title_1}>Blockchains we work with</h2>
          <div className={style.eighth_section_box}>
            <div className={style.blockchains_box}>
              <div className={style.color_card}>
                <Img
                  fluid={images.eos.childImageSharp.fluid}
                  className={style.color_card_icon}
                  alt="EOS"
                />
                <h3
                  className={classNames(style.color_card_h3, page.subtitle_1)}
                >
                  EOS
                </h3>
              </div>
              <div className={style.color_card}>
                <Img
                  fluid={images.ethereum.childImageSharp.fluid}
                  className={style.color_card_icon}
                  alt="Ethereum"
                />
                <h3
                  className={classNames(style.color_card_h3, page.subtitle_1)}
                >
                  Ethereum
                </h3>
              </div>
              <div className={style.color_card}>
                <Img
                  fluid={images.tron.childImageSharp.fluid}
                  className={style.color_card_icon}
                  alt="TRON"
                />
                <h3
                  className={classNames(style.color_card_h3, page.subtitle_1)}
                >
                  TRON
                </h3>
              </div>
              <div className={style.color_card}>
                <Img
                  fluid={images.hyperledger.childImageSharp.fluid}
                  className={style.color_card_icon}
                  alt="Hyperledger"
                />
                <h3
                  className={classNames(style.color_card_h3, page.subtitle_1)}
                >
                  Hyperledger
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BottomForm title=" Mobile & Web apps development fintech solutions">
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
