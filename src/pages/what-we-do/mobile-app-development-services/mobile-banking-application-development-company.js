import React from "react"
import Layout from "../../../components/layout"
import classNames from "../../../helpers/classNames"
import PageHeader from "../../../components/pageHeader/pageHeader"
import Steps from "../../../components/steps/steps"
import TwoColumns from "../../../components/twoColumns/twoColumns"
import BottomForm from "../../../components/bottomForm/bottomForm"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import page from "../../../assets/styles/page.module.sass"
import style from "./mobile-banking-application-development-company.module.sass"

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
      header_bg: file(relativePath: { eq: "mbadc/mbadc_bg.jpg" }) {
        ...sharpImage
      }
      mb_applications: file(
        relativePath: { eq: "mbadc/png_icon_mb_applications.png" }
      ) {
        ...sharpImage
      }
      mb_integration: file(
        relativePath: { eq: "mbadc/png_icon_mb_integration.png" }
      ) {
        ...sharpImage
      }
      mb_safety: file(relativePath: { eq: "mbadc/png_icon_mb_safety.png" }) {
        ...sharpImage
      }
      rd_advantage: file(
        relativePath: { eq: "mbadc/png_icon_rd_advantage.png" }
      ) {
        ...sharpImage
      }
      ab_capture: file(relativePath: { eq: "mbadc/png_icon_ab_capture.png" }) {
        ...sharpImage
      }
      mb_message: file(relativePath: { eq: "mbadc/png_icon_mb_message.png" }) {
        ...sharpImage
      }
      mb_process: file(relativePath: { eq: "mbadc/png_icon_mb_process.png" }) {
        ...sharpImage
      }
      payment_solutions: file(
        relativePath: { eq: "mbadc/png_icon_payment_solutions.png" }
      ) {
        ...sharpImage
      }
    }
  `)

  const stepsData = [
    {
      title: "Close Client Connection",
      description: [
        {
          text:
            "It’s time to extend your connection with your clients. We help you support and strengthen relationships " +
            "with both commercial and individual clients by providing them them the advantages of:",
        },
        {
          text: "Account management",
          check: true,
        },
        {
          text: "Money transfer",
          check: true,
        },
        {
          text: "Domestic payments",
          check: true,
        },
        {
          text: "Loan repayments",
          check: true,
        },
        {
          text: "Purchasing and ordering your novel services and products",
          check: true,
        },
        {
          text: "Live chat",
          check: true,
        },
        {
          text: "And others",
          check: true,
        },
        {
          text:
            "These can be easily and securely processed remotely without the need to visit your office.",
        },
        {
          text:
            "Being a full services mobile banking application development company we do our best to guide you in " +
            "your mobile application needs",
        },
      ],
    },
    {
      title: "Rural Banking Advantage",
      description:
        "You can talk to clients remotely with mobile banking. Take the great opportunity to easily serve them and " +
        "fulfill their needs with the function of a mobile banking chat. You can offer them reliable and functional " +
        "options to make their lives easy. You are the guide for customers looking for financial services they " +
        "deserve. We will suggest solutions that erase gaps for you and for them.",
    },
    {
      title: "Credit Union Benefit ",
      description:
        "A mobile banking application development company helps union members. Omertex also provides you with " +
        "excellent services for the union member’s comfort. Our mobile banking application takes union members to " +
        "successes that they have dreamt about. Omertex is your best banking partner and provides you with authentic " +
        "banking ideas. From here, you have a clear perspective of the future.",
    },
  ]

  const columnsData = [
    {
      image: images.mb_applications.childImageSharp.fluid,
      title: "Mobile Banking Applications",
      description:
        "Omertex develops mobile banking apps for the comfort of users. Our mobile banking app developers make sure " +
        "these are perfect for Android, iOS and more. These apps make banking services fast and easy. Customers can " +
        "enhance their mobile app usage in no time. Your device will have the edge to perform banking operation in " +
        "only a few clicks. We teach you how to do it.",
    },
    {
      image: images.mb_integration.childImageSharp.fluid,
      title: "Mobile Banking Integration",
      description:
        "You have assurance for cross-channel connections with our main banking systems. These systems allow you " +
        "and your customers to perform operations such as account overviews,payment scheduling and a quick view of " +
        "accounts. You can also access high-end tools such as transfers and account management. These functions make " +
        "banking payments easy and effective all the time. Let us show you the success it would give you and your " +
        "clients.",
    },
    {
      image: images.mb_safety.childImageSharp.fluid,
      title: "Mobile Banking Safety",
      description:
        "Your banking transactions are secure while using mobile banking apps. We provide security methods such as " +
        "face recognition to ensure safety. You would be glad to know that mobile banking not only meets your " +
        "standards. It also fulfills your security needs while you use banking options.",
    },
    {
      image: images.rd_advantage.childImageSharp.fluid,
      title: "Remote Deposit Advantage",
      description:
        "You can feel comfortable making deposits on your mobile phone. The camera on your mobile captures checks " +
        "and deposit procedures for you. Customers would have a sure way to update the banking processes in only a " +
        "few clicks.",
    },
    {
      image: images.ab_capture.childImageSharp.fluid,
      title: "Accurate Bills Capture",
      description:
        "We use modern banking software to capture a bill’s image using the camera of your mobile device. The " +
        "excellent data extraction is a success due to our expertise. It offers full mobile banking experience for " +
        "users around the world. We give you a guarantee you would like the service.",
    },
    {
      image: images.mb_message.childImageSharp.fluid,
      title: "Mobile Banking Message",
      description:
        "Mobile banking technology lets you update your account information using a text message. With the SMS API " +
        "functions, you not only access your account. You also have the freedom to do banking commands using a " +
        "shortcode. It’s easy and convenient, and you’ll love it!",
    },
    {
      image: images.mb_process.childImageSharp.fluid,
      title: "Mobile Banking App Process",
      description:
        "Our mobile banking app developers work closely with our experts to give you an excellent concept. They’re " +
        "willing to share their ideas to give you satisfaction. The offshore/outsourcing agency/services would have " +
        "the benefit of providing great services to its clients. Omertex provides a wide range of options to secure " +
        "a fast implementation process.  Your mobile banking idea turns to impressive software. You would be proud " +
        "to use this in your present and future banking needs Our team assures full integration of the mobile app to " +
        "other banking systems. Here, you have quick access to the banking systems.  Clients would find the apps " +
        "reliable and viable to future banking applications. Hence, you have a 100% guarantee of app support and " +
        "maintenance from us. We give full attention to the details to ensure your banking needs are a success. Our " +
        "developers are here to give you the basics of mobile banking technology.",
    },
    {
      image: images.payment_solutions.childImageSharp.fluid,
      title: "Payment Solutions",
      description:
        "The inshore/offshore outsourcing services we have can provide you with excellent and easy payment methods. " +
        "Your e-wallet can be used to provide access to our fast banking procedures.You can also have the simple and " +
        "reliable management of your e-wallet. In using effective testing methods, our developers give you mobile " +
        "banking apps perfect for your banking needs. The secure and precise payment options offer regular updates " +
        "of your accounts. Financial organizations and banks marvel at the mobile apps we do. We make sure that " +
        "mobile banking is within your reach.",
    },
  ]

  return (
    <Layout>
      <Helmet
        title="Mobile banking application development company"
        charSet="utf-8"
        defer={false}
      />
      <PageHeader
        image={images.header_bg.childImageSharp.fluid}
        title="Mobile banking application development company"
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
            Do you need a functional and reliable mobile banking app with
            customized features on board ? Omertex is here to help you achieve
            this goal! We’re experts in offering mobile banking software
            solutions aimed at extending and boosting banking services while
            reducing bank operating costs.
            <br /> <br />
            Tailored fintech solutions we offer will give you an edge when it
            comes to a mobile banking application. You will be able to provide
            an excellent customer experience and safety to your clients since we
            pay attention to mobile banking app design and security.
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
            Mobile banking possibilities
          </h2>
          <Steps data={stepsData} />
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
            Treasure the advantages
          </h2>
          <p className={classNames(page.body_1, style.third_section_p)}>
            Mobile technology gives you an impressive turning point to provide
            banking solutions. You can handle any challenge that comes your way
            and use it for your success. You offer financial institutions and
            banks the comfort they need. It all begins with a mobile banking
            application development company. Omertex is the right choice to give
            you the following advantages:
          </p>
          <h3 className={classNames(page.title_3, style.third_section_h3)}>
            Better Customer Service
          </h3>
          <p className={classNames(page.body_1, style.third_section_p)}>
            You can stand out from the competition by giving convenience to your
            clients. Our banking app offers you the great possibility to talk to
            your customers. You can meet their demands and needs at once and
            become the first to provide them unique and reliable services.
          </p>
          <h3 className={classNames(page.title_3, style.third_section_h3)}>
            Close Selling Point
          </h3>
          <p className={classNames(page.body_1, style.third_section_p)}>
            A mobile banking application offers another selling point to
            customers. Your close connection with them builds strong
            relationships. Clients love to have reliable banking services. So,
            we give you mobile banking for your continuous service to them.
          </p>
          <h3 className={classNames(page.title_3, style.third_section_h3)}>
            Two in One Advantage
          </h3>
          <p className={classNames(page.body_1, style.third_section_p)}>
            You can make a good impression to small businesses through mobile
            banking. Feel free to combine business and single banking in 1 app.
            We’re happy to show you how this works. It provides another
            excellent option for business owners to reach success.
          </p>
          <h3 className={classNames(page.title_3, style.third_section_h3)}>
            Less Banking Costs
          </h3>
          <p className={classNames(page.body_1, style.third_section_p)}>
            With, mobile banking applications banks can save from service
            transactions. Little service costs mean no hassle in doing banking
            transactions. Financial institutions can also focus on expanding
            customer relations and work to continue providing consistent service
            to customers in the future.
          </p>
          <h3 className={classNames(page.title_3, style.third_section_h3)}>
            Higher Depositors
          </h3>
          <p className={classNames(page.body_1, style.third_section_p)}>
            The mobile banking application development gives you the benefit of
            gaining cheap funds. Mobile banking can speed the process by
            increasing depositors from rural places. You can see your services
            grow in no time. Mobile banking applications are perfect for
            customers around the globe.
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
          <TwoColumns data={columnsData} />
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
          <h2 className={page.title_1}>Talk to us</h2>
          <p className={classNames(page.body_1, style.fifth_section_p)}>
            We would be glad to serve you in the best way we could. Let mobile
            banking application open doors for you to do banking transactions.
            So, come now and give us a call today!
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
