import React, { useState } from 'react'
import { GeneralProvider } from '../GeneralContext'
import './feedback.css'
import { FeedbackForm } from './FeedbackForm'
import { FeedbackHeader } from './FeedbackHeader'
import { FeedbackList } from './FeedbackList'
import { FeedbackStats } from './FeedbackStats'
export const Feedback = () => {
  
    return (
        <div>


            <FeedbackHeader />

          
                <div className="container">
                    <FeedbackForm />
                    {/* feedback stats */}
                    <FeedbackStats />
                    {/* /feedback stats */}
                    <FeedbackList  />
                </div>
           
        </div>
    )
}
