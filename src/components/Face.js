import React from 'react';
import FaceRow from "./FaceRow";

const Face = (props) => {
    const rowComponents = []
 
 for (let i in props.arr){


rowComponents.push(<FaceRow rowArray={props.arr[i]} key={i} rowId={i}/>)

 }

//  rowComponents.push(<tr><td>a</td><td>b</td><td>c</td></tr>) 
//  rowComponents.push(<tr><td>d</td><td>e</td><td>f</td></tr>) 
//  rowComponents.push(<tr><td>g</td><td>h</td><td>i</td></tr>) 

    return ( <div> 
    <table>
        <tbody >
           {rowComponents}
        </tbody>
    </table></div> );
}
 
export default Face;