class ElementsFactory {
    constructor(element, type) {

        switch (type) {
            case "PHOTOGRAPHER":
                return new Photographer(element)

            case "MEDIA":
                return new Media(element)
        
            default:
                throw "Wrong type"
        }
    }
}