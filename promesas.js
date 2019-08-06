//Futures/Defered*/Promise
//Callback of Hell / Pyramid of Doom
//Promesa : Es un placeholder de un valor que se va a completar a futuro. Esto evita tener el valor que necesitamos en un callback, sino que directamente ya tenemos una variable con ese valor 
/* 
hacerAjax((res)=>{
    hacerAjax((res)=>{
        hacerAjax(()=>{
    
        })
    })    
})
*/
//*Objeto Diferido : No es una implementacion WHATWG-Compliant 

let promesa = new Promise((resolver,rechazar)=>{
   //Aca podemos hacer lo que sea. Eventualmente esta funcion resolver va a resolver en el valor que estamos prometiendo 
   //Imagino que fui a conseguir a una API el id de un usuario
   //try {
       resolver(1)
   //}catch(e){
       rechazar(true)
       //throw true
   //}
})
/**
 * status : pending - resolved - rejected - settled 
 * value : Any - Le podemos asignar cualquier valor a una promesa 
 * 
 * Una vez que una promesa cambia de estado y se le asigna el valor, lo cual pasa al mismo tiempo, no puedo volver a cambiarle ninguno de los dos.  
 * 
 * Promise.then(callback Function) => Se va a ejecutar cuando la promesa cambia su estado a resolved
 * 
 * Promise.catch(callback Function) => Se va a ejecutar cuando la promesa cambia su estado a resolved
 * 
 */

/* promesa.then(()=>{}/*,()=>{} ) */
/* promesa .catch()*/

promesa
.then((respuesta)=>{
    //return respuesta + 1
    //return Promise.resolve(resupuesta + 1)
    return new Promise((resolver,rechazar)=>{
        resolver(respuesta + 1)
    })
})
.then((respuesta)=>{
    //console.log(respuesta)
})
.catch((error)=>{
    console.error(error)
})


/* 
function get(url){
    return new Promise((res,rej)=>{
        let xhr = new XMLHttpRequest
        xhr.open("GET",url)
        xhr.addEventListener("load",()=>{
            if(xhr.status == 200){
                res(xhr.response)
            }else{
                rej(xhr.status)
            }
        })
        xhr.send()
    })
}

get("")
.then(respuesta=>{
    return get()
})
.then(response=>{
    return get()
})
 */

//Fetch = XHR + Promise
//Fetch = Es un pedido por HTTP que implementa promesas en su interior + Request , Response , Header , Body , Stream . Por defecto solo toma una URL y hace un pedido de HTTP por GET 
//REST = Representational State Transfer 
/**
 * fetch()          =>         Promise
 * Promise          =>         Promise.then().catch()
 * fetch()          =>         Response
 * Response         =>         Response.metodo()
 * .fn(()=>{Promise}) =>       .fn(()=>{ return Promise})
 * .fn(()=>{Promise,Promise}) =>       .fn(()=>{ return Promise.all([Promise,Promise]) })
 * 
 * metodos : text / arrayBuffer / blob / json 
 *  
 */
let url = "https://jsonplaceholder.typicode.com"

fetch(`${url}/users`)
.then(respuesta=>respuesta.json())
.then(respuesta=>fetch(`${url}/posts?userId=${respuesta[8].id}`))
.then(respuesta=>respuesta.json())
.then(respuesta=>Promise.all(respuesta.map(post=>fetch(`${url}/comments?postId=${post.id}`))))
.then((respuesta)=>Promise.all(respuesta.map((response)=>response.json())))
.then(console.log)
.catch(console.error)


//1er Promesa 
/* fetch(`${url}/users`)
.then((respuesta)=>{
    //2da Promesa
    return respuesta.json()
})
.then((respuesta)=>{
    let id = respuesta[8].id
    return fetch(`${url}/posts?userId=${id}`)
})
.then((respuesta)=>{
    return respuesta.json()
})
.then((respuesta)=>{
    
    let arr = []

    respuesta.forEach((post)=>{
        arr.push(fetch(`${url}/comments?postId=${post.id}`))
    })

    return Promise.all(arr)
    
})
.then((respuesta)=>{
    
    let arr = []

    respuesta.forEach((response)=>{
        arr.push(response.json())
    })

    return Promise.all(arr)

})
.then((respuesta)=>{
    console.log(respuesta)
})
.catch((error)=>{
    console.error(error)
}) */


let xhr = new XMLHttpRequest
xhr.responseType = "json" //"arraybuffer" - "blob" - "text" 
xhr.open("GET",`${url}/users`)
xhr.addEventListener("load",()=>{
    if(xhr.status == 200){
        //console.log(typeof xhr.response)
       //console.log(typeof JSON.parse(xhr.response))
       //console.log(JSON.parse(xhr.response))
    }
})
xhr.send()

/**
 * typeof ""                "string"
 * typeof 1                 "number"
 * typeof true              "boolean"
 * typeof undefined         "undefined"
 * typeof alert             "function"
 * typeof null              "object"
 * typeof []                "object"
 * typeof {}                "object"
 * 
 * Array.isArray(X) => Boolean
 * 
 * SENTENCIA
 * if(){} else {}
 * [1,2,3].forEach((e,i,arr)=>{
 *  return 
 * }) => undefined
 * 
 * EXPRESION
 * let res = condicion ? truthy : falsy 
 * [1,2,3].map((e,i,a)=>{
 *  return 
 * }) => Array - Siempre devuelve un array de la misma longitud del cual salis
 * 
 * 
 * Array.filter()
 * Array.reduce()
 * Array.sort()
 * Array.some()
 * Array.any()
 * Array.find()
 */