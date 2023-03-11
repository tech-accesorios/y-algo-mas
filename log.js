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