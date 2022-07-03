function photographerFactory(data) {
  const { id, name, city, country, tagline, price, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const content = `      
          <a href="photographer.html?id=${id}" aria-label="${name}">
            <img class="photographer-picture" src="${picture}" alt="${name}" />
            <h2 class="photographer-card1__name">${name}</h2>        
          </a>
            <div class="photographer-card1__infos" tabindex="0">
              <div class="photographer-card1__infos__location">${city}, ${country}</div>
              <div class="photographer-card1__infos__description">${tagline}</div>
              <div class="photographer-card1__infos__pricing">${price}€/jour</div>
            </div>
      `;
    const photographer = document.createElement("article");
    photographer.classList.add("photographer-card1");
    photographer.innerHTML = content;

    return photographer;
  }
  return { id, name, city, country, tagline, price, portrait, getUserCardDOM };
}
