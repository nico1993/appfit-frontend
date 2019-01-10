import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PageLayoutModule } from '../layout/layout.module';

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        PagesRoutingModule, 
        PageLayoutModule,
    ],
    exports: [],
    providers: [],
})
export class PagesModule {}