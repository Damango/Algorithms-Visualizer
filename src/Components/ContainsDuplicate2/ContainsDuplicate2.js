import React, {useState} from 'react';
import Block from "./Block/Block"
import "./ContainsDuplicate2.css"


const ContainsDuplicate2 = (props) => {

    

    const [numsArray, setNumsArray] = useState([1,2,3,1,2,3])
    const [currentIndex, setCurrentIndex] = useState()
    const [current, setCurrent] = useState()
    const [kth, setKth] = useState(2)


    let arrayOfElements = numsArray.map((block, index) => <Block data={block} index={index}/>)




    function duplicateAlgorithm(){

        let numsMap = new Map();
      

    
    }

    function renderAlgorithmSteps(){

        let newNumsArray = [...numsArray]
     
        for(let i = 0; i < newNumsArray.length; i++){
            let current = newNumsArray[i];
            setTimeout(() => {
                setCurrentIndex(i)
                console.log(i)
                if(i > newNumsArray.length){
                    console.log('test')
                }
            },i * 500)
           
            
            
        }

    
    }

    


    return ( <div className="contains-duplicate-container">
        
        <button onClick={() => {setCurrentIndex(0); renderAlgorithmSteps()}}>PLAY ALGORITHM</button>
        <div className="blocks-container">
        {numsArray.map((block, index) => <Block data={block} current={current} currentIndex={currentIndex} index={index}/>)}
        </div>



    </div> );
}
 
export default ContainsDuplicate2;