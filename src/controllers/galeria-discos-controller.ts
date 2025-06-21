import { listaDiscos, carrito, usuarios, IlistaDiscos, ICarrito } from "../models/BBDD.models.ts";
//import { chatOffline } from "./login-controller.ts";



export function iniciarPaginaHome() {
  
  let estilo=true;  //Estilo de vista si cuadrítucla o lista

  let bbdd=recuperarBbddLS("BBDD") || listaDiscos;
  cuentaItems(bbdd);
  almacenarBbddLS("BBDD", bbdd);
  let carroRecuperado=recuperarCarritoLS("carrito") || carrito;
  carritoPago(carroRecuperado);
  funcionPaginacion(bbdd, estilo);
  const openBtn = document.getElementById('Open-carrito');
  const ventanaCarrito = document.getElementById('Carrito-compra');
  const overlay = document.getElementById('Overlay');
  almacenarBbddLS("BBDDusuario", usuarios);
  console.log(usuarios[0].compra);
  CarritoUsuario();
  

  

    //=============================GESTIÓN DE USUARIO=============================

    const usuario=recuperarBbddLS("usuarioActual") || null;
    const nameUsuarioTag= document.getElementById("NameUsuario");
    const botonIniciarSesion=document.getElementById("BtnIniciar");
    const botonCerrarSesion=document.getElementById("BtnCerrar");
    
    if (nameUsuarioTag) {
      nameUsuarioTag.innerHTML=usuario;
    };

    if (usuario && botonIniciarSesion && botonCerrarSesion) {
      botonIniciarSesion.classList.add("hidden");
      botonCerrarSesion.classList.remove("hidden");
      botonCerrarSesion.addEventListener("click", function(){
        CerrarSesion(usuario);
      })
    } else if (botonIniciarSesion && botonCerrarSesion){
      botonIniciarSesion.classList.remove("hidden");
      botonCerrarSesion.classList.add("hidden");
    }

    function CerrarSesion(usuario:any) {
      console.log("se está ejecutando el cerrar")
      console.log(usuario)
      usuario=null;
      almacenarBbddLS("usuarioActual", usuario);
      //chatOffline();
      location.reload();
    }

    //===========================GESTION CARRITO DE USUARIO==========================

    function CarritoUsuario() {
      
      const usuarioCarrito=recuperarBbddLS("usuarioActual") || null;
      const BBDDusuariosLs=recuperarBbddLS("BBDDusuario");
      
      for (let i = 0; i < BBDDusuariosLs.length; i++) {
        
        if (!usuarioCarrito) {
          
          //va directo a carrito normal, no carga nada
          
        } else if (BBDDusuariosLs[i].name===usuarioCarrito) {
          
          let bbddDiscos=recuperarBbddLS("BBDD");

          for (let y = 0; y < BBDDusuariosLs[i].compra.length; y++) {
            let idDiscoCarritoUsuario=BBDDusuariosLs[i].compra[y].id;
            let cantidadDiscoCarritoUsuario=BBDDusuariosLs[i].compra[y].cantidad;

            for (let z = 0; z < bbddDiscos.length; z++) {
              
              if (bbddDiscos[z].id===idDiscoCarritoUsuario) {

                let carritoUsuarioRecuperado=recuperarCarritoLS("carrito");
                //console.log(carritoUsuarioRecuperado);
                const discoUsuario={
                  id:Number,
                  nombre:String,
                  anio:Number,
                  imagen:String,
                  precio:Number,
                  cantidad:Number
                };
                
                discoUsuario.id=bbddDiscos[z].id;
                discoUsuario.nombre=bbddDiscos[z].nombre;
                discoUsuario.anio=bbddDiscos[z].anio;
                discoUsuario.imagen=bbddDiscos[z].imagen;
                discoUsuario.precio=bbddDiscos[z].precio;
                discoUsuario.cantidad=cantidadDiscoCarritoUsuario;
                console.log(discoUsuario);

                carritoUsuarioRecuperado.push(discoUsuario);
                //console.log(carritoUsuarioRecuperado);
                guardarCarritoLS(carritoUsuarioRecuperado);
                carritoPago(carritoUsuarioRecuperado);


              }
              
            }
            
          }
          


        };
        
      }
    }



    //============================CREACIÓN DE GALERIA=============================

    const BtnCuadricula = document.getElementById("Cuadricula");
    const GaleriaDiscosMostrar = document.getElementById("Gallery");
    const BtnLista = document.getElementById("Lista");

    if (!BtnCuadricula || !GaleriaDiscosMostrar) {
      return
    } else {
      BtnCuadricula.addEventListener("click", function () {
        
          
          GaleriaDiscosMostrar.classList.remove("lista-discos");
          GaleriaDiscosMostrar.classList.add("gallery");
          estilo=true;
          console.log("este es el estilo: "+ estilo);
          bbdd=recuperarBbddLS("BBDD") || listaDiscos;
          funcionPaginacion(bbdd, estilo);
        
        }
      );
    }

    if (!BtnLista || !GaleriaDiscosMostrar) {
      return
    } else {
        
      BtnLista.addEventListener("click", function () {
          
          GaleriaDiscosMostrar.classList.remove("gallery");
          GaleriaDiscosMostrar.classList.add("lista-discos");
          estilo=false;
          console.log("este es el estilo: "+ estilo);
          bbdd=recuperarBbddLS("BBDD") || listaDiscos;
          funcionPaginacion(bbdd, estilo);
        
        }
      );
    }


    //=============================ESCUCHAS DE MOSTRAR CARRITO========================

    if (!openBtn || !ventanaCarrito || !overlay) {
      return
    } else {
      
      openBtn.addEventListener('click', () => {
        console.log("Desde el click boton carrito")
        ventanaCarrito.classList.add('active');
        overlay.classList.add('active');
      });
    
    };

    // Cerrar el menú al hacer click fuera
    overlay.addEventListener('click', () => {
    ventanaCarrito.classList.remove('active');
    overlay.classList.remove('active');
    });


    //=============================GUARDAR Y RECUPERAR CARRITO========================

    const BtnVaciarCarrito=document.getElementById("BTN-vaciar-carrito");
    
    if (!BtnVaciarCarrito) {
      return
    } else {
      
      BtnVaciarCarrito.addEventListener("click", vaciarCarrito);

    }
    //=============================PAGAR CARRITO========================

    const BtnPagarCarrito=document.getElementById("BTN-pagar");

    if (!BtnPagarCarrito) {
      return
    } else {
      
      BtnPagarCarrito.addEventListener("click", pagarCarrito);

    }


    //===================================ORDENAR GALERIA==============================

    const BtnOrdenarGaleriaDiscos=document.getElementById("OrdenarGaleria");

    if (!BtnOrdenarGaleriaDiscos) {
      return
    } else {
      
      BtnOrdenarGaleriaDiscos.addEventListener("submit", (event) => {
        event.preventDefault();
        //console.log("esto es en el evento de ordenar")
        bbdd=recuperarBbddLS("BBDD") || listaDiscos;
        console.log(bbdd);
        console.log(estilo);
        ordenarLista(bbdd, estilo);
      });
      
    }

}

