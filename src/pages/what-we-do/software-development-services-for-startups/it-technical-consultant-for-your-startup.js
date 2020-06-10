import React from "react"
import Layout from "../../../components/layout"
import classNames from "../../../helpers/classNames"
import PageHeader from "../../../components/pageHeader/pageHeader"
import BottomForm from "../../../components/bottomForm/bottomForm"
import TwoColumns from "../../../components/twoColumns/twoColumns"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import page from "../../../assets/styles/page.module.sass"
import style from "./it-technical-consultant-for-your-startup.module.sass"

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
      header_bg: file(relativePath: { eq: "ittcfys/ittcfys_bg.jpg" }) {
        ...sharpImage
      }
      custom_dev: file(
        relativePath: { eq: "ittcfys/png_icon_custom_dev.png" }
      ) {
        ...sharpImage
      }
      web_dev: file(relativePath: { eq: "ittcfys/png_icon_web_dev.png" }) {
        ...sharpImage
      }
      mobile_dev: file(
        relativePath: { eq: "ittcfys/png_icon_mobile_dev.png" }
      ) {
        ...sharpImage
      }
      years: file(relativePath: { eq: "ittcfys/png_icon_years.png" }) {
        ...sharpImage
      }
      partner: file(relativePath: { eq: "ittcfys/png_icon_partner.png" }) {
        ...sharpImage
      }
      product: file(relativePath: { eq: "ittcfys/png_icon_product.png" }) {
        ...sharpImage
      }
      contact: file(relativePath: { eq: "ittcfys/png_icon_contact.png" }) {
        ...sharpImage
      }
    }
  `)

  const offshoreData = [
    {
      image: images.years.childImageSharp.fluid,
      description:
        "We’ve been working with clients across the globe for over a decade, giving us expansive experience in " +
        "creating mobile, desktop, and web applications that shine.",
    },
    {
      image: images.partner.childImageSharp.fluid,
      description:
        "We are an IT technical partner for FinTech startup companies that you can rely on, thanks to our recent " +
        "specialization in this field.",
    },
    {
      image: images.product.childImageSharp.fluid,
      description:
        "Our goal is to deliver you a high-quality software product, whether it be a mobile app, a web app, a custom " +
        "program, or a combination of all three. We are here to serve you, to help you make doing business easier.",
    },
    {
      image: images.contact.childImageSharp.fluid,
      description:
        "Contact us today to see what we can for you, to find out about additional services, or to schedule a " +
        "consultation with one of our skilled tech advisors.",
    },
  ]

  return (
    <Layout>
      <Helmet
        title="IT Technical Consultant for Your Startup"
        charSet="utf-8"
        defer={false}
      />
      <PageHeader
        image={images.header_bg.childImageSharp.fluid}
        title="IT technical consultant for your Startup"
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
            Omertex is proud to offer customers assistance with their technical
            needs, including providing an IT consultant for your startup. We
            want to be sure that your company excels in your field, so we take
            the time to approach IT differently. This means meeting with you and
            learning about your industry specific needs and challenges before
            going ahead with any work. We are happy to offer a wide range of
            services to ensure your success throughout all stages of the startup
            process.
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
            Why do you need a Startup IT consultant?
          </h2>
          <p className={page.body_1}>
            In today’s competitive, global and primarily online marketplace,
            having a startup IT consultant is crucial. Outsourcing startup
            development is a great way to ensure that your IT and software needs
            are met while still giving you the time to focus on other areas of
            your business.
            <br />
            <br />
            Omertex brings years of experience in the field to our focus on
            FinTech companies. This means you can trust us with your web, mobile
            app and software needs and feel confident in the delivered product.
            We are with you every step of the way, keeping you informed and
            engaged throughout the entire development process.
            <br />
            <br />
            Hiring an IT professional can also keep your IT data as secure as
            possible. Hacks and breaches are all too common and without proper
            security, you too could find yourself a victim. Even for established
            companies, this is horrible for business. For a startup, it could
            potentially be devastating. At Omertex, we take all necessary steps
            and go beyond them to ensure that your apps are secure and that your
            data remains as safe as possible.
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
            What can an IT services provider for Startups do for you?
          </h2>
          <p className={classNames(page.body_1, style.third_section_p)}>
            There are numerous services that an IT services provider can provide
            for you and your startup company. Here at Omertex, we are happy to
            offer our clients the following:
          </p>
          <div className={style.card_box}>
            <div className={style.card}>
              <Img
                fluid={images.custom_dev.childImageSharp.fluid}
                className={style.card_icon}
                alt="Icon"
              />
              <h3 className={page.title_3}>
                Custom software <br /> development
              </h3>
            </div>
            <div className={style.card}>
              <Img
                fluid={images.web_dev.childImageSharp.fluid}
                className={style.card_icon}
                alt="Icon"
              />
              <h3 className={page.title_3}>
                Web application <br /> development
              </h3>
            </div>
            <div className={style.card}>
              <Img
                fluid={images.mobile_dev.childImageSharp.fluid}
                className={style.card_icon}
                alt="Icon"
              />
              <h3 className={page.title_3}>
                Mobile app <br /> development
              </h3>
            </div>
          </div>
          <p className={classNames(page.body_1, style.third_section_second_p)}>
            One of the biggest advantages to outsourcing your software
            development is knowing that the final product can be tailored to
            suit your unique needs. There is no need to struggle with programs
            that are not quite right or to make your staff members enter the
            same information in multiple databases. Our IT consultants meet with
            you to determine your needs, creating a solution customized for your
            business.
            <br />
            <br />
            In addition to writing and developing software tailored to your
            needs, we can also revamp or modify existing programs. In many
            cases, our clients have an existing program that once worked, but is
            now outdated or clumsy thanks to expansion or other recent business
            success. Instead of trying to find a new program or have one
            developed, we are happy to work with your existing code, revamping
            it to suit your current needs.
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
            Hiring an IT technical consultant for your Startup
          </h2>
          <p className={page.body_1}>
            When you hire an IT technical consultant for your startup, be sure
            to focus on real world experience. Mobile app development and
            well-done web application development do not happen without a lot of
            training and years on the job.
            <br />
            <br />
            At Omertex, we have been in the IT consulting and software
            development industry for over 10 years, focusing on FinTech in the
            last two. This makes us your ideal choice for all your IT needs.
            Being on the scene for this long has given us the skills we need to
            thrive, including the tools necessary to stay on top of all the
            latest in the industry. In a field like web and app development, the
            landscape is constantly changing. Our technicians pride themselves
            on being experts at their jobs, always staying current and never
            operating with outdated information or technology.
          </p>
          <h2 className={classNames(page.title_1, style.fourth_section_h2)}>
            What to look for in a technical advisor for Startup?
          </h2>
          <p className={page.body_1}>
            There are a few things best looked for when hiring a technical
            advisor for startups and software developers. Aside from experience,
            you also want to be sure you choose a company or an advisor who
            understands your business. At Omertex, we have started focusing on
            FinTech, thanks to extensive experience in the industry. This focus
            has made us experts in the field. Our intimate knowledge equips us
            to better advise you, as we are already familiar with the terms,
            needs, and elements necessary for success.
            <br />
            <br />
            Another must is locating a consultant you get along with and trust.
            The company you choose to keep is going to be with you for quite
            some time and plays a major role in the success of your startup. At
            Omertex, we are proud to have some of the best service
            representatives in the industry. Each one is happy to meet with our
            customers to determine their needs, explain a product, or to answer
            questions. We pride ourselves on never being pushy, and always
            working to meet your goals. We are with you for every step of the
            process, from program inception to successful use.
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
            When to hire a Startup consulting company/advisor?
          </h2>
          <p className={classNames(page.body_1, style.fifth_section_p)}>
            The best time to hire a startup consulting company/advisor is as
            early as possible. You do not want to leave this critical component
            of your company until the last minute or worse, right before you
            decide to launch. This is true for all companies, even if you are
            operating a lean startup. Budgeting your money is important for
            smaller companies but investing in your IT pays off immensely.
            <br />
            <br />
            Here at Omertex we have experience working with companies of every
            size, including modestly funded startups. We know that creating a
            company from the ground up is hard work and costly, which is why we
            pride ourselves on our friendly and non-pushy approach to doing
            business. We simply want to be sure that your organization thrives
            in whatever way is best given your unique needs. By looking into our
            services ahead of time you can wind up saving a lot of time or money
            by outsourcing something you may not be able to figure out or
            complete on your own. It also gives us a chance to work with you
            throughout the startup process, offering valuable IT advice along
            the way.
            <br />
            <br />
            Hiring your advisor early on also empowers you with plenty of time
            to provide feedback. For example, our technicians may have written
            the perfect program, but you would prefer the main font to be a
            different shade. In other cases, the program we provide may inspire
            you to ask for additional services prior to your launch, such as a
            mobile app to compliment your web one.
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
            Find the very best Startup offshore developers
          </h2>
          <p className={classNames(page.body_1, style.sixth_section_p)}>
            The best time to hire a startup consulting company/advisor is as
            early as possible. You do not want to leave this critical component
          </p>
          <TwoColumns data={offshoreData} />
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
