import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyTranslateService {

  availableLangs: string[] = ['de', 'en', 'es', 'gl'];
  lang: string;
  subject: Subject<string> = new Subject<string>();

  constructor(private translateService: TranslateService) {
    let lang = translateService.getBrowserLang()
    if(lang == null){
      lang = translateService.getDefaultLang();
    }
    if(!this.availableLangs.includes(lang)){
      lang = 'en';
    }
    this.lang = lang;
    this.use(lang)
  }

  use(lang: string){
    let lastLang = this.lang;
    this.lang = lang;
    this.translateService.use(this.lang);

    if(lastLang != lang){
      this.subject.next(lang);
    }
  }

  getObservable(): Observable<string>{
    return this.subject.asObservable();
  }


}
