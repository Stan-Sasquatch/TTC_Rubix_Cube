function columnToRow(columnArr,column, rowArr,row){
    let newRow=[]


    for (let i =0; i<columnArr.length;i++){
        newRow.push(columnArr[i][column])
    }
    
    rowArr.splice(row,1,newRow)


        return rowArr
    }
    

    function rowToColumn(rowArr,row,columnArr,column){

    

        for(let i=0; i<rowArr[row].length;i++){
    
            columnArr[i].splice(column,1,rowArr[row][i])
    
        }
    
        return columnArr
    
    }
    


const frontClockwise=(cubeState)=>{
  
//left column 2 -> up row 2 ->right column 0->down row 0
const newCubeState={

    
}

let copyCubeState=JSON.parse(JSON.stringify(cubeState))

newCubeState.front=copyCubeState.front

newCubeState.right=rowToColumn(copyCubeState.up,2,copyCubeState.right,0)

copyCubeState=JSON.parse(JSON.stringify(cubeState))

newCubeState.up=columnToRow(copyCubeState.left,2,copyCubeState.up,2)

newCubeState.back=copyCubeState.back

newCubeState.left=rowToColumn(copyCubeState.down,0,copyCubeState.left,2)

newCubeState.down=columnToRow(copyCubeState.right,0,copyCubeState.down,0)

return newCubeState
}


const rightClockwise=()=>{
    console.log("R")
}
const upClockwise=()=>{
    
}
const backClockwise=()=>{
    
}
const leftClockwise=()=>{
    
}
const downClockwise=()=>{
    
}

const frontAntiClockwise=()=>{

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
