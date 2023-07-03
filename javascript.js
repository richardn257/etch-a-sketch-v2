const gridButton = document.querySelector('button');
gridButton.addEventListener('click', () => {
  userInput = prompt('Enter the number of squares per sides for the grid', 16);
  while (userInput > 100) {
    userInput = prompt('The maximum is 100. Enter again')
  }
  const container = document.querySelector('.container');
  
  if (userInput === null)
    return;
  while (container.firstChild) {
    container.removeChild(container.lastChild)
  }
  createGrid(userInput);
});

function createGrid(numSquares) {
  const container = document.querySelector('.container');

  for (let i = 0; i < numSquares; i++) {
    const row = document.createElement('div');
    row.classList.add('rowOfSquares');
    container.appendChild(row);
  }

  const rows = document.querySelectorAll('.rowOfSquares');
  rows.forEach(row => {
    for (let i = 0; i < numSquares; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.addEventListener('mouseover', () => {
        // black and white
        // square.classList.add('color-trail')

        // random rgb
        const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        const rgb = `rgb(${r},${g},${b})`;
        square.setAttribute('style', `background-color: ${rgb}`)
      }, {once: true});
      row.appendChild(square);
    }
  });
}

createGrid(16);