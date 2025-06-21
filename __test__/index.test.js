import { eliminar, ObtenerValoresNuevos, editarDisco, listaDiscos } from "./../src/models/BBDD.models";

test('Deberá regresar un array con un elemento menos al original: 59->58',()=>{
    let listaPrueba=eliminar(listaDiscos,1);

    expect (listaPrueba.length).toBe(58)
    });


    
    /*
describe('Testear la función resta',()=>{

    test('restar 3 a 5 y el resultado debe devolver 2',()=>{
        expect (restar(5,3)).toBe(2)
    });

    test('restar 20 a 80 y el resultado debe devolver 60',()=>{
        expect (restar(80,20)).toBe(60)
    })

})

describe('Testear la función suma', ()=>{

    test('sumar 2 mas 2 y el resultado debe devolver 4',()=>{
        expect(sumar(2,2)).toBe(4)
    })

    test('sumar 3 mas 5 y el resultado debe devolver 8',()=>{
        expect(sumar(3,5)).toBe(8)
    })

})


*/