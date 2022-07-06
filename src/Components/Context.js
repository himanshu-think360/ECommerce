import React,{useState} from "react";
const functionTemplate = () => {console.log("Phat jaa")}
const userObjectContext = {
    name:"Himanshu",
    cartlist:[],
    updatelist: functionTemplate,
  }
  
export const UserContext = React.createContext(userObjectContext)

export default function ProviderComponent({ children }) {
    const [context] = useState({
        ...userObjectContext,
        updatelist: () => {console.log("list changed")},
    });
  
    return <UserContext.Provider value={context}>{children}</UserContext.Provider>
  }