import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    imports: [ 
        CommonModule,
        RouterModule,
        MaterialModule 
    ],
    declarations: [SidebarComponent, NavbarComponent],
    exports: [SidebarComponent, NavbarComponent],
    providers: [],
})
export class PageLayoutModule {}