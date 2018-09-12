var easygraph = {};
easygraph.Graph = function(id, graphtype){
    this.Id = id,
    this.GraphType = graphtype
}
easygraph.init = function(){
    console.log("INITIALIZING EASYGRAPH");
    $('.easygraph > .graph-wrapper.bar-graph.vert > .easygraph-bar').each(function(){
       $(this).height($(this).attr("data-graphpercent") + "%");         
    });
}