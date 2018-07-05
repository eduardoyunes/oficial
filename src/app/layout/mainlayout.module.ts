import { ParticlesComponent } from './particles/particles.component';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ParticlesModule } from 'angular-particle';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModulesPro, MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ParticlesComponent
],
  imports: [
    CommonModule,
    BrowserModule,
    ParticlesModule,
    BrowserAnimationsModule,
    RouterModule,
    MDBBootstrapModulesPro
  ],
  exports: [
      HeaderComponent,
      FooterComponent
  ],
  providers: [MDBSpinningPreloader],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule {}
