import { leerDiscos } from "./../models/BBDD.models.ts";
import { enrutador } from "./../controllers/router.ts";


//================ANTERIORMENTE LLAMADO SCRIPTS GENERALES!!!!!!!!!!!!=====================

console.table(leerDiscos());


export function mainIndex() {
    enrutador();
}

document.addEventListener("DOMContentLoaded",mainIndex);

