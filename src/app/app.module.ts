import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserService } from './servises/user.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes =[
  {path:'', component:UsersComponent},
  {path:'home', component:HomeComponent},
  {path:'users', component:UsersComponent},
  {path:'usersDetails/:id', component:UserDetailsComponent},
  {path:'addUser/new', component:UserFormComponent},
  {path:'addUser/:id', component:UserFormComponent}, 
  {path:'**', component:NotFoundComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,NavbarComponent, FooterComponent, SliderComponent, ProductsComponent, ProductItemComponent, ToDoListComponent, TracksComponent, LoginComponent, UsersComponent, UserDetailsComponent, UserFormComponent, NotFoundComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
