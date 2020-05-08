const dataNbPas = require('../../data/nbPas-Ingrid.json');
const dataProduits = require('../../data/produits.json');
const R = require('ramda')


// NOMBRE TOTAL DE PAS 
const tabPas = dataNbPas.map(nbpas => nbpas.pas); 
console.log(tabPas);

var sum = (resultat, chiffre) => resultat + chiffre
const nbPas = tabPas.reduce(sum,0);
console.log(nbPas);

//NOMBRE DE SORTIES

//const nbSorties = tabPas.filter(d => d>= '1000');
const nbSorties = dataNbPas
.filter(p => p.date === "14.03.20"&&p.date === "16.03.20"&&p.date === "19.03.20"&&p.date === "24.03.20"&&p.date === "04.04.20")
.map(d => ({ date: d.date}))
console.log(dispo);

// NOMBRE TOTAL DE PRODUITS ACHETES

const tabQtte= dataProduits.map(nbProd => nbProd.Qtte); 
console.log(tabQtte);
var sum = (resultat, chiffre) => resultat + chiffre
const nbProduits = tabQtte.reduce(sum,0);
console.log(nbProduits);

// NOMBRE DE PAQUET DE PATES ACHETES 

const tabProduit= dataProduits.map(prod=> prod.Produit); 
console.log(tabProduit);
const produits = tabProduit.filter(p => p === "Spaghetti" || p === "Pates");
console.log(produits);

// PRODUITS PAS TROUVES

const dispo = dataProduits
.filter(p => p.Disponible === "non")
.map(d => ({ produit: d.Produit}))
console.log(dispo);

// TYPE DE PRODUIT

// Types uniques

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




















