import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

//ANGULAR MATERIAL
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

//COMPONENTS
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MyexperiencesComponent } from './myexperiences/myexperiences.component';
import { StudiesComponent } from './studies/studies.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    AboutmeComponent,
    MyexperiencesComponent,
    StudiesComponent,
    HobbiesComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
