//Cargar un arreglo de objetos con datos de estudiantes y mostrar el promedio general.
const estudiantes = [
    { nombre: "Juan", nota: 8.5 },
    { nombre: "María", nota: 9.0 },
    { nombre: "Pedro", nota: 7.5 },
    { nombre: "Ana", nota: 9.5 }
];


let suma = 0;

for (let i = 0; i < estudiantes.length; i++) {
    suma += estudiantes[i].nota;
}

let promedio = suma / estudiantes.length;

console.log("Promedio:", promedio);


document.write(`El promedio general es: ${promedio}`);