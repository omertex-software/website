import { useEffect } from "react"

export const Bitrix24ContactForm = data => {
  useEffect(() => {
    if (!window.b24form) {
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
    }

    const script = document.createElement("script")
    script.type = "text/javascript"
    script.async = true
    script.id = "bx24_form_inline"
    script.dataSkipMoving = true
    script.innerHTML = data
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
}
