import * as d3 from 'd3';

const DATA = [
    { "nom": "Major Arcana","nb": 22 },
    { "nom": "Minor Arcana", "nb": 56 }
];

const WIDTH = 1000;
const HEIGHT = 500;
const MARGIN = 5;
const BAR_WIDTH = WIDTH / DATA.length;

const svg = d3.select('body')
  .append('svg')
  .attr('width', WIDTH)
  .attr('height', HEIGHT);

  const yScale = d3.scaleLinear()
  .domain([0, d3.max(DATA, d => d.nb)])
  .range([HEIGHT, 0]);

svg.selectAll('rect')
.data(DATA)
.enter()
.append('rect')
.attr('x', (d, i) =>  i * BAR_WIDTH)
.attr('width', BAR_WIDTH - MARGIN)
.attr('y', d => yScale(d.nb))
.attr('height', d => HEIGHT - yScale(d.nb))
.attr('fill', 'pink'); 

