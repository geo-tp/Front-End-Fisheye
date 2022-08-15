class MediaFactory {
    constructor(media) {
        if (typeof media === 'object' && media !== null) {
            return new Media(media)
        }

        else {
            throw "Wrong format"
        }
    }
}