//required
//la libreria existe en node
//const fs = require('fs');
//libreria que existen en un paquete que se instala
//const fs = require('express');
//archivos que nosotros mismos escribimos
//const fs = require('./fs');

/*let data = '';

let base = 5;
for (let i = 1; i < 10; i++) {
    data += `${base} * ${i} = ${base*i}\n`
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}.txt ha sido creado`);
});*/

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
//const multiplicar = require('./multiplicar/multiplicar');
//multiplicar.crearArchivo
//ahora haremos lo mismo pero con destructuracion
const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado:`, colors.red(archivo)))
            .catch(e => console.log(e));
        break;
    case 'listar':
        console.log('Listar');
        break;
    default:
        console.log('Comando no reconocido')

}

//let base = '5';
//console.log(process.argv)
//let argv = process.argv;
//console.log(process.argv);
//let parametro = argv[2];

//el split transforma un string en un arreglo, separados por el signo igual
//hacemos esto para asilar al 5
//console.log(parametro)
//let base = parametro.split('=')[1]
//console.log(base);
//let argv2 = process.argv;
//console.log('base', argv.base);
//console.log('limite', argv.limite);