import { createContext ,useContext ,useState , useEffect } from "react";


export const Content = createContext({
data: []
});
export const AppContext = ({children}) => {

    const [data, setData] = useState([]);
     

    useEffect(() => {
        fetch('http://localhost:5000/')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
    },[])

    
    const value = {data}
    return(
        <Content.Provider value={value}>
            {children}
        </Content.Provider>
    )
}
