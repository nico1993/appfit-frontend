import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule, MatListModule, MatSidenavModule, MatCardModule, MatGridListModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class MaterialModule { }