function agregarEscuchas(disco: IlistaDiscos[number]) {
  const id = disco.id;
  const idTexto = id.toString();
  const BtnAgregarAlCarrito = document.getElementById(idTexto);

  if (!BtnAgregarAlCarrito) {
    return;
  } else {
    BtnAgregarAlCarrito.addEventListener("click", function () {
      let carroRecuperado = recuperarCarritoLS("carrito");
      const productoEnCarrito = carroRecuperado.find((productId: IlistaDiscos[number]) => id === productId.id);
      alert("Agregado al carrito");

      if (productoEnCarrito) {
        for (let i = 0; i < carroRecuperado.length; i++) {
          if (carroRecuperado[i].id === id) {
            carroRecuperado[i].cantidad++;
          }
        }
        guardarCarritoLS(carroRecuperado);
        carritoPago(carroRecuperado);
        return;
      }
      if (carroRecuperado != null) {
        disco.cantidad = 1;
        carroRecuperado.push(disco);
        carritoPago(carroRecuperado);
      }
    });
  }
}

//=================================Vacía el carrito======================================
export function vaciarCarrito() {
  carrito.length = 0;
  carritoPago(carrito);
  BtnTotalCarrito(null);
}

export function pagarCarrito() {
  let total= totalPrecioCarrito( recuperarCarritoLS("carrito"));
  alert (`Carrito pagado: ${total}€`);
}

