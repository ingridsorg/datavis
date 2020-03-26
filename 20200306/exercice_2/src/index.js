import * as d3 from 'd3';

const DATA = [
  { "name": "Major Arcana", "value": 22 },
  { "name": "Minor Arcana", "value": 56 }
];

var getPieData = d3.pie().value(d => d.value)
var pieData = getPieData(DATA)
console.log(pieData)

const WIDTH = 1000;
const HEIGHT = 500;
const svg = d3.select('body')
  .append('svg')
  .attr('width', WIDTH)
  .attr('height', HEIGHT);

const arcCreator = d3.arc()
  .innerRadius(0)
  .outerRadius(HEIGHT / 2)

const color = ({ data }) => {
  switch (data.name) {
    case 'Major Arcana': return 'blueviolet'
    case 'Minor Arcana': return 'chartreuse'
    default: return 'indianred'
  }
}

const pie = svg.append('g')
  .attr('transform', `translate(${HEIGHT / 2}, ${HEIGHT / 2})`)

pie.selectAll('path')
  .data(pieData)
  .enter()
  .append('path')
  .attr('d', arcCreator)
  .attr('fill', color)