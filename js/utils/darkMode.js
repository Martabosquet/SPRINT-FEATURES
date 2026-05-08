const darkMode = () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  if (!darkModeToggle) return;

  body.style.transition = 'none'; //evita flash al cargar

  const savedTheme = localStorage.getItem('theme'); //recuerda el tema
  const isDarkMode = savedTheme === 'dark';

  const updateIcon = (isDark) => {
    const sunIcon = darkModeToggle.querySelector('.sun-icon');
    const moonIcon = darkModeToggle.querySelector('.moon-icon');

    if (sunIcon && moonIcon) {
      sunIcon.style.display = isDark ? 'none' : 'block';
      moonIcon.style.display = isDark ? 'block' : 'none';
    }
  };

  if (isDarkMode) {
    body.classList.add('dark-mode');
    updateIcon(true);
  }

  setTimeout(() => {
    body.style.transition = '';
  }, 0);

  darkModeToggle.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    updateIcon(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
};

export default darkMode;