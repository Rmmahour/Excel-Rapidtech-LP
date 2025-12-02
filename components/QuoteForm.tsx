"use client"

import { useEffect, useId } from "react"

export function QuoteForm() {
  const uniqueId = useId() // generates unique id for each component instance

  useEffect(() => {
    const scriptSrc = "https://js-na2.hsforms.net/forms/embed/244447935.js"

    const createForm = () => {
      const formContainer = document.querySelector(
        `[data-unique-id="${uniqueId}"]`
      ) as HTMLElement | null

      if (!formContainer) return

      // Prevent duplicate mounting
      if (formContainer.children.length > 0) return

      if (window.hbspt?.forms) {
        window.hbspt.forms.create({
          region: formContainer.dataset.region,
          portalId: formContainer.dataset.portalId,
          formId: formContainer.dataset.formId,
          target: `[data-unique-id="${uniqueId}"]`,
        })
      }
    }

    // Load script once
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`)
    if (!existingScript) {
      const script = document.createElement("script")
      script.src = scriptSrc
      script.defer = true
      script.onload = createForm
      document.body.appendChild(script)
    } else if (window.hbspt?.forms) {
      createForm()
    }
  }, [uniqueId])

  return (
    <div
      className="hs-form-frame"
      data-unique-id={uniqueId}
      data-region="na2"
      data-portal-id="244447935"
      data-form-id="4b4b9b7e-5bc1-4d4b-b434-e6fd0578d42f"
    />
  )
}

// type helper
declare global {
  interface Window {
    hbspt?: any
  }
}
