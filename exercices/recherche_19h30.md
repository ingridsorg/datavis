 Ligne de commande : 

 ndjson-sort "a.views > b.views ? -1 : 1" < episodes.ndjson | head -10 | ndjson-map "{ firstTitle: d.segments[0].title}" 