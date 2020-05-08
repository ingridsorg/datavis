const dataProduits = require('./produits.json');
const R = require('ramda')

const tabTypes = R.uniq(dataProduits.map(d => d.type));
console.log(tabTypes)
// compter les occurences en filtrant par type et en retournant le nombre d'éléments avec `.length`
const occurencesParType = type => dataProduits.filter(d => d.type === type).length
const resultat = tabTypes.map(type => ({
  type,
  nb: occurencesParType(type)
}))
console.log(
  JSON.stringify(
    resultat,
    null,
    2
  )
)