//=========================Indica la cantidad de items en la galería========================
export function cuentaItems(lista:any) {
  const cantidadDiscos=document.getElementById("CantidadItems");
  const total=lista.length;

  if (!cantidadDiscos) {
    return
  } else {

    cantidadDiscos.innerText=`Total de discos: ${total}`
    
  }
}


//=====================Ordenación de la lista por precio o por año=============================
export function ordenarLista(lista:any, estilo:boolean) {

  console.log("Esto es dentro de la función ordenar")
  console.log(lista);
  console.log(estilo);

  let ordenValor=document.querySelector("[name='Select']") as HTMLInputElement | null;

  if (!ordenValor) {
    return
  } else {
    
    const orden=parseInt(ordenValor.value);
    let ordenTemporal=[];
  console.log(orden);
  console.table(lista);
  
  switch (orden) {
    case 1:
      ordenTemporal=[];
      const longitudArrayTemporal1=lista.length;
      for (let j = 0; j < longitudArrayTemporal1; j++) {
        let indiceMinimo = 0;
        
        for (let i = 1; i < lista.length; i++) {
          
          if (lista[i].anio <= lista[indiceMinimo].anio) {
            indiceMinimo = i;
          }
        }
        
        ordenTemporal[j]=lista[indiceMinimo];
        lista.splice(indiceMinimo, 1);
        
      }
      
      console.log("Empieza el orden 1");
      console.table(ordenTemporal);
      almacenarBbddLS("BBDD", ordenTemporal);
      funcionPaginacion(ordenTemporal, estilo);
      break;
      
      case 2:
        ordenTemporal=[];
        const longitudArrayTemporal2=lista.length;
        for (let j = 0; j < longitudArrayTemporal2; j++) {
        let indiceMinimo = 0;

        for (let i = 1; i < lista.length; i++) {
          
          if (lista[i].anio >= lista[indiceMinimo].anio) {
            indiceMinimo = i;
          }
        }
        
        ordenTemporal[j]=lista[indiceMinimo];
        lista.splice(indiceMinimo, 1);
        
      }

      console.log("Empieza el orden 2");
      console.table(ordenTemporal);
      almacenarBbddLS("BBDD", ordenTemporal);
      funcionPaginacion(ordenTemporal, estilo);
      break;
      
    case 3:
      ordenTemporal=[];
      const longitudArrayTemporal3=lista.length;
      for (let j = 0; j < longitudArrayTemporal3; j++) {
        let indiceMinimo = 0;

        for (let i = 1; i < lista.length; i++) {
          
          if (lista[i].precio <= lista[indiceMinimo].precio) {
            indiceMinimo = i;
          }
        }
        
        ordenTemporal[j]=lista[indiceMinimo];
        lista.splice(indiceMinimo, 1);
        
      }
      
      console.log("Empieza el orden 3");
      console.table(ordenTemporal);
      almacenarBbddLS("BBDD", ordenTemporal);
      funcionPaginacion(ordenTemporal, estilo);
      break;
      
      case 4:
        ordenTemporal=[];
        const longitudArrayTemporal4=lista.length;
        for (let j = 0; j < longitudArrayTemporal4; j++) {
          let indiceMinimo = 0;
          
          for (let i = 1; i < lista.length; i++) {
            
            if (lista[i].precio >= lista[indiceMinimo].precio) {
              indiceMinimo = i;
            }
          }
          
          ordenTemporal[j]=lista[indiceMinimo];
          lista.splice(indiceMinimo, 1);
          
        }
        
        console.log("Empieza el orden 4");
        console.table(ordenTemporal);
        almacenarBbddLS("BBDD", ordenTemporal);
        funcionPaginacion(ordenTemporal, estilo);
        break; 
        
        default:
          alert("Error en el orden");
          
          break;
        }
      }

}

//=================Con el orden modificado se crea la galería en lista o en cuadrícula=====================

