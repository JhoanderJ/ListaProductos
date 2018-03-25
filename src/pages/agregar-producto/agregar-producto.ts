import { ProductoService } from './../../servicios/producto.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the AgregarProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar-producto',
  templateUrl: 'agregar-producto.html',
})
export class AgregarProductoPage {
  imagenes:File;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public productoService:ProductoService,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarProductoPage');
  }

  agregarProducto(formulario :NgForm){
    this.productoService.agregarProducto(formulario.value.nombre,
                                        this.imagenes,
                                        formulario.value.rating,
                                        formulario.value.descripcion,
                                        formulario.value.precio)
    formulario.reset();
    //this.imagenes = [];
    this.viewCtrl.dismiss()
  }

  subirImagen(event){
    //const file = event.target.files[0]
    this.imagenes =  event.target.files;
    //console.log(file)
  }

}
