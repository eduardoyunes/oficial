// import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ParticlesModule } from 'angular-particle';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { ServicesComponent } from './services/services.component';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

import { LazyModule } from './lazy/lazy/lazy.module';
import { BlogComponent } from './lazy/blog/blog.component';
import { NotFoundComponent } from './lazy/not-found/not-found.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CurriculoComponent,
    ServicesComponent,
    LocationComponent,
    ContactComponent,
    FooterComponent,
    BlogComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'endapp' }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ParticlesModule,
    RouterModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    LazyModule
    // AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
     //  apiKey: 'Your_api_key'
   // })
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

