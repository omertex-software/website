import React from "react"
import Layout from "../../components/layout"
import classNames from "../../helpers/classNames"
import PageHeader from "../../components/pageHeader/pageHeader"
import BottomForm from "../../components/bottomForm/bottomForm"
import ThreeColumns from "../../components/threeColumns/threeColumns"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import page from "../../assets/styles/page.module.sass"
import style from "./mvp-development.module.sass"

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
      header_bg: file(relativePath: { eq: "mvpd/mvpd_bg.jpg" }) {
        ...sharpImage
      }
      clock: file(relativePath: { eq: "mvpd/clock.png" }) {
        ...sharpImage
      }
      scales: file(relativePath: { eq: "mvpd/scales.png" }) {
        ...sharpImage
      }
      presentation: file(relativePath: { eq: "mvpd/presentation.png" }) {
        ...sharpImage
      }
      calendar: file(relativePath: { eq: "mvpd/calendar.png" }) {
        ...sharpImage
      }
      medal: file(relativePath: { eq: "mvpd/medal.png" }) {
        ...sharpImage
      }
    }
  `)

  const columnData = [
    {
      image: images.clock.childImageSharp.fluid,
      description:
        "It is a possibility to test the feasibility of your project quickly " +
        "and at minimal costs.",
    },
    {
      image: images.scales.childImageSharp.fluid,
      description:
        "You can better analyze the needs and preferences of future users as " +
        "well as to learn more about the market segment that you want to rock.",
    },
    {
      image: images.presentation.childImageSharp.fluid,
      description:
        "Starting with an MVP, you minimize the financial risks related to " +
        "the potential failure of a final version (as it is clear that you " +
        "will not develop a full-scale version if there is no interest from " +
        "the side of your target audience). ",
    },
    {
      image: images.calendar.childImageSharp.fluid,
      description:
        "This stage helps to better plan the development process (as " +
        "developers will have a good understanding of what they are supposed " +
        "to do), avoid unnecessary iterations and smartly allocate your budget.",
    },
    {
      image: images.medal.childImageSharp.fluid,
      description:
        "If you are looking for investors, a built MVP can prove the value " +
        "of your project and provide confidence in its further success.",
    },
  ]

  return (
    <Layout>
      <Helmet title="MVP development" charSet="utf-8" defer={false} />
      <PageHeader
        image={images.header_bg.childImageSharp.fluid}
        title="MVP Development"
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
            The development of a minimum viable product (MVP) is a great option
            for those who want to test out the app’s chances to succeed before
            investing money in a full-scale product.
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
            What is an MVP?
          </h2>
          <p className={page.body_1}>
            An MVP is a form of your web or mobile app that can already function
            and bring value to users but still has limited functionality. Though
            such a product has only core features, it will be enough for a team
            behind the project to understand how users react to it.
            <br />
            <br />
            Being a basic model of a final app, an MVP should solve the key
            problems that it is supposed to address. As a result, based on the
            feedback of early users you will have a possibility to make a
            grounded decision on the feasibility of the real app development.
            <br />
            <br />
            As the MVP development and launch can be viewed as the way to try
            out your assumptions regarding the functions and capacities of your
            app, sometimes the release of only one version is not enough for
            developers. In such a case it’s worth diving deeper in the
            peculiarities of the build-measure-learn philosophy.
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
            Lean startup methodology: what does it presuppose?
          </h2>
          <p className={page.body_1}>
            The launch of an MVP is an integral part of the broader lean startup
            methodology that has gained high popularity in the IT sphere today.
            It is based on so-called build-measure-learn feedback loops. These
            loops, or cycles, consist of the following components:
            <br />
            · The MVP development;
            <br />
            · Its release to a select group of test users;
            <br />
            · Feedback gathering;
            <br />
            · Analyzing the issues that can be improved;
            <br />
            · Introduction of the upgrades with a further release.
            <br />
            <br />
            The build-measure-learn cycle can be repeated more than once. The
            idea is to gather as much data about users’ preferences and
            expectations as possible and to learn how to offer a product that
            will perfectly fit the market.
            <br />
            <br />
            What can you do if you see that your MVP has failed? What does it
            usually mean? As a rule, such a situation can occur in two cases:
            <br />
            · The product is cool but you’ve chosen the wrong target group for
            testing.
            <br />
            · Your product doesn’t fit users’ needs and it requires updates.
            <br />
            <br />
            But you shouldn’t give up after the first attempt. Sometimes after
            analyzing MVP release results and users’ feedbacks, entrepreneurs
            and startupers change their projects significantly. They may choose
            a new niche, opt for another target group or define a new problem
            that they want to solve with their product. And it is completely
            okay. The lean startup methodology has an aim not to convince you
            that you are doing everything well but to help you see what you can
            do better.
            <br />
            As soon as you are satisfied with the results of your MVP launch and
            you believe that you do not need to introduce any changes, you can
            proceed to the step of planning the final product development.
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
            Benefits of MVP development
          </h2>
          <p className={page.body_1}>
            Is it possible to skip all these processes with MVP? So, actually,
            yes. However, we recommend not to do it.
            <br />
            We are fully confident that such a step as the MVP launch is a
            crucial one on your way to a successful app release. And here’s why:
          </p>
          <br />
          <br />
          <ThreeColumns data={columnData} minTitle={true} centeredIcon={true} />
          <br />
          <br />
          <p className={page.body_1}>
            Already have an idea? Let’s transform it into a successful software
            product together! The Omertex team is always ready to assist you at
            any stage of the development, including the launch of an MVP. Our
            experts also can help you to gather and analyze the feedback from
            early users in order to choose the right direction for your project.
            <br />
            <br />
            Just contact us and we will discuss what we can do for you.
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
