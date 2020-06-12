import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

const style = {
  section: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  content: {
    width: "960px",
    padding: "20px 60px",
    display: "flex",
    flexFlow: "column",
  },
  title: {
    fontFamily: "Lato, sans-serif",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "28px",
    lineHeight: "42px",
    letterSpacing: "0.01em",
    color: "#3D3D3D",
    margin: "18px 0",
  },
}

export default () => {
  return (
    <Layout>
      <Helmet title="Routing" charSet="utf-8" defer={false} />
      <section style={style.section}>
        <div style={style.content}>
          <a
            style={style.title}
            target="_blank"
            rel="noopener noreferrer"
            href="/what-we-do/custom-software-development-services"
          >
            006 Custom software development services
          </a>
          <a
            style={style.title}
            target="_blank"
            rel="noopener noreferrer"
            href="/what-we-do/mobile-app-development-services"
          >
            007 Mobile app development services
          </a>
          <a
            style={style.title}
            target="_blank"
            rel="noopener noreferrer"
            href="/what-we-do/web-application-development-services"
          >
            008 Web app development services
          </a>
          <a
            style={style.title}
            target="_blank"
            rel="noopener noreferrer"
            href="/what-we-do/enterprise-software-development"
          >
            009 Enterprise corporate software development
          </a>
          <a
            style={style.title}
            target="_blank"
            rel="noopener noreferrer"
            href="/what-we-do/software-development-services-for-startups"
          >
            010 Software development services for startups
          </a>
          <a
            style={style.title}
            target="_blank"
            rel="noopener noreferrer"
            href="/what-we-do/revamping-legacy-software-applications"
          >
            011 Revamping legacy software applications
          </a>
          <a
            style={style.title}
            target="_blank"
            rel="noopener noreferrer"
            href="/fintech-software-development-services/asset-management-software-development"
          >
            012 Asset management software development
          </a>
          <a
            style={style.title}
            target="_blank"
            rel="noopener noreferrer"
            href="/fintech-software-development-services"
          >
            013 Fintech software development services
          </a>
          <a
            style={style.title}
            target="_blank"
            rel="noopener noreferrer"
            href="/what-we-do/software-development-services-for-startups/it-technical-consultant-for-your-startup"
          >
            014 IT technical consultant for your startup
          </a>
          <a
            style={style.title}
            target="_blank"
            rel="noopener noreferrer"
            href="/what-we-do/software-development-services-for-startups/it-technical-partner-for-your-startup"
          >
            015 IT technical partner for your startup
          </a>
          <a
            style={style.title}
            target="_blank"
            rel="noopener noreferrer"
            href="/what-we-do/mobile-app-development-services/mobile-banking-application-development-company"
          >
            016 Mobile banking application development company
          </a>
          <a
            style={style.title}
            target="_blank"
            rel="noopener noreferrer"
            href="/services/software-application-development-services"
          >
            017 Software Application Development Services
          </a>
          <a
            style={style.title}
            target="_blank"
            rel="noopener noreferrer"
            href="/fintech-software-development-services/blockchain-software-development-services"
          >
            018 Blockchain Software Development Services
          </a>
          <a
            style={style.title}
            target="_blank"
            rel="noopener noreferrer"
            href="/fintech-software-development-services/insurance-agency-software"
          >
            019 Insurance Agency Software
          </a>
          <a
            style={style.title}
            target="_blank"
            rel="noopener noreferrer"
            href="/fintech-software-development-services/lending-software-development"
          >
            020 Lending software development
          </a>
          <a
            style={style.title}
            target="_blank"
            rel="noopener noreferrer"
            href="/fintech-software-development-services/banking-software"
          >
            021 Banking Software Solutions
          </a>
          <a
            style={style.title}
            target="_blank"
            rel="noopener noreferrer"
            href="/fintech-software-development-services/payment-gateway-integration"
          >
            022 Payment Gateway Integration Services
          </a>
          <a
            style={style.title}
            target="_blank"
            rel="noopener noreferrer"
            href="/what-we-do/cross-platform-mobile-app-development"
          >
            025 Cross-platform mobile app development
          </a>
        </div>
      </section>
    </Layout>
  )
}
