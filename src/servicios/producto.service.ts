import { Producto } from './../clases/producto';
//import { Storage } from '@ionic/storage';
import { Injectable } from "@angular/core";




@Injectable()
export class ProductoService{



    productos : Producto[] = [];

    //constructor(public storage : Storage){}

    agregarProducto(nombre:string,
                    imagenes:File,
                    rating:number,
                    descripcion:string,
                    precio:number){
    let producto = new Producto(nombre,imagenes,rating,descripcion,precio);

        this.productos.push(producto);
        localStorage.setItem('productos', JSON.stringify(this.productos));

        //this.storage.set('productos', this.productos)
    }
    cargarProducto(){
        if(localStorage.getItem('productos')){
            let aux = JSON.parse(localStorage.getItem('productos'))
            console.log(aux);
            this.productos = aux 
        }
        
        return this.productos.slice();
    }

   
                    
    }
    
    

    /*inicializarProductos(){
       return  this.storage.get('productos')
                            .then((productos:Producto[]) =>{
                                if(productos == null){
                                    this.productos = [];
                                }else {
                                    this.productos = productos;
                                }
                                return this.productos.slice();
                            })
                            .catch(error => {console.log(error)});
    }*/
