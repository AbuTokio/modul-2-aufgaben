import "../../../style.css"

const htmlElements = {
  titleElement: document.createElement("h1") as HTMLHeadingElement,
  getDataButton: document.createElement("button") as HTMLButtonElement,
  informationContainer: document.createElement("div") as HTMLDivElement,
  browserNameTitle: document.createElement("h2") as HTMLHeadingElement,
  systemOsArchitectureTitle: document.createElement("h2") as HTMLHeadingElement,
  browserVersionTitle: document.createElement("h2") as HTMLHeadingElement,
  windowResolutionTitle: document.createElement("h2") as HTMLHeadingElement,
  browserInnerResolutionTitle: document.createElement("h2") as HTMLHeadingElement,
  colorDepthTitle: document.createElement("h2") as HTMLHeadingElement,
  pixelDepthTitle: document.createElement("h2") as HTMLHeadingElement,
  browserName: document.createElement("p") as HTMLParagraphElement,
  systemOsArchitecture: document.createElement("p") as HTMLParagraphElement,
  browserVersion: document.createElement("p") as HTMLParagraphElement,
  windowResolution: document.createElement("p") as HTMLParagraphElement,
  browserInnerResolution: document.createElement("p") as HTMLParagraphElement,
  colorDepth: document.createElement("p") as HTMLParagraphElement,
  pixelDepth: document.createElement("p") as HTMLParagraphElement,
}

htmlElements.titleElement.textContent = "BOM Elements"
document.body.appendChild(htmlElements.titleElement)
htmlElements.getDataButton.textContent = "Hol Daten"
document.body.appendChild(htmlElements.getDataButton)

function getBrowserName(userAgent: string): string {
  if (userAgent.includes("Firefox")) {
    return "Mozilla Firefox"
  } else if (userAgent.includes("SamsungBrowser")) {
    return "Samsung Internet"
  } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
    return "Opera"
  } else if (userAgent.includes("Edge")) {
    return "Microsoft Edge (Legacy)"
  } else if (userAgent.includes("Edg")) {
    return "Microsoft Edge (Chromium)"
  } else if (userAgent.includes("Chrome")) {
    return "Google Chrome or Chromium"
  } else if (userAgent.includes("Safari")) {
    return "Apple Safari"
  }
  return "unknown"
}

htmlElements.getDataButton.addEventListener("click", () => {
  if (document.body.lastChild === htmlElements.informationContainer) {
    document.body.removeChild(htmlElements.informationContainer)
  }

  htmlElements.browserNameTitle.textContent = "Browsername:"
  htmlElements.systemOsArchitectureTitle.textContent = "Betriebssystem-Architektur:"
  htmlElements.browserVersionTitle.textContent = "Browser-Version:"
  htmlElements.windowResolutionTitle.textContent = "Window-Auflösung:"
  htmlElements.browserInnerResolutionTitle.textContent = "Innere Größe:"
  htmlElements.colorDepthTitle.textContent = "Farbtiefe:"
  htmlElements.pixelDepthTitle.textContent = "Pixel-Tiefe:"

  htmlElements.browserName.textContent = getBrowserName(window.navigator.userAgent)
  htmlElements.systemOsArchitecture.textContent = window.navigator.platform
  htmlElements.browserVersion.textContent = window.navigator.appVersion
  htmlElements.windowResolution.textContent = window.screen.width + "x" + window.screen.height
  htmlElements.browserInnerResolution.textContent = window.innerWidth + "x" + window.innerHeight
  htmlElements.colorDepth.textContent = window.screen.colorDepth.toString()
  htmlElements.pixelDepth.textContent = window.screen.pixelDepth.toString()

  htmlElements.informationContainer.appendChild(htmlElements.browserNameTitle)
  htmlElements.informationContainer.appendChild(htmlElements.browserName)
  htmlElements.informationContainer.appendChild(htmlElements.systemOsArchitectureTitle)
  htmlElements.informationContainer.appendChild(htmlElements.systemOsArchitecture)
  htmlElements.informationContainer.appendChild(htmlElements.browserVersionTitle)
  htmlElements.informationContainer.appendChild(htmlElements.browserVersion)
  htmlElements.informationContainer.appendChild(htmlElements.windowResolutionTitle)
  htmlElements.informationContainer.appendChild(htmlElements.windowResolution)
  htmlElements.informationContainer.appendChild(htmlElements.browserInnerResolutionTitle)
  htmlElements.informationContainer.appendChild(htmlElements.browserInnerResolution)
  htmlElements.informationContainer.appendChild(htmlElements.colorDepthTitle)
  htmlElements.informationContainer.appendChild(htmlElements.colorDepth)
  htmlElements.informationContainer.appendChild(htmlElements.pixelDepthTitle)
  htmlElements.informationContainer.appendChild(htmlElements.pixelDepth)

  document.body.appendChild(htmlElements.informationContainer)
})
