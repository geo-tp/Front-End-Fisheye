// Create photographer header for photographer page
function photographerHeaderFactory(data) {
  const { id, name, city, country, tagline, price, portrait } = data;
  const picture = `assets/photographers/${portrait}`;

  function getUserHeaderDOM() {
    const picture = `assets/photographers/${portrait}`;

    const content = `
          <div class="photographer-card2">
            <h1 class="photographer-card2__infos__name">${name}</h1>  
            <div class="photographer-card2__infos__location">${city}, ${country}</div>
            <div class="photographer-card2__infos__description">${tagline}</div>      
          </div>
  
          <button 
              class="button-default photographer-header__contact" 
              onclick="displayContactModal()"
              aria-haspopup="dialog"
              aria-label="ouvrir le formulaire pour contacter ${name}"
          >
            Contactez-moi
          </button>
  
          <div class="photographer-header__picture">
            <img class="photographer-picture" src="${picture}" alt="${name}" />
          </div>
      `;

    const photographerHeader = document.createElement("div");
    photographerHeader.classList.add("photographer-header");
    photographerHeader.innerHTML = content;

    return photographerHeader;
  }

  return {
    id,
    name,
    city,
    country,
    tagline,
    price,
    portrait,
    getUserHeaderDOM,
  };
}
