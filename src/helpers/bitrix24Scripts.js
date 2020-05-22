import React from "react"

// const contactFormStyle = `
// @font-face {
//    font-family: 'Lato Black';
//    src: url('https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh50XSwiPGQ.woff2') format('woff2');
// }
//
// @font-face {
//    font-family: 'Lato Semi';
//    src: url('https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wXg.woff2') format('woff2');
// }
//
// .flexible-middle-width .content-wrap {
//     width: auto;
//     min-width: auto;
//     max-width: 1080px !important;
//     padding: 0;
// }
//
// .crm-webform-header-container {
//     padding: 54px 20px 0 20px;
//     border-radius: 0;
//     background: none;
// }
//
// .crm-webform-header {
//     color: #000000;
//     font: bold 65px 'Lato Black', sans-serif;
//     text-align: left;
//     line-height: 120%;
//     letter-spacing: 0.02em;
// }
//
// .crm-webform-body {
//     padding: 90px 20px 71px 20px;
// }
//
// .crm-webform-wrapper {
//     font: 13px 'Lato Semi', sans-serif;
// }
//
// .crm-webform-fieldset {
//     padding: 0;
// }
//
// .crm-webform-label-title-container {
//     display: none;
// }
//
// .crm-webform-group, .crm-webform-add-input-container {
//     margin: 0 0 20px 0;
// }
//
// .crm-webform-label-content {
//     background: none;
// }
//
// .crm-webform-input {
//     max-width: 464px;
// }
//
// .crm-webform-error .crm-webform-input ~ .crm-webform-tooltip-bottom-right, .crm-webform-error .crm-webform-textarea textarea ~ .crm-webform-tooltip-bottom-right {
//     right: auto;
//     left: 0;
//     display: none;
// }
//
// ::placeholder {
//     color: #C2C6CE;
//     opacity: 1;
//   }
//
//   :-ms-input-placeholder {
//     color: #C2C6CE;
//   }
//
//   ::-ms-input-placeholder {
//     color: #C2C6CE;
//   }
//
// .crm-webform-input, .crm-webform-select select, .crm-webform-textarea textarea {
//     height: 51px;
//     padding: 0 0 0 40px;
//     border: 1px solid rgba(227, 227, 227, 0.4);
//     border-radius: 4px;
//     font-family: 'Lato Semi';
//     font-size: 20px;
//     font-weight: normal;
//     color: #000000;
// }
//
// textarea.crm-webform-textarea {
//     height: 57px;
//     padding: 14px 0 0 40px;
// }
//
// .crm-webform-input-label .fa {
//     line-height: 30px;
//     display: none;
// }
//
// .crm-webform-fieldset-footer {
//     padding: 18px 0 0 0;
// }
//
// .crm-webform-button-container {
//     text-align: left;
// }
//
// button.crm-webform-submit-button {
//     background: #334059;
// }
//
// .crm-webform-submit-button {
//     height: 51px;
//     font: 20px 'Lato Semi', sans-serif;
//     padding: 0 52px;
//     border: 1px solid rgba(243, 243, 243, 0.4);
//     border-radius: 4px;
// }
// `

const bitrix24ContactForm = (data, cb) => {
  const w = window
  const d = document
  const u = "https://omertex.bitrix24.by/bitrix/js/crm/form_loader.js"
  const b = "b24form"
  w["Bitrix24FormObject"] = b
  w[b] =
    w[b] ||
    function () {
      arguments[0].ref = u
      ;(w[b].forms = w[b].forms || []).push(arguments[0])
    }
  if (w[b]["forms"]) return
  var s = d.createElement("script")
  s.async = 1
  s.src = u + "?" + 1 * new Date()
  var h = d.getElementsByTagName("script")[0]
  h.parentNode.insertBefore(s, h)

  return cb(
    <script id="bx24_form_inline" data-skip-moving="true">
      {window.b24form(data)}
    </script>
  )
}

export const bitrix24ContactFormPopUp = cb => {
  return bitrix24ContactForm(
    {
      id: "10",
      lang: "ru",
      sec: "qf6dob",
      type: "inline",
    },
    cb
  )
}

export const bitrix24ContactFormIntegrable = cb => {
  return bitrix24ContactForm(
    {
      id: "12",
      lang: "ru",
      sec: "dr375t",
      type: "inline",
    },
    cb
  )
}
