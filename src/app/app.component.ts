import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MyTranslateService } from '../shared/my-translate.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styles: [],
})
export class AppComponent {
    title = 'angular-web';
}
