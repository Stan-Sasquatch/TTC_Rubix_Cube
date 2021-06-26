import React from 'react';
import FaceRow from "./FaceRow";

const Face = (props) => {
    const rowComponents = []
 
 for (let i =0; i<props.arr.length; i++){


rowComponents.push(<FaceRow rowArray={props.arr[i]} key={i} rowId={i}/>)

 }


    return (  
    <table id={props.id}>
        <tbody >
           {rowComponents}
        </tbody>
    </table> );
}
 
export default Face;