// const $articulo= document.querySelectorAll('.card-title')
// document.addEventListener('keyup', e =>{
//   $articulo.forEach(prod=>{
//     if(prod.innerHTML.toLowerCase().includes(e.target.value)){
//         prod.closest('.card').classList.remove('filtro')
//     }
//     else{
//         prod.closest('.card').classList.add('filtro')
//     }
//   })
// })


// const $buscador= document.querySelector('#buscador'),
// $artiuclo= document.querySelectorAll('.card-title'),
// $card= document.querySelectorAll('.card')

// document.addEventListener('click', e=>{
//   console.log('click')
//   if($buscador.value.length= $buscador.value.length[0]){
//     $card.forEach(prod=>{
//       console.log(prod)
//       prod.classList.remove('filtro')
//     })
//   }
// })


setTimeout(() => {

// document.addEventListener('keyup', e =>{
//   document.querySelectorAll('.card-title').forEach(prod=>{
//     console.log(e.target.value.toLowerCase())
//     prod.innerHTML.toLowerCase().includes(e.target.value.toLowerCase())
//     ?prod.closest('.card').classList.remove('filtro')
//     :prod.closest('.card').classList.add('filtro')
//   })
// })

const $buscador= document.querySelector('#buscador')
$buscador.addEventListener('input', e =>{
  document.querySelectorAll('.card-title').forEach(prod=>{
    prod.innerHTML.toLowerCase().includes(e.target.value.toLowerCase())
    ?prod.closest('.card').classList.remove('filtro')
    :prod.closest('.card').classList.add('filtro')
  })
})




// Autoscroll del navbar al bajar o subir
let tresBarras= document.querySelector('.nav-btn'),
navcont= document.querySelector('.nav-cont')

let ultimoScroll= scrollY
window.addEventListener('scroll',()=>{
  let scrollActual= scrollY
  if(ultimoScroll> scrollActual){
    tresBarras.style.top='0'
    navcont.style.top='0'
  }
  else{
    tresBarras.style.top='-70px'
    if(window.innerWidth>768){
      navcont.style.top='-100px'  
    }
  }
  ultimoScroll= scrollActual
})


  
}, 1000);