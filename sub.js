class Pokemon {
    constructor(name, hp, def, atk, spDef, spAtk, speed, idNum) {
      this.name = name
      this.hp = hp;
      this.def = def;
      this.atk = atk
      this.spDef = spDef;
      this.spAtk = spAtk;
      this.speed = speed;
      this.idNum = idNum;
      this.abilities = [];
    }
}

class Trainer {
    constructor(name) {
      this.name = name;
      this.pokemon = [];
    }
    all() {
      return this.pokemon;
    }
    getPokemon(pokemon) {
      for (var i = 0; i < this.pokemon.length; i++) {
        if (this.pokemon[i].name == pokemon) {
          return this.pokemon[i];
        }
      }
        return console.log('You do not have this pokemon');
    }

}

function setPokemon(id) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
        let pokemon = new Pokemon(
        data['species']['name'],
        data['stats'][4]['base_stat'],
        data['stats'][3]['base_stat'],
        data['stats'][5]['base_stat'],
        data['stats'][1]['base_stat'],
        data['stats'][2]['base_stat'],
        data['stats'][0]['base_stat'],
        data['id'],
      );
      pokemon.abilities.push(data['abilities'][0]['ability']['name']);
      pokemon.abilities.push(data['abilities'][1]['ability']['name']);
      stats(pokemon);
    }
  }
  xhttp.open('GET', `http://fizal.me/pokeapi/api/v2/id/${id}.json`)
  xhttp.send();
}

function addPokemon(id) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
        let pokemon = new Pokemon(
        data['species']['name'],
        data['stats'][4]['base_stat'],
        data['stats'][3]['base_stat'],
        data['stats'][5]['base_stat'],
        data['stats'][1]['base_stat'],
        data['stats'][2]['base_stat'],
        data['stats'][0]['base_stat'],
        data['id'],
      );
      pokemon.abilities.push(data['abilities'][0]['ability']['name']);
      pokemon.abilities.push(data['abilities'][1]['ability']['name']);
      me.pokemon.push(pokemon);
    }
  }
  xhttp.open('GET', `http://fizal.me/pokeapi/api/v2/id/${id}.json`)
  xhttp.send();
}


function stats(pokemon) {
  overlay.classList.remove('hidden');
  var hp = document.getElementById('hp2');
  var def = document.getElementById('def2');
  var atk = document.getElementById('atk2');
  var spAtk = document.getElementById('spatk2');
  var spDef = document.getElementById('spdef2');
  var speed = document.getElementById('speed2');
  var name = document.getElementById('stats');
  var pic = document.querySelector('#sprite > img');
      hp.innerHTML = `HP: ${pokemon.hp}`;
      def.innerHTML = `DEF: ${pokemon.def}`;
      atk.innerHTML = `ATK: ${pokemon.atk}`;
      spAtk.innerHTML = `Sp.ATK: ${pokemon.spAtk}`;
      spDef.innerHTML = `Sp.DEF: ${pokemon.spDef}`;
      speed.innerHTML = `SPEED: ${pokemon.speed}`;
      name.innerHTML = `${pokemon.name}`.toUpperCase();

      if(pokemon.idNum < 10){
        let y = `00${pokemon.idNum}`;
        pic.setAttribute('src',`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${y}.png`);
      }else if (pokemon.idNum >= 10 && pokemon.idNum < 100) {
        let y = `0${pokemon.idNum}`;
        pic.setAttribute('src',`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${y}.png`);
      } else {
        pic.setAttribute('src',`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.idNum}.png`);
      }
  window.scrollTo({top:500, behavior: 'smooth'});
}


var me = new Trainer('Trash Ketchum');
