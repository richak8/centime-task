import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import * as d3sankey from 'd3-sankey';
import './style.css';

const Sankey = ({ width, height, sankeyData: data }) => {
    const divRef = useRef(null);
    
    useEffect(() => {
        const refEle = d3.select(divRef.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transfrom","translate(0,-200px) rotate(-90deg)");
        
       let dStr = d3.stratify()
        .id(d => d.child)
        .parentId(d => d.parent)(data);
       
       let tStr = d3.tree().size([500, 120]);
       let info =  tStr(dStr);

       let circle = refEle.append("g").selectAll("circle")
                   .data(info.descendants());
        circle.enter().append("circle")  
            .attr("cx", (d) => d.x)
            .attr("cy", (d) => d.y+10)
            .attr("r", 10);                   
        
        
               
            let connect = refEle.append('line')
                .style("stroke", "black")
                .style("stroke-width", 10)
                .attr("x1", 250)
                .attr("y1", 12)
                .attr("x2", 126)
                .attr("y2", 124);    

                refEle.append('line')
                .style("stroke", "black")
                .style("stroke-width", 10)
                .attr("x1", 250)
                .attr("y1", 12)
                .attr("x2", 375)
                .attr("y2", 124);

    }, []);

    return (
        <div className="sankeyWrapper" ref={divRef}></div>
    )
}

export default Sankey;