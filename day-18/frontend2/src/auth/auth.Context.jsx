
import { createContext , useState } from "react";

export const AuthContext = createContext();


export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)    
    

    
 

    return (
        <AuthContext.Provider value={{user,setUser,  loading, setLoading}}>
        {children}
        </AuthContext.Provider>
    )

}


// what state layer do :- 
// 1. global state management
// 2. state sharing between components
// 3. avoid prop drilling   





