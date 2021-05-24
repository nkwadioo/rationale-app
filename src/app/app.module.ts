import { ValidatorModule } from './validator/validator.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ServicesComponent,
    ProjectsComponent,
    AboutComponent,
    ContactsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ValidatorModule
  ],
  exports: [
    ValidatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
