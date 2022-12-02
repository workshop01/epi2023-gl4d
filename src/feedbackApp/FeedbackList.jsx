import React from 'react'

export const FeedbackList = ({data , remove}) => {
    
    return (
        <div>
            {/* feedbacks */}
            <div>
                {/* feedback card */}
                {
                    data.map((feedback) => {
                        return (
                            <div className='card'>

                                <button className='close' onClick={()=>remove(feedback)}>
                                    x
                                </button>
                                <button className='edit'>
                                    E
                                </button>
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
