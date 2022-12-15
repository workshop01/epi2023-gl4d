import React, { createContext, useState } from 'react'

export const  GeneralContext = createContext()
export const GeneralProvider = ({children}) => {

    const [users , setUsers]= useState([
        {email : 'test@gmail.com' , password :'123456'},
        {email : 'test2@gmail.com' , password :'987654'},
    ])
    const register=(e , form)=>{
        e.preventDefault();

        if(!users.find(u=> u.email === form.email)){
            setUsers([...users , form])
        }else{
            alert('you have already an account')
        }
        
    }
    const [data, setData] = useState([{
        id: 1, rating: 5, text: "Nice"
    }])
    const [editedFeed, setFeed] = useState()

    const send = (e, form) => {
        console.log(form)
        e.preventDefault();
        if (form.id) {
            // modification
            setData(data.map(old => old.id == form.id ? form : old))
            setFeed()
        } else {
            // ajout
            setData([{ ...form, id: data.length + 1 }, ...data])

        }
        console.log(data)

    }
    const remove = (feedback) => {
        console.log('remove', feedback)

        setData(data.filter((x) => x.id !== feedback.id))
    }


    /* Modification d'un feedback */

    const edit = (feedback) => {
        setFeed(feedback)
    }
  return (
    <GeneralContext.Provider value={{data ,editedFeed , users , send , remove , edit , register}}> 
        {children}
    </GeneralContext.Provider>
  )
}
