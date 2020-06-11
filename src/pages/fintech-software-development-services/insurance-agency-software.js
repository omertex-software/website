import React from "react"
import Layout from "../../components/layout"
import classNames from "../../helpers/classNames"
import PageHeader from "../../components/pageHeader/pageHeader"
import ImageSteps from "../../components/imageSteps/imageSteps"
import TwoColumns from "../../components/twoColumns/twoColumns"
import BottomForm from "../../components/bottomForm/bottomForm"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import page from "../../assets/styles/page.module.sass"
import style from "./insurance-agency-software.module.sass"

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
      header_bg: file(relativePath: { eq: "ias/ias_bg.jpg" }) {
        ...sharpImage
      }
      unique_homepage: file(
        relativePath: { eq: "ias/png_icon_unique_homepage.png" }
      ) {
        ...sharpImage
      }
      workspaces: file(relativePath: { eq: "ias/png_icon_workspaces.png" }) {
        ...sharpImage
      }
      company_directory: file(
        relativePath: { eq: "ias/png_icon_company_directory.png" }
      ) {
        ...sharpImage
      }
      publish_company: file(relativePath: { eq: "ias/png_icon_publish.png" }) {
        ...sharpImage
      }
      document_management: file(
        relativePath: { eq: "ias/png_icon_document_management.png" }
      ) {
        ...sharpImage
      }
      task_management: file(
        relativePath: { eq: "ias/png_icon_task_management.png" }
      ) {
        ...sharpImage
      }
      calendars: file(relativePath: { eq: "ias/png_icon_calendars.png" }) {
        ...sharpImage
      }
      contextual_search: file(
        relativePath: { eq: "ias/png_icon_contextual_search.png" }
      ) {
        ...sharpImage
      }
      security: file(relativePath: { eq: "ias/png_icon_security.png" }) {
        ...sharpImage
      }
      brand: file(relativePath: { eq: "ias/png_icon_brand.png" }) {
        ...sharpImage
      }
      adapts: file(relativePath: { eq: "ias/png_icon_adapts.png" }) {
        ...sharpImage
      }
      easy: file(relativePath: { eq: "ias/png_icon_easy.png" }) {
        ...sharpImage
      }
      device: file(relativePath: { eq: "ias/png_icon_device.png" }) {
        ...sharpImage
      }
      partnership: file(relativePath: { eq: "ias/png_icon_partnership.png" }) {
        ...sharpImage
      }
      awesome: file(relativePath: { eq: "ias/png_icon_awesome.png" }) {
        ...sharpImage
      }
      infinite: file(relativePath: { eq: "ias/png_icon_infinite.png" }) {
        ...sharpImage
      }
    }
  `)

  const stepsData = [
    {
      image: images.unique_homepage.childImageSharp.fluid,
      title: "Your Own Unique Homepage",
      description:
        "Build a truly useful homepage for your insurance agents, sales representatives, and employees. For " +
        "personalization add your branding and logos. Include relevant data from your projects, departments and " +
        "groups. Turn your homepage into a lively resource with all the necessary links, a corporation news feed, " +
        "and relevant information. Highlight crucial updates for everyone. Add feeds from often used applications " +
        "so your homepage becomes very helpful and presents a quick summary of news, discussions and important " +
        "meetings or events ahead. If you would like to customize your homepage even further, we are happy to " +
        "assist you to brainstorm your options and figure out what is feasible. We'll build it out for you " +
        "with pleasure.",
    },
    {
      image: images.workspaces.childImageSharp.fluid,
      title: "Workspaces for Departments and Teams",
      description:
        "Whether you are working on a large insurance claim or developing a new insurance policy, you  are able to " +
        "collaborate with people in and outside your firm using our online workspaces. These workspaces can be " +
        "flexible, scalable and robust with numerous features such as discussions, blogs, file sharing, and event " +
        "sharing. You can gain insight, offer feedback and share ideas easily. These workspaces will be secure and " +
        "you can set permissions to decide who has access to what specifically. They also tie into other popular " +
        "features such as shared calendars, task management, document management, publishing tools, and social " +
        "collaboration. Oversee projects effectively and collaborate together while keeping conversations within " +
        "context. Connect people from different departments. Add partners. Scale up or down.",
    },
    {
      image: images.company_directory.childImageSharp.fluid,
      title: "Company Directory and Employee Profiles",
      description:
        "The company directory that we create for you gives you immediate access into deeper insight about the " +
        "people in your organization. The directory is made of member profiles that show additional information " +
        "regarding each member and his or her relationships within the community. As a member, you’ll be able to " +
        "create your own user profile that contains your photograph, name and contact information. You can also add " +
        "an index of content you have created, an activity stream, relationships with other members, not to mention " +
        "the spaces and groups you have joined. Employee profiles are a very important aspect of social management " +
        "software. You can likewise have a personal activity feed like Facebook's Wall with a real-time feed of " +
        "dynamic content. You can share your status update of what you're working on. Ask a question or invite " +
        "dialogue with another member by just mentioning them (@johnDoe for example). Start up a discussion or " +
        "connect to an existing topic with hashtags. Get feedback on your documents or files. Share your expertise. " +
        "Every member can have publishing tools and a voice. As you establish your company directory, you will find " +
        "it’s easier than ever to seek out experts on any given topic and quickly form teams and get projects done. " +
        "You can easily connect with people in different locations and departments. This also helps with global " +
        "firms where employees might feel disconnected at times. By having a company directory with employee " +
        "profiles, you encourage connections between your insurance agents and your groups, developing greater bonds " +
        "and a stronger community. As your firm becomes more connected and personalised, you will see productivity " +
        "increase significantly.",
    },
    {
      image: images.publish_company.childImageSharp.fluid,
      title: "Publish Company News, Announcements and Updates",
      description:
        "Through the activity stream that we can create, you can publish relevant insurance company news, updates, " +
        "and announcements. Add relevant threads to your HomePage. Personalize your individual feeds to receive info " +
        "regarding  projects underway and your department. Share insight and provide feedback using the comment " +
        "feature similar to microblogging. Each user may personalise their own individual feed to only receive " +
        "information tied to their projects, departments, and general company information. Keep data flowing so " +
        "your teams are well informed and engaged.",
    },
    {
      image: images.document_management.childImageSharp.fluid,
      title: "Document Management",
      description:
        "From insurance claims to policies, associated documentation, and procedures, you have got loads of data " +
        "flowing through your organization. Managing this process doesn’t have to be slow or cumbersome. Skip the " +
        "delays related to traditional document management such as emails and file systems where you simply dump " +
        "files into folders. With our secure document management system, you can search for documents by content, " +
        "author, tags, discussions and project names. Find documents and all of the related conversation threads, " +
        "and be armed with all the necessary information on any topic. Review different versions of documents or " +
        "add your feedback with comments. Preview documents before you download them. Work more efficiently and faster.",
    },
    {
      image: images.task_management.childImageSharp.fluid,
      title: "Task Management for Insurance Companies",
      description:
        "From writing a new insurance policy to providing insurance claims support for your customers, each aspect " +
        "of your insurance business involves performing various tasks. Managing these tasks sufficiently is crucial " +
        "to getting work done and ensuring that your team is on the same page. Assign and facilitate tasks for your " +
        "insurance agents, specialists, underwriters, sales team, and other employees easily. Log in periodically to " +
        "see progress. Schedule project phases and add due dates. Check in to see what has been achieved and what " +
        "remains to be done. Add reminders wherever necessary and re-assign tasks if required. Get all the work done " +
        "effectively while keeping track of every step along the way. Complete projects with great results and keep " +
        "your workforce productive and engaged.",
    },
    {
      image: images.calendars.childImageSharp.fluid,
      title: "Calendars - Personal and Shared",
      description:
        "Organize your time more effectively by using personal and shared calendars. The integrated calendar offers " +
        "a robust and attractive alternative to Outlook and Google calendars. Simplify your daily communications and " +
        "always be on track with important deadlines, appointments, and meetings using your calendar. Manage your " +
        "workdays and workweek on your own terms. Construct your personal calendar to include all of your major " +
        "events and appointments. After you've got your personal calendar organized, you can build company calendars " +
        "and share events or meetings. You’re even able to share the whole calendar if needed with your insurance " +
        "teams and partners. Invite people from outside your insurance company to be guests on specific events or " +
        "meetings. Add reminders for everyone involved. You will be able to issue invitations right from your " +
        "calendar or through your email. Ensure that everyone is connected and informed, with a clear plan of what " +
        "events and meetings lay ahead so you do not miss important deadlines or client meetings. Personalize your " +
        "calendar by color coding categories.  Update or change times and events directly and conveniently. Simply " +
        "drag and drop events into new time slots using the intuitive, easy to use interface. Plan your time " +
        "efficiently and squeeze more out of your work week.",
    },
    {
      image: images.contextual_search.childImageSharp.fluid,
      title: "Contextual Search",
      description:
        "We offer powerful contextual search functionality-find all the information on any given topic within your " +
        "organization at one time. Search for a project name or subject and pull up all relevant conversations, " +
        "workforce insight, files, documents, and commentary. Find the information you need on any given subject. " +
        "Search function performance eliminates the frustration often associated with file sharing systems and " +
        "knowledge system management. Get the information you need instantly. Be informed and more productive.",
    },
  ]

  const columnData = [
    {
      image: images.security.childImageSharp.fluid,
      title: "You Get Customizable Security",
      description:
        "Built with security in mind, Omertex uses the most modern technologies to keep your business data safe.",
    },
    {
      image: images.brand.childImageSharp.fluid,
      title: "Apply Your Own Style & Brand",
      description:
        "From customization and branding to integrating with your existing software, you can make it truly unique.",
    },
    {
      image: images.adapts.childImageSharp.fluid,
      title: "It Adapts to How You Work",
      description:
        "Your business is unique. The insurance agency software we design is flexible; you have full control over " +
        "how it works for you.",
    },
    {
      image: images.easy.childImageSharp.fluid,
      title: "Easy to Learn, Easy to Use",
      description:
        "We create Insurance agency software that doesn't require lots of training; because it is designed with " +
        "concepts you are already familiar with.",
    },
    {
      image: images.device.childImageSharp.fluid,
      title: "Bring Your Own Device",
      description:
        "We design an exceptionally fluid interface that adapts automatically based on the device you are using.",
    },
    {
      image: images.partnership.childImageSharp.fluid,
      title: "We're here to help you",
      description:
        "We work hard to make you happy. At the risk of tooting our own horn; our support separates us from every " +
        "other intranet vendor all considered.",
    },
    {
      image: images.awesome.childImageSharp.fluid,
      title: "Awesome customer service",
      description:
        "You’ll have access to: admin and user guides, how-to articles and videos, public discussion forums and " +
        "private support. You get every feature like: social and productivity apps, content and collaboration tools, " +
        "unlimited people and profiles and unlimited spaces and groups.",
    },
    {
      image: images.infinite.childImageSharp.fluid,
      title: "No limits",
      description:
        "We out-distance our competitors by designing insurance agency software that is flexible, familiar, and " +
        "friendly. If your company is doing something remarkable to better the world we live in today, we want to " +
        "help you to the full extent of technology. If you require extra help--from ongoing support to specialized " +
        "consulting and customizations—we are always here for you. Each of our clients is unique, and we have the " +
        "drive to assist and equip you in attaining all of your objectives.",
    },
  ]

  return (
    <Layout>
      <Helmet title="Insurance agency software" charSet="utf-8" defer={false} />
      <PageHeader
        image={images.header_bg.childImageSharp.fluid}
        title="Insurance agency software"
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
            Omertex is a premier provider of business technology to the property
            and casualty insurance industry. Our technological superiority,
            system flexibility, service expertise, and ability to deliver a
            reliable end-to-end insurance agency software at a competitive rate,
            make our solutions ideal for startups and enterprises.
            <br />
            Our mission is to be a guide for enterprises and startups in the
            world of software. We see ourselves forging technology that proves
            one belief-All new software should be easy to learn and easy to use.
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
            How should you service your existing clients and seek out new ones?
          </h2>
          <p className={page.body_1}>
            As the owner of an independent insurance agency, your day is full of
            paperwork. And every piece of paper you touch is vital to your
            client and to your bottom line. Keeping track of all the requests
            was probably a lot easier when you were just starting out, however,
            now you’d need to be an octopus to handle all the paper coming your
            way.
            <br />
            <br />
            Consider buying insurance agency software that allows easy and
            direct control over how you work. Many insurance agencies use client
            management software to help them keep their operation organized. The
            right system can streamline your workflow and minimize double
            entries, saving you time and money. We bring superior software
            solutions to the independent insurance market.
          </p>
          <h2 className={classNames(page.title_1, style.second_section_h2)}>
            Solutions we offer to our clients
          </h2>
          <p className={page.body_1}>
            Additionally, we offer customization for a lot more software
            applications, and you can contact our team if you are in need of
            outsourcing custom software development services. Our comprehensive
            systems are designed to empower every insurance carrier, MGA
            (Managing General Agent), and agency so each may reach their full
            potential. Through all these years we have continued to build on
            that core principle-offering a scalable, comprehensive and reliable
            platform able to achieve the business ambitions of all our clients.
          </p>
          <h2 className={classNames(page.title_1, style.second_section_h2)}>
            Our insurance agency management solutions
          </h2>
          <p className={page.body_1}>
            Our insurance agency management system offers everything our clients
            call for to support their business needs. Built-in rating, document
            management and storage, premium accounting and G/L, CRM Management
            tools, support to Windows-based browsers and Microsoft Office are
            only a few features that help give our clients their competitive
            edge. <br /> At Omertex, we pride ourselves in analyzing
            contemporary technological trends in the insurance industry and
            providing insurance agency management software solutions for our
            customers’ ongoing and future needs. We continue to push the
            boundaries and offer more flexibility with a lower price. That is
            why we offer a subscription-based hosted solution, with the ability
            to connect directly to our database from any mobile device, tablet
            or PC, through our ultra-thin Webflow technology. <br /> Connect all
            lines of business, locations, and staff with a single foundational
            insurance agency management system. Eliminate time and money spent
            operating in and managing separate, disparate software applications.
            Applied management systems offer a comprehensive view of customers
            and prospects, enabling your employees to provide complete customer
            service while evaluating opportunities to cross-sell and upsell.
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
          <div className={page.two_columns}>
            <div className={page.two_columns_column}>
              <h3 className={classNames(page.title_3, page.orange_line_min)}>
                For insurance agents
              </h3>
              <p className={classNames(page.body_1, style.third_section_p)}>
                Our complete portfolio of insurance agency software solutions
                help independent agencies increase productivity and efficiency
                with personal insurance lines at market leading rates, an agency
                management system, and web-based hosting solutions, designed to
                give agencies access to their data, anytime, anywhere.
                <br />
                Whether you are a single independent agent growing your
                enterprise or a large multi-state agency, Omertex excels by
                synchronizing business and technology with an intuitive and easy
                to use system for insurance agencies.
              </p>
            </div>
            <div className={page.two_columns_column}>
              <h3 className={classNames(page.title_3, page.orange_line_min)}>
                For insurance carriers
              </h3>
              <p className={classNames(page.body_1, style.third_section_p)}>
                The insurance software solutions we implement, for national,
                regional and mutual insurance carriers will help you gain a
                competitive advantage and win new business. With our wide array
                of rating tools, analytics, and a nationwide insurance agency
                base, we’re able to improve your win rate, control costs and
                reach new agencies. Confidently enter new markets, competitively
                worth your products, with real-time data.
              </p>
            </div>
            <div className={page.two_columns_column}>
              <h3 className={classNames(page.title_3, page.orange_line_min)}>
                Management software for Insurance companies
              </h3>
              <p className={classNames(page.body_1, style.third_section_p)}>
                If you're looking for an easy-to-use insurance agency management
                system for your agency then you've come to the right place. We
                offer solutions with an integrated set of tools that you can use
                to connect your people, organize your work and get things done.
                Insurance agency management software is not just an app-it's a
                platform. So it is very easily customized, built-upon or
                altered, and integrated into how you already work.
              </p>
            </div>
            <div className={page.two_columns_column}>
              <h3 className={classNames(page.title_3, page.orange_line_min)}>
                Insurance agency management software
              </h3>
              <p className={classNames(page.body_1, style.third_section_p)}>
                You want management software that makes it easy for you to
                organize your company's people, documents, and data. That is a
                given, but what about one that allows you to do more? <br />
                Imagine a new kind of a client management software which your
                people actually find value in visiting. A management system that
                unites your employees, energizes your workplace and is
                ridiculously easy to learn and simple to use. Our team of
                professionals takes the concepts of old and clunky management
                software and transforms them into an easy-to-use collaboration,
                communication, and knowledge management platform.
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
          <h2 className={classNames(page.title_1, style.fourth_section_h2)}>
            Working smarter is better.
          </h2>
          <p className={page.body_1}>
            Insurance agency management software can easily accelerate
            productivity in your business, simplify information sharing, remove
            previous barriers to communication imposed by email, and have
            everyone on the same page in one place. Plan effectively and get
            work done.
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
          <h2 className={classNames(page.title_1, style.fifth_section_h2)}>
            Key features
          </h2>
          <ImageSteps data={stepsData} />
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
            Why choose custom Insurance agency software?
          </h2>
          <p className={classNames(page.body_1, style.sixth_section_p)}>
            Whether you are a startup or a large enterprise, you’ll own a
            single, integrated platform for multiple solutions.
          </p>
          <TwoColumns data={columnData} />
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
