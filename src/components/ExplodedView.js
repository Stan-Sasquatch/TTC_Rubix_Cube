import React from 'react';
import Face from "./Face";
import ButtonPanel from './ButtonPanel';
import '../CSS/ExplodedView.css'
import { functionsObj } from '../utils/functions';
const ExplodedView = (props) => {
    


    const buttonPanelOne=[
    {onClick:()=> {props.setCubeState(functionsObj.front(props.cubeState))},text:"F"},
    {onClick:()=> {props.setCubeState(functionsObj.right(props.cubeState))},text:"R"},
    {onClick:()=> {props.setCubeState(functionsObj.up(props.cubeState))},text:"U"},
    {onClick:()=> {props.setCubeState(functionsObj.back(props.cubeState))},text:"B"},
    {onClick:()=> {props.setCubeState(functionsObj.left(props.cubeState))},text:"L"},
    {onClick:()=> {props.setCubeState(functionsObj.down(props.cubeState))},text:"D"}
]

const buttonPanelTwo=[
    {onClick:()=> {props.setCubeState(functionsObj.frontAnti(props.cubeState))},text:"F'"},
    {onClick:()=> {props.setCubeState(functionsObj.rightAnti(props.cubeState))},text:"R'"},
    {onClick:()=> {props.setCubeState(functionsObj.upAnti(props.cubeState))},text:"U'"},
    {onClick:()=> {props.setCubeState(functionsObj.backAnti(props.cubeState))},text:"B'"},
    {onClick:()=> {props.setCubeState(functionsObj.leftAnti(props.cubeState))},text:"L'"},
    {onClick:()=> {props.setCubeState(functionsObj.downAnti(props.cubeState))},text:"D'"}
]
    
    
    return ( <div className="container">
             
             <div className="panel-container" id="clockwise-panel"> <ButtonPanel panelArr={buttonPanelOne}/></div><Face arr={props.cubeState.up} key="up" id="up"/><div className="panel-container" id="anticlockwise-panel"><ButtonPanel panelArr={buttonPanelTwo}/></div> 

                                    <Face arr={props.cubeState.left} key="left"  id="left"/><Face arr={props.cubeState.front} key="front" id="front"/><Face arr={props.cubeState.right} key="right"  id="right"/><Face arr={props.cubeState.back} key="back" id="back"/>

                                                                                             <Face arr={props.cubeState.down} key="down" id="down"/> 

    </div> );
}
 
export default ExplodedView;