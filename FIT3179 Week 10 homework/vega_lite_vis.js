var vg_1 = "rainfall_map.vg.json";
vegaEmbed("#map", vg_1).then(function(result) {
}).catch(console.error);


var vg_2= "homicide_graph.vg.json";
vegaEmbed("#line_graph", vg_2).then(function(result) {
}).catch(console.error);