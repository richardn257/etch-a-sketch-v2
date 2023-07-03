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

function createGrid(squares) {
  const container = document.querySelector('.container');

  for (let i = 0; i < squares; i++) {
    const row = document.createElement('div');
    row.classList.add('rowOfSquares');
    container.appendChild(row);
  }

  const rows = document.querySelectorAll('.rowOfSquares');
  rows.forEach(row => {
    for (let i = 0; i < squares; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.addEventListener('mouseover', () => {
        square.classList.add('color-trail')
      });
      row.appendChild(square);
    }
  });
}

createGrid(16);