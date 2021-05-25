import React from 'react';
// import "normalize.css/normalize.css"
import "@blueprintjs/core/lib/css/blueprint.css";
import {Slider,Button} from '@blueprintjs/core';


const baseStyle: React.CSSProperties ={
  height:'500px',
  width:'500px',
  color:'white',
  border:"solid 1px #000000"
}
const style: React.CSSProperties={
  // backgroundColor:'#000000'
}



const Sky = ({ name }) =>{
  const [time,setTime] = React.useState(1);
  const divRef= React.useRef();

  React.useEffect(()=>{

  })

  const play = ()=>{
console.log(divRef)
  // divRef.animate([{opacity: 0}, {opacity: 1}], {duration: 3000})
  divRef.current.animate([{
      backgroundColor:'#000000',
      // offset:0.9,
    }
    ], {        
    duration: 3000,         
    iterations: Infinity,       
    easing: 'ease'      
    });      


  }
  return (
    <div>
      <div style={{...baseStyle,...style}} ref={divRef}>
      </div>
      <Slider max={100} value={time} onChange={(val)=>setTime(val) }labelStepSize={10}/>
      <Button onClick={play}>play</Button>
    </div>)
};

export default Sky;
