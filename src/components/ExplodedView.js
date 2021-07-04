import React from "react";
import Face from "./Face";
import ButtonPanel from "./ButtonPanel";
import "../CSS/ExplodedView.css";
import { rotationsObj } from "../utils/rotations";
const ExplodedView = (props) => {
	const buttonPanelOne = [
		{
			onClick: () => {
				props.setCubeState(rotationsObj.front(props.cubeState));
			},
			text: "F",
		},
		{
			onClick: () => {
				props.setCubeState(rotationsObj.right(props.cubeState));
			},
			text: "R",
		},
		{
			onClick: () => {
				props.setCubeState(rotationsObj.up(props.cubeState));
			},
			text: "U",
		},
		{
			onClick: () => {
				props.setCubeState(rotationsObj.back(props.cubeState));
			},
			text: "B",
		},
		{
			onClick: () => {
				props.setCubeState(rotationsObj.left(props.cubeState));
			},
			text: "L",
		},
		{
			onClick: () => {
				props.setCubeState(rotationsObj.down(props.cubeState));
			},
			text: "D",
		},
	];

	const buttonPanelTwo = [
		{
			onClick: () => {
				props.setCubeState(rotationsObj.frontAnti(props.cubeState));
			},
			text: "F'",
		},
		{
			onClick: () => {
				props.setCubeState(rotationsObj.rightAnti(props.cubeState));
			},
			text: "R'",
		},
		{
			onClick: () => {
				props.setCubeState(rotationsObj.upAnti(props.cubeState));
			},
			text: "U'",
		},
		{
			onClick: () => {
				props.setCubeState(rotationsObj.backAnti(props.cubeState));
			},
			text: "B'",
		},
		{
			onClick: () => {
				props.setCubeState(rotationsObj.leftAnti(props.cubeState));
			},
			text: "L'",
		},
		{
			onClick: () => {
				props.setCubeState(rotationsObj.downAnti(props.cubeState));
			},
			text: "D'",
		},
	];

	return (
		<div className="container">
			<div className="panel-container" id="clockwise-panel">
				<ButtonPanel buttons={buttonPanelOne} />
			</div>
			<Face arr={props.cubeState.up} key="up" id="up" />
			<div className="panel-container" id="anticlockwise-panel">
				<ButtonPanel buttons={buttonPanelTwo} />
			</div>

			<Face arr={props.cubeState.left} key="left" id="left" />
			<Face arr={props.cubeState.front} key="front" id="front" />
			<Face arr={props.cubeState.right} key="right" id="right" />
			<Face arr={props.cubeState.back} key="back" id="back" />
			<Face arr={props.cubeState.down} key="down" id="down" />
		</div>
	);
};

export default ExplodedView;
