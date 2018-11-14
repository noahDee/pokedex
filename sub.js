class Pokemon {
    constructor(name, hp, def, atk, spDef, spAtk, speed, idNum) {
      this.name = name;
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
        data['stats'][5]['base_stat'],
        data['stats'][3]['base_stat'],
        data['stats'][4]['base_stat'],
        data['stats'][1]['base_stat'],
        data['stats'][2]['base_stat'],
        data['stats'][0]['base_stat'],
        data['id'],
      );
      for (var i = 0; i < data['abilities'].length; i++) {
        pokemon.abilities.push(data['abilities'][i]['ability']['name']);
      }
      stats(pokemon);
      move(pokemon);
    }
  }
  xhttp.open('GET', `https://fizal.me/pokeapi/api/v2/id/${id}.json`)
  xhttp.send();
}

function addPokemon(id) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
        let pokemon = new Pokemon(
        data['species']['name'],
        data['stats'][5]['base_stat'],
        data['stats'][3]['base_stat'],
        data['stats'][4]['base_stat'],
        data['stats'][1]['base_stat'],
        data['stats'][2]['base_stat'],
        data['stats'][0]['base_stat'],
        data['id'],
      );
      for (var i = 0; i < data['abilities'].length; i++) {
        pokemon.abilities.push(data['abilities'][i]['ability']['name']);
      }
      me.pokemon.push(pokemon);
      window.scrollTo({top:0, behavior: 'smooth'});

    }
  }
  xhttp.open('GET', `https://fizal.me/pokeapi/api/v2/id/${id}.json`)
  xhttp.send();
}


function stats(pokemon) {
  overlay.classList.remove('hidden');
  var name = document.getElementById('stats');

      hp.innerHTML = `HP: ${pokemon.hp}`;
      def.innerHTML = `DEF: ${pokemon.def}`;
      atk.innerHTML = `ATK: ${pokemon.atk}`;
      spAtk.innerHTML = `Sp.ATK: ${pokemon.spAtk}`;
      spDef.innerHTML = `Sp.DEF: ${pokemon.spDef}`;
      speed.innerHTML = `SPEED: ${pokemon.speed}`;
      name.innerHTML = `${pokemon.name}`.toUpperCase();
      let ability = pokemon.abilities.toString().toUpperCase();
      abilities.innerHTML = `[ABILITIES: ${ability}]`;
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

function move(pokemon) {
  var width1 = 35;
  var width2 = 35;
  var width3 = 35;
  var width4 = 35;
  var width5 = 35;
  var width6 = 35;
  var id1 = setInterval(hpframe, 20);
  var id2 = setInterval(defframe, 20);
  var id3 = setInterval(atkframe, 20);
  var id4 = setInterval(spatkframe, 20);
  var id5 = setInterval(spdefframe, 20);
  var id6 = setInterval(speedframe, 20);
  function hpframe() {
    if (width1 >= (pokemon.hp/3)+35) {
      clearInterval(id1);
    } else {
      width1++;
      hp.parentElement.style.width = width1 + '%';
    }
  }
  function defframe() {
    if (width2 >= (pokemon.def/3)+35) {
      clearInterval(id2);
    } else {
      width2++;
      def.parentElement.style.width = width2 + '%';
    }
  }
  function atkframe() {
    if (width3 >= (pokemon.atk/3)+35) {
      clearInterval(id3);
    } else {
      width3++;
      atk.parentElement.style.width = width3 + '%';
    }
  }
  function spatkframe() {
    if (width4 >= (pokemon.spAtk/3)+35) {
      clearInterval(id4);
    } else {
      width4++;
      spAtk.parentElement.style.width = width4 + '%';
    }
  }
  function spdefframe() {
    if (width5 >= (pokemon.spDef/3)+35) {
      clearInterval(id5);
    } else {
      width5++;
      spDef.parentElement.style.width = width5 + '%';
    }
  }
  function speedframe() {
    if (width6 >= (pokemon.speed/3)+35) {
      clearInterval(id6);
    } else {
      width6++;
      speed.parentElement.style.width = width6 + '%';
    }
  }
}




var me = new Trainer('Trash Ketchum');
