// mobile-menu
const burgerIcon= document.querySelector('.burger-icon')

if(burgerIcon){
  const burgerMenu= document.querySelector('.burger-menu')
  const mainLogo= document.getElementById('main-logo')
  const burgerLogo= document.getElementById('burger-logo')
  const shading= document.getElementById('shading')
  const aboutTheShelter= document.getElementById('about-the-shelter')
  const helpTheShelter= document.getElementById('help-the-shelter')
  const menuContacts= document.getElementById('menu-contacts')
  const ourPets= document.getElementById('our-pets')
  shading.addEventListener('click', function(e){
    let event = new Event('click')
    burgerIcon.dispatchEvent(event)
  })

  const toggleMenu= () =>{
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
  }

  ourPets.addEventListener('click', toggleMenu)
  helpTheShelter.addEventListener('click', toggleMenu)
  menuContacts.addEventListener('click', toggleMenu)
  aboutTheShelter.addEventListener('click', toggleMenu)
  burgerIcon.addEventListener('click', toggleMenu) 
}

const pets=[
  {
    "name": "Jennifer",
    "img": "../../assets/images/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/pets-scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]

//modal
const showModal = (name) =>{
  console.log(name)
  document.body.classList.add('overflow-hidden')
  const pet=pets.filter(pet=>{
    if(pet.name===name) return true
  })[0]
  console.log(pet)
  const modal=createModal(pet.img, pet.name, pet.type, pet.breed, pet.description,
    pet.age, pet.inoculations, pet.diseases, pet.parasites)
  document.body.prepend(modal)
  modal.classList.add('open')
  }
  const closeModal= (e)=>{
    console.log(e.target)
    if(!e.target.closest('.modal__window')){
    document.body.classList.remove('overflow-hidden')
    document.querySelector('.modal-container').remove()
    }

  }
  function createModal(img, name, type, breed, description, age, inoculations, diseases, parasites){
    let modal= document.createElement('div')
      modal.className= 'modal-container'
      modal.innerHTML = `<div class='modal'>
        <button class="modal-close-button button__arrow"><img src="../../assets/icons/chrest.svg"></button>
        <div class="modal__window">
          <img class="modal__img" src=${img} alt=${name}>
          <div class="modal__content">
            <span class="modal__title">${name}</span>
            <span class="modal__subtitle">${type} - ${breed}</span>
            <div class="modal__paragraph">
              <span class="modal__text">${description}</span>
            </div>
            <div class="modal__list">
              <div class="list-item"><img src="../../assets/icons/dot.svg"><span class="modal__text"><b>Age:</b> ${age}</span></div>
              <div class="list-item"><img src="../../assets/icons/dot.svg"><span class="modal__text"><b>Inoculations:</b> ${inoculations}</span></div>
              <div class="list-item"><img src="../../assets/icons/dot.svg"><span class="modal__text"><b>Diseases:</b> ${diseases}</span></div>
              <div class="list-item"><img src="../../assets/icons/dot.svg"><span class="modal__text"><b>Parasites:</b> ${parasites}</span></div>
            </div>
          </div>
        </div>
      </div>`
      modal.addEventListener('click', closeModal)
  
      return modal
  }

// html elements
function createCard(img, name){
  let petCard= document.createElement('div')
    petCard.className= 'card'
    petCard.innerHTML = `<img
    class="card__img"
    src=${img}
    alt=${name}
    />
    <div class="card__name">${name}</div>
    <button class="card__button button">
    <div class="button__text">Learn more</div>
    </button>`
    petCard.setAttribute('onclick',`showModal('${name}')`)

    return petCard
}
function createpage(number){
  let page= document.createElement('div')
  page.className= 'cards__page'
  page.id=`${number}-page`

  return page
}



   //pagination---------//
//main variables
console.log(document.documentElement.clientWidth)
const screenWidth= document.documentElement.clientWidth

let numberOfPages=6
let currentPage=1

let allPagesCards= []
let leftPageCards=[]
let centerPageCards=[]
let rightPageCards=[]


//elements
const cardsContainer= document.querySelector('#cards__container')

const doubleLeftArrow= document.querySelector('#double-left-arrow')
const singleLeftArrow= document.querySelector('#single-left-arrow')
const singleRightArrow= document.querySelector('#single-right-arrow')
const doubleRightArrow= document.querySelector('#double-right-arrow')

const leftPage=document.querySelector('#page-left')
const centerPage=document.querySelector('#page-center')
const rightPage=document.querySelector('#page-right')

const pageNumber= document.querySelector('#page-number')

//event handlers
const moveLeft= () =>{
   cardsContainer.classList.add('transition-left')
   //pageNumber.innerHTML=''
   //pageNumber.insertAdjacentHTML('afterbegin',`${currentPage-1}`)
   singleRightArrow.classList.remove('disabled')
   doubleRightArrow.classList.remove('disabled')
   singleRightArrow.classList.add('default')
   doubleRightArrow.classList.add('default')

   singleRightArrow.removeEventListener('click', moveRight)
   doubleRightArrow.removeEventListener('click', moveToEnd)

   if(currentPage-1===1){
     singleLeftArrow.removeEventListener('click', moveLeft)
     doubleLeftArrow.removeEventListener('click', moveToStart)
     singleLeftArrow.classList.add('disabled')
     doubleLeftArrow.classList.add('disabled')
     singleLeftArrow.classList.remove('default')
     doubleLeftArrow.classList.remove('default')
   }
}
const moveRight= () =>{
   cardsContainer.classList.add('transition-right')
   //pageNumber.innerHTML=''
   //pageNumber.insertAdjacentHTML('afterbegin',`${currentPage+1}`)
   singleLeftArrow.classList.remove('disabled')
   doubleLeftArrow.classList.remove('disabled')
   singleLeftArrow.classList.add('default')
   doubleLeftArrow.classList.add('default')

   singleLeftArrow.removeEventListener('click', moveLeft)
   doubleLeftArrow.removeEventListener('click', moveToStart)

   if(currentPage+1===numberOfPages){
     singleRightArrow.removeEventListener('click', moveRight)
     doubleRightArrow.removeEventListener('click', moveToEnd)
     singleRightArrow.classList.add('disabled')
     doubleRightArrow.classList.add('disabled')
     singleRightArrow.classList.remove('default')
     doubleRightArrow.classList.remove('default')
   }
}
const moveToStart= () =>{
  leftPage.innerHTML=''
  fillLeft(1)
  cardsContainer.classList.add('transition-start')
  //pageNumber.innerHTML=''
  //pageNumber.insertAdjacentHTML('afterbegin',`${currentPage-1}`)
  singleRightArrow.classList.remove('disabled')
  doubleRightArrow.classList.remove('disabled')
  singleRightArrow.classList.add('default')
  doubleRightArrow.classList.add('default')

  singleRightArrow.removeEventListener('click', moveRight)
  doubleRightArrow.removeEventListener('click', moveToEnd)

  singleLeftArrow.removeEventListener('click', moveLeft)
  doubleLeftArrow.removeEventListener('click', moveToStart)
  singleLeftArrow.classList.add('disabled')
  doubleLeftArrow.classList.add('disabled')
  singleLeftArrow.classList.remove('default')
  doubleLeftArrow.classList.remove('default')
}
const moveToEnd= () =>{
  leftPage.innerHTML=''
  fillRight(numberOfPages)
  cardsContainer.classList.add('transition-end')
  //pageNumber.innerHTML=''
  //pageNumber.insertAdjacentHTML('afterbegin',`${currentPage-1}`)
  singleLeftArrow.classList.remove('disabled')
  doubleLeftArrow.classList.remove('disabled')
  singleLeftArrow.classList.add('default')
  doubleLeftArrow.classList.add('default')

  singleLeftArrow.removeEventListener('click', moveRight)
  doubleLeftArrow.removeEventListener('click', moveToEnd)

  singleRightArrow.removeEventListener('click', moveRight)
  doubleRightArrow.removeEventListener('click', moveToEnd)
  singleRightArrow.classList.add('disabled')
  doubleRightArrow.classList.add('disabled')
  singleRightArrow.classList.remove('default')
  doubleRightArrow.classList.remove('default') 
}

// fill functions
const fillLeft= (pageNumber) =>{
  leftPage.innerHTML=''
  allPagesCards[pageNumber-1].forEach(el=>{
    leftPage.append(el)
  })
  leftPageCards=allPagesCards[pageNumber-1]
}
const fillCenter= (pageNumber) =>{
  centerPage.innerHTML=''
  allPagesCards[pageNumber-1].forEach(el=>{
    centerPage.append(el)
  })
  centerPageCards=allPagesCards[pageNumber-1]
}
const fillRight= (pageNumber) =>{
  rightPage.innerHTML=''
  allPagesCards[pageNumber-1].forEach(el=>{
    rightPage.append(el)
  })
  rightPageCards=allPagesCards[pageNumber-1]
}

  //listeners-----//
//doubleLeftArrow.addEventListener('click', moveToStart)
doubleRightArrow.addEventListener('click', moveToEnd)
//singleLeftArrow.addEventListener('click', moveLeft)
singleRightArrow.addEventListener('click', moveRight)


//animation end
cardsContainer.addEventListener('animationend', (animationEvent)=>{
if(animationEvent.animationName==='move-left'){
  cardsContainer.classList.remove('transition-left')
  pageNumber.innerHTML=''
  pageNumber.insertAdjacentHTML('afterbegin',`${currentPage-1}`)
  currentPage--
  fillCenter(currentPage)
  fillRight(currentPage+1)
  if(currentPage!==1) {
    fillLeft(currentPage-1)
    singleLeftArrow.addEventListener('click', moveLeft)
    doubleLeftArrow.addEventListener('click', moveToStart)
  }
  singleRightArrow.addEventListener('click', moveRight)
  doubleRightArrow.addEventListener('click', moveToEnd)
}
if(animationEvent.animationName==='move-right'){
  cardsContainer.classList.remove('transition-right')
  pageNumber.innerHTML=''
  pageNumber.insertAdjacentHTML('afterbegin',`${currentPage+1}`)
  currentPage++
  fillLeft(currentPage-1)
  fillCenter(currentPage)
  if(currentPage!==numberOfPages) {
    fillRight(currentPage+1)
    singleRightArrow.addEventListener('click', moveRight)
    doubleRightArrow.addEventListener('click', moveToEnd)
  }
  singleLeftArrow.addEventListener('click', moveLeft)
  doubleLeftArrow.addEventListener('click', moveToStart)
}
if(animationEvent.animationName==='move-start'){
  cardsContainer.classList.remove('transition-start')
  pageNumber.innerHTML=''
  pageNumber.insertAdjacentHTML('afterbegin',`1`)
  currentPage=1
  fillCenter(currentPage)
  fillRight(currentPage+1)
  singleRightArrow.addEventListener('click', moveRight)
  doubleRightArrow.addEventListener('click', moveToEnd)
}
if(animationEvent.animationName==='move-end'){
  cardsContainer.classList.remove('transition-end')
  pageNumber.innerHTML=''
  pageNumber.insertAdjacentHTML('afterbegin',`${numberOfPages}`)
  currentPage=numberOfPages
  fillCenter(currentPage)
  fillLeft(currentPage-1)
  singleLeftArrow.addEventListener('click', moveLeft)
  doubleLeftArrow.addEventListener('click', moveToStart)
}
})

//allPagesCards generation
if(screenWidth>=1280){
  const pagesNumber=6
  let copyPets= pets
  for(let i=0; i<pagesNumber; i++){
    let page=[]
    let shaffledPets= copyPets.sort(()=> Math.random()-0.5)
    //cardsContainer.append(createpage(i+1))
    shaffledPets.forEach(el=>{
      page.push(createCard(el.img, el.name))
    //document.getElementById(`${i+1}-page`).append(createCard(el.img, el.name))
  })
  allPagesCards.push(page)
  }
  console.log(allPagesCards)
 }
if(screenWidth<1280 && screenWidth>=768){
  numberOfPages=8
  for(let i=0; i<numberOfPages; i++){
    let page=[]
    let copyPets= pets
    let shaffledPets= copyPets.sort(()=> Math.random()-0.5)
    for(let j=0; j<6; j++){
      page.push(createCard(shaffledPets[j].img, shaffledPets[j].name))
    }
    allPagesCards.push(page)
  }
  /* let allElements=[]
  let copyPets= pets
  for(let i=0; i<6; i++){
    let shaffledPets= copyPets.sort(()=> Math.random()-0.5)
    shaffledPets.forEach(el=>{
    allElements.push(createCard(el.img, el.name))
    //document.getElementById(`${i+1}-page`).append(createCard(el.img, el.name))
  })
  }
  for(let i=0; i<numberOfPages; i++){
    let page=[]
    for(let j=0; j<6; j++){
      page.push(allElements[i*6+j])
    }
    allPagesCards.push(page)
  }
  console.log(allPagesCards) */
}
if(screenWidth<768){
  numberOfPages=16
  for(let i=0; i<numberOfPages; i++){
    let page=[]
    let copyPets= pets
    let shaffledPets= copyPets.sort(()=> Math.random()-0.5)
    for(let j=0; j<3; j++){
      page.push(createCard(shaffledPets[j].img, shaffledPets[j].name))
    }
    allPagesCards.push(page)
  }
}

//start initialization
fillCenter(1)
fillRight(2)