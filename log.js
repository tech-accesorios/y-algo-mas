setTimeout(() => {

const $buscador= document.querySelector('#buscador')
$buscador.addEventListener('input', e =>{
  document.querySelectorAll('.card-title').forEach(prod=>{
    prod.innerHTML.toLowerCase().includes(e.target.value.toLowerCase())
    ?prod.closest('.card').classList.remove('filtro')
    :prod.closest('.card').classList.add('filtro')
  })
})




// Autoscroll del navbar al bajar o subir
let contBtn= document.querySelector('.contBtn'),
navcont= document.querySelector('.nav-cont')

let ultimoScroll= scrollY
window.addEventListener('scroll',()=>{
  let scrollActual= scrollY
  if(ultimoScroll> scrollActual){
    contBtn.style.top='84vh'
    navcont.style.top='0'
  }
  else{
    contBtn.style.top='110vh'
    if(window.innerWidth>768){
      navcont.style.top='-100px'  
    }
  }
  ultimoScroll= scrollActual
})

// NAVBAR
let navBtn= document.querySelector('.nav-btn')
let action= false
navBtn.addEventListener('click', ()=>{
  if(!action){
    navBtn.classList.add('navBtn-firstAction')
    navcont.classList.add('navCont-firstAction')
    navBtn.classList.remove('navBtn-secondAction')
    navcont.classList.remove('navCont-secondAction')
    action= true
  }else{
    navBtn.classList.add('navBtn-secondAction')
    navcont.classList.add('navCont-secondAction')
    navBtn.classList.remove('navBtn-firstAction')
    navcont.classList.remove('navCont-firstAction')
    action= false
  }
})
















// ver mas imagenes
// const $smartWatchNoga= document.getElementById('smartWatchNoga'),
// $ventanaE= document.querySelector('.ventanaE'),
// $ventanaEbtn= document.querySelector('.ventanaE-btn')

// $smartWatchNoga.addEventListener('click', e=>{
//   $ventanaE.style.visibility='visible'
// })

// $ventanaEbtn.addEventListener('click',e=>{
//   $ventanaE.style.visibility='hidden'
// })

// delisar fotos en carrucel
// const $carrucel= document.querySelectorAll()

// $imgTA= document.querySelectorAll('.card-img-top')


// document.addEventListener('click',e=>{
//   // const valorId= e.target.getAttribute('id')
//   // console.log(valorId)

//   const $contenedorImg= document.querySelector('.ventanaE-c')

//   const $div= document.createElement('div')
//   // .setAttribute('class', 'ventanaE-c-img')
//   // $img= document.createElement('img')
//   // $img.setAttribute('class', 'ventanaE-img')
//   // $img.setAttribute('src', '')

//   // $div.appendChild($img)
//   $contenedorImg.appendChild($div)
//   console.log(e.target)
//   })
  
  





















}, 1000);