const data = require('./tarot-images.json')

const cards = data.cards

const result = cards
.map(c => c.arcana)
.reduce((result, d) => {
    const exist = result.find(n => n.nom === d)
    if (exist) {
        return [
            ...result.filter(x => x.nom !== d),
            { ...exist, nb: exist.nb + 1 }
        ]
    }
    return [
        ...result,
        { nom: d, nb: 1 }
    ]
}, [])

console.log(
    JSON.stringify(result, null, 2) 
    ); 

    // { nom: x, nb: 8 }
