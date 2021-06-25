import React from 'react';

const FaceRow = (props) => {
    let tileComponents=[]

   
    
    for (let i in props.rowArray){


        const concatId=`${props.rowId}${i}`
        tileComponents.push(<td style={{backgroundColor: props.rowArray[i]}} key={concatId} id={concatId}>{props.rowArray[i]}</td>)
        

        

         }





    return ( <tr>{tileComponents}</tr> );
}
 
export default FaceRow;