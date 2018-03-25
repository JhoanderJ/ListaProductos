
import { ProductoService } from './../servicios/producto.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AgregarProductoPage } from '../pages/agregar-producto/agregar-producto';
import { ProductoPage } from '../pages/producto/producto';
import { IniciarsesionPage } from '../pages/iniciarsesion/iniciarsesion';
import { AutenticacionService } from '../servicios/autenticacion.service';
// Import ionic2-rating module
import { Ionic2RatingModule } from 'ionic2-rating';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AgregarProductoPage,
    ProductoPage,
    IniciarsesionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AgregarProductoPage,
    ProductoPage,
    IniciarsesionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductoService,
    AutenticacionService
    
  ]
})
export class AppModule {}
