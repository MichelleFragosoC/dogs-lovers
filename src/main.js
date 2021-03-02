import perritos from './data.js'

let elDOM=document.getElementById("app")
let perritohtml

perritos.dogs.forEach{unperrito=>{
    perritohtml+=setHtml(unperrito)
    elDOM.innerHTML=perritohtml
//    console.log(unperrito.breed, "Esto es verdad")
}}

function setHtml(unperro){
    let html=`<img src="${unperro.image}"/>
            <p>${unperro.breed}</p>
            `
    return html
}
