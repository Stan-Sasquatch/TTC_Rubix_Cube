import React from "react";
import FaceRow from "./FaceRow";

const Face = (props) => {
	return (
		<table id={props.id}>
			<tbody>
				{props.arr.map((element, index) => (
					<FaceRow rowArray={element} key={index} rowId={`${props.id}${index}`} />
				))}
			</tbody>
		</table>
	);
};

export default Face;
