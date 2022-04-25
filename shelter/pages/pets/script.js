
//
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

    return petCard
}

console.log(window.screen.width)
const screenWidth= window.screen.width


if(screenWidth>=1280){
  const cardsOnPage=8
  const pages=6
}
if(screenWidth<1280 && screenWidth>=768){
  const cardsOnPage=6
  const pages=8
}
if(screenWidth<768){
  const cardsonPage=3
  const pages= 16
}

for(let i=0; i<pages; i++){
  let elements=[]
  for( let j=0; j<cardsOnPage; j++){
    if()
  }
}