import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
 import { MaterialModule }       from '../shared/material.module';

import { routes } from './Template.routes';
import { RouterModule } from '@angular/router';
import { TemplateComponent } from './Template';


@NgModule({
    declarations: [
        TemplateComponent
    ],
    // entryComponents:  [ ],
    imports: [
        CommonModule,
        FormsModule, // SharedModule,
        MaterialModule,
        RouterModule.forChild(routes),
    ],
    exports: [

    ]
})
export class TemplateModule {
    public static routes = routes;
}
