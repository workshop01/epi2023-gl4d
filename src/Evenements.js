import React, { useState } from 'react'

export const Evenements = () => {
    var [nb , setNb] = useState(5)
    
    const incrementer = () => {
       
         setNb(nb+1) 
        console.log('incrementer' , nb)
    }

    const update = (val)=>{
        setNb(nb+val)
    }
    const add = (event)=>{
       
        /* event : evenement ( keyup , click , change)
        event.taget : element ( input , select , button )
        event.target.value : valeur */
        if(event.keyCode == 13){ //event.key == 'Enter'

            setNb(+event.target.value+nb)
        }
        console.log('add' , event)
    }

    const [val , setVal]=useState(0)
    const change = (event)=>{
        setVal(+event.target.value)
    }
    const ajouter = ()=>{
            setNb(nb+val)
            setVal(0)
    }
    return (
        <div>Evenements

            <br></br>
            {nb}
            <br></br>
            <button onClick={incrementer}>+</button>
            <button>-</button>
            <button onClick={()=>update(5)}>+5</button>
            <br>
            </br>
            <p>input avec keyup event</p>
            <input type="number" onKeyUp={add}></input>
            <p>input avec change event</p>
            <input type="number" onChange={change} value={val}></input>
        <button onClick={ajouter}>ajouter</button>
        </div>

    )
}
