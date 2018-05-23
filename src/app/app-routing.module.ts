import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuildingsComponent } from './buildings/buildings.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { BuildingStartComponent } from './buildings/buildings-strat/building-start.component';
import { BuildingEditComponent } from './buildings/buildings-edit/building-edit.component';
import { BuildingDetailComponent } from './buildings/building-detail/building-detail.component';
import { AlertComponent } from './alert/alert.component';

const appRoutes: Routes = [
  { path: '', component: AlertComponent },
  { path: 'buildings', component: BuildingsComponent, children: [
    { path: '', component: BuildingStartComponent },
    { path: 'new', component: BuildingEditComponent, canActivate: [AuthGuardService] },
    { path: ':id', component: BuildingDetailComponent },
    { path: ':id/edit', component: BuildingEditComponent, canActivate: [AuthGuardService] },
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
