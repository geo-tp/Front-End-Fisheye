class PhotographerHeaderTemplate {
    constructor(photographer) {
        this._photographer = photographer
    }

    createPhotographerHeader() {
        const content = `
            <div class="photographer-card2">
                <h1 class="photographer-card2__infos__name">${this._photographer.name}</h1>  
                <div class="photographer-card2__infos__location">${this._photographer.city}, ${this._photographer.country}</div>
                <div class="photographer-card2__infos__description">${this._photographer.tagline}</div>      
            </div>
    
            <button 
                class="button-default photographer-header__contact" 
                onclick="displayContactModal()"
                aria-haspopup="dialog"
                aria-label="ouvrir le formulaire pour contacter ${this._photographer.name}"
            >
                Contactez-moi
            </button>
    
            <div class="photographer-header__picture">
                <img class="photographer-picture" src="${this._photographer.portrait}" alt="${this._photographer.name}" />
            </div>
        `;

        const photographerHeader = document.createElement("div");
        photographerHeader.classList.add("photographer-header");
        photographerHeader.innerHTML = content;

        return photographerHeader;
    }
}