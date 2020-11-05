//const { rejects } = require('assert');
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {
    console.log(`====TABLA DE ${base}================`.green);
    //"si base no es un numero"
    if (!Number(base)) {
        reject("No es un numero");
        return
    }
    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base*i}\n`
    }

    console.log(data);

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        //"si base no es un numero"
        if (!Number(base)) {
            reject("No es un numero");
            return
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
            //se esperaba el nombre del archivo
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    //se crea un objeto  que tiene el nombre de propiedad crear archivo que es una fucion de la promesa
    //crearArchivo :crearArchivo

    listarTabla

}