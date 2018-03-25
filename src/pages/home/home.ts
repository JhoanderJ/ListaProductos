import { Producto } from './../../clases/producto';
import { ProductoService } from './../../servicios/producto.service';
import { AgregarProductoPage } from './../agregar-producto/agregar-producto';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ProductoPage } from '../producto/producto';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  agregarProductoPage = AgregarProductoPage;
  productos : Producto [] = [];


  constructor(public navCtrl: NavController,public productoService:ProductoService,public modalCtrl:ModalController) {
  
  }
  ngOnInit(){
   // this.productoService.inicializarProductos().then((productos:Producto[])=>{
                                            //  this.productos = productos;
   // })
    //.catch(error =>{console.log(error)});
    

  }
  ionViewWillEnter(){
    this.productos = this.productoService.cargarProducto();
  }
  mostrarProducto(producto:Producto,pid:number){
    let modal = this.modalCtrl.create(ProductoPage,
                                    {producto: producto ,pid : pid});
    modal.present();

  }

}
