const $buscador= document.getElementById('buscador'),
$cardTitle= document.querySelectorAll('.card-title')
// $contenedor= document.querySelector('.contenedor')





$buscador.addEventListener('keypress',()=>{
  valorBuscador= $buscador.value.toUpperCase()
  let palabras= valorBuscador.split(' ')
  console.log(palabras)
})

$cardTitle.forEach((prod)=>{
  producto= prod.innerHTML.toUpperCase()
  console.log(producto)
})