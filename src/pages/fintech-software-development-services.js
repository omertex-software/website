import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import classNames from "../helpers/classNames"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import style from "./fintech-software-development-services.module.sass"
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
  const [contactForm, setContactForm] = useState()

  useEffect(() => {
    bitrix24ContactFormIntegrable(setContactForm)
  }, [])

  const images = useStaticQuery(graphql`
    query {
      header_bg: file(relativePath: { eq: "fsds/fsds_bg.jpg" }) {
        ...sharpImage
      }
      personal_finance: file(
        relativePath: { eq: "fsds/png_icon_personal_finance.png" }
      ) {
        ...sharpImage
      }
      payments: file(relativePath: { eq: "fsds/png_icon_payments.png" }) {
        ...sharpImage
      }
      lending: file(relativePath: { eq: "fsds/png_icon_lending.png" }) {
        ...sharpImage
      }
      banking: file(relativePath: { eq: "fsds/png_icon_banking.png" }) {
        ...sharpImage
      }
      equity_financing: file(
        relativePath: { eq: "fsds/png_icon_equity_financing.png" }
      ) {
        ...sharpImage
      }
      insurance: file(relativePath: { eq: "fsds/png_icon_insurance.png" }) {
        ...sharpImage
      }
      investment: file(relativePath: { eq: "fsds/png_icon_investment.png" }) {
        ...sharpImage
      }
      money_transfers: file(
        relativePath: { eq: "fsds/png_icon_money_transfers.png" }
      ) {
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
        title="FinTech software development services"
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
            FinTech software development services
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
          <h2 className={style.title_1}>
            Robo-advisors. Digital currencies. Contactless payments.
          </h2>
          <p className={classNames(style.body_1, style.first_section_p)}>
            As an owner of a financial company or bank, you want a fast, easy
            and secure transaction. This is why undergoing digitization and
            engaging in FinTech is both necessary and crucial in order to drive
            in more customers and retain loyal clients. FinTech software
            development services are technically intricate and require the help
            of an experienced professional. Various companies call Omertex a
            reliable partner as we have a massive set of experts with in-depth,
            unparalleled knowledge as well as high-end tools and technologies.
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
          <h2 className={classNames(style.title_1, style.second_section_h2)}>
            What is FinTech?
          </h2>
          <p className={style.body_1}>
            When you use your credit card, Google Wallet, PayPal or Apple Pay to
            make a purchase online, the banks and the e-commerce retailers
            behind the money exchange are making use of FinTech. When you go
            online to look for the suitable mortgage rates for your dream home,
            that is FinTech. <br /> FinTech (Financial Technology) is generally
            a technology that's utilized to help companies handle all of the
            financial aspects of their business (e.g. business models, new
            applications and software) or applied in financial services. It has
            long been the basis for an end-to-end transaction process over the
            Internet thru Cloud services.
          </p>
          <h3 className={classNames(style.title_3, style.second_section_h3)}>
            Example of FinTech
          </h3>
          <p className={style.body_1}>
            Today, you can open a bank account online without visiting the bank
            physically. Linking the account to your mobile device and monitoring
            your transactions are highly possible. You can also convert your
            mobile device into a digital wallet and utilize it to pay for things
            in your account.
            <br />
            <br />
            FinTech is further shown in the investment and insurance industries.
            The providers of car insurance sell telematics-based insurance. This
            insurance monitors your driving with the use of the data accumulated
            thru a black box fitted in the car or your Smartphone. The data is
            gathered and used for identifying the total amount you need to pay
            for your insurance policy.
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
          <div className={style.three_steps_box}>
            <div className={style.three_step}>
              <div
                className={classNames(style.subtitle_1, style.three_step_title)}
              >
                Possible Benefits
              </div>
              <ul className={style.three_step_description}>
                <li>
                  Greater options for services and products because they can be
                  purchased no matter where you live.
                </li>
                <li>
                  FinTech products are a lot quicker and easier for consumers to
                  access and can be delivered online.
                </li>
                <li>
                  Collect and keep more information on clients for more
                  personalized services or products.
                </li>
                <li>
                  Since FinTech companies don't have to invest dollars in a
                  branch network or other physical infrastructure, cheaper deals
                  may be offered.
                </li>
              </ul>
            </div>
            <div className={style.three_step}>
              <div
                className={classNames(style.subtitle_1, style.three_step_title)}
              >
                Possible Risks
              </div>
              <ul className={style.three_step_description}>
                <li>
                  Exposure to technology-based risks may be higher. For
                  instance, you might fall victim to cybercrime or your personal
                  information might be used improperly
                </li>
                <li>
                  Financial exclusion, especially for those who do not know yet
                  how to use the devices (tablets, Smartphones and computers) or
                  the Internet
                </li>
                <li>
                  You may potentially make rash decisions since the FinTech
                  products are immediately purchased online without ever meeting
                  the manufacturer or seller personally.
                </li>
              </ul>
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
          <h2 className={classNames(style.title_1, style.fourth_section_h2)}>
            FinTech categories
          </h2>
          <div className={style.image_columns_box}>
            <div className={style.image_column}>
              <Img
                fluid={images.personal_finance.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Personal Finance
              </h3>
              <p className={style.body_1}>
                Today, people no longer need to visit a traditional bank to get
                personal finance advice from financial advisors. There are now
                many programs that provide consumers with financial advice and
                assistance. For example, we, at Omertex, allow clients to create
                budgets and offer reliable information with regard to managing
                personal finances and saving money. We allow you to manage your
                expenses and income through mobile and web services. With our
                personal finance software, you can track the amount of money you
                spend and get help you plan to use your money in a better way.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.payments.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Payments
              </h3>
              <p className={style.body_1}>
                We let you send money without heading to a traditional bank. We
                make use of technologies such as blockchain, fingerprints and
                webcams to process payments in a more cost-efficient manner. We
                are starting to see a preference switch from credit cards to
                mobile wallets. Our payment processing software allows you to
                reap fruitful benefits including: faster automated scaling the
                employs less workers increased efficiency, and abundant methods
                of payments, global coverage and etc. that attract more clients.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.lending.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Lending
              </h3>
              <p className={style.body_1}>
                Thinking that the long lending process disheartens your clients?
                Our loan origination software is what you need! Now, you don't
                need to turn to credit unions or banks just to borrow money -
                all the process can be completed in just a few clicks of a mouse
                or taps on their Smartphone screens! Customers can easily
                request loans online and get approved. Using our software means
                minimizing time to market, improving operational efficiency,
                automating processes of your business, identifying fraud
                effectively and improving satisfaction among customers.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.banking.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Banking
              </h3>
              <p className={style.body_1}>
                A majority of the banking operations over the Web are now
                allowed to be managed by clients themselves. Voice and face
                biometrics and other leading-edge technologies are used to
                enhance the overall experience. Our banking software allows
                customers to manage their accounts online instead of going to a
                traditional bank physically. Aside from that, it gives customers
                quick access to pay bills, view transaction history and so much
                more. A notification system, report management, messaging/chat
                and anti-money laundering are among the key features of our
                online banking software.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.equity_financing.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Equity Financing
              </h3>
              <p className={style.body_1}>
                Financial technology companies also transform equity financing
                for a better transaction process. For example, Omertex makes it
                very easy and quick for businesses to increase money. We may
                work with you to link accredited investors with scrutinized
                start-ups, make use of a crowdfunding model to allow people to
                invest in a new business or others. We make the process of
                fundraising simpler on your part.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.insurance.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Insurance
              </h3>
              <p className={style.body_1}>
                Omertex uses online solutions such as LOT, data science and
                mobility software to give a better client experience.
                Recommendations, personalized offers and dynamic pricing are
                what we can offer through the information acquired via connected
                devices, wearables and sensors. Let's say you want to borrow the
                car of your friend. How could we help you? Simply by allowing
                you to purchase car insurance for just some hours. Yes, the
                process won't take much of your time, since we have teamed up
                with traditional, insurance companies to make it happen.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.investment.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                Investment
              </h3>
              <p className={style.body_1}>
                Using our investment management software, you're able to get
                investment management data and analytics to help you increase
                operational dexterity as well as optimize and manage the
                performance of your investment.The software's key features
                include: transaction reports, order management, reporting and
                portfolio accounting.
              </p>
            </div>
            <div className={style.image_column}>
              <Img
                fluid={images.money_transfers.childImageSharp.fluid}
                className={style.image_column_icon}
                alt="icon"
              />
              <h3
                className={classNames(style.title_3, style.image_column_title)}
              >
                International Money Transfers
              </h3>
              <p className={style.body_1}>
                People who are transferring international money as part of their
                routine know the pain of its costly charge. Traditional, money
                transfer companies and banks charge up to 8% fees. Expect for
                large money transfers to have a much higher fee. Adding to the
                pain is the slow process. We can provide you with less expensive
                and quicker international money transfers you rightly deserve.
                In just a few hours, the process would be fully completed!
              </p>
            </div>
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
        <div className={style.content}>
          <h3 className={classNames(style.title_3, style.fifth_section_h3)}>
            Who is FinTech for?
          </h3>
          <p className={style.body_1}>
            Our FinTech software services are ideal for both traditional,
            finance companies and startups. Often, startups do not look like a
            traditional, insurance company or bank. FinTech usually, provides
            specific solutions. Start-ups draw on a labor force that involves
            traditionally non-financial specializations like IT, computer
            science, or engineering. Traditional, finance companies, such as
            insurers and banks, have also increasingly spent funds for FinTech
            services.
          </p>
          <h3 className={classNames(style.title_3, style.fifth_section_h3)}>
            How can Omertex be of the utmost assistance and help with your
            FinTech needs?
          </h3>
          <p className={style.body_1}>
            From alternative investment and lending options to payments
            processing and budgeting tools to cash flow management, you have a
            lot of reasons why outsourcing FinTech software development, like
            Omertex, should be on top of your list.
          </p>
          <h3 className={classNames(style.title_3, style.fifth_section_h3)}>
            If working in a bank is not really your forte, FinTech is the best
            solution
          </h3>
          <p className={style.body_1}>
            We are not generalizing here since there are some who enjoy working
            at a bank. But, no one can deny how challenging the work is. Yes,
            low pace work environment, high salaries, stability and safety are
            guaranteed, but these do not endow creativity or a good place for
            disruptive innovations, especially start-ups. As a FinTech company
            owner, innovation is more crucial than before. So our FinTech
            software services can help as we have access to experienced
            developers.
          </p>
          <h3 className={classNames(style.title_3, style.fifth_section_h3)}>
            Ample new technologies and in-depth know-how
          </h3>
          <p className={style.body_1}>
            Some financial companies have a hard time being informed with
            existing and new technologies. A lot of time is badly needed in this
            extremely risky, complicated, and regulated industry development of
            new services and products. The struggle is real when a security
            issue or software bug takes place, which leads to big, financial
            losses. New tools, technologies and frameworks in IT are quickly
            developed that could be challenging for every bank to be in touch
            with recent solutions. Simply get in touch with us if you want to
            discuss FinTech software development.
          </p>
          <h3 className={classNames(style.title_3, style.fifth_section_h3)}>
            Other beneficial reasons
          </h3>
          <p className={style.body_1}>
            Our FinTech software developers can help improve the overall health
            of the conventional financial institutions through improving
            profitability and upgrading performance. Various opportunities start
            to expand when credit unions and banks partner with Omertex in this
            journey.
            <br /> <br />
            Transferring money, processing loans, securing credit card
            processing and other industry-particular points of struggles will be
            addressed easily. Having a strong partnership with us can give you
            an assurance that managing long and time-consuming tasks will be
            just a breeze.
            <br /> <br />
            Want to know what your consumers are doing with their money? FinTech
            can help you with that matter too! With the use of the cloud, we can
            provide you with products and services specifically customized
            according to your own needs and requirements.
          </p>
          <h3 className={classNames(style.title_3, style.fifth_section_h3)}>
            Expect greater convenience!
          </h3>
          <p className={style.body_1}>
            As an offshore FinTech software development company, we fully
            utilize mobile connectivity to increase the convenience and
            efficiency of transactions and the number of individuals who can
            have access to this type of service. It is now possible for
            industries and banks to streamline services and offer a better
            customer experience since you are given the choice to use tablets
            and Smartphones for managing your finances.
          </p>
          <h3 className={classNames(style.title_3, style.fifth_section_h3)}>
            Say goodbye to consumer fraud and say hello to accurate risk and
            identity assessment
          </h3>
          <p className={style.body_1}>
            Everyone is surely worried about their personal data and privacy
            when engaging in online transactions. Not to mention, the issue of
            unauthorized personal information access, money laundering and
            stolen identities.
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
          <p className={style.body_1}>
            Omertex will be able to send live data feeds that will more
            precisely authenticate the financial portfolios and identities of
            clients. This will eventually give consumers real peace of mind in
            using this form of financial service. Encryption, biometric data and
            tokenization are among the innovative, security options we can
            provide.
          </p>
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
