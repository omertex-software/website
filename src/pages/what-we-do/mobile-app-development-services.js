import React from "react"
import Layout from "../../components/layout"
import classNames from "../../helpers/classNames"
import PageHeader from "../../components/pageHeader/pageHeader"
import BottomForm from "../../components/bottomForm/bottomForm"
import SectionForm from "../../components/sectionForm/sectionForm"
import TwoColumns from "../../components/twoColumns/twoColumns"
import TwoColumnsIconsGray from "../../components/twoColumnsIconsGray/twoColumnsIconsGray"
import Steps from "../../components/steps/steps"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import page from "../../assets/styles/page.module.sass"
import style from "./mobile-app-development-services.module.sass"

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
      header_bg: file(relativePath: { eq: "mads/mads_bg.jpg" }) {
        ...sharpImage
      }
      ios_apps: file(relativePath: { eq: "mads/png_icon_ios_apps.png" }) {
        ...sharpImage
      }
      android_apps: file(
        relativePath: { eq: "mads/png_icon_android_apps.png" }
      ) {
        ...sharpImage
      }
      cp_apps: file(relativePath: { eq: "mads/png_icon_cp_apps.png" }) {
        ...sharpImage
      }
      wb_apps: file(relativePath: { eq: "mads/png_icon_wb_apps.png" }) {
        ...sharpImage
      }
      interoperability: file(
        relativePath: { eq: "mads/png_icon_interoperability.png" }
      ) {
        ...sharpImage
      }
      scalability: file(relativePath: { eq: "mads/png_icon_scalability.png" }) {
        ...sharpImage
      }
      security: file(relativePath: { eq: "mads/png_icon_security.png" }) {
        ...sharpImage
      }
      rapid: file(relativePath: { eq: "mads/png_icon_rapid.png" }) {
        ...sharpImage
      }
      mobile_commerce: file(
        relativePath: { eq: "mads/png_icon_mobile_commerce.png" }
      ) {
        ...sharpImage
      }
      accounting_systems: file(
        relativePath: { eq: "mads/png_icon_accounting_systems.png" }
      ) {
        ...sharpImage
      }
      mobile_banking: file(
        relativePath: { eq: "mads/png_icon_mobile_banking.png" }
      ) {
        ...sharpImage
      }
      workflow_management: file(
        relativePath: { eq: "mads/png_icon_workflow_management.png" }
      ) {
        ...sharpImage
      }
    }
  `)

  const iconsGrayData = [
    {
      image: images.mobile_commerce.childImageSharp.fluid,
      title: "Mobile Commerce",
    },
    {
      image: images.accounting_systems.childImageSharp.fluid,
      title: "Accounting Systems",
    },
    {
      image: images.mobile_banking.childImageSharp.fluid,
      title: "Mobile Banking",
    },
    {
      image: images.workflow_management.childImageSharp.fluid,
      title: "Workflow and Asset Management",
    },
  ]

  const mobileAppsData = [
    {
      image: images.ios_apps.childImageSharp.fluid,
      title: "iOS apps",
      description:
        "iOS applications are those apps that are installed and running on iPhones, iPads and iPods.",
    },
    {
      image: images.android_apps.childImageSharp.fluid,
      title: "Android apps",
      description:
        "Android applications are those apps that are installed and running on mobile phones and tablets with " +
        "Android operating system.",
    },
    {
      image: images.cp_apps.childImageSharp.fluid,
      title: "Cross-platform apps",
      description:
        "Cross-platform applications are those apps that can be installed and running on mobile phones and tablets " +
        "with both Android and iOS (iPhones and iPads) operating systems. Cross-platform are installed like regular " +
        "(native) apps but they’re running and look slightly different compared with native apps.",
    },
    {
      image: images.wb_apps.childImageSharp.fluid,
      title: "Web-based apps",
      description:
        "Web-based applications are those apps that can be installed and running on mobile phones and tablets with " +
        "both Android and iOS (iPhones and iPads) operating systems. Web-based apps look like regular (native) apps " +
        "but they are hosted on a mobile device web browser and require access to the internet.",
    },
  ]

  const solutionData = [
    {
      image: images.interoperability.childImageSharp.fluid,
      title: "Interoperability",
      description:
        "By utilizing a variety of APIs, industry’s top data connectors, and communication protocols, Omertex " +
        "delivers mobility solutions that are fully capable of connecting to your pre-existing IT environment.",
    },
    {
      image: images.scalability.childImageSharp.fluid,
      title: "Scalability",
      description:
        "We introduce vast scaling capabilities to our products in the early stages of development, allowing your " +
        "business to quickly and easily expand and augment application for maximum value in the future.",
    },
    {
      image: images.security.childImageSharp.fluid,
      title: "Security & Compliance",
      description:
        "Regardless of the project type, it always requires a set of security and compliance considerations. At " +
        "Omertex, we incorporate only the highest security standards in our development process and follow the best " +
        "guidelines known to the industry.",
    },
    {
      image: images.rapid.childImageSharp.fluid,
      title: "Rapid Development",
      description:
        "Shortening life cycles and reducing the time it takes to get on the market is imperative in today’s " +
        "environment. That is why we strive to quickly accommodate any alterations in the user demand and provide " +
        "accelerated product launch while maintaining first-class quality of the application.",
    },
  ]

  const servicesData = [
    {
      title: "Technology Consulting",
      description:
        "Our engineers are veterans in the field of mobile development, and their expertise enables us to offer " +
        "various consulting services to our clients. From the proof of concept to prototyping and code review, " +
        "Omertex can guide your business toward the ultimate mobile solution.",
    },
    {
      title: "UI/UX Design",
      description:
        "When it comes to user-centered design processes, we at Omertex take an absolutely transparent approach. " +
        "Our goal is to deliver functional and aesthetically pleasing interface with engaging user experience.",
    },
    {
      title: "Custom Development",
      description:
        "Whether you require an enterprise-grade productivity-enhancement system or an engaging consumer app, " +
        "Omertex can deliver a custom-tailored mobile solution that perfectly satisfies your particular business " +
        "requirements.",
    },
    {
      title: "Third-Party Software Integration",
      description:
        "From planning the most effective integration approach to tier 2 and 3 technical support, our company will " +
        "lead you throughout the entire integration process and help you achieve a completely interconnected " +
        "environment maximizing the value of your existing software assets.",
    },
    {
      title: "Legacy Upgrade",
      description:
        "We help our clients bring new life into their existing IT infrastructure through redesigning and upgrading " +
        "outdated applications. Omertex will optimize your legacy mobile systems and convert them into a next-gen " +
        "application.",
    },
    {
      title: "Delivery to market",
      description:
        "Here at Omertex we assist our clients in full-cycle mobile development, including market deployment. " +
        "Whether you want your application to succeed on Apple Store or Google Play, our team of business " +
        "consultants will provide you with all the help necessary.",
    },
  ]

  return (
    <Layout>
      <Helmet
        title="Mobile app development services"
        charSet="utf-8"
        defer={false}
      />
      <PageHeader
        image={images.header_bg.childImageSharp.fluid}
        title="Mobile app development services"
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
            Omertex has been providing mobile app development services globally
            to customers for the last 10 years. Our mobile team has a great deal
            of experience in creating and delivering a significant number of
            mobile applications, so we can suggest the most cost effective
            solutions to make every new mobile app rapid, user friendly, secure,
            and (of course) attractive in design. Omertex specializes in
            providing mobile app development services for small and medium
            enterprises and startups who need up-to-date Fin-Tech solutions to
            be implemented in their mobile apps. With such rich experience in
            developing native mobile applications for the most popular and major
            iOS and Android mobile platforms, we can deliver cross-platform
            mobile applications when such apps better fit our customers’
            business needs.
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
          <h2 className={page.title_1}>Mobile apps we develop</h2>
          <p className={classNames(page.body_1, style.second_section_p)}>
            Omertex has been developing iOS, Android, Hybrid / Cross-platform
            and Web-based mobile applications since 2010, two years after both
            iTunes and Playmarket (previously Android Market) were launched in
            2008.
          </p>
          <TwoColumns data={mobileAppsData} />
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
            Why does it make sense to consider a Mobile app development?
          </h2>
          <div className={style.orange_card_box}>
            <div className={style.orange_card}>
              <h3 className={style.orange_card_title}>>50%</h3>
              <p className={classNames(page.body_1, style.orange_card_p)}>
                of global web searches are mobile ones
              </p>
            </div>
            <div className={style.orange_card}>
              <h3 className={style.orange_card_title}>65%</h3>
              <p className={classNames(page.body_1, style.orange_card_p)}>
                of mobile phone time is spent on apps
              </p>
            </div>
            <div className={style.orange_card}>
              <h3 className={style.orange_card_title}>9/10</h3>
              <p className={classNames(page.body_1, style.orange_card_p)}>
                mobile searches lead to action
              </p>
            </div>
          </div>
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
          <h2 className={page.title_1}>
            Approaches to Mobile app development in Omertex
          </h2>
          <p className={classNames(page.body_1, style.fourth_section_p)}>
            Here at Omertex we don’t just focus on a single platform or
            technology, we strive to provide our customers with a perfect fusion
            of technological expertise and industry-specific experience. Our
            clients come to us with a business challenge and we develop the most
            cost-efficient and refined solution to it.
          </p>
          <h3 className={classNames(page.title_3, style.fourth_section_h3)}>
            Native mobile app development
          </h3>
          <p className={page.body_1}>
            Choosing native mobile app development services makes sense if your
            customers care a lot about user experience and design or when the
            highest level of productivity and performance possible is the key
            factor for market success.
          </p>
          <h3 className={classNames(page.title_3, style.fourth_section_h3)}>
            Cross-platform mobile app development
          </h3>
          <p className={page.body_1}>
            The cross-platform mobile app development approach has benefits in
            many business cases. Opting for cross-platform development gives you
            market advantages as well as lower development costs compared to a
            native one.
          </p>
          <h3 className={classNames(page.title_3, style.fourth_section_h3)}>
            Hybrid / web mobile app development
          </h3>
          <p className={page.body_1}>
            Hybrid/web mobile app development is a unification of native and
            cross-platform approaches. If a hybrid app is well written for the
            appropriate cases, its UI and behavior is difficult to distinguish
            from a native or cross-platform one. However, the hybrid development
            approach is not very popular since web mobile apps need Internet
            connection.
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
            Why consider a custom <br /> software solution
          </h2>
          <p className={classNames(page.body_1, style.fifth_section_p)}>
            With an app from Omertex, you receive the finest mobile solution
            that is easy to use and efficient for external and internal users.
            Our primary focus is superb quality.
          </p>
          <TwoColumns data={solutionData} />
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
          <h2 className={page.title_1}>Expertise in action</h2>
          <p className={classNames(page.body_1, style.sixth_section_p)}>
            What kind of application do you have in mind?
          </p>
          <TwoColumnsIconsGray data={iconsGrayData} />
        </div>
      </section>
      <SectionForm title="Ready to start a project?">
        <p>Contact us</p>
      </SectionForm>
      <section
        className={classNames(
          page.section,
          page.justify_center,
          style.eighth_section
        )}
      >
        <div className={page.content}>
          <h2 className={page.title_1}>Our mobility services</h2>
          <p className={classNames(page.body_1, style.eighth_section_p)}>
            With a broad array of technical assets available to us and your
            groundbreaking idea, we can deliver a stellar one-of-a-kind
            application that will put your business on the mobile forefront or
            revive a pre-existing product.
          </p>
          <Steps data={servicesData} />
        </div>
      </section>
      <BottomForm title="Need something more?">
        <h3>
          Write to us straight away and find out what our experts can do for
          your project.
        </h3>
      </BottomForm>
    </Layout>
  )
}
