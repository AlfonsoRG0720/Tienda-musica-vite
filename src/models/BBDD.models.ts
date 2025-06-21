import { recuperarBbddLS, almacenarBbddLS } from "../controllers/galeria-discos-controller.js";
import { crearGaleriaLista } from "../controllers/galeria-gestionar-controller.js";


export let listaDiscos= [
    {
        id:1,
        nombre:"Mago de oz",
        anio:1994,
        imagen:"1.jpg",
        precio:12.50
    },
    {
        id:2,
        nombre:"Jesús de chamberí",
        anio:1996,
        imagen:"2.jpg",
        precio:14
    },
    {
        id:3,
        nombre:"La leyenda de la mancha",
        anio:1998,
        imagen:"3.jpg",
        precio:12
    },
    {
        id:4,
        nombre:"Finisterra",
        anio:2000,
        imagen:"4.jpg",
        precio:16
    },
    {
        id:5,
        nombre:"Gaia",
        anio:2003,
        imagen:"5.jpg",
        precio:18
    },
    {
        id:6,
        nombre:"Belfast",
        anio:2004,
        imagen:"6.jpg",
        precio:12
    },
    {
        id:7,
        nombre:"Gaia II: La voz dormida",
        anio:2005,
        imagen:"7.jpg",
        precio:14
    },
    {
        id:8,
        nombre:"La ciudad de los árboles",
        anio:2007,
        imagen:"8.jpg",
        precio:12
    },
    {
        id:9,
        nombre:"Gaia III: Atlantia",
        anio:2010,
        imagen:"9.jpg",
        precio:14
    },
    {
        id:10,
        nombre:"Hechizos, pócimas y brujería",
        anio:2012,
        imagen:"10.jpg",
        precio:14
    },
    {
        id:11,
        nombre:"Illusia",
        anio:2014,
        imagen:"11.jpg",
        precio:12
    },
    {
        id:12,
        nombre:"Finisterra Opera Rock",
        anio:2015,
        imagen:"12.jpg",
        precio:14
    },
    {
        id:13,
        nombre:"Ira Dei",
        anio:2019,
        imagen:"13.jpg",
        precio:14
    },
    {
        id:14,
        nombre:"Bandera Negra",
        anio:2021,
        imagen:"14.jpg",
        precio:18
    },
    {
        id:15,
        nombre:"Alicia en el Metaverso",
        anio:2024,
        imagen:"15.jpg",
        precio:18
    },
    {
        id:17,
        nombre:"Rata Blanca",
        anio:1988,
        imagen:"17.jpg",
        precio:10
    },
    {
        id:18,
        nombre:"Magos, Espadas y Rosas",
        anio:1990,
        imagen:"18.jpg",
        precio:14
    },
    {
        id:19,
        nombre:"Guerrero del Arco Iris",
        anio:1991,
        imagen:"19.jpg",
        precio:15
    },
    {
        id:20,
        nombre:"Entre el Cielo y el Infierno",
        anio:1994,
        imagen:"20.jpg",
        precio:17.50
    },
    {
        id:21,
        nombre:"Rata Blanca VII",
        anio:1997,
        imagen:"21.jpg",
        precio:18.50
    },
    {
        id:22,
        nombre:"El Camino del Fuego",
        anio:2002,
        imagen:"22.jpg",
        precio:14
    },
    {
        id:23,
        nombre:"La Llave de la Puerta Secreta",
        anio:2005,
        imagen:"23.jpg",
        precio:16
    },
    {
        id:24,
        nombre:"El Reino Olvidado",
        anio:2008,
        imagen:"24.jpg",
        precio:19
    },
    {
        id:25,
        nombre:"The Forgotten Kingdom",
        anio:2009,
        imagen:"25.jpg",
        precio:18.50
    },
    {
        id:26,
        nombre:"Tormenta Electrica",
        anio:2015,
        imagen:"26.jpg",
        precio:14.50
    },
    {
        id:27,
        nombre:"Esencia",
        anio:2014,
        imagen:"27.jpg",
        precio:12
    },
    {
        id:28,
        nombre:"Tierras de Leyenda",
        anio:2000,
        imagen:"28.jpg",
        precio:14.50
    },
    {
        id:29,
        nombre:"Destino",
        anio:2022,
        imagen:"29.jpg",
        precio:13.50
    },
    {
        id:30,
        nombre:"Legado de Juglares",
        anio:2004,
        imagen:"30.jpg",
        precio:16
    },
    {
        id:31,
        nombre:"JuglarMetal",
        anio:2006,
        imagen:"31.jpg",
        precio:14.50
    },
    {
        id:32,
        nombre:"Once Romances - Desde al-Andalus",
        anio:2008,
        imagen:"32.jpg",
        precio:12.50
    },
    {
        id:33,
        nombre:"Sueños",
        anio:2015,
        imagen:"33.jpg",
        precio:16.00
    },
    {
        id:34,
        nombre:"La Magia de la Luna",
        anio:2017,
        imagen:"34.jpg",
        precio:17.50
    },
    {
        id:35,
        nombre:"Amantes Sunt Amentes",
        anio:2006,
        imagen:"35.jpg",
        precio:18.00
    },
    {
        id:36,
        nombre:"Para Ti Con Desprecio",
        anio:2005,
        imagen:"36.jpg",
        precio:16.50
    },
    {
        id:37,
        nombre:"Sangre fría",
        anio:2007,
        imagen:"37.jpg",
        precio:18.50
    },
    {
        id:38,
        nombre:"Todxs Somos Pxndx",
        anio:2020,
        imagen:"38.jpg",
        precio:20.00
    },
    {
        id:39,
        nombre:"Caramelos De Cianuro",
        anio:2010,
        imagen:"39.jpg",
        precio:18.50
    },
    {
        id:40,
        nombre:"Frisbee",
        anio:2002,
        imagen:"40.jpg",
        precio:17.50
    },
    {
        id:41,
        nombre:"Miss Mujerzuela",
        anio:2000,
        imagen:"41.jpg",
        precio:14.00
    },
    {
        id:42,
        nombre:"En Vivo 2008 (En Vivo)",
        anio:2017,
        imagen:"42.jpg",
        precio:16.00
    },
    {
        id:43,
        nombre:"Mi Sangre",
        anio:2004,
        imagen:"43.jpg",
        precio:20.00
    },
    {
        id:44,
        nombre:"Un Día Normal",
        anio:2002,
        imagen:"44.jpg",
        precio:18.00
    },
    {
        id:45,
        nombre:"La Vida Es Un Ratico",
        anio:2007,
        imagen:"45.jpg",
        precio:19.00
    },
    {
        id:46,
        nombre:"Folktergeist",
        anio:2002,
        imagen:"46.jpg",
        precio:16.50
    },
    {
        id:47,
        nombre:"Love and Oz",
        anio:2011,
        imagen:"47.jpg",
        precio:14.00
    },
    {
        id:48,
        nombre:"Rarezas",
        anio:2006,
        imagen:"48.jpg",
        precio:14.50
    },
    {
        id:49,
        nombre:"La Bruja",
        anio:1997,
        imagen:"49.jpg",
        precio:21.00
    },
    {
        id:50,
        nombre:"Gaia Epilogo",
        anio:2009,
        imagen:"50.jpg",
        precio:19.00
    },
    {
        id:51,
        nombre:"Diabulus In Musica",
        anio:2006,
        imagen:"51.jpg",
        precio:18.50
    },
    {
        id:52,
        nombre:"La Flaca",
        anio:1996,
        imagen:"52.jpg",
        precio:16.50
    },
    {
        id:53,
        nombre:"Bonito",
        anio:2003,
        imagen:"53.jpg",
        precio:14.00
    },
    {
        id:54,
        nombre:"Recuérdame Con Cartas y Algo Más... Los Éxitos",
        anio:2012,
        imagen:"54.jpg",
        precio:14.50
    },
    {
        id:55,
        nombre:"El Mundo Se Equivoca",
        anio:2006,
        imagen:"55.jpg",
        precio:19.50
    },
    {
        id:56,
        nombre:"Lo Que Te Conte Mientras Te Hacias La Dormida",
        anio:2000,
        imagen:"56.jpg",
        precio:17.50
    },
    {
        id:57,
        nombre:"LOVG: Grandes Éxitos",
        anio:2008,
        imagen:"57.jpg",
        precio:16.00
    },
    {
        id:58,
        nombre:"Puedes Contar Conmigo",
        anio:2003,
        imagen:"58.jpg",
        precio:20.00
    },
    {
        id:59,
        nombre:"El Silencio",
        anio:1992,
        imagen:"59.jpg",
        precio:17.50
    },
    {
        id:60,
        nombre:"Me Verás Volver (Hits & Más)",
        anio:2007,
        imagen:"60.jpg",
        precio:18.00
    }
]

