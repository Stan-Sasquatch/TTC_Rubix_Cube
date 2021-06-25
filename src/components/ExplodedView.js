import React from 'react';
import Face from "./Face";

const ExplodedView = (props) => {
    return ( <div>
                       <Face arr={props.cubeState.up} key="up" id="up"/>

      <Face arr={props.cubeState.left} key="left"  id="left"/><Face arr={props.cubeState.front} key="front" id="front"/><Face arr={props.cubeState.right} key="right"  id="right"/><Face arr={props.cubeState.back} key="back" id="back"/>

                       <Face arr={props.cubeState.down} key="down" id="down"/>

    </div> );
}
 
export default ExplodedView;