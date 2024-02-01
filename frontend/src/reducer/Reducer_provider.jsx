import { useReducer } from "react";
import { reducer } from ".reducer";
const inital_state ={
    data:'hello data'
}
export const Reducer = ()=>{
   
  const [state,dispatch] = useReducer(reducer,inital_state)

}
