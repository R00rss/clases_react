let word = "hola mundo"

console.log(word) //hola mundo

word += "!"

console.log(word) //hola mundo!

//Promesa 
//es un objeto que representa la terminación correcta
//o el fracaso de una operación asíncrona

// setTimeout(callback, time) time: ms

const myPromiseResolve = new Promise(
    (resolve) => {
        // wait 3 seconds
        setTimeout(() => {
            resolve("La operación fue exitosa") // 200 OK
        }, 3000)
    }
)
const myPromiseReject = new Promise(
    (_, reject) => {
        // wait 3 seconds
        setTimeout(() => {
            reject("La operación NO fue exitosa") // 200 OK
        }, 3000)
    }
)

// console.log(myPromiseResolve)

// // operador then
// console.log("llego aqui 1")


// // myPromiseResolve.then(callback)
// myPromiseResolve.then((data) => console.log(data))

// // uso de async y await

// console.log("llego aqui 2")

// const data = await myPromiseResolve

// console.log(data)


// MANEJO DE ERRORES EN PROMESAS

// operador then - catch

let loading = false;
console.log(loading)
loading = true;
console.log(loading)
myPromiseReject
    .then((data) => {
        // se resuelve
        // loading = false;
        console.log(data)
    })
    .catch((error) => {
        //cuando se rechaza
        // loading = false;
        console.error(error)
    })
    .finally(() => {
        // se ejecuta siempre (cuando se resuelve o se rechaza)
        loading = false
        console.log(loading)
    })
console.log(loading)


try {
    const data = await myPromiseReject
    console.log(data)
} catch (error) {
    console.error(error)
} finally {
    // loading = false
}
// console.log(loading)
