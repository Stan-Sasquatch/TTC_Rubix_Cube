import React from 'react';

const FaceRow = (props) => {
    let tileComponents=[]

   
    
    for (let i=0;i< props.rowArray.length;i++){


        const concatId=`${props.rowId}${i}`
        tileComponents.push(<td style={{backgroundColor: props.rowArray[i]}} key={concatId} id={concatId}></td>)
        

        

         }





    return ( <tr>{tileComponents}</tr> );
}
 
export default FaceRow;