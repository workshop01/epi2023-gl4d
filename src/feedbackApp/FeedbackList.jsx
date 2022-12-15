import React from 'react'
import { useContext } from 'react';
import { GeneralContext } from '../GeneralContext';

import { FeedbackCard } from './FeedbackCard';

export const FeedbackList = () => {
    const {data} = useContext(GeneralContext)
    return (
        <div>
            {/* feedbacks */}
            <div>
                {/* feedback card */}
                {
                    data.map((feedback) => {
                        return (
                            <FeedbackCard feedback={feedback}  />
                        )
                    })
                }

                {/* /feedback card */}
            </div>
            {/* /feedbacks */}
        </div>
    )
}
