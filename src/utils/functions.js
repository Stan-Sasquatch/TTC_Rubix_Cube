 const columnToRow=(cubeState, faceOne,faceTwo,column,row)=>{

//Stringify and Parse to prevent mutation of cubeState object from splice
    const copyCubeState=JSON.parse(JSON.stringify(cubeState))
    
 
    const columnArr=copyCubeState[faceOne]
    const rowArr=copyCubeState[faceTwo]
    let newRow=[]


    for (let i =0; i<columnArr.length;i++){
        newRow.push(columnArr[i][column])
    }
    
    rowArr.splice(row,1,newRow)


        return rowArr
    }
    
const rowToColumn=(cubeState,faceOne,faceTwo,row,column)=>{
//Stringify and Parse to prevent mutation of cubeState object from splice
    const copyCubeState=JSON.parse(JSON.stringify(cubeState))

    const rowArr=copyCubeState[faceOne]
    const columnArr=copyCubeState[faceTwo]

        for(let i=0; i<rowArr[row].length;i++){
    
            columnArr[i].splice(column,1,rowArr[row][i])
    
        }
    
        return columnArr
    
    }

    const columnToColumn=(cubeState,faceOne,faceTwo,colOne,colTwo)=>{

    const copyCubeState=JSON.parse(JSON.stringify(cubeState))
      
      const arrOne=copyCubeState[faceOne]
      const arrTwo=copyCubeState[faceTwo]
      
      for(let i=0;i<arrOne.length;i++){
      
      
      arrTwo[i].splice(colTwo,1,arrOne[i][colOne])
      
      }
      
      return arrTwo
      
        }

const rowToRow=(cubeState,faceOne,faceTwo,rowOne,rowTwo)=>{

            const copyCubeState=JSON.parse(JSON.stringify(cubeState))
            
            const arrOne=copyCubeState[faceOne]
            const arrTwo=copyCubeState[faceTwo]
            
            const newRow=[]
            
            for (let i=0;i<arrOne[rowOne].length;i++){
            newRow.push(arrOne[rowOne][i])
            }
            
            arrTwo.splice(rowTwo,1,newRow)
            
            return arrTwo
              }
    
// const createNewCubeState=(cubeState,algorithmObj)=>{
// //algorithm obj is where vertexType is row or column [{face:a, vertexType:b, index:c},...]
// const newCubeState={...cubeState}

// const getMethod=(algorithmObj,i,previous)=>{

    

//     if(algorithmObj[previous]["vertexType"]=="row"){
//  if(algorithmObj[i]["vertexType"]=="row"){
 
//  return rowToRow
 
//  }
//  return rowToColumn
 
//     }

// if(algorithmObj[i]["vertexType"]=="column"){

//     return columnToColumn
// }

// return columnToRow

// }


// for (let i=0;i<algorithmObj.length;i++){

//     const previous = i=0?algorithmObj.length:i-1;
//    const prevFace=algorithmObj[previous]["face"]
//    const currentFace=algorithmObj[i]["face"]
//    const prevIndex=algorithmObj[previous]["index"]
//    const currentIndex=algorithmObj[i]["index"]
  
//     newCubeState.algorithmObj[i]["face"]=getMethod(algorithmObj,i,previous)(cubeState,prevFace,currentFace,prevIndex,currentIndex)
// }


// return newCubeState
// }

const frontClockwise=(cubeState)=>{
  //left column 2 -> up row 2 ->right column 0->down row 0

//   const algorithmObj=[
//     {face:"left",vertexType:"column",index:2},
//     {face:"up",vertexType:"row",index:2},
//     {face:"right",vertexType:"column",index:0},
//     {face:"down",vertexType:"row",index:0}
// ]
// return createNewCubeState(cubeState,algorithmObj)


const newCubeState={
...cubeState,
right:rowToColumn(cubeState,"up","right",2,0),
up:columnToRow(cubeState,"left","up",2,2),
left:rowToColumn(cubeState,"down","left",0,2),
down:columnToRow(cubeState,"right","down",0,0)
}

return newCubeState

}


const rightClockwise=(cubeState)=>{
//front col 2 -> up col 2 -> back col 0 -> down col 2

    const newCubeState={
        ...cubeState,
front: columnToColumn(cubeState,"down","front",2,2),
up: columnToColumn(cubeState,"front","up",2,2),
back: columnToColumn(cubeState,"up","back",2,0),
down:columnToColumn(cubeState,"back","down",0,2)
        }

        return newCubeState
}

const upClockwise=(cubeState)=>{
 
    
        const newCubeState={
            ...cubeState,

            }
    
            return newCubeState
    }
const backClockwise=(cubeState)=>{
 
    
    const newCubeState={
        ...cubeState,

        }

        return newCubeState
}
const leftClockwise=(cubeState)=>{
 
    
    const newCubeState={
        ...cubeState,

        }

        return newCubeState
}

const downClockwise=(cubeState)=>{
 
    
    const newCubeState={
        ...cubeState,

        }

        return newCubeState
}

const frontAntiClockwise=(cubeState)=>{
 
    const newCubeState={
        ...cubeState,

        }

        return newCubeState
}
const rightAntiClockwise=()=>{
    
}
const upAntiClockwise=()=>{
    
}
const backAntiClockwise=()=>{
    
}
const leftAntiClockwise=()=>{
    
}
const downAntiClockwise=()=>{
    
}

const functionsObj={
front:frontClockwise,
right:rightClockwise,
up:upClockwise,
back:backClockwise,
left:leftClockwise,
down:downClockwise,

frontAnti:frontAntiClockwise,
rightAnti:rightAntiClockwise,
upAnti:upAntiClockwise,
backAnti:backAntiClockwise,
leftAnti:leftAntiClockwise,
downAnti:downAntiClockwise
}

export {functionsObj}
