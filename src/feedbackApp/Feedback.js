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
    const send= (e , form)=>{
        e.preventDefault();
        setData([{...form , id : data.length+1} , ...data])
        console.log(data)
       
    }
    const remove = (feedback)=>{
        console.log('remove' , feedback)

        setData(data.filter((x)=> x.id !== feedback.id))
    }
    return (
        <div>


            <FeedbackHeader/>


            <div className="container">
               <FeedbackForm send={send}/>
                {/* feedback stats */}
               <FeedbackStats/>
                {/* /feedback stats */}
                <FeedbackList data={data} remove={remove}/>
            </div>
        </div>
    )
}
