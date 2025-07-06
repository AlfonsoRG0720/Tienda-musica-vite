import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { reducirCantidad, aumentarCantidad, eliminarDiscoporID, vaciarCarrito, carritoPerfilUsuario } from "../models/carrito.model";
import { recuperarCarritoLS, guardarCarritoLS } from "../utilities/functions-LocalStorage";
import { carritoPago } from "../controllers/galeria-discos-controller";
import { carrito } from "../mocks/carrito";

export type ItemCarrito = {
    id:number,
    nombre:string,
    imagen:string,
    precio:number,
    cantidad:number
};

type CarritoState = ItemCarrito[];

//const estadoInicialCarrito=carrito;

const initialState: CarritoState = [];

const carritoSlice = createSlice({
  name: 'carrito',
  initialState,
  reducers: {
    agregarAlCarrito: (state, action: PayloadAction<ItemCarrito>) => {
      console.log("paso 2")
      let carroRecuperado = carritoPerfilUsuario();
      console.log(action.payload)
      console.log(carroRecuperado)

      if (carroRecuperado.length==0 || carroRecuperado===null) {
        console.log("Esto es dentro de op carro vacío:")
        action.payload.cantidad = 1;
        state.push(action.payload);
        console.log(action.payload);
        guardarCarritoLS([action.payload]);
        carritoPago([action.payload]);
        alert("Agregado al carrito");
      
      } else {

        const productoEnCarrito: ItemCarrito | null = (carroRecuperado as ItemCarrito[]).find((productId: ItemCarrito) => productId.id === action.payload.id) || null;
        console.log(productoEnCarrito)
        if (!productoEnCarrito) {
          console.log("Esto es dentro de op carro sin el mismo disco:")
          action.payload.cantidad = 1;
          state.push(action.payload);
          console.log(action.payload);
          carroRecuperado.push(action.payload);
          guardarCarritoLS(carroRecuperado);
          carritoPago(carroRecuperado);
          alert("Agregado al carrito");

        } else {
          
          console.log("Esto es dentro de op carro con el mismo disco:")
          for (let i = 0; i < carroRecuperado.length; i++) {
            if (carroRecuperado[i].id === action.payload.id) {
              carroRecuperado[i].cantidad++;
            }
          }
          
          guardarCarritoLS(carroRecuperado);
          carritoPago(carroRecuperado);
          alert("Agregado al carrito");
          return carroRecuperado;
        }
      }
    },
    reducirCantidadRedux:(_state, action: PayloadAction<ItemCarrito>) => {
      console.log("paso 2 reducir")
      let carroRecuperado = carritoPerfilUsuario();
      console.log(action.payload)
      console.log(carroRecuperado)
      for (let i = 0; i < carroRecuperado.length; i++) {
        if (carroRecuperado[i].id===action.payload.id) {
          carroRecuperado[i].cantidad -=1;
        };
      }
      guardarCarritoLS(carroRecuperado);
      carritoPago(carroRecuperado);
      return carroRecuperado
    },
    aumentarCantidadRedux: (_state, action: PayloadAction<ItemCarrito>) => {
      console.log("paso 2 aumentar")
      let carroRecuperado = carritoPerfilUsuario();
      console.log(action.payload)
      console.log(carroRecuperado)
      for (let i = 0; i < carroRecuperado.length; i++) {
        if (carroRecuperado[i].id===action.payload.id) {
          carroRecuperado[i].cantidad +=1;
        };
      }
      guardarCarritoLS(carroRecuperado);
      carritoPago(carroRecuperado);
      return carroRecuperado
    }
  }
  

      /*
      
      
            
            
            
          eliminarDelCarrito: (state, action: PayloadAction<number>) => {
            
          return state.items.filter(item => item.id !== action.payload);
          
          //let nuevaLista: ItemCarrito[] = [];
          //nuevaLista = eliminarDiscoporID(action.payload);
          //return nuevaLista;
        },
        vaciarCarritoRedux: () => {
          vaciarCarrito();
        },
        actualizarCantidad: (state, action: PayloadAction<{ id: number; nombre:string; imagen:string; precio:number; cantidad:number}>) => {
          const item = state.find(item => item.id === action.payload.id);
          if (item) item.cantidad = action.payload.cantidad;
        },
        */
      }
    );

export const { agregarAlCarrito, reducirCantidadRedux, aumentarCantidadRedux } = carritoSlice.actions;
export default carritoSlice.reducer;
