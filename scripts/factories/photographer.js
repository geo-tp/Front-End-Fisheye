function photographerFactory(data) {
  const { id, name, city, country, tagline, price, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const content = `      
          <a href="photographer.html?id=${id}" aria-label="${name}">
            <div class="photographer__picture">
              <img src="${picture}" alt="${name}" />
            </div>        
            <h2 class="photographer__title">${name}</h2>        
          </a>
            <div class="photographer__infos" tabindex="0">
              <div class="photographer__infos__localisation">${city}, ${country}</div>
              <div class="photographer__infos__description">${tagline}</div>
              <div class="photographer__infos__pricing">${price}€/jour</div>
            </div>
      `;
    const photographer = document.createElement("article");
    photographer.classList.add("photographer");
    photographer.innerHTML = content;

    return photographer;
  }
  return { id, name, city, country, tagline, price, portrait, getUserCardDOM };
}