export let carrito=[
    
]

export interface ICarrito {
    id:string,
    nombre?:string,
    anio?:number,
    imagen?:string,
    precio?:number | any,
    cantidad?:number
}
export type ICarritoItem = ICarrito[];

export let usuarios=[
    {
        user:"Alfo",
        password:"1111",
        name:"Alfonso Rodriguez",
        rol:"administrador",
        compra:[{id:10,cantidad:2},{id:22,cantidad:3}]
    },
    {
        user:"Cata",
        password:"2222",
        name:"Catalina Rubio",
        rol:"administrador",
        compra:[{id:8,cantidad:12},{id:12,cantidad:5}]
    },
    {
        user:"Pao",
        password:"9999",
        name:"Paola Sanchez",
        rol:"visitante",
        compra:[]
    },
    {
        user:"Noe",
        password:"8888",
        name:"Noelia Prez",
        rol:"visitante",
        compra:[]
    }
]

export interface Disco {
    id:string,
    nombre?:string,
    anio?:number,
    imagen?:string,
    precio?:number | any,
    cantidad?:number
}
export type IlistaDiscos = Disco[];

//==============Función eliminar disco de la BBDD=====================
export function eliminar(listaDiscos:Disco[], id:string) {
            let temporal=[];
            console.log("Empieza eliminar")
    
            for (let i = 0; i < listaDiscos.length; i++) {
                
                if (listaDiscos[i].id != id) {
                    let temporal2=listaDiscos[i];
                    temporal.push(temporal2);
                } 
            }
    
            crearGaleriaLista(temporal);
            console.log("empieza el guardar galeria editada en LS")
            almacenarBbddLS("BBDD",temporal);
            return (temporal);
            
}



