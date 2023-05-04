for (let i = 1; i <= 20; i++) {
  console.log(i);
}

for (let i = 0; i <= 200; i++) 
  if(i%2 === 0 )  {
    console.log(i);
  }
 
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee[2] += 1;

wolfy[3] = "Gotham City";

dart.push("Hawkins");

wolfy.shift();
wolfy.unshift("Gameboy");

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (let ninja of ninjaTurtles) {
  console.log(ninja.toUpperCase() + "!");
}
////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies.indexOf('Titanic'));
///////////
favMovies.sort();
////////
favMovies.pop();
////////
favMovies.push("Guardians of the Galaxy");
/////////
favMovies.reverse();
///////////
favMovies.shift();
////////
favMovies.unshift("The Lion King");
//////
const djangoIndex = favMovies.indexOf("Django Unchained");
favMovies.splice(djangoIndex, 1, "Avatar");
//////
const middleIndex = Math.floor(favMovies.length / 2);
const lastHalf = favMovies.slice(middleIndex);
/////
console.log(lastHalf);
//////
console.log(favMovies);
//////////
console.log(favMovies.indexOf("Fast and Furious"));

//////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

///
 whereIsWaldo.splice(1, 1); 
 /////
 whereIsWaldo[2][2] = "No One";
 ///// 
 console.log(whereIsWaldo[3][1][1]);         