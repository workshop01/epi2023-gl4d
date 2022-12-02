import React, { useState } from 'react'
import './feedback.css'
import { FeedbackForm } from './FeedbackForm'
import { FeedbackHeader } from './FeedbackHeader'
import { FeedbackList } from './FeedbackList'
import { FeedbackStats } from './FeedbackStats'
export const Feedback = () => {
    const [data , setData] = useState([{
       id :1, rating: 5, text: "Nice"
    }])
    const [editedFeed , setFeed] = useState()

    const send= (e , form)=>{
        console.log(form)
        e.preventDefault();
        if(form.id){
            // modification
            setData(data.map(old=> old.id == form.id ? form : old))
            setFeed()
        }else{
            // ajout
            setData([{...form , id : data.length+1} , ...data])

        }
        console.log(data)
       
    }
    const remove = (feedback)=>{
        console.log('remove' , feedback)

        setData(data.filter((x)=> x.id !== feedback.id))
    }   
    

    /* Modification d'un feedback */
    
    const edit = (feedback)=>{
        setFeed(feedback)
    }
    return (
        <div>


            <FeedbackHeader/>


            <div className="container">
               <FeedbackForm send={send} editedFeed={editedFeed}  />
                {/* feedback stats */}
               <FeedbackStats/>
                {/* /feedback stats */}
                <FeedbackList data={data} remove={remove} edit={edit}/>
            </div>
        </div>
    )
}
