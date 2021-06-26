import React from 'react';
import FaceRow from "./FaceRow";

const Face = (props) => {
    const rowComponents = []
 
 for (let i in props.arr){


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