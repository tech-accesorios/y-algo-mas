const $buscador= document.getElementById('buscador'),
$cardTitle= document.querySelectorAll('.card-title')
// $contenedor= document.querySelector('.contenedor')

let productos=[]
$cardTitle.forEach((prod, indice)=>{
  producto= prod.innerHTML.toUpperCase()
   productos[indice]= producto
})
console.log(productos)

var indices = [];
$buscador.addEventListener('keypress',()=>{
  valorBuscador= $buscador.value.toUpperCase()
  let palabras= valorBuscador.split(' ')

let idx = productos.indexOf(palabras);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(palabras, idx + 1);
}
console.log(indices);
  
})



let tresBarras= document.querySelector('.nav-btn')
let navcont= document.querySelector('.nav-cont')


let ultimoScroll= scrollY
window.addEventListener('scroll',()=>{
  let scrollActual= scrollY
  if(ultimoScroll> scrollActual){
    tresBarras.style.top='0'
    navcont.style.top='0'
  }
  else{
    tresBarras.style.top='-70px'
    navcont.style.top='-100px'
  }
  ultimoScroll= scrollActual
})
