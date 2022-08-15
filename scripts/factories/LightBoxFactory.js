class LightBoxFactory {
    constructor(lightbox) {
        if (typeof lightbox === 'object' && lightbox !== null) {
            return new LightBox(lightbox)
        }

        else {
            throw "Wrong format"
        }
    }
}