import { select } from 'd3'
import * as d3 from 'd3';
import bb from 'billboard.js';

export default graphique5 => {

  bb.generate({
    data: {
		columns: [
			["Frais", 26],
			["Durable", 60],
			["Peu durable", 9]
		],
        type: "pie",
        colors: {
            "Frais": "fff0a3",
            "Durable": "A5C8FE",
            "Peu durable": "pink",

          }
	},
	legend: {
		show: true
	},
	pie: {
		padding: 2,
	},
    bindto: "#graphique5",
  })
}

