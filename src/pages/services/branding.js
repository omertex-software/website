import React from "react"
import Layout from "../../components/layout"
import classNames from "../../helpers/classNames"
import PageHeader from "../../components/pageHeader/pageHeader"
import BottomForm from "../../components/bottomForm/bottomForm"
import TwoColumnsList from "../../components/twoColumnsList/twoColumnsList"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import page from "../../assets/styles/page.module.sass"
import style from "./branding.module.sass"

export const sharpImage = graphql`
  fragment sharpImage on File {
    childImageSharp {
      fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`

const listData = [
  "Name of your product",
  "Logo",
  "User experience",
  "Color schemes",
  "Design styles",
  "Graphics",
  "Ton and voice",
]

export default () => {
  const images = useStaticQuery(graphql`
    query {
      header_bg: file(relativePath: { eq: "branding/branding_bg.jpg" }) {
        ...sharpImage
      }
    }
  `)

  return (
    <Layout>
      <Helmet title="Our branding services" charSet="utf-8" defer={false} />
      <PageHeader
        image={images.header_bg.childImageSharp.fluid}
        title="Our branding services"
      />
      <section
        className={classNames(
          page.section,
          page.justify_center,
          style.first_section
        )}
      >
        <div className={page.content}>
          <h2 className={classNames(page.title_1, style.first_section_h2)}>
            Branding of your website or mobile app
          </h2>
          <p className={page.body_1}>
            Branding is not only about a logo or colors chosen for your website
            or app. It’s about emotions and perception of your product by users.
            This applies to any product and software ones are not an exception.
            <br />
            Branding is a complex of numerous factors that can’t be viewed
            separately as users always evaluate a product as a whole.
            <br />
            <br />
            What factors matter:
          </p>
          <br />
          <br />
          <TwoColumnsList data={listData} minBottom={true} />
          <br />
          <br />
          <p className={page.body_1}>
            The aim of branding is to create a personality of your product, its
            distant style, and emotional connections.
            <br />
            Of course, the elaboration of the right strategy, as well as the
            process of brand building, requires time, attention, and efforts.
            However, it’s worth it.
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
            What issues to consider for efficient software branding?
          </h2>
          <p className={page.body_1}>
            To build the right brand for your product you need to find answers
            to a list of questions.
            <br />
            <br />
            · Who are the users of your product?
            <br />
            · What problem should your app address?
            <br />
            · Why is your product unique?
            <br />
            · What visual representation does your app have? How can your
            colors, logo, and images to transfer the core message?
            <br />
            · What emotions do you expect your users to have?
            <br />
            · How do you want to communicate with users?
            <br />
            <br />
            These questions will help you to understand what approaches you
            should choose to development of your software product, its design,
            and promotion. That’s why it will be rather sensible to find the
            answers to them before the development and design process starts.
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
          <h2 className={page.title_1}>
            Why branding is important for a software product?
          </h2>
          <p
            className={classNames(page.body_1, style.third_section_description)}
          >
            As we’ve already mentioned branding is important for any company or
            product regardless of the industry under consideration. And here is
            why:
          </p>
          <h3
            className={classNames(
              page.title_3,
              style.third_section_h3,
              page.orange_line_min
            )}
          >
            Powerful branding ensures excellent recognition.
          </h3>
          <p className={classNames(page.body_1, style.third_section_p)}>
            A brand is something that helps your users, either existing or
            potential, differentiate your product from hundreds of others. When
            you see a square divided into four equal parts (orange, green, blue,
            yellow), what associations do you have in your mind? The majority of
            people will immediately say that we are talking about Microsoft. The
            stronger recognition your brand has achieved, the higher chances you
            have to shape excellent awareness among the users. As a result, with
            the growth of awareness, the acquisition rate will also increase.
          </p>
          <h3
            className={classNames(
              page.title_3,
              style.third_section_h3,
              page.orange_line_min
            )}
          >
            Branding leads to clearer advertising.
          </h3>
          <p className={classNames(page.body_1, style.third_section_p)}>
            If you are launching software for an external audience, it is
            obvious that you need to develop an advertising strategy. And with a
            well-thought-out branding, you will have a solid ground for
            positioning and advertising your product in this or that way. It
            will not only facilitate your task here, but it will also make your
            ads sound weighty.
          </p>
          <h3
            className={classNames(
              page.title_3,
              style.third_section_h3,
              page.orange_line_min
            )}
          >
            Branding gives you an additional competitive advantage.
          </h3>
          <p className={classNames(page.body_1, style.third_section_p)}>
            Today the market of software products is overcrowded. And one of the
            best ways to stand out and to be noticed is to show how your product
            differs from others. Your existing and potential users should
            clearly identify your product from a row of similar ones. That's
            exactly what you can achieve by building your brand.
          </p>
          <h3
            className={classNames(
              page.title_3,
              style.third_section_h3,
              page.orange_line_min
            )}
          >
            With a well-developed brand, you can easily win customer loyalty.
          </h3>
          <p className={classNames(page.body_1, style.third_section_p)}>
            As we’ve mentioned, branding is about emotions. If users have
            positive experience related to the identity of your product
            (including those impressions that are formed with the help of visual
            elements), they will stay more loyal during the interaction with
            your software. As a result, this positive experience associated with
            your product will encourage users to stay with you.
          </p>
          <h3
            className={classNames(
              page.title_3,
              style.third_section_h3,
              page.orange_line_min
            )}
          >
            If users have positive associations with your product, they will
            need less time to buy (or download) it.
          </h3>
          <p className={classNames(page.body_1, style.third_section_p)}>
            When it comes to broader markets, we say that branding helps to make
            sales cycles shorter. If your brand is known to people, you don't
            need to spend time convincing them to purchase your product (or
            start using it). Meanwhile, they also do not need to spend their
            time studying your offer, so that they can make a decision just
            within a couple of minutes which also adds positive associations to
            their experience.
          </p>
          <p className={classNames(page.body_1, style.third_section_p)}>
            If you want to create a software product, or already have one, and
            need any assistance in its branding, the Omertex experts are always
            at your service. With rich expertise in launching successful
            projects, we will help you to find the most suitable strategy and
            create a unique brand for your app. Strong branding is the key to
            users’ hearts!
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
