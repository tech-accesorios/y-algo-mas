// $contenedor= document.getElementsByClassName('contenedor'),
const $buscador= document.getElementById('buscador'),
$cardTitle= document.getElementById('card-title')

let titulo= document.write($cardTitle.textContent)

console.log(titulo)





$buscador.addEventListener('keypress',()=>{
  valorBuscador= $buscador.value

  let palabras= valorBuscador.split(' ')
  
  console.log(palabras)
})