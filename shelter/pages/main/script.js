// mobile-menu
const burgerIcon= document.querySelector('.burger-icon')
if(burgerIcon){
  const burgerMenu= document.querySelector('.burger-menu')
  const mainLogo= document.getElementById('main-logo')
  const burgerLogo= document.getElementById('burger-logo')
  const shading= document.getElementById('shading')
  shading.addEventListener('click', function(e){
    let event = new Event('click')
    burgerIcon.dispatchEvent(event)
  })

  burgerIcon.addEventListener('click', function(e){
    document.body.classList.toggle('overflow-hidden')
    burgerMenu.classList.toggle('active')
    shading.classList.toggle('shading')
    isOpen= burgerMenu.classList.contains('slide-in')
    if(!isOpen){
      burgerMenu.classList.remove('slide-out')
      burgerIcon.classList.remove('unactive')
      mainLogo.classList.remove('show')
      burgerLogo.classList.remove('hidden')
      burgerMenu.classList.add('slide-in')
      burgerIcon.classList.add('active')
      mainLogo.classList.add('hidden')
      burgerLogo.classList.add('show')
    }
    else{
      burgerMenu.classList.remove('slide-in')
      burgerIcon.classList.remove('active')
      mainLogo.classList.remove('hidden')
      burgerLogo.classList.remove('show')
      burgerMenu.classList.add('slide-out')
      burgerIcon.classList.add('unactive')
      mainLogo.classList.add('show')
      burgerLogo.classList.add('hidden')
    }
  }) 
}

//carousel
let card= document.createElement('div')
card.className= 'card'
card.innerHTML = `<img
class="card__img"
src="../../assets/images/pets-katrine.png"
alt="katrine"
/>
<div class="card__name">Katrine</div>
<button class="card__button button">
<div class="button__text">Learn more</div>
</button>`

document.body.append(card)