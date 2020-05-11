import React from "react"
// import style from "./socialNetworks.module.sass"

const SocialNetworks = () => {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 10,
        right: 40,
        bottom: 40,
      }}
    >
      <a
        style={{
          padding: 10,
          color: "#fff",
          backgroundColor: "#0088cc",
          marginRight: 20,
          borderRadius: 10,
          textDecoration: "none",
        }}
        href="https://t.me/matvey024"
      >
        Telegram
      </a>
      <a
        style={{
          padding: 10,
          color: "#fff",
          backgroundColor: "#4267B2",
          marginRight: 20,
          borderRadius: 10,
          textDecoration: "none",
        }}
        href="http://m.me/shokojiadko"
      >
        Facebook
      </a>
      <a
        style={{
          padding: 10,
          color: "#fff",
          backgroundColor: "#43d854",
          borderRadius: 10,
          textDecoration: "none",
        }}
        href="https://wa.me/375292747449"
      >
        WhatsApp
      </a>
    </div>
  )
}

export default SocialNetworks
