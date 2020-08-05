const box = document.getElementById("box");

const boxSize = 10;
const desiredNumber = 1;
const numbers = {
  "1": [
    [1, boxSize / 2],
    [1, boxSize / 2 + 1],

    [2, boxSize / 2 - 1],
    [2, boxSize / 2],
    [2, boxSize / 2 + 1],

    [3, boxSize / 2 - 2],
    [3, boxSize / 2 - 1],
    [3, boxSize / 2],
    [3, boxSize / 2 + 1],
    [3, boxSize / 2 + 1],

    [4, boxSize / 2],
    [4, boxSize / 2 + 1],

    [5, boxSize / 2],
    [5, boxSize / 2 + 1],

    [6, boxSize / 2],
    [6, boxSize / 2 + 1],

    [7, boxSize / 2],
    [7, boxSize / 2 + 1],

    [8, boxSize / 2],
    [8, boxSize / 2 + 1],

    [9, boxSize / 2],
    [9, boxSize / 2 + 1],
  ],
};

const makeBox = () => {
  box.innerHTML = "";
  const data = numbers[desiredNumber];

  for (let rowCounter = 0; rowCounter <= boxSize; rowCounter++) {
    const colData = data.reduce((acc, item) => {
      if (item[0] === rowCounter) {
        acc.push(item[1]);
      }

      return acc;
    }, []);

    for (let cellCounter = 0; cellCounter <= boxSize; cellCounter++) {
      if (
        [0, boxSize].includes(rowCounter) ||
        [0, boxSize].includes(cellCounter)
      ) {
        box.innerHTML += "*";
      } else {
        if (colData.includes(cellCounter)) {
          box.innerText += "1";
        } else {
          box.innerHTML += " ";
        }
      }

      if (cellCounter === boxSize) {
        box.innerHTML += "<br/>";
      }
    }
  }
};

document.addEventListener("DOMContentLoaded", makeBox);
