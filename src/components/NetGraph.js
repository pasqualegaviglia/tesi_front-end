import React from "react";
import Graph from "react-graph-vis";

function NetGraph()
{
  var prova = [];

  prova.push({id: 1, label: "Node 1", title: "node 1 tootip text"});
  prova.push({id: 2, label: "Node 2", title: "node 2 tootip text"});

    const graph = 
    {
        nodes: prova,
        
        edges: 
        [
          { from: 1, to: 2 },
          { from: 1, to: 3 },
          { from: 2, to: 4 },
          { from: 2, to: 5 }
        ]
      };

    const options = 
    {
        edges: 
        {
            color: "#000000",
            smooth: 
            {
              type: "cubicBezier",
              forceDirection: "none"
            }
        },

        physics: 
        {
            enabled: false,
            minVelocity: 0.75
        },

        height: "500px"
    };

    const events = 
    {
        select(event) 
        {
          const { nodes, edges } = event;
          console.log('Selected nodes:');
          console.log(nodes);
          console.log('Selected edges:');
          console.log(edges);
        },
    };

    return(
        <Graph graph={graph} options={options} events={events} />
    )
}

export default NetGraph