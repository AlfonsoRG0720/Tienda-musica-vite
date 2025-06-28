import { leerUsuarios } from "../models/BBDD.models.ts";
import { guardarUsuarioActual, recuperarUsuarioActual } from "./galeria-discos-controller.ts";
//import store from "./../store/store.ts";
//import { online, offline } from "./../slices/pruebaSlice.ts";

export function mainLogin (){

    const formLogin=document.getElementById("FormLogin");
    const BBDDusuarios=leerUsuarios();
    let usuarioActual=recuperarUsuarioActual() || null;
    
    if (!formLogin) {
        return
    } else {
        
        formLogin.addEventListener("submit", (event) => {
            event.preventDefault();
            const user=document.getElementById("User") as HTMLInputElement;
            const userInput=user.value;
            console.log(userInput);
            const password=document.getElementById("Password") as HTMLInputElement;
            const passwordInput=password.value;
            console.log(passwordInput);
            const acceso=document.getElementById("Acceso") as HTMLElement;
        
        for (let i = 0; i < BBDDusuarios.length; i++) {
            if ( BBDDusuarios[i].user === userInput && BBDDusuarios[i].password === passwordInput) {
                guardarUsuarioActual(BBDDusuarios[i].name)//--------------------------------------------Cookie!!
                usuarioActual=BBDDusuarios[i].name;
                if (BBDDusuarios[i].rol==="administrador") {
                    window.location.href="gestionar.html";
                } else if(BBDDusuarios[i].rol==="visitante"){
                    window.location.href="index.html";
                } 
            }
        }
        
        if (usuarioActual==null) {
            acceso.innerHTML="Usuario o contraseña incorrectos, intenta nuevamente";
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