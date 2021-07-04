import React from "react";

const FaceRow = (props) => {
	return (
		<tr>
			{props.rowArray.map((element, index) => (
				<td style={{ backgroundColor: element }} key={index} id={`${props.rowId}${index}`}></td>
			))}
		</tr>
	);
};

export default FaceRow;
