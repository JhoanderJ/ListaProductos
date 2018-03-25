import { ProductoService } from './../../servicios/producto.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Producto } from '../../clases/producto';
import { ViewController } from 'ionic-angular/navigation/view-controller';



@IonicPage()
@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {
  producto:Producto;
  pid : number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController, public productoService : ProductoService) {
    this.producto = navParams.get('producto')
    this.pid = navParams.get('pid');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoPage');
  }
  cerrar(){
    this.viewCtrl.dismiss();
  }
 

}
