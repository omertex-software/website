import React from "react"
import Layout from "../../components/layout"
import classNames from "../../helpers/classNames"
import SectionForm from "../../components/sectionForm/sectionForm"
import TwoColumnsSlider from "../../components/twoColumnsSlider/twoColumnsSlider"
import TwoColumnsList from "../../components/twoColumnsList/twoColumnsList"
import ProvideIndustries from "../../components/provideIndustries/provideIndustries"
import BottomForm from "../../components/bottomForm/bottomForm"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"
import page from "../../assets/styles/page.module.sass"
import style from "./android-app-development.module.sass"

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
      header_bg: file(relativePath: { eq: "aad/aad_bg.jpg" }) {
        ...sharpImage
      }
      slide: file(relativePath: { eq: "aad/slide.jpg" }) {
        ...sharpImage
      }
      top_white: file(relativePath: { eq: "aad/png_icon_top_white.png" }) {
        ...sharpImage
      }
      range_white: file(relativePath: { eq: "aad/png_icon_range_white.png" }) {
        ...sharpImage
      }
      compatible_white: file(
        relativePath: { eq: "aad/png_icon_compatible_white.png" }
      ) {
        ...sharpImage
      }
      world_white: file(relativePath: { eq: "aad/png_icon_world_white.png" }) {
        ...sharpImage
      }
      top_black: file(relativePath: { eq: "aad/png_icon_top_black.png" }) {
        ...sharpImage
      }
      range_black: file(relativePath: { eq: "aad/png_icon_range_black.png" }) {
        ...sharpImage
      }
      compatible_black: file(
        relativePath: { eq: "aad/png_icon_compatible_black.png" }
      ) {
        ...sharpImage
      }
      world_black: file(relativePath: { eq: "aad/png_icon_world_black.png" }) {
        ...sharpImage
      }
      android_studio: file(
        relativePath: { eq: "aad/png_icon_android_studio.png" }
      ) {
        ...sharpImage
      }
      mvvm_mvp: file(relativePath: { eq: "aad/png_icon_mvvm_mvp.png" }) {
        ...sharpImage
      }
      java_icon: file(relativePath: { eq: "aad/png_icon_java.png" }) {
        ...sharpImage
      }
      kotlin: file(relativePath: { eq: "aad/png_icon_kotlin.png" }) {
        ...sharpImage
      }
      android_jetpack: file(
        relativePath: { eq: "aad/png_icon_android_jetpack.png" }
      ) {
        ...sharpImage
      }
      dagger: file(relativePath: { eq: "aad/png_icon_dagger.png" }) {
        ...sharpImage
      }
      retrofit: file(relativePath: { eq: "aad/png_icon_retrofit.png" }) {
        ...sharpImage
      }
      rxjava: file(relativePath: { eq: "aad/png_icon_rxjava.png" }) {
        ...sharpImage
      }
      firebase: file(relativePath: { eq: "aad/png_icon_firebase.png" }) {
        ...sharpImage
      }
      glide: file(relativePath: { eq: "aad/png_icon_glide.png" }) {
        ...sharpImage
      }
      json: file(relativePath: { eq: "aad/png_icon_json.png" }) {
        ...sharpImage
      }
    }
  `)

  const listData = [
    "Custom Android app development",
    "Android app testing",
    "Native Android app development",
    "Android app upgrade",
    "Android app delivery to market",
    "Cross-platform Android app development",
    "Android app UI/UX designing",
  ]

  const slideData = [
    {
      image: images.slide.childImageSharp.fluid,
      title: "NuMo Send - P2P Transactions",
      description:
        "NuMo Send is the next step in revolutionizing peer-to-peer (P2P)" +
        "transactions. It has been designed to focus on your life. The" +
        "beautiful, official-guides-driven UX and UI is perfect for any" +
        "modern Android and iOS device...",
    },
    {
      image: images.slide.childImageSharp.fluid,
      title: "NuMo Send - P2P Transactions",
      description:
        "NuMo Send is the next step in revolutionizing peer-to-peer (P2P)" +
        "transactions. It has been designed to focus on your life. The" +
        "beautiful, official-guides-driven UX and UI is perfect for any" +
        "modern Android and iOS device...",
    },
    {
      image: images.slide.childImageSharp.fluid,
      title: "NuMo Send - P2P Transactions",
      description:
        "NuMo Send is the next step in revolutionizing peer-to-peer (P2P)" +
        "transactions. It has been designed to focus on your life. The" +
        "beautiful, official-guides-driven UX and UI is perfect for any" +
        "modern Android and iOS device...",
    },
  ]

  return (
    <Layout>
      <Helmet
        title="Android application development "
        charSet="utf-8"
        defer={false}
      />
      <BackgroundImage
        Tag="section"
        className={classNames(
          page.section,
          page.justify_center,
          style.page_header
        )}
        fluid={images.header_bg.childImageSharp.fluid}
      >
        <div className={page.content}>
          <h1 className={page.title_1}>
            Android app development <br /> services
          </h1>
          <div className={classNames(page.between, style.page_header_cards)}>
            <div className={style.page_header_card}>
              <Img
                fluid={images.top_white.childImageSharp.fluid}
                className={style.page_header_card_icon}
                alt="Icon"
              />
              <p
                className={classNames(page.body_1, style.page_header_card_text)}
              >
                Top class solutions for businesses of any size
              </p>
            </div>
            <div className={style.page_header_card}>
              <Img
                fluid={images.range_white.childImageSharp.fluid}
                className={style.page_header_card_icon}
                alt="Icon"
              />
              <p
                className={classNames(page.body_1, style.page_header_card_text)}
              >
                Full range of Android app development services
              </p>
            </div>
            <div className={style.page_header_card}>
              <Img
                fluid={images.compatible_white.childImageSharp.fluid}
                className={style.page_header_card_icon}
                alt="Icon"
              />
              <p
                className={classNames(page.body_1, style.page_header_card_text)}
              >
                User-friendly apps that are compatible with all types of Android
                devices
              </p>
            </div>
            <div className={style.page_header_card}>
              <Img
                fluid={images.world_white.childImageSharp.fluid}
                className={style.page_header_card_icon}
                alt="Icon"
              />
              <p
                className={classNames(page.body_1, style.page_header_card_text)}
              >
                Work with clients from all over the world
              </p>
            </div>
          </div>
        </div>
      </BackgroundImage>
      <section
        className={classNames(
          page.section,
          page.justify_center,
          style.hidden_cards
        )}
      >
        <div className={page.content}>
          <div className={style.page_header_card}>
            <Img
              fluid={images.top_black.childImageSharp.fluid}
              className={style.page_header_card_icon}
              alt="Icon"
            />
            <p className={classNames(page.body_1, style.page_header_card_text)}>
              Top class solutions for businesses of any size
            </p>
          </div>
          <div className={style.page_header_card}>
            <Img
              fluid={images.range_black.childImageSharp.fluid}
              className={style.page_header_card_icon}
              alt="Icon"
            />
            <p className={classNames(page.body_1, style.page_header_card_text)}>
              Full range of Android app development services
            </p>
          </div>
          <div className={style.page_header_card}>
            <Img
              fluid={images.compatible_black.childImageSharp.fluid}
              className={style.page_header_card_icon}
              alt="Icon"
            />
            <p className={classNames(page.body_1, style.page_header_card_text)}>
              User-friendly apps that are compatible with all types of Android
              devices
            </p>
          </div>
          <div className={style.page_header_card}>
            <Img
              fluid={images.world_black.childImageSharp.fluid}
              className={style.page_header_card_icon}
              alt="Icon"
            />
            <p className={classNames(page.body_1, style.page_header_card_text)}>
              Work with clients from all over the world
            </p>
          </div>
        </div>
      </section>
      <section
        className={classNames(
          page.section,
          page.justify_center,
          style.first_section
        )}
      >
        <div className={page.content}>
          <h2 className={page.title_1}>
            Android app development services Omertex provides
          </h2>
          <p className={classNames(page.body_1, style.first_section_p)}>
            If you choose us as your Android application development company,
            you can get the following services:
          </p>
          <TwoColumnsList data={listData} minBottom={true} />
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
          <h2 className={page.title_1}>
            When to contact an android app development Company
          </h2>
          <p className={classNames(page.body_1, style.second_section_p)}>
            So, you’re not sure whether you’re ready to hire an android app
            development company and outsource your app development? Leave your
            doubts behind! We are always ready to discuss our cooperation,
            including cases where:
          </p>
          <p className={page.body_1}>
            · you just have an idea for an Android application; <br />· you have
            already prepared a long list of detailed requirements; <br />· you
            have already created an app and now you need our expertise in
            Android app development to upgrade it and expand its functionality.
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
            Technologies we apply in android app development
          </h2>
          <div className={style.android_tech_box}>
            <div className={style.android_tech}>
              <div className={style.android_tech_info}>
                <h3 className={page.title_3}>IDE:</h3>
                <p className={page.body_1}>AndroidStudio</p>
              </div>
              <div className={style.android_tech_icons}>
                <Img
                  fluid={images.android_studio.childImageSharp.fluid}
                  className={style.android_studio_icon}
                  alt="Android Studio"
                />
              </div>
            </div>
            <div className={style.android_tech}>
              <div className={style.android_tech_info}>
                <h3 className={page.title_3}>Architecture:</h3>
                <p className={page.body_1}>Clean architecture/MVVM/MVP</p>
              </div>
              <div className={style.android_tech_icons}>
                <Img
                  fluid={images.mvvm_mvp.childImageSharp.fluid}
                  className={style.mvvm_mvp_icon}
                  alt="MVVM/MVP"
                />
              </div>
            </div>
            <div className={style.android_tech}>
              <div className={style.android_tech_info}>
                <h3 className={page.title_3}>Languages:</h3>
                <p className={page.body_1}>Kotlin, Java</p>
              </div>
              <div className={style.android_tech_icons}>
                <Img
                  fluid={images.kotlin.childImageSharp.fluid}
                  className={style.kotlin_icon}
                  alt="Kotlin"
                />
                <Img
                  fluid={images.java_icon.childImageSharp.fluid}
                  className={style.java_icon}
                  alt="Java"
                />
              </div>
            </div>
            <div className={style.android_tech}>
              <div className={style.android_tech_info}>
                <h3 className={page.title_3}>Libs:</h3>
                <p className={page.body_1}>
                  Android Jetpack (DataBinding, Lifecycles, LiveData, ViewModel,
                  Room...), Dagger2/Koin, Retrofit, RxJava2, Firebase, Glide,
                  Gson...
                </p>
              </div>
              <div
                className={classNames(
                  style.android_tech_icons,
                  style.android_tech_libs
                )}
              >
                <Img
                  fluid={images.android_jetpack.childImageSharp.fluid}
                  className={style.android_jetpack_icon}
                  alt="Android Jetpack"
                />
                <Img
                  fluid={images.dagger.childImageSharp.fluid}
                  className={style.dagger_icon}
                  alt="Dagger 2"
                />
                <Img
                  fluid={images.retrofit.childImageSharp.fluid}
                  className={style.retrofit_icon}
                  alt="Retrofit"
                />
                <Img
                  fluid={images.rxjava.childImageSharp.fluid}
                  className={style.rxjava_icon}
                  alt="RxJava"
                />
                <Img
                  fluid={images.firebase.childImageSharp.fluid}
                  className={style.firebase_icon}
                  alt="Firebase"
                />
                <Img
                  fluid={images.glide.childImageSharp.fluid}
                  className={style.glide_icon}
                  alt="Glide"
                />
                <Img
                  fluid={images.json.childImageSharp.fluid}
                  className={style.json_icon}
                  alt="Json"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionForm title="Already have an idea for an Android app?">
        <p>
          Contact us to discuss how we can help you bring your idea to life!
        </p>
      </SectionForm>
      <section
        className={classNames(
          page.section,
          page.justify_center,
          style.fourth_section
        )}
      >
        <div className={page.content}>
          <h2 className={page.title_1}>
            Enjoy an awesome and user-friendly android app
          </h2>
          <p className={classNames(page.body_1, style.fourth_section_p)}>
            Omertex can help you meet the requirements of the booming mobile app
            industry.
          </p>
          <p className={page.body_1}>
            Our responsible and attentive approach to mobile app development
            results in well-thought-out applications with expanded functionality
            and high performance.
            <br />
            <br />
            We always bear in mind the importance of an engaging app for
            businesses and realize what a crucial role it plays in a company’s
            relations with the clients. That’s why when you use our Android app
            development services for your company, you can be absolutely
            confident in the feasibility of your investments and their high
            returns.
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
            Learn more about our expertise in Android app development
          </h2>
          <TwoColumnsSlider data={slideData} />
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
            Industries we offer android mobile app development in
          </h2>
          <p className={classNames(page.body_1, style.sixth_section_p)}>
            We are proud to act as an Android app development company for
            companies working in industries such as:
          </p>
          <ProvideIndustries />
        </div>
      </section>
      <section
        className={classNames(
          page.section,
          page.justify_center,
          style.seventh_section
        )}
      >
        <div className={page.content}>
          <h2 className={classNames(page.title_1, style.seventh_section_h2)}>
            The way our android app development process is organized
          </h2>
          <p className={page.body_1}>
            When you turn to us for Android app development services, you can be
            sure that your future awesome app will go through the following
            stages before it sees the world:
          </p>
          <h3 className={classNames(page.title_3, style.seventh_section_h3)}>
            Gathering requirements and their analysis
          </h3>
          <p className={page.body_1}>
            Before setting off to work, we need to have a clear understanding of
            our customers’ requirements and demands. That’s why we strongly
            believe in the importance of this stage.
          </p>
          <h3 className={classNames(page.title_3, style.seventh_section_h3)}>
            UI/UX design
          </h3>
          <p className={page.body_1}>
            At this stage, our outstanding specialists are carefully studying
            all the requirements and designing your Android app in strict
            accordance with them.
          </p>
          <h3 className={classNames(page.title_3, style.seventh_section_h3)}>
            App development
          </h3>
          <p className={page.body_1}>
            Though it may seem that this stage is a purely technical one, it
            doesn’t mean that you, as a customer, will be left on the sidelines.
            If you choose us as your Android development company, you will be
            able to stay involved and track the progress.
          </p>
          <h3 className={classNames(page.title_3, style.seventh_section_h3)}>
            Testing and quality assurance
          </h3>
          <p className={page.body_1}>
            We are extremely attentive to details which guarantees that you will
            get an absolutely bug-free Android app with full functionality as
            agreed upon in the first stage. Now we just need the nod of approval
            from you.
          </p>
          <h3 className={classNames(page.title_3, style.seventh_section_h3)}>
            Further assistance and maintenance
          </h3>
          <p className={page.body_1}>
            If you need our help with deploying your app to Google Play,
            expanding its functionality, or other related issues, our top
            Android app developers are always at your disposal.
          </p>
        </div>
      </section>
      <section
        className={classNames(
          page.section,
          page.justify_center,
          style.eighth_section
        )}
      >
        <div className={page.content}>
          <h2 className={classNames(page.title_1, style.eighth_section_h2)}>
            Why omertex is the perfect android app development company for you
          </h2>
          <div className={page.two_columns}>
            <div className={page.two_columns_column}>
              <p
                className={classNames(
                  page.body_1,
                  page.orange_line,
                  style.eighth_section_p
                )}
              >
                Enjoying the reputation of an award-winning Android application
                development company, we always take our clients’ interests as
                the key priorities. We respect deadlines and highly value our
                clients’ time and resources.
              </p>
              <p
                className={classNames(
                  page.body_1,
                  page.orange_line,
                  style.eighth_section_p
                )}
              >
                Our Android app developers stand out for their deep expertise
                and rich skills in working with both time-proven and
                cutting-edge tools and technologies.
              </p>
              <p
                className={classNames(
                  page.body_1,
                  page.orange_line,
                  style.eighth_section_p
                )}
              >
                Our work doesn’t end when your product is ready to be introduced
                to your clients. Our top specialists are always here to provide
                you with professional assistance throughout the entire life
                cycle of your Android app.
              </p>
            </div>
            <div className={page.two_columns_column}>
              <p
                className={classNames(
                  page.body_1,
                  page.orange_line,
                  style.eighth_section_p
                )}
              >
                There are no limits or borders for us. We provide our Android
                app development services worldwide, offering our deep
                technological and FinTech expertise for our customers — no
                matter where they are.
              </p>
              <p
                className={classNames(
                  page.body_1,
                  page.orange_line,
                  style.eighth_section_p
                )}
              >
                When it comes to delivering our Android app development
                services, we have the following priorities: quality,
                functionality, and 100% user-friendliness of our solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <BottomForm title="Contact us">
        <h3>
          We realize that choosing an iPhone app development company is a
          serious decision.
        </h3>
        <p>
          If you want to learn more about us and our iPhone development
          services, please leave your contact details so that we can reach you.
        </p>
        <p>
          We are looking forward to getting to know you and your ideas so we can
          help bring them to life.
        </p>
      </BottomForm>
    </Layout>
  )
}
