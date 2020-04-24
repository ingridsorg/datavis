import * as d3 from 'd3';
const DATA = require('./data.json')
console.log(DATA);

const WIDTH = 1000
const HEIGHT = 500
const MARGIN = 5 // espace entre les batons
const MARGIN_TOP = HEIGHT / 10
const MARGIN_BOTTOM = HEIGHT / 7 // on fait de la place pour les noms
const GRAPH_HEIGHT = HEIGHT - MARGIN_BOTTOM
const MARGIN_LEFT = WIDTH / 10
const GRAPH_WIDTH = WIDTH - MARGIN_LEFT

const svg = d3.select('body').append('svg').attr('width', WIDTH).attr('height', HEIGHT);
d3.select("body").attr("align", "center"); // alignement du graphique

const BAR_WIDTH = GRAPH_WIDTH / DATA.length // largeur des batons

// Echelle hauteur
// Conversion du range des données en range de pixel
const yScale = d3.scaleLinear()
    .domain([0, d3.max(DATA, d => d.pas)])
    .range([GRAPH_HEIGHT - MARGIN_TOP, 0])

const bars = svg.append('g')
    .attr('transform', `translate(${MARGIN_LEFT}, ${MARGIN_TOP})`)

    bars.selectAll('rect')
        .data(DATA)
        .enter()
        .append('rect')
        .attr('x', (d, i) => i * BAR_WIDTH) // position horizontale
        .attr('width', BAR_WIDTH - MARGIN) // largeur
        .attr('y', d => yScale(d.pas)) // position verticale
        .attr('height', d => GRAPH_HEIGHT - MARGIN_TOP - yScale(d.pas)) // hauteur
        .attr('fill', 'pink')
        .attr('rx', 4);


    const dates = svg.append('g')
        .attr('transform', `translate(${MARGIN_LEFT - 20}, 20)`)

    dates.selectAll('text')
        .data(DATA)
        .enter()
        .append('text')
        .attr('x', (d, i) => i * BAR_WIDTH + BAR_WIDTH / 2)
        .attr('y', HEIGHT - MARGIN_BOTTOM + 20)
        .attr('text-anchor', 'middle')
        .attr('font-family', 'sans-serif')
        .attr('font-size', 13)
        .attr('transform', (d, i) => {
            const x = i * BAR_WIDTH + BAR_WIDTH / 2
            const y = HEIGHT - MARGIN_BOTTOM + 20
            return `rotate(-65, ${x}, ${y})`
        })
        .text(d => d.date)

    const axisY = d3.axisLeft().scale(yScale)
        .tickFormat(d => `${d / 1} pas`)
        .ticks(5)

    svg.append('g')
        .attr('transform', `translate(${MARGIN_LEFT - 3}, ${MARGIN_TOP})`)
        .call(axisY)
        .attr('font-size', 13)