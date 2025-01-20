let result = document.querySelector(".result-text")
let instruction = ""
let firstNum = 0
let secondNum = 0

function removeNumber() {
  if (result.innerText === "0") {
    return
  }
  const removedText = result.innerText.slice(0, -1)
  const resultText = removedText.length === 0 ? "0" : removedText
  result.innerText = resultText
}

function addNumber(number) {
  if (result.innerText === "0") {
    result.innerText = number
  } else {
    result.innerText = result.innerText + number
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
          setInstruction("÷")
          break
        case "×":
          setInstruction("×")
          break
        case "-":
          setInstruction("-")
          break
        case "+":
          setInstruction("+")
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
