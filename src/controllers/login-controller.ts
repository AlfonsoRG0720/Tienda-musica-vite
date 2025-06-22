import { leerUsuarios } from "../models/BBDD.models.ts";
import { almacenarBbddLS } from "./galeria-discos-controller.ts";
//import store from "./../store/store.ts";
//import { online, offline } from "./../slices/pruebaSlice.ts";

export function mainLogin (){

    const formLogin=document.getElementById("FormLogin");
    const BBDDusuarios=leerUsuarios();
    
    if (!formLogin) {
        return
    } else {
        
        formLogin.addEventListener("submit", (event) => {
            event.preventDefault();
            const nombre=document.getElementById("User") as HTMLInputElement;
            const nombreInput=nombre.value;
            console.log(nombreInput);
            const clave=document.getElementById("Password") as HTMLInputElement;
            const claveInput=clave.value;
            console.log(claveInput);
            const acceso=document.getElementById("Acceso") as HTMLInputElement;
        
        //chatOnline();
        
        for (let i = 0; i < BBDDusuarios.length; i++) {
            if ( BBDDusuarios[i].user === nombreInput && BBDDusuarios[i].password === claveInput) {
                almacenarBbddLS("usuarioActual",BBDDusuarios[i].name)
                if (BBDDusuarios[i].rol==="administrador") {
                    window.location.href="gestionar.html";
                } else if(BBDDusuarios[i].rol==="visitante"){
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