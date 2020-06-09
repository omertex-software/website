import React from "react"
import style from "./technologies.module.sass"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const sharpImage = graphql`
    fragment sharpImage on File {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  `

const Technologies = () => {
  const images = useStaticQuery(graphql`
    query {
      nodejs: file(relativePath: { eq: "technologies/png_icon_nodejs.png" }) {
        ...sharpImage
      }
      net_core: file(relativePath: { eq: "technologies/png_icon_net_core.png" }) {
        ...sharpImage
      }
      django_python: file(
        relativePath: { eq: "technologies/png_icon_django_python.png" }
      ) {
        ...sharpImage
      }
      amazon: file(relativePath: { eq: "technologies/png_icon_amazon.png" }) {
        ...sharpImage
      }
      azure: file(relativePath: { eq: "technologies/png_icon_azure.png" }) {
        ...sharpImage
      }
      docker: file(relativePath: { eq: "technologies/png_icon_docker.png" }) {
        ...sharpImage
      }
      mysql: file(relativePath: { eq: "technologies/png_icon_mysql.png" }) {
        ...sharpImage
      }
      sql_server: file(relativePath: { eq: "technologies/png_icon_sql_server.png" }) {
        ...sharpImage
      }
      mongodb: file(relativePath: { eq: "technologies/png_icon_mongodb.png" }) {
        ...sharpImage
      }
      postgresql: file(relativePath: { eq: "technologies/png_icon_postgresql.png" }) {
        ...sharpImage
      }
      angular: file(relativePath: { eq: "technologies/png_icon_angular.png" }) {
        ...sharpImage
      }
      bootstrap: file(relativePath: { eq: "technologies/png_icon_bootstrap.png" }) {
        ...sharpImage
      }
      react: file(relativePath: { eq: "technologies/png_icon_react.png" }) {
        ...sharpImage
      }
      jquery: file(relativePath: { eq: "technologies/png_icon_jquery.png" }) {
        ...sharpImage
      }
    }
  `)

  return (
    <div className={style.technologies_box}>
      <div className={style.technology}>
        <div className={style.technology_header}>
          <h3 className={style.title}>PROGRAMMING LANGUAGES</h3>
          <p className={style.technology_description}>
            Node.js, .Net Core, Python + Django
          </p>
        </div>
        <div className={style.technology_icons_box}>
          <Img
            fluid={images.nodejs.childImageSharp.fluid}
            className={style.technology_icons}
            alt="Nodejs"
          />
          <Img
            fluid={images.net_core.childImageSharp.fluid}
            className={style.technology_icons}
            alt=".Net core"
          />
          <Img
            fluid={images.django_python.childImageSharp.fluid}
            className={style.technology_icons}
            alt="Django Python"
          />
        </div>
      </div>
      <div className={style.technology}>
        <div className={style.technology_header}>
          <h3 className={style.title}>
            CLOUD TECHNOLOGIES FOR WEB APPLICATIONS
          </h3>
          <p className={style.technology_description}>
            Amazon Web Services, Microsoft Azure, Docker
          </p>
        </div>
        <div className={style.technology_icons_box}>
          <Img
            fluid={images.amazon.childImageSharp.fluid}
            className={style.technology_icons}
            alt="Amazon"
          />
          <Img
            fluid={images.azure.childImageSharp.fluid}
            className={style.technology_icons}
            alt="Microsoft Azure"
          />
          <Img
            fluid={images.docker.childImageSharp.fluid}
            className={style.technology_icons}
            alt="Docker"
          />
        </div>
      </div>
      <div className={style.technology}>
        <div className={style.technology_header}>
          <h3 className={style.title}>DATABASE DEVELOPMENT</h3>
          <p className={style.technology_description}>
            MySQL, SQL Server, Mongo DB, PostgreSQL
          </p>
        </div>
        <div className={style.technology_icons_box}>
          <Img
            fluid={images.mysql.childImageSharp.fluid}
            className={style.technology_icons}
            alt="MySQL"
          />
          <Img
            fluid={images.sql_server.childImageSharp.fluid}
            className={style.technology_icons}
            alt="Microsoft SQL Server"
          />
          <Img
            fluid={images.mongodb.childImageSharp.fluid}
            className={style.technology_icons}
            alt="MongoDB"
          />
          <Img
            fluid={images.postgresql.childImageSharp.fluid}
            className={style.technology_icons}
            alt="PostgreSQL"
          />
        </div>
      </div>
      <div className={style.technology}>
        <div className={style.technology_header}>
          <h3 className={style.title}>FRONT-END DEVELOPMENT</h3>
          <p className={style.technology_description}>
            Angular, Bootstrap, React, jQuery
          </p>
        </div>
        <div className={style.technology_icons_box}>
          <Img
            fluid={images.angular.childImageSharp.fluid}
            className={style.technology_icons}
            alt="Angular"
          />
          <Img
            fluid={images.bootstrap.childImageSharp.fluid}
            className={style.technology_icons}
            alt="Bootstrap"
          />
          <Img
            fluid={images.react.childImageSharp.fluid}
            className={style.technology_icons}
            alt="React"
          />
          <Img
            fluid={images.jquery.childImageSharp.fluid}
            className={style.technology_icons}
            alt="JQuery"
          />
        </div>
      </div>
    </div>
  )
}

export default Technologies
