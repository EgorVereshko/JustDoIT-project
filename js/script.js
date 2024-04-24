document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const textInput = document.getElementById('textInput').value;
    localStorage.setItem('userInput', textInput);
    window.location.href = 'lk.html';
  });
  
document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const phoneInput = document.getElementById('phoneInput').value;
    localStorage.setItem('userPhoneInput', phoneInput);
    window.location.href = 'lk.html';
  });

  document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const emailInput = document.getElementById('emailInput').value;
    localStorage.setItem('userEmailInput', emailInput);
    window.location.href = 'lk.html';
  });

document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = document.getElementById('nameInput').value;
    localStorage.setItem('userNameInput', nameInput);
    window.location.href = 'lk.html';
  });