import React from 'react';
import "./Block.css"
const Block = (props) => {


function renderBlockStyle() {

    console.log(props.currentIndex + ' ' + props.index)

    if(props.currentIndex === props.index){
        console.log('TRUE')
        return('block-container true')
    }
    else{
        return('block-container')
    }
}





     return ( <div className={renderBlockStyle()}>
    {props.data}
</div> );


   
}
 
export default Block;