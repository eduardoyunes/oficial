// import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { EndocrinologiaComponent } from './endocrinologia/endocrinologia.component';
import { IntroComponent } from './intro/intro.component';
import { ContactComponent } from './contact/contact.component';
import { LocationComponent } from './location/location.component';
import { NotFoundComponent } from './lazy/not-found/not-found.component';
import { BlogComponent } from './lazy/blog/blog.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    EndocrinologiaComponent,
    IntroComponent,
    ContactComponent,
    LocationComponent,
    NotFoundComponent,
    BlogComponent,
    FooterComponent
  ],
  imports: [
    // AgmCoreModule.forRoot({
     //  apiKey: ''
    // }),
    BrowserModule.withServerTransition({ appId: 'eyunes' }),
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot()
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

