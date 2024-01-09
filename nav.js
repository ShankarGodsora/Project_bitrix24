
// <-----------------------navbar boder---------------->

function handleButtonClick(button) {
    let allButtons = document.querySelectorAll('.navbar-button');
    allButtons.forEach(function(btn) {
      btn.classList.remove('clicked');
    });

    button.classList.add('clicked');

    sessionStorage.setItem('lastClickedButton', button.getAttribute('href'));

    window.location.href = button.getAttribute('href');
  }

  document.addEventListener('DOMContentLoaded', function() {
    let lastClickedButtonHref = sessionStorage.getItem('lastClickedButton');
    let lastClickedButton = document.querySelector(`.navbar-button[href="${lastClickedButtonHref}"]`);
    
    if (lastClickedButton !== null) {
      lastClickedButton.classList.add('clicked');
    }
  });

  function clicks(){
    window.location.href = 'login.html';

  }
