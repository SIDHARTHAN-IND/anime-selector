import React from "react";
import { VictoryPie } from "victory";

const mydata = [
  {x:"TV",y:900},
  {x:"Ova", y:400},
  {x:"Others",y:300},
];

const Piechart1 = () => {
  return(
    <div className="piechart" style={{height:420}}>
      <VictoryPie
      data={mydata}
      colorScale={["blue","yellow","orange"]}
      radius={100}
      />

    </div>
  )
}
export default Piechart1