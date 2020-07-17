import React from "react"
import Layout from "../../components/layout"
import classNames from "../../helpers/classNames"
import PageHeader from "../../components/pageHeader/pageHeader"
import BottomForm from "../../components/bottomForm/bottomForm"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import page from "../../assets/styles/page.module.sass"
import style from "./marketing-for-startups.module.sass"
import TwoColumnsList from "../../components/twoColumnsList/twoColumnsList"

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
  "Concept development",
  "Branding",
  "Increase in your brand/software visibility",
  "Users/clients attraction",
  "Paid online advertising",
  "Search engine marketing",
  "Mobile app marketing and ASO",
  "Web development and design",
  "Deep analytics of the ongoing marketing growth results",
  "Strategy development",
]

export default () => {
  const images = useStaticQuery(graphql`
    query {
      header_bg: file(relativePath: { eq: "mfs/mfs_bg.jpg" }) {
        ...sharpImage
      }
    }
  `)

  return (
    <Layout>
      <Helmet title="Growth marketing" charSet="utf-8" defer={false} />
      <PageHeader
        image={images.header_bg.childImageSharp.fluid}
        title="Growth marketing"
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
            At Omertex, the range of offers is not limited to high-quality
            software development or consulting services only. Having accumulated
            our rich expertise in growth marketing and successful product
            launch, we are here to support your project at any stage of its life
            cycle: from just an idea to market release and further and
            expansion. We do our best to help small startup and large businesses
            to achieve their goals and conquer new peaks.
            <br />
            Who our services targeted at?
            <br />
            · Startups that are just at the very beginning of their way;
            <br />
            · Enterprises and organizations of all sizes that want to build or
            strengthen their brand online;
            <br />
            · Companies that are interested in lead generation, conversion
            optimization and traffic growth;
            <br />
            · Businesses that have an aim to achieve an increase in sales via
            digital marketing tools.
            <br />
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
            What do we do?
          </h2>
          <p className={page.body_1}>
            Though we can provide any of our services separately, the concept of
            growth marketing presupposes a complex of actions aimed at fast and
            sustainable business progress.
            <br />
            When digital marketing tools entered the game, there appeared a wide
            range of opportunities to increase brand awareness and let your
            potential users or clients find your offers. However, it doesn’t
            mean that you should use all the tools available. The principle “the
            more - the better” doesn’t work here. Businesses are interested in
            ROI increase and that’s exactly what we can ensure.
            <br />
            <br />
            We can help you with:
            <br />
            <br />
          </p>
          <TwoColumnsList data={listData} minBottom={true} />
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
            How can your business growth be achieved?
          </h2>
          <p className={page.body_1}>
            When it comes to marketing, there is no solution that fits all. All
            projects and products are too different (even if they seem
            practically the same). Each of them has its personality and if you
            want to efficiently promote your business, you need a strategy that
            is built on the results of deep preliminary analysis.
            <br />
            <br />
            We always need to study what product/business we work with, what is
            special about it and who are its potential users. But it is not a
            full list of factors that we need to consider.
            <br />
            <br />
            To achieve the most ambitious business goals and to do it fast, a
            marketing campaign should be developed strategically. It is crucial
            to focus the attention on such issues as:
            <br />
            · choice of platform (or platforms) for interaction with potential
            users;
            <br />
            · identification of the right target audience;
            <br />
            · format of advertising and creation of working content for it.
            <br />
            <br />
            To make it easier to track the performance we offer to set fully
            measurable goals like the precise number of sales, leads, downloads,
            visits, clicks, etc. that you want t get.
            <br />
            <br />
            It is important to always have a broader picture. It is highly
            recommended to create not only long-term goals but short-term as
            well. You need to see how your business is moving towards its
            greatest milestones. And in this way, small achievements also
            matter.
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
          <h2 className={classNames(page.title_1, style.fourth_section_h2)}>
            Why does our approach work?
          </h2>
          <p className={classNames(page.body_1, style.fourth_section_p)}>
            We are more than a traditional software development company or a
            digital marketing agency. We focus on the creation and realization
            of growth marketing strategies based on the specifics of your
            product and its users.
          </p>
          <h3
            className={classNames(
              page.title_3,
              style.fourth_section_h3,
              page.orange_line_min
            )}
          >
            Long-term results as priorities.
          </h3>
          <p className={classNames(page.body_1, style.fourth_section_p)}>
            Though we always say that short-term goals are important, their
            achievement can’t be viewed as a sign of overall success. The
            strategy should be built for the future, not only for the present.
            We want to ensure your business prosperity for many years from now
            and long-term goals help us to see the direction.
          </p>
          <h3
            className={classNames(
              page.title_3,
              style.fourth_section_h3,
              page.orange_line_min
            )}
          >
            Deep understanding of the subject
          </h3>
          <p className={classNames(page.body_1, style.fourth_section_p)}>
            We know how software products work, what value they can bring and
            why users may need them. Our team always carefully analyze the
            specificity of each project. Thanks to that we can develop marketing
            strategies that fully reflect the personality of your brand and
            project.
          </p>
          <h3
            className={classNames(
              page.title_3,
              style.fourth_section_h3,
              page.orange_line_min
            )}
          >
            Flexibility
          </h3>
          <p className={classNames(page.body_1, style.fourth_section_p)}>
            We always attentively analyze the ongoing results and are ready to
            introduce changes to our strategy if needed.
          </p>
          <p className={classNames(page.body_1, style.fourth_section_p)}>
            No matter whether you are just entering the market or are an
            experienced player already, growth marketing services will become a
            real booster for your business. But what is even more pleasant - it
            will not take long to see the first outcomes. Your investments will
            definitely pay off. <br />
            If you have any questions to our experts, feel free to contact us
            and we will be happy to tell you more about our approaches.
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