export function crearGaleria(listaDiscos:IlistaDiscos) {
    console.log("Empieza crear galeria")
    let Gallery=document.getElementById("Gallery") as HTMLElement;
    Gallery.innerHTML="";
    let galeria = document.getElementById("Gallery");
    
    for (let i = 0; i < listaDiscos.length; i++) {
        let nuevoDisco = document.createElement("div")
    
        nuevoDisco.innerHTML=`<picture> 
                                <img src="/assets/${listaDiscos[i].imagen}" alt="">
                              </picture>
                              <div>
                                <h2>${listaDiscos[i].nombre}</h2>
                                <p>${listaDiscos[i].anio}</p>
                                <h3>Precio: €${listaDiscos[i].precio.toFixed(2)}</h3>
                                <button id="${listaDiscos[i].id}">🛒 Añadir al carrito</button>
                              </div>`;

        

        if (!galeria) {
          return
        } else {
          
          galeria.appendChild(nuevoDisco);   
        }

        agregarEscuchas(listaDiscos[i]);
        
    }
}

export function crearGaleriaVertical(listaDiscos:IlistaDiscos) {
  const Gallery=document.getElementById("Gallery") as HTMLElement;
  Gallery.innerHTML="";
  let galeria = document.getElementById("Gallery");
      
  for (let i = 0; i < listaDiscos.length; i++) {
  
      let nuevoDisco = document.createElement("div");
  
      nuevoDisco.innerHTML=`<picture> 
                              <img src="/assets/${listaDiscos[i].imagen}" alt="">
                            </picture>
                            <div>
                              <div>
                                <h2>Nombre: ${listaDiscos[i].nombre}</h2>
                                <p>Año: ${listaDiscos[i].anio}</p>
                                <h3>Precio: €${listaDiscos[i].precio.toFixed(2)}</h3>
                              </div>
                              <div>
                                <button id="${listaDiscos[i].id}">🛒 Añadir al carrito</button>
                              </div>
                            </div>`;
  
      if (!galeria) {
          return
        } else {
          
          galeria.appendChild(nuevoDisco);   
        }

      agregarEscuchas(listaDiscos[i]);
  }
}

//============================Recupera la BBDD del LocalStorage=========================
export function recuperarBbddLS(clave:string) {
  const item = localStorage.getItem(clave);
  let BBDDRecuperado = item ? JSON.parse(item) : null;
  console.log(BBDDRecuperado);
  return BBDDRecuperado;
}

//=========================Guarda la BBDD modificada en el LocalStorage=================
export function almacenarBbddLS(clave:string, valor:any) {
  localStorage.setItem(clave, JSON.stringify(valor));
  console.log("Dato guardado en localStorage:", clave);
}

//=============================Función de paginación==================================
export function funcionPaginacion(bbdd: any[], estilo:boolean) {
  let paginaActual=1;
  const cantidadDiscosMostrar=15;
  
  let paginasTotales=Math.ceil(bbdd.length/cantidadDiscosMostrar);
  let arraySeparado=separarbbdd(bbdd, paginasTotales, cantidadDiscosMostrar);

  paginacionPaginaActual(paginaActual, paginasTotales);

  ordenMostrar(arraySeparado[paginaActual-1], estilo);

  

  let btnAnteriorOriginal = document.getElementById("BTN-anterior");
  let btnSiguienteOriginal = document.getElementById("BTN-siguiente");

  if (!btnAnteriorOriginal || !btnSiguienteOriginal) {
    return
  } else {
    
    let btnAnterior = btnAnteriorOriginal.cloneNode(true) as HTMLButtonElement;
    let btnSiguiente = btnSiguienteOriginal.cloneNode(true) as HTMLButtonElement;
    
    btnAnteriorOriginal.replaceWith(btnAnterior);
    btnSiguienteOriginal.replaceWith(btnSiguiente);  
    
    const btnAnterior2 = document.getElementById("BTN-anterior") as HTMLButtonElement;
    if (!btnAnterior2) {
      return
      } else {
      btnAnterior=btnAnterior2;
      habilitarBTNAnterior(btnAnterior, paginaActual)
      btnAnterior.addEventListener("click", () => {
        paginaActual--;
        habilitarBTNSiguiente(btnSiguiente, paginaActual, paginasTotales)
        habilitarBTNAnterior(btnAnterior, paginaActual)
        ordenMostrar(arraySeparado[paginaActual-1], estilo);  
        paginacionPaginaActual(paginaActual, paginasTotales)
        console.log("Dentro del click de pagina anterior: "+paginaActual)
      })
    }

    const btnSiguiente2=document.getElementById("BTN-siguiente") as HTMLButtonElement;
    if (!btnSiguiente2) {
      return
    } else {
      
      btnSiguiente=btnSiguiente2;
      habilitarBTNSiguiente(btnSiguiente, paginaActual, paginasTotales)
      btnSiguiente.addEventListener("click", () => {
        paginaActual++;
        habilitarBTNAnterior(btnAnterior);
        habilitarBTNSiguiente(btnSiguiente, paginaActual, paginasTotales)
        ordenMostrar(arraySeparado[paginaActual-1], estilo);
        paginacionPaginaActual(paginaActual, paginasTotales)  
        console.log("Dentro del click de pagina siguiente: "+paginaActual)
    })
    }
  }
}

