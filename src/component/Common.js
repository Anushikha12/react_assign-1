import React,{useState} from 'react'
import Functional from './Functional';
import Class from './Class';

const Common = () => {
 const [state, setState]= useState(false);
 const [state1, setState1] = useState(false);
 
 function Show(){
  setState(!state)
 };
 function Show1(){
  setState1(!state1)
 }


  return (
    <div>
       <h1 className="text1">Styling Using Functional and Class Component</h1>
       
       <button className="btn1" onClick={Show}>To see styling in functional component</button>
       {state && <Functional/>}
       
       <button className="btn2" onClick={Show1}>To see styling in class component</button>
       {state1 && <Class/> }

    </div>
  )
}
export default Common


// const Common = () => {
//   const [hideFunctional,setHideFunctional]=useState(true);
//   const handleClick=event=>{
//     setHideFunctional(current=>!current);
//     // setHideFunctional
//   }
//   return (
//     <div>
//         <h1 className="text1">Styling using Functional and Class Component</h1>
//     <button className='btn1'>To see styling in functional component</button>
//     <button className='btn2'>To see styling in class component</button>
//     </div>
//   )
// }

// export default Common