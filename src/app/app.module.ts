import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { MainComponent } from './layouts/main/main.component';
import { FooterComponent } from './layouts/main/components/footer/footer.component';
import { SideMenuComponent } from './layouts/main/components/side-menu/side-menu.component';
import { HeaderComponent } from './layouts/main/components/header/header.component';
import { HomeComponent } from './modules/main/components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MainComponent,
    FooterComponent,
    SideMenuComponent,
    HeaderComponent,
   HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
