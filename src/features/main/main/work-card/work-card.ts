export class WorkCard {
    title:string;
    description:string;
    url:string;
    textButton: string;
    photoUrl: string;

    constructor(title:string, description:string, url:string, textButton:string, photoUrl:string) {
        this.title = title;
        this.description = description;
        this.url = url;
        this.textButton = textButton;
        this.photoUrl = photoUrl;
    }
}
