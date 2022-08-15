class PhotographersFactory {
    constructor(photographer) {

        if (typeof photographer === 'object' && photographer !== null) {
            return new Photographer(photographer)
        }

        else {
            throw "Wrong format"
        }
    }

}