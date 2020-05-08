import * as d3 from 'd3';
import d3Tip from "d3-tip";
d3.tip = d3Tip;
const DATA = require('./dates.json')
const dataJulie = DATA.julie;
const dataIngrid = DATA.ingrid;

const WIDTH = 1400
const HEIGHT = 500
const MARGIN = 5 // espace entre les batons
const MARGIN_TOP = HEIGHT / 10
const MARGIN_BOTTOM = HEIGHT / 7 // on fait de la place pour les noms
const GRAPH_HEIGHT = HEIGHT - MARGIN_BOTTOM
const MARGIN_LEFT = WIDTH / 20
const GRAPH_WIDTH = WIDTH - MARGIN_LEFT

// mouseover 

var tip1 = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function (d) {  
        return "Ingrid : " + d.pas ;
    })

var tip2 = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function (d) {
        return "Julie : " + d.pas ; // "<strong>Pas:</strong> <span style='color:pink'>" + d.pas + "</span>"
    })

const svg = d3.select('body').append('svg').attr('width', WIDTH).attr('height', HEIGHT);
d3.select("body").attr("align", "center"); // alignement du graphique

// NOUVEAU diviser par 2 pour avoir la place
const BAR_WIDTH = GRAPH_WIDTH / dataIngrid.length / 2 // largeur des batons

// Echelle hauteur
// Conversion du range des données en range de pixel
const yScale = d3.scaleLinear()
    .domain([0, d3.max(dataIngrid, d => d.pas)])
    .range([GRAPH_HEIGHT - MARGIN_TOP, 0])

const bars = svg.append('g')
    .attr('transform', `translate(${MARGIN_LEFT}, ${MARGIN_TOP})`)
bars.selectAll('rect')
    .data(dataIngrid)
    .enter()
    .append('rect')
    // NOUVEAU multiplié par 2
    .attr('x', (d, i) => (i * BAR_WIDTH * 2)) // position horizontale
    .attr('width', BAR_WIDTH - MARGIN) // largeur
    .attr('y', d => yScale(d.pas)) // position verticale
    .attr('height', d => GRAPH_HEIGHT - MARGIN_TOP - yScale(d.pas)) // hauteur
    .attr('fill', '#fff0a3')
    .attr('rx', 4)
    .on('mouseover', tip1.show)
    .on('mouseout', tip1.hide)
    .call(tip1);

// NOUVEAU une 2e serie de batons

const bars2 = svg.append('g')
    .attr('transform', `translate(${MARGIN_LEFT}, ${MARGIN_TOP})`)
bars2.selectAll('rect')
    .data(dataJulie)
    .enter()
    .append('rect')
    .attr('x', (d, i) => (i * BAR_WIDTH * 2) + BAR_WIDTH) // position horizontale
    .attr('width', BAR_WIDTH - MARGIN) // largeur
    .attr('y', d => yScale(d.pas)) // position verticale
    .attr('height', d => GRAPH_HEIGHT - MARGIN_TOP - yScale(d.pas)) // hauteur
    .attr('fill', '#A5C8FE')
    .attr('rx', 4)
    .on('mouseover', tip2.show)
    .on('mouseout', tip2.hide)
    .call(tip2);

// FIN NOUVEAUX BATONS
const dates = svg.append('g')
    .attr('transform', `translate(${MARGIN_LEFT - 20}, 20)`)
dates.selectAll('text')
    .data(dataIngrid)
    .enter()
    .append('text')
    // NOUVEAU multiplié par 2
    .attr('x', (d, i) => i * BAR_WIDTH * 2 + BAR_WIDTH * 2)
    .attr('y', HEIGHT - MARGIN_BOTTOM + 20)
    .attr('text-anchor', 'middle')
    .attr('font-family', 'sans-serif')
    .attr('font-size', 13)
    .attr('transform', (d, i) => {
        // NOUVEAU multiplié par 2
        const x = i * BAR_WIDTH * 2 + BAR_WIDTH * 2
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
