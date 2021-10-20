import React,{useEffect,useReducer} from 'react';
import * as TYPES from "./types"
//import './App.css';

const reducer = (state,action) => {
   switch(action.type){
     case "CHANGE_NAME": 
      return {
        ...state,
         name:action.name
      }

      case "SHOW_MESSAGE": 
      return {
        ...state,
         show:action.show
      }
    default: return state;
   }
}

function App() {
  
  //const [name,setName] = useState('Nuwan');
  //const [show,setShow] = useState(false);

  const [state,dispatch] = useReducer(reducer,{name:"Nuwan C",show:false});

  const handleOnChange = (e)=>{
    dispatch({type:TYPES.CHANGE_NAME, name:e.target.value})
  }

  const handleShow = (value) => {
     dispatch({type:TYPES.SHOW_MESSAGE,show:value})
  }

  useEffect(()=>{
    if(state.name.length %3 === 0){
      handleShow(true);
    }else handleShow(false)
  },[state.name])

  return (
    <main>
      <input type="text" onChange={(e)=>handleOnChange(e)} placeholder="enter name"/> {state.name}
      {state.show && <h2>I am a Show: {state.name.length}</h2>}
    </main>
  );
}

export default App;