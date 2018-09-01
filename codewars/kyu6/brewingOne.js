// https://www.codewars.com/kata/brewing-i/train/javascript
//
var recipes = [
  {
    ingredients: [["troll nail", 2], ["dewdrop", 4]],
    result: "foot-smelling potion"
  },
  {
    ingredients: [["foot-smelling potion", 3], ["siren teardrop", 1]],
    result: "invisibility potion"
  },
  {
    ingredients: [
      ["reindeer hair", 2],
      ["pine essence", 1],
      ["moonshine essence", 2]
    ],
    result: "winterheat potion"
  },
  {
    ingredients: [["pine resin", 3], ["pure alcohol", 2]],
    result: "pine essence"
  }
];

getIngredients = (recipes, final) => {
  compoundRecipes = recipes.map(i => i.result);
  ing = {};
  if (compoundRecipes.indexOf(final) === -1) return null;

  explore = Array.of(final);
  while (explore.length) {
    constituents = recipes
      .find(i => i.result === explore[0])
      .ingredients.reduce((acc, e, i) => {
        if (compoundRecipes.indexOf(e[0]) !== -1)
          return acc.concat(Array(e[1]).fill(e[0]));
        ing[e[0]] !== undefined ? (ing[e[0]] += e[1]) : (ing[e[0]] = e[1]);
        return acc;
      }, []);
    explore.splice(0, 1);
    explore = constituents.concat(explore);
  }
  return ing;
};

// console.log(getIngredients(recipes, "invisibility potion"));
