import React from "react"
import Layout from "../../components/layout"
import classNames from "../../helpers/classNames"
import PageHeader from "../../components/pageHeader/pageHeader"
import TwoColumnsList from "../../components/twoColumnsList/twoColumnsList"
import Steps from "../../components/steps/steps"
import BottomForm from "../../components/bottomForm/bottomForm"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import page from "../../assets/styles/page.module.sass"
import style from "./payment-gateway-integration.module.sass"

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
      header_bg: file(relativePath: { eq: "pgis/pgis_bg.jpg" }) {
        ...sharpImage
      }
    }
  `)

  const listData = [
    {
      title: "Cards",
      description: "Сredit, debit, and prepaid cards",
    },
    {
      title: "Online payments",
      description: "PayPal, Amazon",
    },
    {
      title: "Mobile payment technologies",
      description: "like Apple Pay, Google Pay, Samsung Pay, etc.",
    },
    {
      title: "Offline payments",
      description: "cash, check, money order, invoice, bank transfer",
    },
    {
      title: "Direct debit payments",
    },
    {
      title: "Cryptocurrencies",
    },
  ]

  const stepsData = [
    {
      title: "E-commerce platforms we work with",
      description:
        "E-commerce platforms are software applications used to manage online shopping. Today there are plenty of " +
        "such solutions on the market. For example, Shopify, WooCommerce, Magento, Bigcommerce, Volusion, and " +
        "3dcart. They all have powerful features for online store building, both for startups and enterprises. " +
        "Which one to choose depends on your specific requirements.",
    },
    {
      title: "What we can do for you",
      description: [
        {
          text:
            "Our company provides custom software development services. We specialize mostly in FinTech solutions " +
            "for mobile and web applications for startups and enterprises alike.",
        },
        {
          text:
            "If you’re looking to establish a long-term partnership with a reliable company that is capable of " +
            "integrating  payment gateway into your website, you are in the right place. Please leave your name and " +
            "email address, and we'll contact you to discuss mutually profitable business relations",
        },
      ],
    },
  ]

  return (
    <Layout>
      <Helmet
        title="Payment gateway integration services"
        charSet="utf-8"
        defer={false}
      />
      <PageHeader
        image={images.header_bg.childImageSharp.fluid}
        title="Payment gateway integration services"
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
          <h2 className={classNames(page.title_1, style.second_section_h2)}>
            Payment gateways we’re accustomed with
          </h2>
          <p className={page.body_1}>
            Whether you’re a startup, a growing business, or an enterprise,
            sooner or later you'll need to receive payments from your customers.
            E-commerce and offline businesses today use payment gateway
            integration services for this purpose. A payment gateway is a
            service that authorizes online payments (using credit cards, Apple
            Pay, Google Pay, or other means of payment) and processes related
            financial transactions.
            <br />
            <br />
            The most popular gateways available now are Stripe, PayPal, Amazon,
            Authorize.Net, GoCardless, PayU, 2CheckOut, SecurionPay, and
            BlueSnap. Stripe bears the palm in this list as it perfectly suits
            developer's needs. Its test mode is a fully-functional copy of
            production mode, and you can rapidly move from test to production.
            Stripe provides payment gateway integration for many modern tools,
            from React components to webhooks.
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
            Payment methods we integrate
          </h2>
          <p className={classNames(page.body_1, style.third_section_p)}>
            There is a large variety of payment methods in the modern world.
            Each method has its own advantages and disadvantages. Your choice
            depends on the needs of your business and its geographical limits.
            For example, if your business is domestic (local), you will most
            likely only need a single currency, while international business
            will need to work with multiple currencies.
          </p>
          <TwoColumnsList data={listData} />
          <p className={classNames(page.body_1, style.third_section_p)}>
            Cryptocurrency, or digital currency, is the newest payment method
            and is becoming more and more popular each day. The most well known
            form of cryptocurrency is Bitcoin. Among others are Ethereum,
            Ripple, Litecoin, ZCash, IOTA, NEO, and Monero.
            <br />
            <br />
            If you use cryptocurrencies, you don't have to worry about transfer
            fees, lost or delayed transactions, or your sensitive information
            being leaked to third parties. What’s more, nobody can block or
            freeze your cryptocurrency wallet.
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
          <Steps data={stepsData} />
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
