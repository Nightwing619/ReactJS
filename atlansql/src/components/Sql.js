import React from "react";
import Select from "./Select";
import Customer from "../customer.json";
export default function Sql(){
    const [isOpen, setOpen]= React.useState(false)
    const [query, setQuery]=React.useState("")
    const [history, setHistory]=React.useState({
        pointer: "> ",
        oldText: "",
        newText: ""
    })
    let copyCust =Customer
    let n = 90
    function sortByProperty(property){  
        return function(a,b){  
           if(a[property] > b[property])  
              return 1;  
           else if(a[property] < b[property])  
              return -1;  
       
           return 0;  
        }  
    }
    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    const handleClick = () => {
        copyCust = Customer
        if(query.toLowerCase().includes("select * from customer")){
            if(query.toLowerCase().includes("order by")){
                let myArray = query.split(" ")
                let word = myArray[6]
                copyCust.sort(sortByProperty(word))
            }
            if(query.toLowerCase().includes("limit by")){
                let myArray = query.split(" ")
                let limit = parseInt(myArray[myArray.length - 1])
                n=limit
                setOpen(true)
            } 
            setOpen(true)
        }
    }
    const handleReset = () => {
        copyCust=Customer
        setOpen(false)
    }
    return(
        <section>
            <textarea 
                readOnly 
                className="output--box" 
                id="ob"
            >
            </textarea>
            <textarea 
                name="sqlQuery"
                value={query}
                onChange={handleChange}
                className="input--box" 
                placeholder="Enter Query"
            />
            <div className="buttons">
                <button onClick={handleClick}> OK </button>
                <button onClick={handleReset}> Reset </button>
            </div>
            {isOpen 
                && 
                <Select 
                    limit={n}
                    database={copyCust} 
                    show={isOpen}
                />
            }
        </section>
    );
}