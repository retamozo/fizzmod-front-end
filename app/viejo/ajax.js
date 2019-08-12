/**
 * Async vs Sync
 */


//EVENT LOOP 
/* 
setTimeout(function(){
    console.log("Primero")
},5000)

setTimeout(function(){
    console.log("Segundo")
},1000)

setTimeout(function(){
    console.log("Tercero")
},3000)

console.log("Cuarto") 
*/

//AJAX = Async JS And XML
//XHR/XHRU = XMLHttpRequest/Upload 
//ActiveX Object

//readyState = 0
var xhr = new XMLHttpRequest

xhr.addEventListener("readystatechange",()=>{
    console.log(`Nuevo Estado ${xhr.readyState}`)

})

xhr.addEventListener("load",()=>{
    if (xhr.status == 200) {
        document.body.innerText = xhr.response
    }
})

//readyState = 1
//XHR.open(metodo String,url String)
xhr.open("get","info.txt");

//XHR.send([{String|FormData|Blob}])
xhr.send()


/**
 * GET - POST - PUT - PATCH - DELETE - HEADERS - OPTIONS - 
 * 
 * 
 * La propiedad readyState de un objeto XHR determina en que estado está el pedido 
 * 
 * 0 - Objeto inicializado
 * 1 - Objeto configurado
 * 2 - Headers enviados y recibidos
 * 3 - Descargando información
 * 4 - Pedido finalizado 
 * 
 * 
 * HTTP : 
 * 
 * REQUEST
 * METODO  URL  VERSION
 * GET      /index.html     HTTP/1.1
 * Host : google.com 
 * Referer : La url que hace el pedido
 * User-Agent : El navegador
 * Content-Type : MIME-type
 * Accept : Que formatos aceptas como respuesta
 * Cookies : cookies
 * 
 * 
 * RESPONSE
 * VERSION      STATUS  MENSAJE
 * HTTP/1.1     200     OK
 * Content-Type : El formato del archivo que se me envio
 * Content-Length : El peso del archivo
 * Server : El tipo de servidor, sus OS y el lenguaje
 * Cookies : cookies 
 * 
 * 
 * https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP
 * 
 * 1xx
 *  101 Switching Protocols 
 * 
 * 2xx
 *  200 OK
 *  
 * 3xx REDIRECCIONES
 *  302 Found
 *  304 Not modified
 * 
 * 4xx ERRORES DEL CLIENTE
 *  400 Bad Request 
 *  401 Not Authorized
 *  403 Forbidden
 *  404 Not Found
 *  405 Method Not Allowed 
 *  418 I´m a Teapot
 * 
 * 5xx ERRORES DEL SERVIDOR
 *  500 Internal Server Error 
 * 
 * 
 */






