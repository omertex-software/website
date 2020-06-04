import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import classNames from "../../helpers/classNames"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import style from "./asset-management-software-development.module.sass"
import buttons from "../../assets/styles/buttons.module.sass"
import { bitrix24ContactFormIntegrable } from "../../helpers/bitrix24Scripts"

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
  const [hiddenSteps, setHiddenSteps] = useState(true)
  const [hiddenColumns, setHiddenColumns] = useState(true)
  const [contactForm, setContactForm] = useState()

  useEffect(() => {
    if (window.innerWidth > 760) {
      setHiddenSteps(true)
      setHiddenColumns(true)
    } else {
      setHiddenSteps(false)
      setHiddenColumns(false)
    }
  }, [])

  useEffect(() => {
    bitrix24ContactFormIntegrable(setContactForm)
  }, [])

  const changeHiddenSteps = () => {
    setHiddenSteps(!hiddenSteps)
  }

  const changeHiddenColumns = () => {
    setHiddenColumns(!hiddenColumns)
  }

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
      form_bg: file(relativePath: { eq: "common/form_bg.jpg" }) {
        ...sharpImage
      }
    }
  `)

  return (
    <Layout>
      <Helmet
        title="Asset management software development"
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
            Asset management software development
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
        <div className={style.content}>
          <p className={style.body_1}>
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
          style.section,
          style.justify_center,
          style.second_section
        )}
      >
        <div className={style.content}>
          <h3 className={classNames(style.title_3, style.second_section_h2)}>
            What is Asset Management?
          </h3>
          <p className={style.body_1}>
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
          <h3 className={classNames(style.title_3, style.second_section_h2)}>
            What about the Asset Management Software?
          </h3>
          <p className={style.body_1}>
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
          style.section,
          style.justify_center,
          style.third_section
        )}
      >
        <div className={style.content}>
          <h2 className={style.title_1}>Types of Asset Management</h2>
          <p className={classNames(style.body_1, style.third_section_p)}>
            Asset management comes in numerous types, specifically:
          </p>
          <div className={style.image_columns_box}>
            <div className={style.image_column}>
              <Img
                fluid={images.it_asset.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                IT Asset Management
              </h3>
              <p className={style.body_1}>
                The control and governance of IT software and hardware. It
                encapsulates the contract management, accounting functions, and
                maintenance for IT assets.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.fixed_assets.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Fixed Assets Management
              </h3>
              <p className={style.body_1}>
                Its practice is for the purpose of maintenance, financial
                accounting, and loss prevention.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.financial_asset.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Financial Asset Management
              </h3>
              <p className={style.body_1}>
                Often referred to simply as asset management, it is the
                financial services industry sector that handles customer
                investment accounts and investment funds.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.enterprise_asset.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Enterprise Asset Management
              </h3>
              <p className={style.body_1}>
                It is the management of an organization’s fixed assets which
                include operation, maintenance, decommissioning, and
                acquisition.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.infrastructure_asset.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Infrastructure Asset Management
              </h3>
              <p className={style.body_1}>
                It refers to the management of electric gids, waterways, roads,
                bridges, and other public infrastructure with a concentration on
                rehabilitation, replacement, and maintenance of infrastructure.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.digital_asset.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Digital Asset Management
              </h3>
              <p className={style.body_1}>
                It manages the collection of information that the organization
                controls, owns, or has the full right to use.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.public_asset.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Public Asset Management
              </h3>
              <p className={style.body_1}>
                It has the same function as that of infrastructure asset
                management except that public asset management has a greater
                range as it includes facilities like airports, schools, public
                spaces, and parks. It frequently focuses on lengthening the
                public assets' service life.
              </p>
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
        <div className={style.content}>
          <h2 className={style.title_1}>What can Omertex do?</h2>
          <p className={classNames(style.body_1, style.fourth_section_p)}>
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
          style.section,
          style.justify_center,
          style.fifth_section
        )}
      >
        <div className={style.content}>
          <h2 className={style.title_1}>
            How do we differ from others in the sector?
          </h2>
          <p className={classNames(style.body_1, style.fourth_section_p)}>
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
          style.section,
          style.justify_center,
          style.sixth_section
        )}
      >
        <div className={style.content}>
          <h2 className={style.title_1}>
            Why does asset management software matters?
          </h2>
          <p className={classNames(style.body_1, style.sixth_section_p)}>
            There are numerous benefits to taking such a holistic, global view
            of asset management software development in order to maximize ROI,
            achieve corporate goals, and ensure efficient operations all
            throughout. Here are some specific ways our asset management
            software helps:
          </p>
          <div
            className={style.justify_center}
            style={hiddenSteps ? { display: "none" } : { display: "flex" }}
          >
            <button className={buttons.btn_white} onClick={changeHiddenSteps}>
              read more
            </button>
          </div>
          <div
            className={style.three_steps_box}
            style={hiddenSteps ? { display: "flex" } : { display: "none" }}
          >
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                Time saver for everyone
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                Imagine all the time you will save when you work with Omertex
                for your asset management tasks! You no longer need to research
                information connected to facilities, components, or other
                tangible assets. Get rid of the paper checklists in place of
                time-saving communication with the use of equipment base, smart
                filtering, and proper context.. You can use all the precious
                time you save for other important purposes or events.
              </div>
            </div>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                Tracking
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                Asset management has a complete list of what the business leases
                and owns, including how assets are utilized, when changes were
                last made, and where they are located. Such an extensive survey
                offers unparalleled benefits.
              </div>
            </div>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                Reduce security risks
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                With asset management software, you can determine unauthorized
                software and protect users from an attack of viruses on their
                mobile or computer devices. In addition, it keeps a check on the
                potential costly damage risks caused by viruses. So, you can
                have peace of mind knowing your valued clients won't be in
                harm’s way when they browse your page.
              </div>
            </div>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                Improve business productivity
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                Above all, enhanced business productivity can be found with the
                help of our reliable asset management software. It guarantees
                efficient management of user reference manuals, materials, and
                product support. With these support manuals, your employees can
                further contribute to increasing your organization's
                productivity level. What's more, the flow of interaction in your
                organization will improve. Conflicts between teams are
                eliminated, promoting a more productive and happier work
                environment.
              </div>
            </div>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                Set a priority and handle work requests well
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                Omertex manages all of your work requests in an efficient manner
                to save time and money in the long run. Since it submits
                requests straight to the system, entrepreneurs and business
                owners alike are given the opportunity to organize a priority
                system for the inbound requests. The software will manage the
                requests based on their urgency level. The software also sends
                daily updates automatically through email. Regardless of the
                time in your region, rest assured that the part and current work
                orders will be an easy task for you.
              </div>
            </div>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                Maintenance savings
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                Because assets need maintenance activity at various lifecycle
                phases, asset management helps make sure human resources and
                spare parts cover the needs of your corporate without having to
                spend too much. Asset management software development also takes
                advantage of the lower expense support during the sweet spot of
                the hardware for third party maintenance.
              </div>
            </div>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                Financial reporting
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                Businesses can’t deny the significance of accounting for
                software and hardware acquisitions, as well as other
                amortization rates and related needs. By partnering with us, you
                can rest assured that your financial statements will disclose
                these important statistics.
              </div>
            </div>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                Save more money
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                Our asset management software helps organizations save big bucks
                by eliminating costly emergency repairs, improving equipment
                uptime, and increasing asset longevity. Moreover, the software
                minimizes negative publicity and fines by performing regular
                inspections.
              </div>
            </div>
            <div className={style.three_step}>
              <div
                className={classNames(style.title_3, style.three_step_title)}
              >
                Asset recovery
              </div>
              <div
                className={classNames(
                  style.body_1,
                  style.three_step_description
                )}
              >
                Unfortunately, IT hardware is not intended to last forever. Some
                assets will ultimately be scrapped or sold, while others will be
                redistributed.
              </div>
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
        <div className={style.content}>
          <h2 className={style.title_1}>
            Asset Management Software Development Features
          </h2>
          <p className={classNames(style.body_1, style.seventh_section_p)}>
            The best asset management software relies on the features it
            possesses, and we are proud to say that ours is one of the most
            reliable services you can find on the market.
          </p>
          <div
            className={style.justify_center}
            style={hiddenColumns ? { display: "none" } : { display: "flex" }}
          >
            <button className={buttons.btn_white} onClick={changeHiddenColumns}>
              read more
            </button>
          </div>
          <div
            className={style.image_columns_box}
            style={hiddenColumns ? { display: "flex" } : { display: "none" }}
          >
            <div className={style.image_column}>
              <Img
                fluid={images.accurate.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Accurate
              </h3>
              <p className={style.body_1}>
                We provide clients with accurate data for their company, as well
                as an automated solution. The data we offer enables you to make
                sensible decisions based on historical statistics, not
                guesswork.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.customization.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Customization
              </h3>
              <p className={style.body_1}>
                We know how precious your time is, and we are here to help you
                out. Our asset management software development service offers
                support, functionality, and efficiency to meet your
                organization's needs.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.unlimited_locations.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Unlimited locations
              </h3>
              <p className={style.body_1}>
                Another key feature of our software is its ability to add
                unlimited locations. You can add as many rooms, buildings, or
                even regions as you want. The options are endless!
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.integration.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Integration
              </h3>
              <p className={style.body_1}>
                Network access and security system compatibility provide
                additional usability and richness to a system. Integration with
                current data bases will help you save money and time. Our asset
                management software allows you to integrate any of the tools you
                use on a regular basis, such as Google Apps and Jira.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.scalability.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Scalability
              </h3>
              <p className={style.body_1}>
                Systems can be tailored according to your individual
                requirements. This allows you to adapt and prepare for change
                without distraction from the regular operation. Key control
                cabinets and locker modules can also be added.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.easy_updates.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Easy updates
              </h3>
              <p className={style.body_1}>
                Users can perform changes, moves, and adds quickly. With our
                service, it is always easy to keep the records of your assets
                up-to-date.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.security.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Security
              </h3>
              <p className={style.body_1}>
                The asset management systems we offer are designed to enable
                authorized users to have access to stored items. Your system
                manager can monitor the data from desktops connected to the
                network.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.affordable.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Affordable
              </h3>
              <p className={style.body_1}>
                Good news: You don't have to break the bank when it comes to
                upgrading your asset management software. We've got a reasonably
                priced asset tracking solution that is sure to meet all your
                needs.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.other.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Other features
              </h3>
              <p className={style.body_1}>
                Online and mobile features are included, too! Now you can manage
                your assets in real time and on the go. Track and manage your
                tangible or intangible assets using iOS devices, Android, or
                desktop.
              </p>
            </div>
          </div>
        </div>
      </section>
      <BackgroundImage
        Tag="section"
        className={classNames(
          style.section,
          style.justify_center,
          style.eighth_section
        )}
        fluid={images.form_bg.childImageSharp.fluid}
      >
        <div className={style.content}>
          <h2 className={classNames(style.title_1, style.eighth_section_h2)}>
            Contact us
          </h2>
          <div className={style.eighth_form_box}>
            <div className={style.eighth_form_column}>
              <h3
                className={classNames(style.eighth_section_h3, style.title_3)}
              >
                Write to us straight away and find out what our experts can do
                for your project
              </h3>
            </div>
            <div className={style.eighth_form_column}>{contactForm}</div>
          </div>
        </div>
      </BackgroundImage>
    </Layout>
  )
}