function habilitarBTNAnterior(btnAnterior:HTMLButtonElement, paginaActual?:number) {
  btnAnterior.disabled=paginaActual===1;
}

function habilitarBTNSiguiente(btnSiguiente:HTMLButtonElement, paginaActual:number, paginasTotales:number) {
  btnSiguiente.disabled=paginaActual===paginasTotales;
}

function paginacionPaginaActual(paginaActual:number, paginasTotales:number) {
  let paginasCantidad=document.getElementById("Paginacion");

  if (!paginasCantidad) {
    return
  } else { 
    paginasCantidad.innerText=`Pagina ${paginaActual} de ${paginasTotales}`
  }
}

export function separarbbdd(bbdd:any[], paginasTotalesSeparar:number, cantidadDiscosPagina:number) {

  let arrayPaginado:any=[];
  let z=0;
  let largoDeBbdd=bbdd.length;

  for (let i = 0; i < paginasTotalesSeparar; i++) {

    arrayPaginado[i] = [];            

    for (let j = 0; j < cantidadDiscosPagina; j++) {
      
      arrayPaginado[i][j]=bbdd[z];
      z++;
      largoDeBbdd--;

      if (largoDeBbdd==0) {
        break
      }

    }
    
    if (largoDeBbdd==0) {
        break
      }

  }

  console.log(arrayPaginado);

  return(arrayPaginado);

}

function ordenMostrar(arraySeparado:any, estilo:boolean) {
  
  console.log(arraySeparado);

  if (estilo) {
      console.log("dentro del if galeria cuadricula")
      crearGaleria(arraySeparado);
    } else {
      console.log("dentro del if galeria lista")
      crearGaleriaVertical(arraySeparado);
  }
}

//=======================CREACIÓN DE LISTA DE CARRITO DE COMPRAS======================

