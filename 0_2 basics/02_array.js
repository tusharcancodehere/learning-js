marvel_heroes = ["Iron Man", "Captain America", "Thor"];

const dc_heroes = ["Batman", "Superman", "Wonder Woman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

marvel_heroes = marvel_heroes.concat(dc_heroes);
// console.log(marvel_heroes);


const all_heroes = [...marvel_heroes, ...dc_heroes];
// console.log(all_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.from("India"));
