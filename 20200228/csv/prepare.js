const fs = require('fs');

const fichier = fs.readFileSync('data.csv','utf-8')

const result = fichier.split('\n')
.map(ligne => ligne.split(';'))
.map(d => ({
    canton : d[2],
    parti : d[5],
    elus : Number (d[12]),
}))
.filter(d => d.canton === 'Vaud' && d.elus > 0)
.map(({ parti, elus})=> ({parti,elus})); 

console.log(JSON.stringify(result,null,2));
//.map(d => ({ parti : d.parti, elus : d.elus}))); une autre manière de faire 

/*
indexes 

2 canto
ns 
5 partis 
12 élus 
*/
