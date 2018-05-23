import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListComponent } from 'src/app/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from 'src/app/shopping-list/shopping-edit/shopping-edit.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { BuildingStartComponent } from 'src/app/buildings/buildings-strat/building-start.component';
import { BuildingDetailComponent } from './buildings//building-detail/building-detail.component';
import { BuildingEditComponent } from './buildings/buildings-edit/building-edit.component';
import { BuildingListComponent } from 'src/app/buildings/buildings-list/building-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './auth/signin/signin.component';
import { BuildingItemComponent } from './buildings/buildings-list/building-item/building-item.component';
import { AlertComponent } from './alert/alert.component'
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    DropdownDirective,
    ShoppingListComponent,
    ShoppingEditComponent,
    BuildingsComponent,
    BuildingStartComponent,
    BuildingDetailComponent,
    BuildingEditComponent,
    BuildingItemComponent,
    BuildingListComponent,
    AlertComponent,
    CommentComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
