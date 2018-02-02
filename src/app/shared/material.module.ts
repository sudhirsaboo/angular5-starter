import {
    NgModule,
    ModuleWithProviders
} from '@angular/core';

import { MatDialogModule, MatButtonModule } from '@angular/material';
import { MatToolbarModule, MatTooltipModule } from '@angular/material';
import { MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule,
    MatCheckboxModule }
from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule, MatButtonModule, MatTooltipModule,
        MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule,
        MatCheckboxModule,
    ],
    exports: [
        MatToolbarModule, MatButtonModule, MatTooltipModule, MatInputModule, MatSelectModule,
         MatDatepickerModule, MatNativeDateModule, MatCheckboxModule,
    ],
})
export class MaterialModule {}