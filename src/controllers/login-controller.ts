import { usuarios } from "../models/BBDD.models.ts";
import { almacenarBbddLS } from "./galeria-discos-controller.ts";
//import store from "./../store/store.ts";
//import { online, offline } from "./../slices/pruebaSlice.ts";

export function mainLogin (){

    alert("espera Login!")
    const formLogin=document.getElementById("FormLogin");
    
    if (!formLogin) {
        return
    } else {
        
        formLogin.addEventListener("submit", (event) => {
            event.preventDefault();
            const nombre=document.getElementById("User") as HTMLInputElement;
            nombre.value;
            console.log(nombre);
            const clave=document.getElementById("Password") as HTMLInputElement;
            clave.value;
            console.log(clave);
            const acceso=document.getElementById("Acceso") as HTMLInputElement;
        
        //chatOnline();
        
        for (let i = 0; i < usuarios.length; i++) {
            if ( usuarios[i].user === nombre.value && usuarios[i].password === clave.value) {
                almacenarBbddLS("usuarioActual",usuarios[i].name)
                if (usuarios[i].rol==="administrador") {
                    window.location.href="gestionar.html";
                } else if(usuarios[i].rol==="visitante"){
                    window.location.href="index.html";
                } else {
                    acceso.innerHTML="Acceso negado";
                }
            }
        }
        
        })
    }
}



/*
store.dispatch(online());

function chatOnline() {
    store.getState().estado;
    let flotante= document.getElementById("Flotante");
    if (store.getState()) {
        flotante.innerText="Online";
    } else {
        flotante.innerText="Offline";
    } 
}

store.dispatch(offline());

export function chatOffline() {
    let flotante= document.getElementById("Flotante");
    if (store.getState()) {
        flotante.innerText="Online";
    } else {
        flotante.innerText="Offline";
    } 
}
*/