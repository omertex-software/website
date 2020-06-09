import React from "react"
import Layout from "../../components/layout"
import classNames from "../../helpers/classNames"
import PageHeader from "../../components/pageHeader/pageHeader"
import BottomForm from "../../components/bottomForm/bottomForm"
import Steps from "../../components/steps/steps"
import TwoColumns from "../../components/twoColumns/twoColumns"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import page from "../../assets/styles/page.module.sass"
import style from "./asset-management-software-development.module.sass"

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
      header_bg: file(relativePath: { eq: "amsd/amsd_bg.jpg" }) {
        ...sharpImage
      }
      it_asset: file(
        relativePath: { eq: "amsd/png_icon_it_asset_management.png" }
      ) {
        ...sharpImage
      }
      fixed_assets: file(
        relativePath: { eq: "amsd/png_icon_fixed_assets_management.png" }
      ) {
        ...sharpImage
      }
      financial_asset: file(
        relativePath: { eq: "amsd/png_icon_financial_asset_management.png" }
      ) {
        ...sharpImage
      }
      enterprise_asset: file(
        relativePath: { eq: "amsd/png_icon_enterprise_asset_management.png" }
      ) {
        ...sharpImage
      }
      infrastructure_asset: file(
        relativePath: {
          eq: "amsd/png_icon_infrastructure_asset_management.png"
        }
      ) {
        ...sharpImage
      }
      digital_asset: file(
        relativePath: { eq: "amsd/png_icon_digital_asset_management.png" }
      ) {
        ...sharpImage
      }
      public_asset: file(
        relativePath: { eq: "amsd/png_icon_public_asset_management.png" }
      ) {
        ...sharpImage
      }
      accurate: file(relativePath: { eq: "amsd/png_icon_accurate.png" }) {
        ...sharpImage
      }
      customization: file(
        relativePath: { eq: "amsd/png_icon_customization.png" }
      ) {
        ...sharpImage
      }
      unlimited_locations: file(
        relativePath: { eq: "amsd/png_icon_unlimited_locations.png" }
      ) {
        ...sharpImage
      }
      integration: file(relativePath: { eq: "amsd/png_icon_integration.png" }) {
        ...sharpImage
      }
      scalability: file(relativePath: { eq: "amsd/png_icon_scalability.png" }) {
        ...sharpImage
      }
      easy_updates: file(
        relativePath: { eq: "amsd/png_icon_easy_updates.png" }
      ) {
        ...sharpImage
      }
      security: file(relativePath: { eq: "amsd/png_icon_security.png" }) {
        ...sharpImage
      }
      affordable: file(relativePath: { eq: "amsd/png_icon_affordable.png" }) {
        ...sharpImage
      }
      other: file(relativePath: { eq: "amsd/png_icon_other.png" }) {
        ...sharpImage
      }
    }
  `)

  const typesData = [
    {
      image: images.it_asset.childImageSharp.fluid,
      title: "IT Asset Management",
      description:
        "The control and governance of IT software and hardware. It encapsulates the contract management, accounting " +
        "functions, and maintenance for IT assets.",
    },
    {
      image: images.fixed_assets.childImageSharp.fluid,
      title: "Fixed Assets Management",
      description:
        "Its practice is for the purpose of maintenance, financial accounting, and loss prevention.",
    },
    {
      image: images.financial_asset.childImageSharp.fluid,
      title: "Financial Asset Management",
      description:
        "Often referred to simply as asset management, it is the financial services industry sector that handles " +
        "customer investment accounts and investment funds.",
    },
    {
      image: images.enterprise_asset.childImageSharp.fluid,
      title: "Enterprise Asset Management",
      description:
        "It is the management of an organization’s fixed assets which include operation, maintenance, " +
        "decommissioning, and acquisition.",
    },
    {
      image: images.infrastructure_asset.childImageSharp.fluid,
      title: "Infrastructure Asset Management",
      description:
        "It refers to the management of electric gids, waterways, roads, bridges, and other public infrastructure " +
        "with a concentration on rehabilitation, replacement, and maintenance of infrastructure.",
    },
    {
      image: images.digital_asset.childImageSharp.fluid,
      title: "Digital Asset Management",
      description:
        "It manages the collection of information that the organization controls, owns, or has the full right to use.",
    },
    {
      image: images.public_asset.childImageSharp.fluid,
      title: "Public Asset Management",
      description:
        "It has the same function as that of infrastructure asset management except that public asset management has " +
        "a greater range as it includes facilities like airports, schools, public spaces, and parks. It frequently " +
        "focuses on lengthening the public assets' service life.",
    },
  ]

  const stepsData = [
    {
      title: "Time saver for everyone",
      description:
        "Imagine all the time you will save when you work with Omertex for your asset management tasks! You no " +
        "longer need to research information connected to facilities, components, or other tangible assets. Get rid " +
        "of the paper checklists in place of time-saving communication with the use of equipment base, smart " +
        "filtering, and proper context.. You can use all the precious time you save for other important purposes " +
        "or events.",
    },
    {
      title: "Tracking",
      description:
        "Asset management has a complete list of what the business leases and owns, including how assets are " +
        "utilized, when changes were last made, and where they are located. Such an extensive survey offers " +
        "unparalleled benefits.",
    },
    {
      title: "Reduce security risks",
      description:
        "With asset management software, you can determine unauthorized software and protect users from an attack " +
        "of viruses on their mobile or computer devices. In addition, it keeps a check on the potential costly " +
        "damage risks caused by viruses. So, you can have peace of mind knowing your valued clients won't be in " +
        "harm’s way when they browse your page.",
    },
    {
      title: "Improve business productivity",
      description:
        "Above all, enhanced business productivity can be found with the help of our reliable asset management " +
        "software. It guarantees efficient management of user reference manuals, materials, and product support. " +
        "With these support manuals, your employees can further contribute to increasing your organization's " +
        "productivity level. What's more, the flow of interaction in your organization will improve. Conflicts " +
        "between teams are eliminated, promoting a more productive and happier work environment.",
    },
    {
      title: "Set a priority and handle work requests well",
      description:
        "Omertex manages all of your work requests in an efficient manner to save time and money in the long run. " +
        "Since it submits requests straight to the system, entrepreneurs and business owners alike are given the " +
        "opportunity to organize a priority system for the inbound requests. The software will manage the requests " +
        "based on their urgency level. The software also sends daily updates automatically through email. Regardless " +
        "of the time in your region, rest assured that the part and current work orders will be an easy task for you.",
    },
    {
      title: "Maintenance savings",
      description:
        "Because assets need maintenance activity at various lifecycle phases, asset management helps make sure " +
        "human resources and spare parts cover the needs of your corporate without having to spend too much. Asset " +
        "management software development also takes advantage of the lower expense support during the sweet spot of " +
        "the hardware for third party maintenance.",
    },
    {
      title: "Financial reporting",
      description:
        "Businesses can’t deny the significance of accounting for software and hardware acquisitions, as well as " +
        "other amortization rates and related needs. By partnering with us, you can rest assured that your financial " +
        "statements will disclose these important statistics.",
    },
    {
      title: "Save more money",
      description:
        "Our asset management software helps organizations save big bucks by eliminating costly emergency repairs, " +
        "improving equipment uptime, and increasing asset longevity. Moreover, the software minimizes negative " +
        "publicity and fines by performing regular inspections.",
    },
    {
      title: "Asset recovery",
      description:
        "Unfortunately, IT hardware is not intended to last forever. Some assets will ultimately be scrapped or " +
        "sold, while others will be redistributed.",
    },
  ]

  const featuresData = [
    {
      image: images.accurate.childImageSharp.fluid,
      title: "Accurate",
      description:
        "We provide clients with accurate data for their company, as well as an automated solution. The data we " +
        "offer enables you to make sensible decisions based on historical statistics, not guesswork.",
    },
    {
      image: images.customization.childImageSharp.fluid,
      title: "Customization",
      description:
        "We know how precious your time is, and we are here to help you out. Our asset management software " +
        "development service offers support, functionality, and efficiency to meet your organization's needs.",
    },
    {
      image: images.unlimited_locations.childImageSharp.fluid,
      title: "Unlimited locations",
      description:
        "Another key feature of our software is its ability to add unlimited locations. You can add as many rooms, " +
        "buildings, or even regions as you want. The options are endless!",
    },
    {
      image: images.integration.childImageSharp.fluid,
      title: "Integration",
      description:
        "Network access and security system compatibility provide additional usability and richness to a system. " +
        "Integration with current data bases will help you save money and time. Our asset management software allows " +
        "you to integrate any of the tools you use on a regular basis, such as Google Apps and Jira.",
    },
    {
      image: images.scalability.childImageSharp.fluid,
      title: "Scalability",
      description:
        "Systems can be tailored according to your individual requirements. This allows you to adapt and prepare " +
        "for change without distraction from the regular operation. Key control cabinets and locker modules can " +
        "also be added.",
    },
    {
      image: images.easy_updates.childImageSharp.fluid,
      title: "Easy updates",
      description:
        "Users can perform changes, moves, and adds quickly. With our service, it is always easy to keep the " +
        "records of your assets up-to-date.",
    },
    {
      image: images.security.childImageSharp.fluid,
      title: "Security",
      description:
        "The asset management systems we offer are designed to enable authorized users to have access to stored " +
        "items. Your system manager can monitor the data from desktops connected to the network.",
    },
    {
      image: images.affordable.childImageSharp.fluid,
      title: "Affordable",
      description:
        "Good news: You don't have to break the bank when it comes to upgrading your asset management software. " +
        "We've got a reasonably priced asset tracking solution that is sure to meet all your needs.",
    },
    {
      image: images.other.childImageSharp.fluid,
      title: "Other features",
      description:
        "Online and mobile features are included, too! Now you can manage your assets in real time and on the go. " +
        "Track and manage your tangible or intangible assets using iOS devices, Android, or desktop.",
    },
  ]

  return (
    <Layout>
      <Helmet
        title="Asset management software development"
        charSet="utf-8"
        defer={false}
      />
      <PageHeader
        image={images.header_bg.childImageSharp.fluid}
        title="Asset management software development"
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
            Every business knows the importance of asset management software
            development, especially when it comes to maximizing the result of
            complicated and expensive assets. The right software will help you
            assure the availability of your asset and let senior management
            protect and handle their general investment in a nuclear power
            plant, jet aircraft, offshore drilling platform, manufacturing
            facility, and others. <br /> If you're in the market to get to know
            more about asset management software or simply looking for a
            reputable company that can offer you such a service, then you're in
            the right place!
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
          <h3 className={classNames(page.title_3, style.second_section_h2)}>
            What is Asset Management?
          </h3>
          <p className={page.body_1}>
            As a business owner, you should know the importance of keeping
            informed and accurate fixed asset records. Government regulations,
            like GASB 34 and OMB A-133, require that assets beyond a certain
            capitalization onset be tracked from acquisition to disposal. Simply
            put, asset management is the directing, maintenance, and planning of
            investments, intangible assets (e.g. human capital), and tangible or
            fixed assets (e.g. buildings). It includes the balancing of risks,
            potentials, and expenses against the desired asset performance to
            achieve the objectives of an organization. <br /> In addition, asset
            management allows organizations to assess the need for asset systems
            and asset performance at various degrees. It also enables the use of
            analytical approaches to managing an asset over its different life
            cycle periods.
          </p>
          <h3 className={classNames(page.title_3, style.second_section_h2)}>
            What about the Asset Management Software?
          </h3>
          <p className={page.body_1}>
            Also called the Asset Management Tool, it is a dedicated application
            designed for businesses of all types. Asset management software is
            used for recording and tracking an asset throughout its life cycle.
            It gives organizations essential information such as who is using
            certain assets, where they are located, how they are being used, and
            other related information. <br /> Aside from tracking and recording
            assets, it also provides additional functions which include
            optimizing supplier portfolio and licensing costs, restructuring
            procurement methods, and measuring seller performance.
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
          <h2 className={page.title_1}>Types of Asset Management</h2>
          <p className={classNames(page.body_1, style.third_section_p)}>
            Asset management comes in numerous types, specifically:
          </p>
          <TwoColumns data={typesData} />
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
          <h2 className={page.title_1}>What can Omertex do?</h2>
          <p className={classNames(page.body_1, style.fourth_section_p)}>
            As an outsourcing asset management software services provider, we
            aim to build solid, long-term partnerships with individuals and
            businesses for both mobile and web applications. Our team mostly
            focuses on FinTech solutions. We have one imperative goal, and that
            is to grow your portfolio in a substantial manner. Net worth
            individuals, financial intermediaries, corporations, pension funds,
            and other institutional investors depend on our asset management
            software development to help their business thrive in the market, no
            matter how tough the competition is. <br /> We conduct research,
            interviews, and data analyses of markets, trends, and companies to
            define the types of investments to avoid or make on your behalf. Our
            responsibility is to find efficient ways to maximize the value of
            your company or organization through managing intangible and fixed
            assets to become cheaper and more reliable. Some of these ways
            include evaluating asset financing options, maintenance discipline,
            asset accounting methods, and productions operation management.
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
          <h2 className={page.title_1}>
            How do we differ from others in the sector?
          </h2>
          <p className={classNames(page.body_1, style.fourth_section_p)}>
            As mentioned earlier, asset management companies like Omertex strive
            to grow clients’ portfolios. We help increase the overall fund value
            of our clients. This sets us apart from insurance firms, banks, and
            brokerages that only specialize in giving access to investments or
            funds being sold, like stock purchases. As a reliable asset
            management company, we have all the skills needed to get the job
            done efficiently. From confident decision making to time management
            to strong communication and analytical skills, we are sure to help
            you and your business dominate the local and global market.
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
          <h2 className={page.title_1}>
            Why does asset management software matters?
          </h2>
          <p className={classNames(page.body_1, style.sixth_section_p)}>
            There are numerous benefits to taking such a holistic, global view
            of asset management software development in order to maximize ROI,
            achieve corporate goals, and ensure efficient operations all
            throughout. Here are some specific ways our asset management
            software helps:
          </p>
          <Steps data={stepsData} hideInMobile={true} />
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
          <h2 className={page.title_1}>
            Asset Management Software Development Features
          </h2>
          <p className={classNames(page.body_1, style.seventh_section_p)}>
            The best asset management software relies on the features it
            possesses, and we are proud to say that ours is one of the most
            reliable services you can find on the market.
          </p>
          <TwoColumns data={featuresData} hideInMobile={true} />
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
