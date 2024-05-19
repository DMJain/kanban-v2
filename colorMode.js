// Purpose: To toggle between light and dark mode
const colorModeButton = document.getElementById('color-mode');

// Function to toggle color mode
function toggleColorMode() {
    let mode = true; // Initial state
  
    return function() {
      const navContainer = document.getElementById('nav-container');
      const container = document.getElementsByClassName('container');
      const inputButns = document.querySelectorAll('.insert-button');
      const boards = document.querySelectorAll('.board'); // Get all elements with the class name
      const insertField = document.querySelectorAll('.input-value');
      const body = document.querySelector('body');
      if (mode) {
        navContainer.classList.add('dark-mode');
        container[0].classList.add('dark-mode');
        inputButns.forEach((inputBtn) => {
          inputBtn.classList.add('dark-mode');
        });
        boards.forEach((board) => {
          board.classList.add('dark-mode');
        });
        insertField.forEach((insert) => {
          insert.classList.add('dark-mode');
        });
        body.classList.add('dark-mode');
        mode = !mode;
      } else {
        navContainer.classList.remove('dark-mode');
        container[0].classList.remove('dark-mode');
        inputButns.forEach((inputBtn) => {
            inputBtn.classList.remove('dark-mode');
          });
          boards.forEach((board) => {
            board.classList.remove('dark-mode');
          });
        insertField.forEach((insert) => {
          insert.classList.remove('dark-mode');
        });  
        body.classList.remove('dark-mode');
        mode = !mode;
      }
    };
  }
const ColorModeFunction = toggleColorMode()

// Add event listener to the button
colorModeButton.addEventListener('click', ColorModeFunction);

