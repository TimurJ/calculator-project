let result = document.querySelector(".result-text")
let instruction = ""
let firstNum = 0
let secondNum = 0

function removeNumber() {
  if (result.innerText === "0") {
    return
  }

  if (result.innerText.length === 1) {
    result.innerText = "0"
    return
  }

  result.innerText = result.innerText.slice(0, -1)
}

function addNumber(number) {
  if (result.innerText === "0") {
    result.innerText = number
  } else {
    result.innerText += number
  }
}

function setInstruction(instructionToSet) {
  instruction = instructionToSet
  firstNum = Number(result.innerHTML)
  result.innerHTML = 0
}

function handleOperation() {
  if (instruction) {
    const secondNum = Number(result.innerText)
    switch (instruction) {
      case "÷":
        instruction = ""
        result.innerText = firstNum / secondNum
        break
      case "×":
        instruction = ""
        result.innerText = firstNum * secondNum
        break
      case "-":
        instruction = ""
        result.innerText = firstNum - secondNum
        break
      case "+":
        instruction = ""
        result.innerText = firstNum + secondNum
    }
  } else {
    return
  }
}

function handleClicks(event) {
  const button = event.target
  if (button.className.includes("button")) {
    if (isNaN(parseInt(button.innerText))) {
      switch (button.innerText) {
        case "C":
          result.innerText = "0"
          instruction = ""
          break
        case "÷":
        case "×":
        case "-":
        case "+":
          setInstruction(button.innerText)
          break
        case "=":
          handleOperation()
          break
        case "←":
          removeNumber()
          break
      }
    } else {
      addNumber(button.innerText)
    }
  }
}

document.querySelector(".calculator").addEventListener("click", handleClicks)
