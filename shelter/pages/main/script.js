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


//pets
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

//html blocks
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

{/* <div class="modal">
      <button class="modal-close-button button__arrow"><img src="../../assets/icons/chrest.svg"></button>
      <div class="modal__window">
        <img class="modal__img" src="../../assets/images/pets-katrine.png">
        <div class="modal__content">
          <span class="modal__title">Jennifer</span>
          <span class="modal__subtitle">Dog - Labrador</span>
          <div class="modal__paragraph">
            <span class="modal__text">Jennifer is a sweet 2 months old Labrador that is patiently
              waiting to find a new forever home. This girl really enjoys being able to go outside
              to run and play, but won't hesitate to play up a storm in the house if she has all
              of her favorite toys.</span>
          </div>
          <div class="modal__list">
            <div class="list-item"><img src="../../assets/icons/dot.svg"><span class="modal__text"><b>Age:</b> 2 months</span></div>
            <div class="list-item"><img src="../../assets/icons/dot.svg"><span class="modal__text"><b>Inoculations:</b> none</span></div>
            <div class="list-item"><img src="../../assets/icons/dot.svg"><span class="modal__text"><b>Diseases:</b> none</span></div>
            <div class="list-item"><img src="../../assets/icons/dot.svg"><span class="modal__text"><b>Parasites:</b> none</span></div>
          </div>
        </div>
      </div>
    </div> */}

//carousel
let leftNumbers= []
let leftPets= []

let centerNumbers= []
let centerPets= []

let rightNumbers= []
let rightPets= []

//elements
const containerLeft= document.querySelector('#container-left')
const containerCenter= document.querySelector('#container-center')
const containerRight= document.querySelector('#container-right')
const cardsContainer= document.getElementById('cards__container')

//arrows
const leftArrow= document.getElementById("slider-left-arrow")
const rightArrow= document.getElementById("slider-right-arrow")

//operations
const moveLeft = () =>{
  cardsContainer.classList.add('transition-left')
  leftArrow.removeEventListener('click', moveLeft)
  rightArrow.removeEventListener('click', moveRight)
}
const moveRight= () =>{
  cardsContainer.classList.add('transition-right')
  leftArrow.removeEventListener('click', moveLeft)
  rightArrow.removeEventListener('click', moveRight)
}

leftArrow.addEventListener('click', moveLeft)
rightArrow.addEventListener('click', moveRight)

cardsContainer.addEventListener('animationend', (animationEvent)=>{
  console.log(animationEvent)
 if(animationEvent.animationName==='move-left'){
  cardsContainer.classList.remove('transition-left')
  const leftCards= containerLeft.innerHTML
 
  containerCenter.innerHTML=leftCards
  console.log('move-left:')
  console.log('before centernumbers: '+centerNumbers)
  console.log('before leftnumbers: '+leftNumbers)
  centerNumbers= leftNumbers

  fillLeft()
  leftPets.forEach((el)=>{
    containerLeft.append(el)
  })
  fillRight()
  rightPets.forEach((el)=>{
    containerRight.append(el)
  })
 }
 if(animationEvent.animationName==='move-right'){
  cardsContainer.classList.remove('transition-right')
  const rightCards= containerRight.innerHTML
 
  containerCenter.innerHTML=rightCards
  console.log('move-right:')
  console.log('before centernumbers: '+centerNumbers)
  console.log('before rightnumbers: '+rightNumbers)
  centerNumbers=rightNumbers
  //console.log('after centernumbers: '+centerNumbers)
  //console.log('agter rightNumbers: '+rightNumbers)

  fillLeft()
  leftPets.forEach((el)=>{
    containerLeft.append(el)
  })
  fillRight()
  rightPets.forEach((el)=>{
    containerRight.append(el)
  })
 }
 leftArrow.addEventListener('click', moveLeft)
 rightArrow.addEventListener('click', moveRight)
})

//container
let copyPets= pets
let shaffledPets= copyPets.sort(()=> Math.random()-0.5)

function fillLeft(){
  leftNumbers=[]
  leftPets=[]
  containerLeft.innerHTML=''
  console.log('заполняем, в центре сейчас: '+centerNumbers)
  for(let i=0; i<3; i++){
    let petNumber= Math.floor(Math.random() * 8)
    while(centerNumbers.includes(petNumber) || leftNumbers.includes(petNumber)){
      if(centerNumbers.includes(petNumber)){console.log(petNumber+' уже было в центре')}
      petNumber= Math.floor(Math.random() * 8)
    }
    leftNumbers.push(petNumber)
    leftPets.push(createCard(pets[petNumber].img, pets[petNumber].name))
  }
  console.log('заполнили, слева получили: '+leftNumbers)
}
function fillCenter(){
  centerNumbers=[]
  centerPets=[]
  containerCenter.innerHTML=''
  for(let i=0; i<3; i++){
    let petNumber= Math.floor(Math.random() * 8)
    while(centerNumbers.includes(petNumber)){
      petNumber= Math.floor(Math.random() * 8)
    }
    centerNumbers.push(petNumber)
    centerPets.push(createCard(pets[petNumber].img, pets[petNumber].name))
  }
}
function fillRight(){
  rightNumbers=[]
  rightPets=[]
  containerRight.innerHTML=''
  console.log('заполняем, в центре сейчас: '+centerNumbers)
  for(let i=0; i<3; i++){
    let petNumber= Math.floor(Math.random() * 8)
    while(centerNumbers.includes(petNumber) || (rightNumbers.includes(petNumber))){
      if(centerNumbers.includes(petNumber)){console.log(petNumber+' уже было в центре')}
      petNumber= Math.floor(Math.random() * 8)
    }
    rightNumbers.push(petNumber)
    rightPets.push(createCard(pets[petNumber].img, pets[petNumber].name))
  }
  console.log('заполнили, справа получили: '+rightNumbers)
}

fillCenter()
fillLeft()
fillRight()

leftPets.forEach((el)=>{
  containerLeft.append(el)
})
centerPets.forEach((el)=>{
  containerCenter.append(el)
})
rightPets.forEach((el)=>{
  containerRight.append(el)
})


console.log(leftPets)