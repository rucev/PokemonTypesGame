const selectionButtons = document.querySelectorAll("[data-selection]")
const finalColumn = document.querySelector("[data-final-column]")
const computerScoreSpan = document.querySelector("[data-computer-score]")
const yourScoreSpan = document.querySelector("[data-your-score]")
const SELECTIONS = [
  {
    name: "fire",
    beats: ["plant", "ice"],
    src: "images/fire.png"
  },
  {
    name: "plant",
    beats: ["water", "rock"],
    src: "images/plant.png"
  },
  {
    name: "water",
    beats: ["fire", "rock"],
    src: "images/water.png"
  },
  {
    name: "ice",
    beats: ["water", "plant"],
    src: "images/ice.png"
  },
  {
    name: "rock",
    beats: ["fire", "ice"],
    src: "images/rock.png"
  }
]

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener("click", e => {
    const selectionName = selectionButton.dataset.selection
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeSelection(selection)
  })
})

function makeSelection(selection) {
  const computerSelection = randomSelection()
  const yourWinner = isWinner(selection, computerSelection)
  const computerWinner = isWinner(computerSelection, selection)

  addSelectionResult(computerSelection, computerWinner)
  addSelectionResult(selection, yourWinner)

  if (yourWinner) incrementScore(yourScoreSpan)
  if (computerWinner) incrementScore(computerScoreSpan)
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner) {
  var image = new Image();
  image.src = selection.src;
  const div = document.createElement("div")
  div.appendChild(image).classList.add("mini-size-image")
  div.classList.add("result-selection")
  if (winner) div.classList.add("winner")
  finalColumn.after(div)
}

function isWinner(selection, opponentSelection) {
  return selection.beats[0] === opponentSelection.name || selection.beats[1] === opponentSelection.name
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
}