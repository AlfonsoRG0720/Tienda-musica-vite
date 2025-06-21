import { iniciarPaginaHome } from "../controllers/galeria-discos-controller.ts";
import { mainGestionar } from "../controllers/galeria-gestionar-controller.ts";
import { mainLogin } from "./../controllers/login-controller.ts";


const rutas = {
    "/index.html": iniciarPaginaHome,
    "/src/pages/login.html": mainLogin,
    "/src/pages/gestionar.html": mainGestionar,
} as const;

export function enrutador() {

    const currentPath = window.location.pathname;
    console.log(currentPath);

    if (currentPath in rutas) {
        rutas[currentPath as keyof typeof rutas]();
    } else {
        window.location.href = "/index.html";
    }

}