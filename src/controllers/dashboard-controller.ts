import { recuperarBbddLS } from "./../controllers/galeria-discos-controller";
import { eliminarUsuario, leerUsuarios, editarUsuario } from "./../models/BBDD.models";

function permisoAcceso() {

    const usuarioActual=recuperarBbddLS("usuarioActual");
    const usuariosActuales=leerUsuarios();
    const revisarUsuario = usuariosActuales.find((u:any) => u.name === usuarioActual);
    if (!revisarUsuario) {
        const errorAcceso=document.getElementById("pag-dashboard")!;
        errorAcceso.innerHTML="No permitido acceder sin logearse con tu usuario";  
        errorAcceso.style.fontSize="3rem";
        errorAcceso.style.width="70%";
        errorAcceso.style.margin="50px auto";
    } else {
        identificarUsuario()
    }
    
}
function identificarUsuario() {
    //Traer el usuario actual en sesión
    const usuarioActual=recuperarBbddLS("usuarioActual");
    let usuarioTag=document.getElementById("nombreUsuario");
    
    if (!usuarioTag) {
        return
    } else {
        usuarioTag.innerHTML=`Hola ${usuarioActual}`;
    }
}

function escuchaEliminar() {
    const usuarioActual=recuperarBbddLS("usuarioActual");
    
    const btnEliminar=document.getElementById("BtnEliminar");
    
    if (!btnEliminar) {
        return
    } else {
        btnEliminar.addEventListener("click",()=>{
    
            const preguntarElimar:boolean=confirm("Estás seguro que deseas borrar la cuenta de nuestra tienda web?");
            if (!preguntarElimar) {
                return
            } else {
                eliminarUsuario(usuarioActual);
                window.location.href = "/index.html";
            }
        })
    }
}

function escuchaEditarUsuario() {
    const btnEditar=document.getElementById("BtnEditar");
    if (!btnEditar) {
        return
    } else {
        btnEditar.addEventListener("click", ()=>{
            const usuarioActual=recuperarBbddLS("usuarioActual");
            const usuariosActuales=leerUsuarios();
            const revisarUsuario = usuariosActuales.find((u:any) => u.name === usuarioActual);
            let user=revisarUsuario.user;
            let password=revisarUsuario.password;
            let name=revisarUsuario.name;
            const formEditar=document.getElementById("editarDatos")!;
            formEditar.classList.remove("hidden");
            let userForm=document.getElementById("User") as HTMLInputElement;
            let passwordForm=document.getElementById("Password") as HTMLInputElement;
            let nameForm=document.getElementById("Name") as HTMLInputElement;
            
            if (!userForm || !passwordForm || !nameForm) {
                return
            } else {
                userForm.value=user;
                passwordForm.value=password;
                nameForm.value=name;
                formEditar.addEventListener("submit",(event)=>{
                    event.preventDefault();
                    user=userForm.value;
                    password=passwordForm.value;
                    name=nameForm.value;
                    editarUsuario(usuarioActual, user, password, name);
                    formEditar.classList.add("hidden");
                    location.reload();
                })
            }
        })
    }
}

export function mainDashboard() {

    permisoAcceso();
    escuchaEliminar();
    escuchaEditarUsuario();

}