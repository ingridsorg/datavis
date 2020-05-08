import { select } from 'd3'
import * as d3 from 'd3';
import bb from 'billboard.js';

// ce graphique permet de comparer les produits habituel et les inhabituels 

export default graphique6 => {

  bb.generate({
    data: {
		columns: [
			["Produit habituel", 64],
			["Produit inhabituel", 30]
		],
        type: "pie",
        colors: {
            "Produit habituel": "fff0a3",
            "Produit inhabituel": "A5C8FE",

          }
	},
	legend: {
		show: true
	},
	pie: {
		padding: 2,
	},
    bindto: "#graphique6",
  })
}
  
  
