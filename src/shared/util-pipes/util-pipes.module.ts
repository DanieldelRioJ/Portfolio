import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbbrPipe } from './abbr.pipe';
import { FirstCasePipe } from './first-case.pipe';
import { WrapPipe } from './wrap.pipe';
import { ValueOrDashPipe } from './value-or-dash.pipe';
import { ExtensionPipe } from './extension.pipe';
import { MimeTypePipe } from './mime-type.pipe';

@NgModule({
    declarations: [AbbrPipe, FirstCasePipe, WrapPipe, ValueOrDashPipe, ExtensionPipe, MimeTypePipe],
    imports: [CommonModule],
    exports: [AbbrPipe, FirstCasePipe, WrapPipe, ValueOrDashPipe, ExtensionPipe, MimeTypePipe],
})
export class UtilPipesModule {}
