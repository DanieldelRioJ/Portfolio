import { Detail } from './detail';

export class Skill {
    icon: string;
    title: string;
    subtitle:string;
    details: Detail[];
    checkIt: string | undefined;


    constructor(icon:string, title:string, subtitle:string, details:Detail[], checkIt?: string) {
        this.icon = icon;
        this.title = title;
        this.subtitle = subtitle;
        this.details = details;
        this.checkIt = checkIt;
    }
}
