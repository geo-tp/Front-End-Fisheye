class PhotographerTemplate {
    constructor(photographer) {
        this._photographer = photographer
    }

    createPhotographerCard() {
        const content = `      
        <a href="photographer.html?id=${this._photographer.id}" aria-label="Voir le profil de ${this._photographer.name}">
          <img class="photographer-picture" src="${this._photographer.portrait}" alt="portrait du photographe" />
          <h2 class="photographer-card1__name">${this._photographer.name}</h2>        
        </a>
          <div class="photographer-card1__infos">
            <div class="photographer-card1__infos__location">${this._photographer.city}, ${this._photographer.country}</div>
            <div class="photographer-card1__infos__description">${this._photographer.tagline}</div>
            <div class="photographer-card1__infos__pricing">${this._photographer.price}€/jour</div>
          </div>
        `;
      const photographer = document.createElement("article");
      photographer.classList.add("photographer-card1");
      photographer.innerHTML = content;
  
      return photographer;
    }
}