//=============Función agregar un disco nuevo a la BBDD===============
export function ObtenerValoresNuevos() {
  console.log("hola desde obtener valores");

  const formAgregarDisco= document.getElementById("FORM-AgregarDisco")
  
  if (formAgregarDisco==null) {
    
    
    
    //poner algo por si el formulario no existe



  } else {
    
    formAgregarDisco.addEventListener("submit", function (event) {
    event.preventDefault();

    let LocalStorage=[];
    LocalStorage=recuperarBbddLS("BBDD")|| listaDiscos;
    let idNuevo=LocalStorage.length+1;
    
    console.log(idNuevo);
    const nombreInput = document.getElementById("NombreNuevo") as HTMLInputElement | null;
    let nombre:string = nombreInput ? nombreInput.value : "";
    console.log(nombre);

    const anioInput = document.getElementById("AnioNuevo") as HTMLInputElement | null;
    let anio: number | string = anioInput ? anioInput.value : "";
    console.log(anio);
    
    const imagenInput = document.getElementById("ImagenNuevo") as HTMLInputElement | null;
    let imagen: string= imagenInput? imagenInput.value: "";
    console.log(imagen);

    const precioInput = document.getElementById("PrecioNuevo") as HTMLInputElement | null;
    let precio: number | string = precioInput? precioInput.value: "";    
    console.log(precio);

    //=====================COMPROBAR QUE NO ESTÁ VACÍO EL NUEVO DISCO==========================
    if (!nombre) {
      alert("El nombre no puede estar vacío");
      return;
    }
    if (Number(anio) < 1900) {
      alert("El año no puede estar antes del año 1900");
      return;
    }
    if (Number(precio)<0 || Number(precio)>1000) {
      alert("El precio no puede ser menor a 0€ ni mayor a 1.000€");
      return;
    } else {

      //=======================COMPARAR SI YA EXISTE EN LA BBDD=================================
      const comparar = LocalStorage.find((t: any) => t.nombre === nombre);

      if (comparar) {

        alert("El disco ya existe en la base de datos")
        
      } else {
        let nuevoDisco={
          id:idNuevo,
          nombre:nombre,
          anio:anio,
          imagen:imagen,
          precio:parseFloat(precio)
        };
        
        LocalStorage.push(nuevoDisco);
        almacenarBbddLS("BBDD",LocalStorage);
        crearGaleriaLista(LocalStorage);
        alert("Artículo agregado correctamente")
      }

    }
    
  })
}

}

//===================Función editar disco en BBDD=====================
export function editarDisco(listaDiscos: Disco[], i: number) {
              console.log("hola desde el submit de editar");
              console.log(listaDiscos);

            const nombrePruebaInput = document.getElementById("NombreEditar") as HTMLInputElement | null;
            const nombrePrueba = nombrePruebaInput? nombrePruebaInput.value:"";
            const anioPruebaInput = document.getElementById("AnioEditar") as HTMLInputElement | null;
            const anioPrueba = anioPruebaInput? anioPruebaInput.value:"";         //=========================Probar que funciona corractamente con cualquier dato entrado============
            const imagenPruebaInput = document.getElementById("ImagenEditar") as HTMLInputElement | null;
            const imagenPrueba = imagenPruebaInput? imagenPruebaInput.value: "";
            const precioPruebaInput = document.getElementById("PrecioEditar") as HTMLInputElement | null;
            const precioPrueba = precioPruebaInput? precioPruebaInput.value:"";

            if (!nombrePrueba) {
              alert("El nombre no puede estar vacío");
              return;
            }

            if (Number(anioPrueba)<1900) {
              alert("El año no puede estar antes del año 1900");
              return;
            }

            if (Number(precioPrueba)<0 || Number(precioPrueba)>1000) {
              alert("El precio no puede ser menor a 0€ ni mayor a 1.000€");
              return;
            }

            listaDiscos[i].nombre=nombrePrueba;
            listaDiscos[i].anio=Number(anioPrueba);
            listaDiscos[i].imagen=imagenPrueba;
            listaDiscos[i].precio= parseFloat(precioPrueba);

            console.log(listaDiscos);
            
            crearGaleriaLista(listaDiscos);
            console.log("empieza el guardar galeria con Disco unico editado en LS")
            almacenarBbddLS("BBDD",listaDiscos);
            alert("Artículo editado correctamente");
}

//===================Prueba testing con Jest==========================