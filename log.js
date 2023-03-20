setTimeout(() => {

// Buscador 
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



// const SmartWatchNOGA= document.querySelector('.SmartWatchNOGA')
// SmartWatchNOGA.addEventListener('click', e=>{
//   window.open('./ventanasEmergentes/RelojSmartWatchNOGA.html')
// })
  
}, 1000);