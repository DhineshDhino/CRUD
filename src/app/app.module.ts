import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { RegisterComponent } from './register/register.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    RegisterComponent,
    ViewdetailsComponent,
    EditdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
