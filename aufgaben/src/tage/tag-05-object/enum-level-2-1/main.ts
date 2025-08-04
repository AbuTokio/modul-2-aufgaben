import "./style.css"

enum HtmlError {
  OK = 200,
  Redirect = 300,
  BadRequest = 400,
  InternalServerError = 500,
}

function showHtmlError() {
  const error = Number((Math.random() * 5).toFixed())
  console.log(error)
  if (error >= 0 && error <= 2) {
    console.log("Code:", HtmlError.OK)
    console.log("Message:", HtmlError[HtmlError.OK])
  } else if (error === 3) {
    console.log("Code:", HtmlError.Redirect)
    console.log("Message:", HtmlError[HtmlError.Redirect])
  } else if (error === 4) {
    console.log("Code:", HtmlError.BadRequest)
    console.log("Message:", HtmlError[HtmlError.BadRequest])
  } else if (error === 5) {
    console.log("Code:", HtmlError.InternalServerError)
    console.log("Message:", HtmlError[HtmlError.InternalServerError])
  }
}

showHtmlError()
