import React, { Component } from 'react';
import Node from './Node/Node';

import './Pathfinder.css';

export default class Pathfinder extends Component
{
   constructor(){
    super();
    this.state = {
        grid: [], 
};
}
}

render()
{
    return(

    );
  }


const startGrid = () => {
    const grid = [];
    for(let row = 0; row < 20; row++){
        const CurrentRow = [];
        for(let col = 0; col < 50; col++){

        }
        grid.push(CurrentRow);
    }
    return startGrid;    
};



