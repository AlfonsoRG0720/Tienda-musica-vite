import { eliminar, listaDiscos } from "../src/models/BBDD.models";

describe('Testear la eliminación',()=>{

    test('Deberá regresar un array con un elemento menos al original: 59->58',()=>{
        let listaPrueba=eliminar(listaDiscos,1);
        
        expect (listaPrueba.length).toBe(58)
    });

    test('La BBDD de usuarios no puede estar vacía > 0',()=>{
        let BBDDPrueba=leerUsuarios();
        
        expect (BBDDPrueba).not.toBeNull();
        expect (BBDDPrueba).not.toBe(undefined);
    });
})
