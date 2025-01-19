let resultElement = document.querySelector(".result-text")
document.querySelector(".calculator").addEventListener("click", handleClicks)
let result = 0

function handleClicks(event) {
  const button = event.target
  console.log(button.className)
  if (button.className.includes("button")) {
    switch (button.innerText) {
      case "C":
        result = 0
        resultElement.innerText = result
        break
      case "1":
        result = 1
        resultElement.innerText = 1
        break
      default:
        console.log("unknown text")
    }
  }
}
