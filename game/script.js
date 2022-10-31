var fire = new Image();
fire.src = "images/fire.png";
var plant = new Image();
plant.src = "images/plant.png";
var water = new Image();
water.src = "images/water.png";
var ice = new Image();
ice.src = "images/ice.png";
var rock = new Image();
rock.src = "images/rock.png";

const selectionButtons = document.querySelectorAll("[data-selection]")
const finalColumn = document.querySelector("[data-final-column]")
const computerScoreSpan = document.querySelector("[data-computer-score]")
const yourScoreSpan = document.querySelector("[data-your-score]")
const SELECTIONS = [
  {
    name: "fire",
    sprite: fire,
    beats: ["plant", "ice"]
  },
  {
    name: "plant",
    sprite: plant,
    beats: ["water", "rock"]
  },
  {
    name: "water",
    sprite: water,
    beats: ["fire", "rock"]
  },
  {
    name: "ice",
    sprite: ice,
    beats: ["water", "plant"]
  },
  {
    name: "rock",
    sprite: rock,
    beats: ["fire", "ice"]
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
  const div = document.createElement("div")
  div.appendChild(selection.sprite)
  div.classList.add("result-selection")
  div.classList.add("mini-size-image")
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