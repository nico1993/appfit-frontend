import { Routes, RouterModule } from '@angular/router';

//Modules
import { NgModule } from '@angular/core';

//Components


const routes: Routes = [ 
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { 
//     path: 'dashboard', 
//     component: DashboardComponent, 
//     data: { titulo: 'Dashboard' },
//     // canActivate: [VerificaTokenGuard] 
//   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}