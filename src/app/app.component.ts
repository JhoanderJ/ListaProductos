import { HomePage } from './../pages/home/home';

import { Component,ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IniciarsesionPage } from '../pages/iniciarsesion/iniciarsesion';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import firebase from 'firebase';
import { AutenticacionService } from '../servicios/autenticacion.service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  homepage = HomePage;
  iniciarSesion = IniciarsesionPage;
  @ViewChild('contenido') contenido:NavController;
  usuarioEstaConectado = false;
  

  constructor(platform: Platform, statusBar: StatusBar,
               splashScreen: SplashScreen,
              public menuCtrl:MenuController,
              public autenticacionService:AutenticacionService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp({
      apiKey: "AIzaSyDb_pjMQM35-0nco4oUfOkI3NZOWMf4bcY",
      authDomain: "productos-dc2bf.firebaseapp.com"
    });
    firebase.auth().onAuthStateChanged(
      usuario => {
        if(usuario != null){
            this.usuarioEstaConectado = true;
            this.contenido.setRoot(this.homepage);
        }else{
          this.usuarioEstaConectado = false;
            this.contenido.setRoot(this.iniciarSesion);
        }
      }
    )

  }

  llamarPagina(pagina){
    this.contenido.setRoot(pagina);
    this.menuCtrl.close();
  }
  terminarSesion(){
    this.autenticacionService.terminarSesion();
    this.menuCtrl.close();
  }

}

