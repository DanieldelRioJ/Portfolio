import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilPipesModule} from '../shared/util-pipes/util-pipes.module';
import {MainLayoutComponent} from './components/main-layout/main-layout.component';
import {RouterModule} from '@angular/router';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {HeaderComponent} from './components/header/header.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { FooterComponent } from './components/footer/footer.component';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [MainLayoutComponent, SideBarComponent, HeaderComponent, FooterComponent],
    exports: [MainLayoutComponent, FooterComponent],
    imports: [CommonModule,
        UtilPipesModule,//TODO remove UtilPipesModule if not used in the CoreModule
        RouterModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            defaultLanguage: 'es-ES'
        })],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('Core is already loaded. Import it in the AppModule only');
        }
    }
}
