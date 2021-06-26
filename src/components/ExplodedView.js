import React, { useEffect } from 'react';
import Face from "./Face";
import ButtonPanel from './ButtonPanel';
import '../CSS/ExplodedView.css'
import { functionsObj } from '../utils/functions';
const ExplodedView = (props) => {
    
    useEffect(()=>{console.log(props.cubeState)},[props.cubeState])

    const buttonPanelOne=[
    {onClick:()=> {props.setCubeState(functionsObj.front(props.cubeState))},text:"F"},
    {onClick:functionsObj.right,text:"R"},
    {onClick:functionsObj.up,text:"U"},
    {onClick:functionsObj.back,text:"B"},
    {onClick:functionsObj.left,text:"L"},
    {onClick:functionsObj.down,text:"D"},
]

const buttonPanelTwo=[
    {onClick:functionsObj.frontAnti,text:"F'"},
    {onClick:functionsObj.rightAnti,text:"R'"},
    {onClick:functionsObj.upAnti,text:"U'"},
    {onClick:functionsObj.backAnti,text:"B'"},
    {onClick:functionsObj.leftAnti,text:"L'"},
    {onClick:functionsObj.downAnti,text:"D'"},
]
    
    
    return ( <div className="container">
             
             <div className="panel-container"> <ButtonPanel panelArr={buttonPanelOne}/></div><Face arr={props.cubeState.up} key="up" id="up"/><div className="panel-container"><ButtonPanel panelArr={buttonPanelTwo}/></div> 

                                    <Face arr={props.cubeState.left} key="left"  id="left"/><Face arr={props.cubeState.front} key="front" id="front"/><Face arr={props.cubeState.right} key="right"  id="right"/><Face arr={props.cubeState.back} key="back" id="back"/>

                                                                                             <Face arr={props.cubeState.down} key="down" id="down"/> 

    </div> );
}
 
export default ExplodedView;