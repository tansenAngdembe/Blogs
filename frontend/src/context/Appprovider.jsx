import { createContext,useContext } from "react";

const App_context = createContext();

const App_provider = ({children})=>{
    const myValue= "This is from data root"
   return(
    <App_context.Provider value={{myValue}}>{children}</App_context.Provider>
   )
}

const Context_provider = ()=>{
    return  useContext(App_context)
}
export {App_context,App_provider,Context_provider}


