import { recuperarBbddLS, almacenarBbddLS, guardarCarritoLS, recuperarCarritoLS } from "../utilities/functions-LocalStorage";
import { carritoPago, BtnTotalCarrito } from "../controllers/galeria-discos-controller";
import { recuperarUsuarioActual } from "../utilities/functions-cookies";
import { leerUsuarios } from "../models/BBDD.models";
import type { ItemCarrito } from "../slices/carritoSlice";


//=================================Agregar al carrito======================================
/*
export function agregarAlCarrito(carrito:any) {
   return 
}

//=================================Leer el carrito======================================
export function leerCarrito() {
  let carrito=recuperarBbddLS("carrito");
  return carrito;
}
*/

//=================================Actualizar el carrito======================================
export function reducirCantidad(carrito:any) {
  carrito.cantidad--;
}

export function aumentarCantidad(carrito:any) {
  carrito.cantidad++;
}

//=================================Eliminar elemento del carrito======================================
export function eliminarDiscoporID(id:number) {
  let nuevaLista:ItemCarrito[]=[];
  nuevaLista.filter(item => item.id !== id);
  return nuevaLista
}


//=================================Borrar el carrito======================================
export function vaciarCarrito() {
    let carrito:any=[];
    guardarCarritoLS(carrito);
    carritoPago(carrito);
    BtnTotalCarrito(null);
}








//=====================FUNCION CARRITO DE USUARIO==========================================================

export function carritoUsuario(carrito:[]) {  //<------------------esto es para guardar el carrito en el usuario
  const usuarioActual=recuperarUsuarioActual() || null;
  const BBDDusuarios=leerUsuarios();

  if (!usuarioActual) {
    return
  }

  //-------------------prueba primero guardar----------------------------------
  console.log("El carrito es:  ")
  console.log(carrito)
  
  for (let i = 0; i < BBDDusuarios.length; i++) { 
    if (BBDDusuarios[i].name === usuarioActual) {
      BBDDusuarios[i].compra=carrito.map((item: { id: number; cantidad: number }) => ({
          id: item.id,
          cantidad: item.cantidad
        }))
    }
  }
  almacenarBbddLS("BBDDusuario",BBDDusuarios);
}


//-------------------Prueba extraer carrito de usuario----------------------------------

export function carritoPerfilUsuario() {
        const usuarioSesión=recuperarUsuarioActual() || "";
        const bbdd=recuperarBbddLS("BBDD");
        const usuarios=leerUsuarios();
        let carritoUsuarioRecuperado: any[] =recuperarCarritoLS("carrito");
        console.log(usuarioSesión)

        if (usuarioSesión==="") {
          alert("entrando en el null")
          return carritoUsuarioRecuperado
        } else {

        interface IUsuario {
          name: string;
          compra: ICompraItem[] | { compra: ICompraItem[] };
        }

        interface ICompraItem {
          id: number;
          cantidad: number;
        }

        let compraUsuario: IUsuario | undefined = (usuarios.find((p: IUsuario) => p.name === usuarioSesión)).compra;
        console.log(compraUsuario);

        if (compraUsuario && Array.isArray(compraUsuario)) {
          for (let i = 0; i < compraUsuario.length; i++) {
            const id = compraUsuario[i].id;
            const cantidad = compraUsuario[i].cantidad;
            
            const discoUsuario={
                  id:Number,
                  nombre:String,
                  anio:Number,
                  imagen:String,
                  precio:Number,
                  cantidad:Number
                };
                
            for (let y = 0; y < bbdd.length; y++) {
              if(bbdd[y].id===id){

                discoUsuario.id=bbdd[y].id;
                discoUsuario.nombre=bbdd[y].nombre;
                discoUsuario.anio=bbdd[y].anio;
                discoUsuario.imagen=bbdd[y].imagen;
                discoUsuario.precio=bbdd[y].precio;
                discoUsuario.cantidad=cantidad;
  
                carritoUsuarioRecuperado.push(discoUsuario);
              }
              
            }
          }
        }

        return carritoUsuarioRecuperado;
        }
      }
