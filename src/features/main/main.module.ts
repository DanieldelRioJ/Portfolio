import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { MouseRotateDirective } from './main/mouse-rotate.directive';
import { SkillComponent } from './skill/skill.component';
import { MyPhotoComponent } from './main/my-photo/my-photo.component';
import { WorkCardComponent } from './main/work-card/work-card.component';
import { NgParticlesModule } from 'ng-particles';
import { UtilPipesModule } from '../../shared/util-pipes/util-pipes.module';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LangSelectComponent } from './main/lang-select/lang-select.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    MainComponent,
    MouseRotateDirective,
    SkillComponent,
    MyPhotoComponent,
    WorkCardComponent,
    LangSelectComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgParticlesModule,
    UtilPipesModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    SharedModule
  ],
})
export class MainModule { }
