import cheatsheets from './../data/cheatsheets.js';

const getCheatsheets = () => {
  const cheatsheetsContainer = document.getElementById('cheatsheets-container');

  if (!cheatsheetsContainer) return;

  //tengo que mostrar los cheatsheets que he preparado
  const cheatsheetsHTML = cheatsheets.map(cheatsheet => `
    <article class="cheatsheet-card">
      <a href="${cheatsheet.link}">
        <div class="cheatsheet-icon">
          <img src="${cheatsheet.icon}" alt="${cheatsheet.name}" width="48" height="48">
        </div>
        <h3>${cheatsheet.name}</h3>
      </a>
    </article>
  `).join('');

  cheatsheetsContainer.innerHTML = cheatsheetsHTML;
};

export default getCheatsheets;