import React from 'react'
import { FaEdit  } from "react-icons/fa";
import { FcEmptyTrash } from "react-icons/fc";

export const FeedbackList = ({data , remove , edit}) => {
    
    return (
        <div>
            {/* feedbacks */}
            <div>
                {/* feedback card */}
                {
                    data.map((feedback) => {
                        return (
                            <div className='card'>

                                <FcEmptyTrash className='close' onClick={()=>remove(feedback)}>
                                    x
                                </FcEmptyTrash>
                                <FaEdit className='edit' onClick={()=>edit(feedback)} >
                                    
                                </FaEdit>
                                <h3 className='num-display'>{feedback.rating}</h3>
                                <p> {feedback.text}</p>
                            </div>
                        )
                    })
                }

                {/* /feedback card */}
            </div>
            {/* /feedbacks */}
        </div>
    )
}
