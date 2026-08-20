// Interactive Feature: Dark / Light Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Update button label based on active mode
  if (document.body.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = 'Toggle Light Mode';
  } else {
    themeToggleBtn.textContent = 'Toggle Dark Mode';
  }
});