function carritoPago(carrito:any) {

        let carritoTemporal = document.getElementById("Lista-carrito");
        let total=0;

        if (!carritoTemporal) {
          return
        } else { 
          carritoTemporal.innerHTML="";
        }
          
        for (let i = 0; i < carrito.length; i++) {
          
            let nuevoElementoCarrito = document.createElement("div");

            nuevoElementoCarrito.classList.add("nuevoDiscoCarrito")

            nuevoElementoCarrito.innerHTML = `<picture>
                                                 <img src="/assets/${carrito[i].imagen}" alt="">
                                              </picture>
                                              <div>
                                                <h4>${carrito[i].nombre}</h4>
                                                <div class="btns-cantidad"><button data-id="menosCant-${carrito[i].id}">-</button><p>${carrito[i].cantidad}</p><button data-id="masCant-${carrito[i].id}">+</button></div>
                                                <div>
                                                    <button data-id="borrar-${carrito[i].id}"><span class="material-symbols-outlined">
                                                    delete
                                                    </span></button>
                                                    <p>€${carrito[i].precio.toFixed(2)}</p>
                                                </div>
                                              </div>`;
            carritoTemporal.appendChild(nuevoElementoCarrito);
            const data=(`borrar-${carrito[i].id}`);
            const BtnDataId=document.querySelector(`[data-id=${data}]`);
            
            if (!BtnDataId) {
              return
            } else {
              
              BtnDataId.addEventListener("click", function () {
                
                preguntarSiEliminar(carrito[i].nombre,carrito,carrito[i].id)
                
              })
            }

            const dataCantidadMenos=(`menosCant-${carrito[i].id}`);
            const BtnDataIdMenos=document.querySelector(`[data-id=${dataCantidadMenos}]`);

            if (!BtnDataIdMenos) {
              return
            } else {
              
              BtnDataIdMenos.addEventListener("click", function () {
                
                if (carrito[i].cantidad==1) {
                  
                  preguntarSiEliminar(carrito[i].nombre,carrito,carrito[i].id)
                  
                } else {
                  reducirCantidad(carrito[i]);
                  carritoPago(carrito);
                }
                
              })
            }

            const dataCantidadMas=(`masCant-${carrito[i].id}`);
            const BtnDataIdMas=document.querySelector(`[data-id=${dataCantidadMas}]`);
            
            if (!BtnDataIdMas) {
              return
            } else {
              
              BtnDataIdMas.addEventListener("click", function () {
                
                aumentarCantidad(carrito[i]);
                carritoPago(carrito);
                
              })
              
              total=totalPrecioCarrito(carrito);
            }
              
        }

        const totalArticulosCarrito=document.getElementById("TotalArticulosCarrito");
        const sumaCarrito=document.getElementById("sumaCarrito");
        let cantCarritoUnidades=0;

        if (!totalArticulosCarrito || !sumaCarrito) {
          return
        } else {
          
          if (carrito.length==0) {
            
            totalArticulosCarrito.style.display="none";
            carritoTemporal.innerHTML="<h2 class=vacio>El carrito está vacío</h2>";
        } else {
          totalArticulosCarrito.style.display="flex";
            carrito.forEach((element:ICarrito) => {
            cantCarritoUnidades = cantCarritoUnidades + (element.cantidad ?? 0);   //=======================OJO, REVISAR SI HAY PROBLEMAS CON EL CARRITO==========
            BtnTotalCarrito(cantCarritoUnidades);
            });
          sumaCarrito.innerHTML=cantCarritoUnidades.toString();
        }
        
        guardarCarritoLS(carrito);
        let totalCarrito=document.getElementById("Total");

        if (!totalCarrito) {
          return
        } else {
          totalCarrito.innerText="€"+total.toFixed(2);
        }
      }

}


function BtnTotalCarrito(cantCarritoUnidades:number | null) {
  const BtncantCarrito=document.getElementById("Cant-carrito-btn");

  if (!BtncantCarrito) {
    return
  } else {
    BtncantCarrito.innerHTML=(cantCarritoUnidades ?? 0).toString();
  }
}

//=====================Pregunta si quiere eliminar del carrito======================
function preguntarSiEliminar(nombreDisco:string,carrito:any,carritoId:number) {

  if (confirm(`Deseas eliminar del carrito el disco: ${nombreDisco}?`)) {
    let carritoDespuesBorrar = eliminarDiscoCarrito(carrito,carritoId);
    carritoPago(carritoDespuesBorrar);
  }

}


//==============================Total precio carrito============================
function totalPrecioCarrito(carrito:any) {
  let valorTotal=0;
  console.log(carrito);
  for (let i = 0; i < carrito.length; i++) {
    valorTotal = valorTotal + carrito[i].cantidad * carrito[i].precio;
  }
  return valorTotal;
}



//=============================GUARDAR Y RECUPERAR CARRITO DEL LOCAL STORAGE========================

function guardarCarritoLS(carrito:any) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function recuperarCarritoLS(key:string) {
  const carritoLocalStorage=localStorage.getItem(key);
  if (!carritoLocalStorage) {
    return
  } else {
    
    let carritoRecuperado=JSON.parse(carritoLocalStorage);
    return carritoRecuperado;
  }
}

function eliminarDiscoCarrito(carritoAntesBorrar:any,id:number) {
  let nuevoCarrito=[];
  for (let i = 0; i < carritoAntesBorrar.length; i++) {
    if (carritoAntesBorrar[i].id != id) {
      nuevoCarrito.push(carritoAntesBorrar[i]);
    }
  }
  return nuevoCarrito;
}


//=====================FUNCIONES DE BOTONES DE REDUCIR Y AUMENTAR CANTIDAD EN CARRITO=======================

function reducirCantidad(carrito:any) {
  carrito.cantidad--;
}

function aumentarCantidad(carrito:any) {
  carrito.cantidad++;
}