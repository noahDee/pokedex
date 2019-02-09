var hp = document.getElementById('hp2');
var def = document.getElementById('def2');
var atk = document.getElementById('atk2');
var spAtk = document.getElementById('spatk2');
var spDef = document.getElementById('spdef2');
var speed = document.getElementById('speed2');
var abilities = document.getElementById('abilities');
var pic = document.querySelector('#sprite > img');

var pokeball = document.querySelectorAll('.pokeball');
for (var i = 0; i < pokeball.length; i++) {
  pokeball[i].addEventListener('mouseover',change);
  pokeball[i].addEventListener('mouseout',revert);
  console.log('p');
  pokeball[i].addEventListener('click',getInfo);
}

main = document.getElementById('main');
overlay = document.getElementById('overlay');


var addToTeam = document.querySelector("input[value = 'Add to team']");
var getStats = document.querySelector("input[value = 'View Stats']");
addToTeam.addEventListener('click', getInfo);
getStats.addEventListener('click', getInfo);
document.addEventListener('keydown', event => {
  if(event.keyCode == 13) {
    console.log("enter pressed");
    getInfo();
  }
});

var body = document.querySelector('body');

function change() {
  let x = this.id;
  // if(x < 10){
  //   x = `00${x}`;
  // }else if (x >= 10 && x < 100) {
  //   x = `0${x}`;
  // }
  // body.style.backgroundImage = `url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/${x}.png')`;
  this.setAttribute('src',`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${x}.png`)
}

function revert() {

  this.setAttribute('src','http://www.upl.co/uploads/pokeballPNG301527618582.png')

}

function reveal(id) {
  for (var i = 0; i < pokeball.length; i++) {
    if(pokeball[i].classList.contains('hidden')) {
      pokeball[i].classList.remove('hidden');
      pokeball[i].setAttribute('id', `${id}`);
      break;
    }
  }
}

function getInfo() {
  var id = document.querySelector('input[name = "pokemon"]').value;
  if (this.value == 'View Stats' || event.keyCode == 13){
    setPokemon(id);
  } else if (this.value == 'Add to team') {
    reveal(id);
    addPokemon(id);
  } else if (this.classList == 'pokeball') {
    setPokemon(this.id);
  }
}
