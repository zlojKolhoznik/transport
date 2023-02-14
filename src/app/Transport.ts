export class Transport {
    type: string;
    name: string;
    description: string;
    image: string;

    constructor(type: string, name: string, description: string, image: string) {
        this.type = type;
        this.name = name;
        this.description = description;
        this.image = image;
    }
}