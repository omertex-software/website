import React from "react"
import Img from "gatsby-image"
import style from "./provideIndustries.module.sass"
import { graphql, useStaticQuery } from "gatsby"

export const sharpImage = graphql`
  fragment sharpImage on File {
    childImageSharp {
      fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`

const ProvideIndustries = () => {
  const images = useStaticQuery(graphql`
    query {
      blockchain: file(
        relativePath: { eq: "provideIndustries/png_icon_blockchain.png" }
      ) {
        ...sharpImage
      }
      banking: file(
        relativePath: { eq: "provideIndustries/png_icon_banking.png" }
      ) {
        ...sharpImage
      }
      payments: file(
        relativePath: { eq: "provideIndustries/png_icon_payments.png" }
      ) {
        ...sharpImage
      }
      insurance: file(
        relativePath: { eq: "provideIndustries/png_icon_insurance.png" }
      ) {
        ...sharpImage
      }
      asset: file(
        relativePath: { eq: "provideIndustries/png_icon_asset.png" }
      ) {
        ...sharpImage
      }
      lending: file(
        relativePath: { eq: "provideIndustries/png_icon_lending.png" }
      ) {
        ...sharpImage
      }
    }
  `)

  return (
    <div className={style.provide_industries}>
      <div className={style.provide_box}>
        <div className={style.provide_card}>
          <Img
            fluid={images.blockchain.childImageSharp.fluid}
            className={style.provide_icon}
            alt="Blockchain"
          />
          <h3 className={style.provide_title}>Blockchain</h3>
        </div>
        <div className={style.provide_card}>
          <Img
            fluid={images.banking.childImageSharp.fluid}
            className={style.provide_icon}
            alt="Banking"
          />
          <h3 className={style.provide_title}>Banking</h3>
        </div>
        <div className={style.provide_card}>
          <Img
            fluid={images.payments.childImageSharp.fluid}
            className={style.provide_icon}
            alt="Payments"
          />
          <h3 className={style.provide_title}>Payments</h3>
        </div>
      </div>
      <div className={style.provide_box}>
        <div className={style.provide_card}>
          <Img
            fluid={images.insurance.childImageSharp.fluid}
            className={style.provide_icon}
            alt="Insurance"
          />
          <h3 className={style.provide_title}>Insurance</h3>
        </div>
        <div className={style.provide_card}>
          <Img
            fluid={images.asset.childImageSharp.fluid}
            className={style.provide_icon}
            alt="Asset Management"
          />
          <h3 className={style.provide_title}>Asset Management</h3>
        </div>
        <div className={style.provide_card}>
          <Img
            fluid={images.lending.childImageSharp.fluid}
            className={style.provide_icon}
            alt="Lending"
          />
          <h3 className={style.provide_title}>Lending</h3>
        </div>
      </div>
    </div>
  )
}

export default ProvideIndustries
