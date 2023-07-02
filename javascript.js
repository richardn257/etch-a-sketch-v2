const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
  const row = document.createElement('div');
  row.classList.add('rowOfSquares');
  container.appendChild(row);
}

const rows = document.querySelectorAll('.rowOfSquares');
rows.forEach(row => {
  for (let i = 0; i < 16; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    row.appendChild(square);
  }
});

