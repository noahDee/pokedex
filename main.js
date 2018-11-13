var hp = document.getElementById('hp2');
var def = document.getElementById('def2');
var atk = document.getElementById('atk2');
var spAtk = document.getElementById('spatk2');
var spDef = document.getElementById('spdef2');
var speed = document.getElementById('speed2');
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

var body = document.querySelector('body');

function change() {
  let x = this.id;
  if(x < 10){
    x = `00${x}`;
  }else if (x >= 10 && x < 100) {
    x = `0${x}`;
  }
  body.style.backgroundImage = `url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/${x}.png')`;
}

function revert() {
  body.style.backgroundImage = "url('https://pa1.narvii.com/6747/649d6b93875ee07b21ef208fbe72c87d3dbee838_hq.gif')";
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
  if (this.value == 'View Stats'){
    setPokemon(id);
  } else if (this.value == 'Add to team') {
    reveal(id);
    addPokemon(id);
  } else if (this.classList == 'pokeball') {
    setPokemon(this.id);
  }
}
