import './CSS/App.css'
import React, { useState } from 'react';
import ExplodedView from './components/ExplodedView';

function App() {

  const initialCubeState={
    front:[
    ["green","green","green"],
    ["green","green","green"],
    ["green","green","green"]
  ],

  right:[
    ["red","red","red"],
    ["red","red","red"],
    ["red","red","red"]
  ],

  up:[
    ["white","white","white"],
    ["white","white","white"],
    ["white","white","white"]
  ],

  back:[
    ["blue","blue","blue"],
    ["blue","blue","blue"],
    ["blue","blue","blue"]
  ],

  left:[
    ["orange","orange","orange"],
    ["orange","orange","orange"],
    ["orange","orange","orange"]
  ],

down:[
  ["yellow","yellow","yellow"],
  ["yellow","yellow","yellow"],
  ["yellow","yellow","yellow"]
]

  }
 
  const [cubeState,setCubeState]=useState(initialCubeState)

  return (
    <div className="App">

     <h1>Stephen's Rubix Cube Simulator</h1>

   <ExplodedView cubeState={cubeState}/>
   
    </div>
  );
}

export default App;
