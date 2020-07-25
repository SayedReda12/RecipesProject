export class Recipe{
    public name: string;
    public imagePath: string;
    public description: string;

    constructor(name: string, desc:  string, imagePath: string){
        this.name = name;
        this.imagePath = imagePath;
        this.description = desc;
    }
}