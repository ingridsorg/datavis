import * as d3 from 'd3';
import { geoPath, geoMercator, select } from 'd3'

//  fichier json
const data = require('../neighbourhoods.json')
console.log(data);

// taille forme svg
const WIDTH = 800
const HEIGHT = 500

const svg = d3.select('#chart').append('svg').attr('width', WIDTH).attr('height', HEIGHT);
d3.select("#chart").attr("align", "center"); // alignement du graphique

const projection = geoMercator()
  .fitExtent([[0, 0], [WIDTH, HEIGHT]], data) // centrer la carte sur les quartiers

const pathCreator = geoPath().projection(projection)
  
svg.selectAll('path')
    .data(data.features)
    .enter()
    .append('path')
    .attr('d', pathCreator)

    console.log('test')